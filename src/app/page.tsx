"use client";

import { Inter } from "next/font/google";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SubModules from "@/components/SubModules";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      toast.loading(
        "Currently Logged in. Redirecting to Image generation page...",
        {
          duration: 4000,
          position: "top-right",
        }
      );

      setTimeout(() => {
        router.push("/generate");
      }, 4000);
    }
  });

  return (
    <main className="overflow-hidden bg-primary-black min-h-screen ">
      <Toaster />
      <Hero />
      <div className="relative">
        <About />
      </div>
      <SubModules />
      <Footer />
    </main>
  );
}
