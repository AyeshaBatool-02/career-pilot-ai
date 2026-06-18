"use client";

import { useToastStore } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Info } from "lucide-react";

export function Toaster() {
  const toasts = useToastStore((s) => s.toasts);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-lg animate-in slide-in-from-bottom-2 fade-in",
            t.variant === "success" && "border-success/30",
            t.variant === "destructive" && "border-destructive/30"
          )}
        >
          {t.variant === "success" && <CheckCircle2 className="h-5 w-5 text-success shrink-0" />}
          {t.variant === "destructive" && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
          {(!t.variant || t.variant === "default") && <Info className="h-5 w-5 text-primary shrink-0" />}
          <div>
            <p className="text-sm font-medium">{t.title}</p>
            {t.description && (
              <p className="text-xs text-muted-foreground mt-0.5">{t.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
