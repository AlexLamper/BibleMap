"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {Spinner} from "@nextui-org/spinner";
import "@/styles/globals.css";

export default function HomePage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/guest");
    } else {
      router.push("/home");
    }
  }, [user, router]);

  return (
    <main className="p-4">
      {/* Loading spinner */}
      <Spinner />
    </main>
  );
}
