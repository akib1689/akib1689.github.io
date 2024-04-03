"use client";
import * as React from "react";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <About />
    </div>
  );
}
