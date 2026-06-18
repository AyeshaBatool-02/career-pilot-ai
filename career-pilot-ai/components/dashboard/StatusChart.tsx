"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Application } from "@/lib/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export function StatusChart({ applications }: { applications: Application[] }) {
  const data = [
    { status: "Applied", count: applications.filter((a) => a.status === "Applied").length },
    { status: "Interviewing", count: applications.filter((a) => a.status === "Interviewing").length },
    { status: "Offer", count: applications.filter((a) => a.status === "Offer").length },
    { status: "Rejected", count: applications.filter((a) => a.status === "Rejected").length },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Pipeline Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="status" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "13px",
              }}
            />
            <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
