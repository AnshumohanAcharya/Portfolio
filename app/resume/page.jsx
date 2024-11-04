"use client";

import {
  FaAws,
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { DiPostgresql } from "react-icons/di";
import {
  SiDjango,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGooglecloud,
  SiMicrosoftazure,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
const about = {
  title: "About Me",
  description:
    "I am a full-stack developer with a passion for creating beautiful and functional web applications. I am always eager to learn new things and take on new challenges.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anshumohan Acharya",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 863-972-9337",
    },
    {
      fieldName: "Email",
      fieldValue: "anshumohanacharya19@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },

    {
      fieldName: "Github Profile",
      fieldValue: "https://github.com/AnshumohanAcharya",
    },
    {
      fieldName: "Linkedin Profile",
      fieldValue: "https://www.linkedin.com/in/anshumohan-acharya-b95628238/",
    },
    {
      fieldName: "Leetcode Profile",
      fieldValue: "https://leetcode.com/u/AnshumohanAcharya/",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Hindi , Odia , Bengali , Telugu",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  items: [
    {
      id: 3,
      position: "SDE Intern",
      company: "NxtJob.ai",
      duration: "August 2024 - September 2024",
      description: [
        "Contributed to the development of an ERP portal aimed at improving job search capabilities, increasing job matching accuracy by 35% and interview call rates by 50%.",
        "Engineered intuitive resume-building features and integrated advanced search and filtering functionalities.",
        "Boosted job search efficiency by 40% for over 200 users and enhancing overall user experience."
      ],
    },
    {
      id: 2,
      position: "SDE Intern",
      company: "Zenstreet.ai",
      duration: "June 2024 - August 2024",
      description: [
        "Designed and developed a comprehensive Clinic Management platform that streamlined appointment booking for over 500 patients and enabled effective tracking of 1,000+ medical records.",
        "Implemented real-time doctor availability and appointment scheduling features.",
        "Optimized clinic workflows and enhancing patient engagement, resulting in a reduction in appointment scheduling time."
      ],
    },
    {
      id: 1,
      position: "Full Stack Developer Intern",
      company: "Lanoviz Solutions",
      duration: "December 2023 - January 2024",
      description: [
        "Developed a web application for a client using React, Node.js, and MongoDB.",
        "Implemented a RESTful API for the application using Express.js.",
        "Developed a CI/CD pipeline for the application using Jenkins and Docker.",
      ],
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      id: 1,
      degree: "BTech in Computer Science with Specialization in Cybersecurity",
      school: "Indian Institute of Information Technology Kottayam",
      duration: "2022 - 2026",
      description: ["CGPA: 9.24/10"],
    },
    {
      id: 2,
      degree: "Higher Secondary",
      school: "Tribeni Tissues Vidyapith",
      duration: "2020 - 2022",
      description: ["Percentage: 94.75%"],
    },
    {
      id: 3,
      degree: "Secondary",
      school: "Tribeni Tissues Vidyapith",
      duration: "2018-2020",
      description: ["Percentage: 98%"],
    },
  ],
};

const skills = {
  title: "My Skills",
  items: [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3 />,
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "PostgreSQL",
          icon: <DiPostgresql />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
        },
        {
          name: "Django",
          icon: <SiDjango />,
        },
        {
          name: "Flask",
          icon: <SiFlask />,
        },
        {
          name: "Hono.js",

        }
      ],
    },
    {
      category: "DevOps",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker />,
        },
        {
          name: "AWS",
          icon: <FaAws />,
        },
        {
          name: "Google Cloud",
          icon: <SiGooglecloud />,
        },
        {
          name: "Microsoft Azure",
          icon: <SiMicrosoftazure />,
        },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        {
          name: "C++",
          icon: <TbBrandCpp />,
        },
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "Python",
          icon: <FaPython />,
        },
      ],
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  <ScrollArea className="h-[400px]">
                    {/* For more experiences => lg:grid-cols-2 */}
                    <ul className="grid grid-cols-1 gap-[30px]">
                      {experience.items.map((item) => {
                        return (
                          <li
                            key={item.id}
                            className="flex flex-col gap-1 bg-[#232329] h-full py-6 px-10 rounded-xl items-center lg:items-start"
                          >
                            {/* For more experiences => text-center lg:text-left */}
                            <h4 className="text-xl text-accent max-w-full min-h-[40px] text-left font-bold">
                              {item.position}
                            </h4>
                            <p className="text-accent">{item.company}</p>
                            <p className="text-accent">{item.duration}</p>
                            <ul className="list-disc list-inside text-white/60">
                              {item.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                              ))}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item) => {
                        return (
                          <li
                            key={item.id}
                            className="flex flex-col gap-1 bg-[#232329] h-full py-6 px-10 rounded-xl items-center lg:items-start"
                          >
                            <h4 className="text-xl text-accent max-w-full min-h-[40px] text-center lg:text-left font-bold">
                              {item.degree}
                            </h4>
                            <p className="text-accent">{item.school}</p>
                            <p className="text-accent">{item.duration}</p>
                            <ul className="list-disc list-inside text-white/60">
                              {item.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                              ))}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="text-4xl font-bold">{skills.title}</div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {skills.items.map((category) => {
                    return (
                      <div
                        key={category.category}
                        className="flex flex-col gap-4"
                      >
                        <div className="text-xl font-bold">
                          {category.category}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {category.skills.map((skill) => {
                            return (
                              <div
                                key={skill.name}
                                className="flex items-center gap-2 text-accent"
                              >
                                {skill.icon}
                                <span>{skill.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="text-left list-disc list-inside text-white/60">
                  {about.info.map((info) => (
                    <li key={info.fieldName}>
                      <span className="text-accent">{info.fieldName}: </span>
                      {info.fieldValue}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
