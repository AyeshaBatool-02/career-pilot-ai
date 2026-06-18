"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export function ProfileForm({ email, fullName }: { email: string; fullName: string }) {
  const [name, setName] = useState(fullName);
  const [resumeLink, setResumeLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setIsSaving(true);

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      data: { full_name: name, resume_link: resumeLink },
    });

    setIsSaving(false);

    if (error) {
      toast({ title: "Couldn't save", description: error.message, variant: "destructive" });
      return;
    }

    toast({ title: "Profile updated", variant: "success" });
  }

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" value={email} disabled />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="resume">Resume link</Label>
        <Input
          id="resume"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
          placeholder="https://drive.google.com/..."
        />
      </div>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save changes"}
      </Button>
    </form>
  );
}
