import { Badge } from "@/components/ui/badge";
import { ApplicationStatus } from "@/lib/types";

const statusVariant: Record<ApplicationStatus, "default" | "warning" | "success" | "destructive"> = {
  Applied: "default",
  Interviewing: "warning",
  Offer: "success",
  Rejected: "destructive",
};

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  return <Badge variant={statusVariant[status]}>{status}</Badge>;
}
