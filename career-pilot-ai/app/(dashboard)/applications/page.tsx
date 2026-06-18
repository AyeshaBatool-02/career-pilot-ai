import { ApplicationList } from "@/components/applications/ApplicationList";
import { ApplicationForm } from "@/components/applications/ApplicationForm";

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Applications</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Every internship and job you&apos;re tracking.
          </p>
        </div>
        <ApplicationForm />
      </div>

      <ApplicationList />
    </div>
  );
}
