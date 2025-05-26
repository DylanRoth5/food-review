'use client'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import React from "react"



export default function Page() {

  const notes = [
    {
      title: "Peruanos Review",
      description:
        "Esta es una reseña de un restaurante peruano que ofrece una experiencia culinaria auténtica y deliciosa.",
    },
    {
      title: "Italiano Review",
      description:
        "Esta es una reseña de un restaurante italiano que ofrece una experiencia culinaria auténtica y deliciosa.",
    },
    {
      title: "Mexicano Review",
      description:
        "Esta es una reseña de un restaurante mexicano que ofrece una experiencia culinaria auténtica y deliciosa.",
    },
    {
      title: "Chino Review",
      description:
        "Esta es una reseña de un restaurante chino que ofrece una experiencia culinaria auténtica y deliciosa.",
    },
  ]

  const [currentNote, setCurrentNote] = React.useState(notes[0])
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Reviews
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentNote.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            {/* current note */}
            {
              currentNote ? (
                <div className="p-4">
                  <h2 className="text-2xl font-bold">{currentNote.title}</h2>
                  <p className="mt-2 text-gray-700">
                    {currentNote.description}
                  </p>
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  Select a note to view its content.
                </div>
              )
            }
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
