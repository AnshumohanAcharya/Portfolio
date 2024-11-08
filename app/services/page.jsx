"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    id: 1,
    num: "01",
    title: "Web Development",
    description: [
      "Skilled in frontend (HTML/CSS/JavaScript) and backend (Node.js/Express.js/MongoDB) technologies.",
      "Proficient in frameworks like React.js , Next.js",
      "Experienced in cloud deployment (AWS/Azure/GCP) and database management.",
      "Have worked on various types of architectures like monolithic, microservices, and serverless.",
    ],
    href: "/projects",
  },
  {
    id: 2,
    num: "02",
    title: "DevOps",
    description: [
      "Expertise in automation (Docker/Kubernetes/Terraform) for infrastructure and deployment.",
      "Proficient in CI/CD setup (Jenkins/GitLab CI) and monitoring (Prometheus/Grafana).",
      "Skilled in cloud services management and security practices.",
      "Experienced in setting up and maintaining production-grade systems.",
    ],
    href: "/projects",
  },
  {
    id: 3,
    num: "03",
    title: "Machine Learning",
    description: [
      "Strong in ML fundamentals, data preprocessing, and model evaluation.",
      "Experienced in scikit-learn, TensorFlow, and PyTorch for model development.",
      "Capable of building recommendation systems, predictive models, and NLP applications.",
    ],
    href: "/projects",
  },
  {
    id: 4,
    num: "04",
    title: "Deep Learning",
    description: [
      "Advanced knowledge in neural network architectures.",
      "Proficient in deep learning frameworks like TensorFlow and PyTorch.",
      "Experienced in computer vision and NLP tasks.",
    ],
    href: "/projects",
  },
];

import { motion } from "framer-motion";

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
                className="flex flex-col justify-center flex-1 gap-6 group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="mt-2 text-white/60 dark:text-gray-300">
                  {service.description.map((desc) => {
                    return (
                      <span key={desc.id} className="block">
                        {desc}
                      </span>
                    );
                  })}
                </p>
                {/* <div className="w-full border-b border-white/20">
                  <Image
                    src="public\next.svg"
                    alt={service.title}
                    className="object-cover w-full h-full"
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
