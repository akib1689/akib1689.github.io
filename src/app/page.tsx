import * as React from "react";
import {Button} from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { ProfileLeft } from "@/components/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ProfileLeft />
      </div>
      <ModeToggle />
    </main>
  );
}
