import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import Link from "next/link";

// import the logo from the public folder
import Image from "next/image";
import logo from "@/public/logo.svg";

// menu items
import { menuList } from "@/lib/menu-list";
import { Button } from "./ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./mode-toggle";

import SvgComponent from "../../public/logo";


export function DesktopMenubar() {
    const [selectedItem, setSelectedItem] = useState(menuList[0].name);

    return (
        <div className="w-full flex flex-grow">
            <div className="w-full pl-10">
                
                <SvgComponent fill="#fff" className=" h-8 w-auto"/>
                    
            </div>
            <NavigationMenu className=" justify-end pr-12">
                <NavigationMenuList>
                {menuList.map((item) => (
                    <NavigationMenuItem 
                        key={item.name} 
                        className={item.name === selectedItem? 'border-b-2' : ''}>
                    <Link href={item.url ?? "/"} passHref>
                        <NavigationMenuLink 
                            className={navigationMenuTriggerStyle()} 
                            onClick={() => setSelectedItem(item.name)}>
                        {item.name}
                        </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>
                ))}
                </NavigationMenuList>
                <Button className="flex mx-4 space-x-2">
                    <DownloadIcon className="h-5 w-5" />
                    <span className="ml-2">Resume</span>
                </Button>
                <ModeToggle />
            </NavigationMenu>
        </div>
    );
}