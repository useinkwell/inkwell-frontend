/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import heroImg from "@/public/images/hero-image.png";
import secondSlide from "@/public/images/second-slide.svg";
import ellipse from "/public/images/ellipse.png";
import tablet from "/public/images/tablet-ellipse.png";
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
            fill
            style={{ objectFit: "cover" }}
          />


          <div className="sm:hidden z-[3] flex items-center justify-center h-11 w-32 bg-gradient-to-b from-[#000F55] to-[#B20048] p-1 rounded font-semibold absolute bottom-4 right-4">
            <div className="bg-white p-2 rounded w-full h-full text-center flex items-center justify-center ">
              <Link className="text-xl" href="/"> Sign Up</Link>
            </div>
          </div>


        </div>
        <article className="flex relative py-20 px-14 sm:pt-[13rem] md:px-[5rem] items-center">

          <Image
            src={secondSlide}
            alt="inkwell background image"
            className="secondSlide hidden lg:block w-[50%]"
          />
          <Image
            width={500}
            height={500}
            src={tablet}
            alt="inkwell background image"
            className="tablet hidden sm:block  lg:hidden absolute mx-[10%] 
            "
          />
          <Image
            src={ellipse}
            alt="inkwell background image"
            className="ellipse-img sm:hidden absolute top-0 right-12"
          />
          <p className="text-inkBlue text-xl z-[3] text-center font-medium leading-10 max-w-full  
          lg:w-[50%] sm:text-3xl sm:leading-[3rem]">
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
