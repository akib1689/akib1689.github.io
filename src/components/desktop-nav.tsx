import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import Link from "next/link";

// import the logo from the public folder
import Image from "next/image";
import logo from "@/public/logo.svg";

// theme of the website
import { useTheme } from "next-themes";

// menu items
import { menuList } from "@/lib/menu-list";
import { ModeToggle } from "./mode-toggle";

import Logo from "../../public/logo";

import { NavigationMenuProps } from "@/components/navigation";

export function DesktopMenubar({ selectedItem, setSelectedItem, className, children }: NavigationMenuProps) {
    // get the theme
    const { theme } = useTheme();
    return (
        <div className="w-full flex flex-grow">
            <div className="w-full pl-10">
                
                <Logo 
                    // set the fill of the logo depending on the theme
                    fill={theme === "dark" ? "#fff" : "#000"}
                    className=" h-8 w-auto"
                />
                    
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
                <ModeToggle />
            </NavigationMenu>
        </div>
    );
}