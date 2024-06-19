import React from "react";

import { Button } from "@troper/ui/components/button";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-[90vh] w-full flex-col gap-2 lg:gap-2">
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no projects
          </h3>
          <p className="text-muted-foreground mb-3 text-sm">
            Projects will show when you start using RankBoost AI
          </p>
          <Button>Create Project</Button>
        </div>
      </div>
    </main>
  );
}
