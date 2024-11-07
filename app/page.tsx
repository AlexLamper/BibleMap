"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";
import "@/styles/globals.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "@/components/home/Hero";

function GuestRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/guest");
  }, [router]);

  return null;
}
function Page() {
  return (
    <div>
      <SignedOut>
        <GuestRedirect />
        <div className="flex flex-col items-center">
          <div className="mb-6">Loading the application...</div>
          <div>
            {/* Loading spinner */}
            <Spinner />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <Hero />
      </SignedIn>
    </div>
  );
}

export default Page;
