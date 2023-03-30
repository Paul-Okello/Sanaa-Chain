"use client";

import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "@/app/styles/styles";
import { navVariants } from "../utils/motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { UserMinusIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  // const dispatch = useAppDispatch();
  console.log("Sess", session);

  function handleLogin(
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    signIn();
    // if (session) {
    //   addUser({email: session.user?.email, isSubscribed: false, })
    // }
    toast.success("logging in...", {
      duration: 2000,
    });
    router.push("/generate");
  }

  function handleLogout(
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setIsLoggingOut(true);
    signOut();
    toast.success("You have been logged out successfully", {
      duration: 2000,
    });
    router.push("/");
  }

  return (
    <nav className={`${styles.xPaddings} relative py-2  bg-zinc-900  `}>
      <Toaster />
      {/* <div className="gradient-04 absolute inset-0 w-[50%] right-3.5 " /> */}
      <div
        className={`${styles.innerWidth} mx-auto flex  gap-8 ${
          session ? "justify-end " : "justify-between"
        }`}>
        <Link
          href='/'
          className={`text-white font-bold py-2 px-4 rounded-lg inline-flex items-center ${
            session ? "hidden" : ""
          }`}>
          <span className='text-3xl'>SanaaChain</span>
        </Link>

        {status == "authenticated" ? (
          <div className='flex justify-between items-center '>
            <div className='text-[#F2CD5C] border border-[#F2CD5C] p-1 rounded-md flex justify-between items-center'>
              <Image
                src={session.user?.image as string}
                height={40}
                width={40}
                alt='Profile image'
                className='rounded-full '
              />
              <p className='mx-1'>{session.user?.name}</p>
            </div>

            <button
              type='button'
              className='flex h-fit items-center gap-[12px] rounded-md bg-[#F2CD5C] py-2 px-2 ml-2 text-slate-800'
              onClick={(event) => handleLogout(event)}>
              <UserMinusIcon className='text-slate-800 h-5 w-5 inline ' />
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
            <button
              type='button'
              className='flex h-fit items-center gap-[12px] rounded-full bg-[#F2CD5C] py-2 px-2 ml-2 text-slate-800'>
              <HeartIcon className='text-rose-600 h-5 w-5 inline ' />
            </button>
          </div>
        ) : (
          <button
            type='button'
            className='flex  items-center gap-[12px] rounded-md bg-yellow-400  py-1 px-6 font-normal text-slate-800'
            onClick={(event) => handleLogin(event)}>
            Generate
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
