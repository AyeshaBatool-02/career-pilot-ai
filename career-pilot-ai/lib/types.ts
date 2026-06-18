export type ApplicationStatus =
  | "Applied"
  | "Interviewing"
  | "Offer"
  | "Rejected";

export interface Application {
  id: string;
  user_id: string;
  company: string;
  role: string;
  status: ApplicationStatus;
  applied_date: string | null;
  link: string | null;
  notes: string | null;
  created_at: string;
}

export interface NewApplication {
  company: string;
  role: string;
  status: ApplicationStatus;
  applied_date: string;
  link?: string;
  notes?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  resume_link: string | null;
}
