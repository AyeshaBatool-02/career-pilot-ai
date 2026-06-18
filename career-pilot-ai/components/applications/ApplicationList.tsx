"use client";

import { useEffect } from "react";
import { useApplicationStore } from "@/store/useApplicationStore";
import { ApplicationCard } from "@/components/applications/ApplicationCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplicationForm } from "@/components/applications/ApplicationForm";
import { Inbox } from "lucide-react";

export function ApplicationList() {
  const { applications, isLoading, fetchApplications } = useApplicationStore();

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-20 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 border border-dashed border-border rounded-xl">
        <Inbox className="h-10 w-10 text-muted-foreground mb-3" />
        <h3 className="font-semibold">No applications yet</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-4">
          Add your first one to start tracking your pipeline.
        </p>
        <ApplicationForm />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {applications.map((app) => (
        <ApplicationCard key={app.id} application={app} />
      ))}
    </div>
  );
}
