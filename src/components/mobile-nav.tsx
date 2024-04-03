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
import { Button } from "./ui/button";
import { menuList } from "@/menu-list";
import { DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";


export function MobileMenubar() {
    const [selectedItem, setSelectedItem] = useState(menuList[0].name);

    // iterate over menuList and find current item
    let currentItem = menuList[0];
    menuList.forEach((item) => {
      if (item.name === selectedItem) {
        currentItem = item;
      }
    });


    return (
      <>
        <Sheet>
          <SheetTrigger className="flex justify-between items-center p-3">
            <div className="w-6"></div>
            <h2 className="text-center">{currentItem.name}</h2>
            <HamburgerMenuIcon 
              className="my-1" 
              width={32} 
              height={32}/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mt-8">
              {menuList.map((item) => (
                <Link href={item.url ?? "/"} key={item.name} className="flex items-center justify-center">
                  <SheetTitle className="p-2 font-medium">{item.name}</SheetTitle>
                </Link>
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