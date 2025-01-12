"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsStripe } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiAuth0,
  SiMui,
  SiScikitlearn,
  SiPandas,
  SiStreamlit,
  SiNumpy,
} from "react-icons/si";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const webDevProjects = [
  {
    id: 1,
    nums: "01",
    category: "Full Stack",
    title: "Project 1",
    description: [
      "Experience seamless food ordering with our state-of-the-art app, featuring real-time order tracking, secure authentication, and a reliable payment gateway.",
      "Enjoy a personalized user experience with advanced sorting options and a sleek, responsive design. With quick registration, flexible payment options, and lightning-fast performance, your next meal is just a few taps away.",
    ],
    stack: [
      {
        id: 1,
        name: "React.js",
        icon: <FaReact />,
      },
      {
        id: 2,
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        id: 3,
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        id: 4,
        name: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        id: 5,
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        id: 6,
        name: "Stripe",
        icon: <BsStripe />,
      },
      {
        id: 7,
        name: "Auth0",
        icon: <SiAuth0 />,
      },
    ],
    image: "/assets/work/Project1.png",
    live: "https://fasteats-frontend.onrender.com",
    github: "https://github.com/AnshumohanAcharya/FastEats",
  },
];

const mlProjects = [
  {
    id: 1,
    nums: "01",
    category: "Machine Learning",
    title: "Project 1",
    description: [
      "A diet recommendation web application using content-based approach with Scikit-Learn, FastAPI and Streamlit.",
      "In the diet recommendation page the user can fill information about his age , weight , height and gets a diet recommendation based on his information. Besides, the custom food recommendation allows the user to specify more his food preferency using nutritional values.",
    ],
    stack: [
      {
        id: 1,
        name: "Python",
        icon: <FaPython />,
      },
      {
        id: 2,
        name: "Scikit-Learn",
        icon: <SiScikitlearn />,
      },
      {
        id: 3,
        name: "Pandas",
        icon: <SiPandas />,
      },
      {
        id: 4,
        name: "Streamlit",
        icon: <SiStreamlit />,
      },
      {
        id: 5,
        name: "Numpy",
        icon: <SiNumpy />,
      },
    ],
    image: "/assets/work/Project1_ML.png",
    live: "https://food-recommendation-system.streamlit.app/",
    github: "https://github.com/AnshumohanAcharya/Diet_Recommendation_System",
  },
];

const Work = () => {
  const [project_webDev, setProject_webDev] = useState(webDevProjects[0]);
  const [project_ml, setProject_ml] = useState(mlProjects[0]);

  const handleSlideChange_webDev = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject_webDev(webDevProjects[currentIndex]);
  };
  const handleSlideChange_ml = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject_ml(mlProjects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="Web Development" className="flex flex-col gap-[60px]">
          <TabsList className="w-full mx-auto gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <TabsTrigger value="Web Development">Web Development</TabsTrigger>
            <TabsTrigger value="Machine Learning">Machine Learning</TabsTrigger>
            <TabsTrigger value="Deep Learning">Deep Learning</TabsTrigger>
            <TabsTrigger value="DevOps">DevOps</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="Web Development" className="w-full">
              <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  <div className="w-full xl:w-[50%] xh:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] g-[50%]">
                      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                        {project_webDev.nums}
                      </div>
                      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-a;; duration-500 capitalize">
                        {project_webDev.category} Project
                      </h2>
                      <div className="text-white/60 gap-y-2">
                        <ul className="list-disc">
                          {project_webDev.description.map((item) => (
                            <li key={item} className="text-white/60">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ul className="flex flex-wrap gap-4 mt-4">
                        {project_webDev.stack.map((item) => (
                          <li
                            key={item.id}
                            className="items-center gap-1 text-accent"
                          >
                            {item.icon}
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-white/20 my-3 py-3">
                        <div className="flex items-center gap-4">
                          <Link href={project_webDev.live}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Link>
                          <Link href={project_webDev.github}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                  <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Github repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-[50%] ">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="xl:h-[520px] mb-12"
                      onSlideChange={handleSlideChange_webDev}
                    >
                      {webDevProjects.map((project) => {
                        return (
                          <SwiperSlide key={project.id}>
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover "
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                      <WorkSliderBtns
                        totalStyles={
                          webDevProjects.length === 1 ? "hidden" : ""
                        }
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 "
                      />
                    </Swiper>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Machine Learning" className="w-full">
              <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  <div className="w-full xl:w-[50%] xh:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] g-[50%]">
                      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                        {project_ml.nums}
                      </div>
                      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-a;; duration-500 capitalize">
                        {project_ml.category} Project
                      </h2>
                      <div className="text-white/60 gap-y-2">
                        <ul className="list-disc">
                          {project_ml.description.map((item) => (
                            <li key={item} className="text-white/60">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ul className="flex flex-wrap gap-4 mt-4">
                        {project_ml.stack.map((item) => (
                          <li
                            key={item.id}
                            className="items-center gap-1 text-accent"
                          >
                            {item.icon}
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-white/20 my-3 py-3">
                        <div className="flex items-center gap-4">
                          <Link href={project_ml.live}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Link>
                          <Link href={project_ml.github}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                  <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Github repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-[50%] ">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="xl:h-[520px] mb-12"
                      onSlideChange={handleSlideChange_ml}
                    >
                      {mlProjects.map((project) => {
                        return (
                          <SwiperSlide key={project.id}>
                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover "
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                      <WorkSliderBtns
                        totalStyles={mlProjects.length === 1 ? "hidden" : ""}
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 "
                      />
                    </Swiper>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
