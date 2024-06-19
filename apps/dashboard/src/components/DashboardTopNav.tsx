"use client"
import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import { Profile } from '@/components/Profile'
import { Button } from '@troper/ui/components/button'
import { Dialog, DialogClose } from '@troper/ui/components/dialog'
import { Separator } from '@troper/ui/components/separator'
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@troper/ui/components/sheet'

import Link from 'next/link'
import { ReactNode } from 'react'
import { Icons } from "@/components/icons"

export default function DashboardTopNav({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[55px] items-center gap-4 border-b px-3">
        <Dialog>
          <SheetTrigger className="min-[1024px]:hidden p-2 transition">
            <Icons.hamburgerMenu2 />
            <Link href="/dashboard">
              <span className="sr-only">Home</span>
            </Link>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="/">
                <SheetTitle>Troper</SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full">
                    <Icons.home className="mr-2 h-5 w-5" />
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/projects">
                  <Button variant="outline" className="w-full">
                    <Icons.folder className="mr-2 h-5 w-5" />
                    Projects
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/kanban">
                  <Button variant="outline" className="w-full">
                    <Icons.faTasks className="mr-2 h-5 w-5" />
                    Kanban
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/finance">
                  <Button variant="outline" className="w-full">
                    <Icons.banknote className="mr-2 h-5 w-5" />
                    Finance
                  </Button>
                </Link>
              </DialogClose>
              <Separator className="my-3" />
              <DialogClose asChild>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full">
                    <Icons.settings className="mr-2 h-5 w-5" />
                    Settings
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <div className="flex justify-center items-center gap-2 ml-auto">
          <Profile />
          <ModeToggle />
        </div>
      </header>
      {children}
    </div>
  )
}