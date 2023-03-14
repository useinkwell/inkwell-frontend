import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '@/components/Nav';
import heroImg from '@/public/images/hero-image.png';
import ellipse from '/public/images/ellipse.png';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Inkwell | Write with passion, share with pride on Inkwell</title>
        <meta name="description" content="The space for writers to easily share thier work, get engagements and more clients with our world-class Advertising" />
        <meta name="keywords" content="writing, gain engagements on writing, Advertise your writing Easily"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/inkwell-icon.png" />
      </Head>
      <div className="">
        <Nav />
        <div className="relative h-screen flex justify-center items-center bg-cover bg-center">
          <div className="text-white text-4xl z-[3] flex flex-col gap-[1rem]">
            <h1 className=''>Share with pride</h1>
            <h1 className=''>Write with passion</h1>
          </div>
          <Image
            src={heroImg}
            alt="Inkwell background image"
            fill
            style={{ objectFit: "cover" }}

          />


          <button className="relative bg-white text-2xl font-bold top-[16rem] left-[1rem] px-6 py-1 rounded button border-solid border-4">
            <Link className="gradient-text " href="/"> Sign Up  </Link>
          </button>
        </div>
        {/*  */}
        <article className="p-[4rem]">
          <Image
          src={ellipse} 
          alt="Inkwell background image"
          width={100}
          height={100}
          />
          <p className="text-inkBlue text-3xl text-center leading-normal">
          The premier online community for writers of all levels and genres. Whether you're a seasoned veteran or just starting out, Inkwell is the perfect place to connect with other writers, share your work, and receive feedback and support.
          </p>
        </article>
      </div>
    </>
  )
}
