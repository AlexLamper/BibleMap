"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";
import "@/styles/globals.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/guest");
    }
  }, [user, router]);

  return (
    <main className="flex items-center justify-center h-screen p-4">
      <SignedIn>
        <Hero />
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col items-center">
          <div className="mb-6">
            Loading the application...
          </div>
          <div>
            {/* Loading spinner */}
            <Spinner />
          </div>
        </div>
      </SignedOut>
    </main>
  );
}
