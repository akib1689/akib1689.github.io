import * as React from "react";
import {Button} from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { ProfileLeft } from "@/components/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-12">
      <ProfileLeft />
      <ModeToggle />
    </main>
  );
}
