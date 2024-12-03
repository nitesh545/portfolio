import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

function Home(props) {
	return (
		<section className="h-full">
          <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">Software Developer</span>
                <h1 className="h1 mb-6">
                  <span className="text-accent">Nitesh Sharma</span>
                </h1>
                <p className="max-w-[650px] mb-9 text-white/80">
                  Skilled Fullstack Developer with 2+ years of experience in building responsive, cross-browser compatible web
                  applications using React, JavaScript, and modern web technologies. Proven track record of optimizing web performance and
                  contributing to increased client conversions through user-friendly interfaces.
                </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 text-accent hover:text-primary hover:transition-all duration-1000">
                  <Link download href="./assets/Nitesh_Sharma.pdf" target="_blank" rel="noopener noreferrer">
                    <span>Resume</span>
                  </Link>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-1000" />
                </div>
              </div>
              </div>
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo />
              </div>
            </div>
          </div>
          <Stats />
        </section>
	);
}

export default Home;