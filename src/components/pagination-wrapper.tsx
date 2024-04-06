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
  


interface paginationProps {
    currentPage: number;
    pages: number;
    numberOfPagesToDisplay: number;
    handlePageChange: (page: number) => void;
    handlePrevious: () => void;
    handleNext: () => void;
  }
  
  // pagination component
 export const PaginationComponent = ({currentPage, pages, numberOfPagesToDisplay, handlePageChange, handlePrevious, handleNext}: paginationProps) => {
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