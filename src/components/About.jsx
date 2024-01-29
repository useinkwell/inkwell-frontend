import Nav from "./Nav";
import gmail from "../../public/icons/gmail.svg";
import Image from "next/image";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Nav />
      <div className="pt-36 px-11">
        <h2 className="text-center pb-5 gradient-text text-2xl font-bold">Who are we?</h2>
        <div className="flex flex-col gap-5 text-lg font-medium max-w-3xl mx-auto">
          <p>
            Welcome to Inkwell, the writing oasis where the pen truly is
            mightier than the sword. Our community is a well of inspiration and
            a fountain of creativity for writers of all levels and genres.
          </p>
          <p>
            At Inkwell, we believe in the power of the written word and we're
            dedicated to helping our members unleash their inner scribe. Whether
            you're looking to dip your pen in the world of fiction, or want to
            pen your thoughts in poetry, or share your content ideas, we've got
            you covered.
          </p>
          <p>
            Our website is a wellspring of resources and tools to help you
            improve your writing skills, polish and share your portfolio.
          </p>
          <p>
            Our team is dedicated to helping our members succeed. We're
            constantly working to improve our website and add new features to
            ensure that our members have everything they need to achieve their
            writing goals.
          </p>
          <p>
            So, come and join our ink-credible community and let us help you
            write your story. We're excited to see what you'll ink next!
          </p>
        </div>
        <h3 className="text-2xl gradient-text font-bold text-center pt-5">Contact Us</h3>
        <div className="flex gap-2 items-center justify-center pt-4 text-2xl">
          <Image src={gmail} alt="gmail icon" width={50} height={50} />
          <p>person@gmail.com</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
