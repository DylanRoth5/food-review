'use client'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { usePathname } from 'next/navigation'

// Menu items.
const items = [
  {
    title: "Peruanos",
    url: "peruanos",
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar>
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pathname === '/' ? (
                <SidebarMenuItem className="bg-muted rounded-md">
                  <SidebarMenuButton asChild>
                    <a href={'/'}>
                      <Home />
                      <span>{'Home'}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href={'/'}>
                      <Home />
                      <span>{'Home'}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              <SidebarGroupLabel >
                blog
              </SidebarGroupLabel>
              <div className="ml-4 pl-2 border-foreground border-l">
                {items.map((item) =>
                  pathname === '/blog/' + item.url ? (
                    <SidebarMenuItem key={item.title} className="bg-muted rounded-md">
                      <SidebarMenuButton asChild>
                        <a href={'/blog/' + item.url}>
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ) : (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={'/blog/' + item.url}>
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}