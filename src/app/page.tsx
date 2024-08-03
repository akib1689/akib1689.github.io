"use client";
import * as React from "react";
import { About } from "@/components/about";
import { ProfileLeft } from "@/components/left-profile-component";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div>
        <ProfileLeft />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
