"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    id: 1,
    num: "01",
    title: "Web Development",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    id: 2,
    num: "02",
    title: "DevOps",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    id: 3,
    num: "03",
    title: "Machine Learning",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
  {
    id: 4,
    num: "04",
    title: "Deep Learning",
    description:
      "I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },
];

import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pu-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="flex-1 flex flex-col gap-6 justify-center group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60 dark:text-gray-300 mt-2">
                  {service.description}
                </p>
                {/* <div className="border-b border-white/20 w-full">
                  <Image
                    src="public\next.svg"
                    alt={service.title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div> */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
