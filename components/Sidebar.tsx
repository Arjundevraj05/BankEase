'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import PlaidLink from './PlaidLink'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="sidebar-brand">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="BankEase logo"
          />
          <h1 className="sidebar-logo">BankEase</h1>
        </Link>

        <div className="mt-6 flex flex-col gap-1">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn('sidebar-link', {
                  'sidebar-link-active': isActive,
                })}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={cn('shrink-0 transition-all duration-200', {
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
            )
          })}
        </div>

        <div className="mt-4">
          <PlaidLink user={user} />
        </div>
      </nav>

      <Footer user={user} />
    </section>
  )
}

export default Sidebar;
