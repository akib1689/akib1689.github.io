import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { ProfileLeft } from "@/components/left-profile-component";
import { MenubarComponent } from "@/components/navigation";


export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-center p-8 h-screen">
      <ProfileLeft />
      <div className="flex flex-col w-full h-full">
        <div className="w-full flex">
          <MenubarComponent />
        </div>
      </div>
    </main>
  );
}
