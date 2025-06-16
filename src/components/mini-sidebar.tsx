'use client'
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";



export function MiniSideBar() {

    const items = [
        {
            url: "/",
            icon: <Home size={20} />
        },
        {
            url: "/blog/peruanos",
            icon: 'BT'
        },
    ]

    const pathname = usePathname();
    return (
        <div className="flex bg-background items-center flex-col gap-4">
            <SidebarTrigger />
            <ModeToggle />
            <Separator />
            
            {items.map((item) => (
                pathname === item.url ? (
                    <a key={item.url} href={item.url} className="bg-muted rounded-md p-2 flex items-center gap-2">
                        {typeof item.icon === 'string' ? item.icon : item.icon}
                    </a>
                ) : (
                    <a key={item.url} href={item.url} className="p-2 flex items-center gap-2 hover:bg-muted rounded-md">
                        {typeof item.icon === 'string' ? item.icon : item.icon}
                    </a>
                )
            ))}
        </div>
    );
}
export default MiniSideBar;