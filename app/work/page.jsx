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

import { FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiAuth0,
  SiMui,
} from "react-icons/si";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
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
  // {
  //   id: 2,
  //   nums: "02",
  //   category: "Full Stack",
  //   title: "Project 2",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc nec nisl lacinia tincidunt. In hac habitasse platea dictumst. Proin nec ligula nec nunc nec nisl lacinia tincidunt.",
  //   stack: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       icon: <FaReact />,
  //     },
  //     {
  //       id: 2,
  //       name: "MongoDB",
  //       icon: <SiMongodb />,
  //     },
  //     {
  //       id: 3,
  //       name: "Express.js",
  //       icon: <SiExpress />,
  //     },
  //     {
  //       id: 4,
  //       name: "Node.js",
  //       icon: <FaNodeJs />,
  //     },
  //     {
  //       id: 5,
  //       name: "Tailwind CSS",
  //       icon: <SiTailwindcss />,
  //     },
  //     {
  //       id: 6,
  //       name: "Material UI",
  //       icon: <SiMui />,
  //     },
  //   ],
  //   image: "/assets/work/thumb2.png",
  //   live: "",
  //   github: "",
  // },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xh:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] g-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.nums}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-a;; duration-500 capitalize">
                {project.category} Project
              </h2>
              <div className="text-white/60 gap-y-2">
                <ul className="list-disc">
                  {project.description.map((item) => (
                    <li key={item} className="text-white/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="flex flex-wrap gap-4 mt-4">
                {project.stack.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-1 text-accent"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/20 my-3 py-3">
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
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
                  <Link href={project.github}>
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
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide key={project.id}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
