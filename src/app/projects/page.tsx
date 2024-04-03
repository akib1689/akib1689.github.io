"use client";
import * as React from "react";
import { ProfileLeft } from "@/components/left-profile-component";
import { MenubarComponent } from "@/components/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { About } from "@/components/about";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1208px)");
  return (
    <>
      <main className={isDesktop ? "flex justify-center p-8 h-fit" : "flex flex-col justify-center p-8 h-fit"}>
        {isDesktop ? (
          <>
           Projects
          </>
        ) : (
          <>
            Projects
          </>
        )}
      </main>
    </>
  );
}
