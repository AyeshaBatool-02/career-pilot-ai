"use client";

import { useEffect } from "react";
import { useApplicationStore } from "@/store/useApplicationStore";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { StatusChart } from "@/components/dashboard/StatusChart";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, MessageSquare, Trophy, XCircle } from "lucide-react";

export default function DashboardPage() {
  const { applications, isLoading, fetchApplications } = useApplicationStore();

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const counts = {
    total: applications.length,
    applied: applications.filter((a) => a.status === "Applied").length,
    interviewing: applications.filter((a) => a.status === "Interviewing").length,
    offers: applications.filter((a) => a.status === "Offer").length,
    rejected: applications.filter((a) => a.status === "Rejected").length,
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Here&apos;s how your job search is going.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-28 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard label="Total Applications" value={counts.total} icon={FileText} />
          <StatsCard
            label="Interviewing"
            value={counts.interviewing}
            icon={MessageSquare}
            accentClass="bg-warning/10 text-warning"
          />
          <StatsCard
            label="Offers"
            value={counts.offers}
            icon={Trophy}
            accentClass="bg-success/10 text-success"
          />
          <StatsCard
            label="Rejected"
            value={counts.rejected}
            icon={XCircle}
            accentClass="bg-destructive/10 text-destructive"
          />
        </div>
      )}

      {!isLoading && applications.length > 0 && <StatusChart applications={applications} />}
    </div>
  );
}
