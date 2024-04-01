import * as React from "react";
import {Button} from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
      <ModeToggle />
    </main>
  );
}
