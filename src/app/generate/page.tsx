"use client";

import React, { useEffect, useState } from "react";
import { openai, getRandomPrompt } from "@/utils";
import Image from "next/image";
import { FormField, Loader } from "@/components";
import styles from "../styles/styles";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";

type FormData = {
  name: string;
  prompt: string;
  photo: string[];
};

function PhotoGallery({
  photos,
  prompt,
}: {
  photos: string[];
  prompt: string;
}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative'>
      {photos.map((photo: string, i: any) => (
        <div key={i} className='relative'>
          <Image
            src={photo}
            alt={prompt}
            width={512}
            height={512}
            className='rounded-md hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-[#F2CD5C]'
          />
          <div className='absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition duration-500 ease-in-out backdrop-filter backdrop-blur-md'>
            <h2 className='text-justify text-white text-base italic'>
              {prompt}
            </h2>
            <div className='flex justify-end'>
              <HeartIconOutline className='w-8 h-5 mx-1 cursor-pointer  ' />
              <HeartIconSolid className='w-8 h-5 mx-1 cursor-pointer text-rose-500' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const CreatePost = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    prompt: "",
    photo: [],
  });
  const router = useRouter();

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await openai.createImage({
          prompt: form.prompt,
          n: 8,
          size: "512x512",
        });
        console.log("Response", response);

        const imageUrl = response?.data?.data.map((url) => url.url) as string[];

        setForm({ ...form, photo: imageUrl });
        console.log("kdkkd", form);
      } catch (err) {
        console.log(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://dalle-arbb.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form }),
          }
        );

        await response.json();
        alert("Success");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image with proper details");
    }
  };

  const { data: session, status } = useSession();

  if (!session && status === "unauthenticated") {
    toast.success("Redirecting... Log in to generate images", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
    router.push("/");
  }
  return (
    <section
      className={`overflow-hidden bg-primary-black min-h-screen ${styles.xPaddings} ${styles.yPaddings}`}>
      <Toaster />
      <div className='max-w-[1300px] flex  justify-center items-center'>
        <Link
          href='/'
          className='mt-[24px] text-[24px] font-extrabold text-white sm:text-[32px] cursor-pointer'>
          SANAACHAIN
        </Link>
        {/* <p className="mt-[16px] flex-1 text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
          Generate an imaginative image and share it with the community
        </p> */}
      </div>{" "}
      <form
        className='mt-16 max-w-[1300px] flex  justify-center items-center'
        onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5 flex-1'>
          <FormField
            labelName='Describe your Image here:'
            type='text'
            name='prompt'
            placeholder='An Impressionist oil painting of sunflowers in a purple vase…'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='mt-5 flex gap-5 mb-4 w-full justify-center items-center'>
            <button
              type='button'
              onClick={generateImage}
              className={`text-xl italic  bg-[#d8a815] font-extrabold rounded-md   px-5 py-2.5 text-center w-1/2 md:w-1/4 justify-end disabled:bg-slate-400 ${
                generatingImg ? "animate-pulse" : ""
              }`}
              disabled={generatingImg}>
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>
          <div className='relative  rounded-lg  w-full p-3 min-h-[150px] flex justify-center items-center '>
            {generatingImg ? (
              <Image
                src='/preview.png'
                alt='preview'
                height={300}
                width={300}
                className='w-4/12 h-4/12 object-contain opacity-40'
              />
            ) : (
              <div className='flex flex-col'>
                {form.photo?.length == 0 && (
                  <Image
                    src='/no-data.svg'
                    alt='preview'
                    height={300}
                    width={300}
                    className=' object-contain opacity-40'
                  />
                )}

                <PhotoGallery photos={form.photo} prompt={form.prompt} />
              </div>
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
