"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { 
  ArrowTopRightIcon, 
  GitHubLogoIcon,
  Link2Icon,
} from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { useTheme } from "next-themes";

export default function Home() {

  const {theme } = useTheme();

  return (
    <>
      <div className="flex flex-col gap-5 h-fit">
      {projects.map((project, i) => (
          <Card key={i} className="group flex overflow-hidden">
              <div className="w-fit flex justify-end">
              {project.images.map((image, i) => (
                  theme === image.theme ? (
                    <Image 
                      key={i}
                      src={image.src}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="group-hover:rotate-6 transition-all duration-300 ease-in-out"
                    />
                  ) : null
                ))}
              </div>
              <div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex pr-0">
                  <div className="flex flex-col gap-4 w-full">
                    {project.description}
                    <div className="flex gap-3">
                    {project.links.map((link, i) => (
                      <Button key={i} variant='link' className="gap-1">
                        {link.image && link.image === "github" ? (<GitHubLogoIcon />) : (<Link2Icon />)}
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.name}
                        </a>
                        <ArrowTopRightIcon />
                      </Button>
                    ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant='secondary'>{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </div>
          </Card>
        ))}
      </div>
    </>
  );
}
