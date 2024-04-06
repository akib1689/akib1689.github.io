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

import { PaginationComponent } from "@/components/pagination-wrapper"

export default function Home() {

  const {theme } = useTheme();

  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 3;

  const pages = Math.ceil(projects.length / itemsPerPage);

  const pageNumberToDisplay = 3;

  const handlePageChange = (page: number) => {
    // check to see if the page is within the bounds
    if (page < 0 || page >= pages) return;
    setCurrentPage(page);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  }

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  }

  return (
    <>
      <div className="flex flex-col gap-6 h-fit">
        <p className="text-xl md:text-2xl font-semibold">
          &gt; My Projects
        </p>
      {projects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((project, i) => (
          <Card key={i} className="group flex overflow-hidden">
              <div className="w-fit flex justify-end">
                {project.images.map((image, i) => (
                  theme === image.theme ? (
                    <Image
                      key={i}
                      src={image.src}
                      alt={project.title}
                      width={300}
                      height={250}
                      className="group-hover:rotate-3 transition-all duration-300 ease-in-out"/>
                    ) : (
                    null
                    )
                ))}
              </div>
              <div className="flex flex-col flex-1">
                <CardHeader className="text-lg">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                  <div className="flex flex-col gap-4">
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
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant='secondary'>{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </div>
          </Card>
        ))}
        <PaginationComponent currentPage={currentPage} pages={pages} numberOfPagesToDisplay={pageNumberToDisplay} handlePageChange={handlePageChange} handleNext={handleNext} handlePrevious={handlePrevious}/>
      </div>
    </>
  );
}
