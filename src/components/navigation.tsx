"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DesktopMenubar } from "./desktop-nav";
import { MobileMenubar } from "./mobile-nav";
import { useState } from "react";

import { menuList } from "@/lib/menu-list";


export type NavigationMenuProps = {
    selectedItem: string;
    setSelectedItem: (item: string) => void;
    className?: string;
    children?: React.ReactNode;
};

export function MenubarComponent() {
    const isDesktop = useMediaQuery("(min-width: 1208px)")

    const [selectedItem, setSelectedItem] = useState(menuList[0].name);


    return (
        isDesktop ? (
            <DesktopMenubar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        ) : (
            <MobileMenubar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        )
    );
}
