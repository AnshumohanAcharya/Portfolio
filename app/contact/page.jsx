"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 321 654 9876",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Code Corner, tech Town 123456",
  },
];

import { motion } from "framer-motion";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form
              action={async (formData) => {
                const { error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("Email sent successfully!");
              }}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                cumque quidem cupiditate minima ea. Vel illum, dolorum sed autem
                nesciunt itaque obcaecati quia nam sint esse voluptatum
                distinctio sapiente blanditiis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  name="firstname"
                  required
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  name="lastname"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="senderEmail"
                  required
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phoneno"
                  required
                />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" name="service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup label="Services">
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="devops">Devops</SelectItem>
                    <SelectItem value="ml">Machine Learning</SelectItem>
                    <SelectItem value="dl">Deep Learning</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              <SubmitBtn />
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => {
                return (
                  <li key={item.id} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
