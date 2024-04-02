import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { menuList } from "@/menu-list";
import { DownloadIcon } from "@radix-ui/react-icons";


export function MobileMenubar() {
    return (
      <>
        <Sheet>
          <SheetTrigger className="flex justify-end">
            <HamburgerMenuIcon 
              className="my-1" 
              width={24} 
              height={24}/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {menuList.map((item) => (
                <SheetTitle key={item.name} className="mt-10 h-8 hover:h-10 hover:translate-x-2">
                  {item.name}
                </SheetTitle>
              ))}
            </SheetHeader>
            <SheetDescription className="p-5">
              <Button className="flex justify-center w-full">
                <DownloadIcon className="h-5 w-5" />
                <span className="ml-2">Resume</span>
              </Button>
            </SheetDescription>
          </SheetContent>
      </Sheet>
      </>
      );
}