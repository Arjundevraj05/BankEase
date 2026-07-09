import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import AuthLiveGlow from "@/components/AuthLiveGlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid min-h-screen w-full grid-cols-1 bg-white font-inter lg:grid-cols-2">
      <div className="relative flex items-start justify-center px-6 pb-10 pt-16 sm:px-10 sm:pt-20">
        <Link
          href="/uiux"
          aria-label="Back to home"
          className="absolute left-6 top-6 z-10 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition-colors hover:border-[#3A3D97]/30 hover:text-[#3A3D97] sm:left-10 sm:top-8"
        >
          <ArrowLeft className="size-5" />
        </Link>
        {children}
      </div>

      <HeroBackground variant="auth" className="auth-asset">
        <AuthLiveGlow />
        <div className="auth-asset-frame">
          <Image
            src="/icons/auth-image.svg"
            alt="Auth illustration"
            width={500}
            height={500}
            className="auth-asset-image"
            priority
          />
        </div>
      </HeroBackground>
    </main>
  );
}
