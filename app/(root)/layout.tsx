import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/uiux')

  return (
    <main className="flex h-screen w-full bg-dashboard-gradient font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full min-w-0 flex-col">
        <div className="root-layout">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <span className="font-ibm-plex-serif text-lg font-bold text-black-1">BankEase</span>
          </Link>
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}