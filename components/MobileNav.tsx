'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-[#F4F6FC]">
          <Link href="/" className="flex cursor-pointer items-center gap-2 px-2 py-2">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="BankEase logo"
            />
            <h1 className="text-24 font-ibm-plex-serif font-bold text-black-1">
              BankEase
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col gap-1 pt-6">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn('sidebar-link', {
                          'sidebar-link-active': isActive,
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={24}
                          height={24}
                          className={cn('shrink-0', {
                            'brightness-0 invert': isActive,
                            'opacity-60': !isActive,
                          })}
                        />
                        <span className={cn('sidebar-label', {
                          'sidebar-label-active': isActive,
                        })}>
                          {item.label}
                        </span>
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" className="mt-6" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
