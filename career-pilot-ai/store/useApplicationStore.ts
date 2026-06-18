import { create } from "zustand";
import { Application, NewApplication, ApplicationStatus } from "@/lib/types";
import { createClient } from "@/lib/supabase/client";

interface ApplicationStore {
  applications: Application[];
  isLoading: boolean;
  fetchApplications: () => Promise<void>;
  addApplication: (app: NewApplication) => Promise<{ error: string | null }>;
  updateStatus: (id: string, status: ApplicationStatus) => Promise<void>;
  deleteApplication: (id: string) => Promise<void>;
}

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  applications: [],
  isLoading: false,

  fetchApplications: async () => {
    set({ isLoading: true });
    const supabase = createClient();
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      set({ applications: data as Application[], isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },

  addApplication: async (app: NewApplication) => {
    const supabase = createClient();
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return { error: "Not logged in" };

    const { data, error } = await supabase
      .from("applications")
      .insert([{ ...app, user_id: userData.user.id }])
      .select()
      .single();

    if (error) return { error: error.message };

    set({ applications: [data as Application, ...get().applications] });
    return { error: null };
  },

  updateStatus: async (id: string, status: ApplicationStatus) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("applications")
      .update({ status })
      .eq("id", id);

    if (!error) {
      set({
        applications: get().applications.map((a) =>
          a.id === id ? { ...a, status } : a
        ),
      });
    }
  },

  deleteApplication: async (id: string) => {
    const supabase = createClient();
    const { error } = await supabase.from("applications").delete().eq("id", id);

    if (!error) {
      set({
        applications: get().applications.filter((a) => a.id !== id),
      });
    }
  },
}));
