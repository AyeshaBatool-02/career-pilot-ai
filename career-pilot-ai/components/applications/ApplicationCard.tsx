"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/applications/StatusBadge";
import { Application, ApplicationStatus } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useApplicationStore } from "@/store/useApplicationStore";
import { useToast } from "@/components/ui/use-toast";
import { Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATUS_OPTIONS: ApplicationStatus[] = ["Applied", "Interviewing", "Offer", "Rejected"];

export function ApplicationCard({ application }: { application: Application }) {
  const updateStatus = useApplicationStore((s) => s.updateStatus);
  const deleteApplication = useApplicationStore((s) => s.deleteApplication);
  const { toast } = useToast();

  async function handleStatusChange(newStatus: ApplicationStatus) {
    await updateStatus(application.id, newStatus);
    toast({ title: `Status updated to ${newStatus}`, variant: "success" });
  }

  async function handleDelete() {
    await deleteApplication(application.id);
    toast({ title: "Application deleted" });
  }

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-5 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold truncate">{application.company}</h3>
            <StatusBadge status={application.status} />
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{application.role}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Applied {formatDate(application.applied_date)}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {application.link && (
            <a href={application.link} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
          <select
            value={application.status}
            onChange={(e) => handleStatusChange(e.target.value as ApplicationStatus)}
            className="h-9 rounded-lg border border-input bg-background px-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <Button variant="ghost" size="icon" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
