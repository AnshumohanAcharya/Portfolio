"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin, F } from "react-icons/fa";
import Leetcode from "./Leetcode";

const socials = [
  { id: 1, icon: <FaGithub />, path: "https://github.com/AnshumohanAcharya" },
  { id: 2, icon: <FaLinkedin />, path: "https://www.linkedin.com/in/anshumohan-acharya-b95628238/" },
  { id: 3, icon: <Leetcode />, path: "https://leetcode.com/u/AnshumohanAcharya/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link key={social.id} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
