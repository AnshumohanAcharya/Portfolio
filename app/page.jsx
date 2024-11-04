"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Anshumohan Acharya</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experience and I am proficient
              in various programming languages and technologies .
            </p>
            {/* Buttons and Socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <a href="/Resume_SDE.pdf" download={"Resume_SDE.pdf"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 p-1"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 mb-6 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
