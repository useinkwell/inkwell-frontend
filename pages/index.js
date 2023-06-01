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
import desktopWrite1 from "/public/images/desktop-write-1.png";
import desktopWriteLarge from "/public/images/desktop-write-large.png";
import portfolioSmall from "/public/images/portfolio-small.png";
import portfolioMedium from "public/images/portfolio-medium.png";
import portfolioLarge from "public/images/portfolio-large.png";
import inkwellLogo from "public/images/inkwell.png";
import Form from "@/components/Form";

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
        <article className="flex relative py-20 px-14 sm:pt-[13rem] md:px-[5rem] items-center 
        lg:justify-end lg:items-start sm:pb-[12rem] md:pb-[20rem]">

          <Image
            src={secondSlide}
            alt="inkwell background image"
            className="secondSlide hidden lg:block w-[80%] lg:w-[70rem]  lg:absolute top-[3rem]"
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
          lg:w-[60%] sm:text-3xl sm:leading-[3rem] lg:relative lg:bottom-10">
            The premier online community for writers of all levels and genres.
            Whether you're a seasoned veteran or just starting out, Inkwell is
            the perfect place to connect with other writers, share your work,
            and receive feedback and support.
          </p>
        </article>
        {/* Section 3 */}
        <article className="flex flex-col gap-20 items-center bg-[url('../public/images/bg-4.png')]   bg-no-repeat bg-cover bg-center py-20">

          <div className="flex flex-col gap-28 lg:flex-row lg:pt-[2rem] lg:px-[3rem]">

            <Image
              src={desktopWrite1}
              alt="inkwell writing UI"
              className="mx-auto w-[80%] sm:hidden"
            />

            <Image
              src={desktopWriteLarge}
              alt="inkwell writing UI"
              className="mx-auto w-[80%] hidden sm:block lg:w-[40%]"
            />
            <p className="text-white w-[85%] text-center text-3xl mx-auto leading-[3.5rem] lg:w-[50%] lg:pt[1.5rem]">
              Our website offers easy-to-use editing tools to help you improve your writing skills and advance your career.
              With Inkwell, you can easily share your work and receive feedback from other writers in our community.
            </p>
          </div>
          <button className="bg-white rounded px-[2rem] py-[1.5rem] text-4xl font-bold lg:mr-[55%]">
            <span className="gradient-text"> Try it out now! </span>
          </button>
        </article>

        <article className="flex flex-col-reverse items-center gap-10 py-10 md:flex-row md:px-[2rem] lg:py-0">
          <p className="text-inkBlue text-4xl leading-[3.5rem] text-center lg:w-[40%] w-[80%] md:w-[50%]">
            Create your portfolio, showcase your work and build your author platform.
            With our portfolio feature, you can easily share your work, receive feedback, and grow your audience.
          </p>
          <Image
            src={portfolioSmall}
            alt="an image in inkwell website"
            className="mx-auto w-[60%] sm:block  md:hidden"
          />

          <Image
            src={portfolioMedium}
            alt="an image in inkwell website"
            className="mx-auto w-[50%] sm:hidden  hidden md:block lg:hidden"
          />

          <Image
            src={portfolioLarge}
            alt="an image in inkwell website"
            className="mx-auto w-[50%] hidden md:hidden lg:block"
          />

        </article>

        <article className="flex flex-col gap-10 items-center bg-[url('../public/images/bg-4.png')]   bg-no-repeat bg-cover bg-center py-20">
          <p className="text-white w-[85%] md:w-[50%]  lg:w-[78%] text-center text-3xl mx-auto leading-[3.5rem]">
            Join now and become a part of Inkwell connect with other writers,
            share your work, and improve your writing skills!
          </p>
          {/* <form className="flex flex-col gap-5">
            <input placeholder="John Doe" name="name" type="text"
              className="focus:outline-none p-2 rounded border-b-4 border-inkBlue text-inkBlue" />
            <input placeholder="johndoe@gmail.com" name="email" type="email"
              className="focus:outline-none p-2 rounded border-b-4 border-inkBlue text-inkBlue"
            />
            <button className="bg-white rounded px-[4rem] py-[0.5rem] text-2xl font-bold" type="submit">
              <span className="gradient-text"> Join </span>
            </button>
          </form> */}
          <Form/>
        </article>
        <footer className="flex flex-col md:flex-row md:justify-center md:gap-10 md:text-2xl gap-20 text-gray-600 text-3xl pl-[2rem] py-[3.5rem] md:pl-0
        lg:gap-28">
          <div className="flex flex-col gap-10 items-start">
            <Link href="/">Homepage</Link>
            <Link href="/">Sign Up</Link>
            <Link href="/">About Us</Link>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <Link href="/">Explore</Link>
            <Link href="/">My Feed</Link>
            <Link href="/">Search</Link>
            <Link href="/">Notifications</Link>
          </div>
          <div>
            <Link href="/">profile</Link>
          </div>
          <div>
            <Link href="/">portfolio</Link>
          </div>
          <div>
            <Link href="/">
              Log Out
            </Link>
          </div>
        </footer>
        <div>
          <Image
            src="/images/inkwell.png"
            width={200}
            height={200}
            alt="nav bars"
            className="mx-auto"
          />
        </div>

      </div>
    </>
  );
}
