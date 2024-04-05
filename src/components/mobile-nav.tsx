import * as React from "react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { menuList } from "@/lib/menu-list";
import Link from "next/link";
import Logo from "../../public/logo";
import DownloadCv from "./download-cv";
import { NavigationMenuProps } from "./navigation";

export function MobileMenubar({selectedItem, setSelectedItem, className, children}: NavigationMenuProps) {
    // used for the opening and closing of the menu
    const [isOpen, setIsOpen] = useState(false);
    
    // iterate over menuList and find current item
    let currentItem = menuList[0];
    menuList.forEach((item) => {
      if (item.name === selectedItem) {
        currentItem = item;
      }
    });


    return (
      
      <>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="w-full flex justify-between items-center p-3">
            <div>
              <Logo fill="white" className=" h-6 w-auto"/>
            </div>
            <h2 className=" text-left">{currentItem.name}</h2>
            <HamburgerMenuIcon 
              className="my-1" 
              width={32} 
              height={32}/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mt-8">
              {menuList.map((item) => (
                <Link href={item.url ?? "/"} key={item.name} className="flex items-center justify-center">
                  <SheetTitle className="p-2 font-medium" onClick={() => {  setSelectedItem(item.name);
                  // close the menu
                  setIsOpen(false);
                  }}
                  >{item.name}</SheetTitle>
                </Link>
              ))}
            </SheetHeader>
            <SheetDescription className="flex justify-center py-5">
              <DownloadCv />
            </SheetDescription>
          </SheetContent>
      </Sheet>
      </>
      );
}