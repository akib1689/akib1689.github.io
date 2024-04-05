"use client";

import React from 'react'

import { story, timeline } from '@/lib/education'
import { Stepper } from '@/components/ui/stepper'
// card component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

// pagination
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



// badge component
import { Badge } from '@/components/ui/badge'

interface paginationProps {
  currentPage: number;
  pages: number;
  numberOfPagesToDisplay: number;
  handlePageChange: (page: number) => void;
  handlePrevious: () => void;
  handleNext: () => void;
}

// pagination component
const PaginationComponent = ({currentPage, pages, numberOfPagesToDisplay, handlePageChange, handlePrevious, handleNext}: paginationProps) => {
  // check if the current page is more than the number of pages to display
  // then we need to show the ellipsis
  const showPrevEllipsis = currentPage >= numberOfPagesToDisplay;
  // check if the current page is 0 
  // if not then we need to show the previous button
  const showPrevious = currentPage > 0;
  // check if the current page + number of pages to display is less than the total number of pages
  // then we need to show the ellipsis
  const showNextEllipsis = currentPage + numberOfPagesToDisplay < pages;

  // check if the current page is less than the total number of pages
  // then we need to show the next button
  const showNext = currentPage < pages - 1;

  
  // find the start page
  const startPage = Math.max(0, currentPage - Math.floor(numberOfPagesToDisplay / 2));
  // find the end page
  const endPage = Math.min(pages, startPage + numberOfPagesToDisplay);
  return (
    <div>
      <Pagination>
            <PaginationContent>
              {showPrevious && 
                <PaginationItem>
                  <PaginationPrevious onClick={handlePrevious}/>
                </PaginationItem>
              }
              {showPrevEllipsis && <PaginationEllipsis />}
              {Array.from({ length: endPage - startPage }, (_, i) => i + startPage).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink isActive={currentPage === page} onClick={() => handlePageChange(page)}>{page + 1}</PaginationLink>
                </PaginationItem>
              ))}
              {showNextEllipsis && <PaginationEllipsis />}
              {showNext &&
                <PaginationItem>
                  <PaginationNext onClick={handleNext}/>
                </PaginationItem>
              }
            </PaginationContent>
          </Pagination>
    </div>
  )
}



const Education = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 3;

  const pages = Math.ceil(timeline.length / itemsPerPage);

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
    <div className='flex flex-col gap-8 p-5'>
      <p className='text-xl md:text-2xl font-semibold'>Summary</p>
      <p className=' text-lg md:text-xl'>
        {story.paragraph.map((p, i) => (
          p.linkAvilability ? (
            <span key={i}>
              <a href={p.link} className='text-blue-500 hover:underline'>{p.text}</a>
            </span>
          ) : (
            p.text
          )
        ))}
      </p>
      <p className='text-xl md:text-2xl font-semibold'>Details</p>
      <div className='flex flex-col gap-6 p-2'>
        {timeline.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, i) => (
          <div key={i} className='flex gap-2'>
            <Stepper variant={i === 0 ? 'starter' : i === timeline.length - 1 ? 'stopper' : 'default'} orientation='vertical' />
            <Card className='flex-grow'>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.subtitle} | {item.date} </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <div className='flex gap-2 flex-wrap'>
                  {item.tags.map((tag, i) => (
                    <Badge key={i} variant='secondary'>{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
        <PaginationComponent currentPage={currentPage} pages={pages} numberOfPagesToDisplay={pageNumberToDisplay} handlePageChange={handlePageChange} handleNext={handleNext} handlePrevious={handlePrevious}/>
      </div>
    </div>
  )
}

export default Education
