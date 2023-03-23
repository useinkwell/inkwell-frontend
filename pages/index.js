/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import heroImg from "@/public/images/hero-image.png";
import secondSlide from "@/public/images/secondSlide.svg";
import ellipse from "/public/images/ellipse.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inkwell | Write with passion, share with pride on Inkwell</title>
        <meta
          name="description"
          content="The space for writers to easily share thier work, get engagements and more clients with our world-class Advertising"
        />
        <meta
          name="keywords"
          content="writing, gain engagements on writing, Advertise your writing Easily"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/inkwell-icon.png" />
      </Head>
      <div className="">
        <Nav />
        <div className="relative h-screen flex items-center justify-center md:justify-start bg-cover bg-center">
          <div className="text-white md:ml-12 text-4xl z-[3] flex flex-col gap-[1rem]">
            <h1 className="mb-8">Share with pride</h1>
            <h1 className="">Write with passion</h1>
          </div>
          <Image
            src={heroImg}
            alt="Inkwell background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <button className="block sm:hidden z-[3] bg-white rounded-lg border-solid border-2 border-pink-800 text-base font-semibold items-center px-8 py-2 absolute bottom-5 right-5">
            <Link className="gradient-text " href="/">
              Sign Up
            </Link>
          </button>
        </div>
        <article className="relative h-fit p-20 sm:p-52 md:h-screen flex items-center bg-cover bg-center md:mt-20">
          <Image
            src={secondSlide}
            alt="Inkwell background image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="items-center"
          />
          <p className="text-inkBlue text-xl z-[3] text-center font-medium leading-10 max-w-full md:max-w-lg relative md:absolute md:top-32 md:right-32">
            The premier online community for writers of all levels and genres.
            Whether you're a seasoned veteran or just starting out, Inkwell is
            the perfect place to connect with other writers, share your work,
            and receive feedback and support.
          </p>
        </article>
      </div>
    </>
  );
}
