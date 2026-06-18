import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, LineChart, ListChecks } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <span className="text-xl font-bold tracking-tight">
          CareerPilot <span className="text-primary">AI</span>
        </span>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Get started</Button>
          </Link>
        </div>
      </nav>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pt-16 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Track every internship application.{" "}
          <span className="text-primary">Land the one that counts.</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
          CareerPilot AI keeps your applications, statuses, and progress in
          one clean dashboard — built for students who apply to a lot of
          places and need to stay organized.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              Start tracking free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: ListChecks,
            title: "Application Tracker",
            desc: "Log every company, role, and status change in seconds.",
          },
          {
            icon: LineChart,
            title: "Visual Dashboard",
            desc: "See your pipeline at a glance — applied, interviewing, offers.",
          },
          {
            icon: Briefcase,
            title: "Built for Students",
            desc: "No clutter. Just what you need to stay on top of your search.",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border p-6 bg-card hover:shadow-md transition-shadow"
          >
            <f.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
