"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl"; 

import { motion } from "framer-motion";
import { FaHandSparkles } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";


export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 pt-20 pb-16 bg-gray-50 dark:bg-[#0B1220] overflow-hidden"
    >
      {/* Left: Text Section */}
      <motion.div
        className="flex-1 flex flex-col justify-center gap-4 text-center lg:text-left rtl:lg:text-right"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Welcome Text */}
        <motion.div
          className="
            w-fit mx-auto lg:mx-0 text-center flex justify-center items-center gap-2
            px-4 py-2 mb-1 mt-2.5
            rounded-full
            bg-blue-100/70 dark:bg-purple-400/10
            text-blue-600 dark:text-blue-400
            text-sm sm:text-base md:text-lg
            font-medium
          "
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaHandSparkles className="text-lg animate-pulse" />
          <span>{t("welcome")}</span>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-bold leading-tight text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t("hi")}{" "}
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("name")}
          </span>
        </motion.h1>

        <motion.div
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="inline-block w-full md:w-110 text-center lg:text-left rtl:lg:text-right">
            <TypeAnimation
              sequence={[
                t("roles.0"),
                1200,
                t("roles.1"),
                1200,
                t("roles.2"),
                1200,
                t("roles.3"),
                1200,
              ]}
              repeat={Infinity}
              deletionSpeed={70}
              wrapper="span"
              speed={50}
              cursor={false}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <span className="ml-1 rtl:mr-1 text-blue-600 dark:text-purple-400 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl animate-blink">
              |
            </span>
          </span>
        </motion.div>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {t("description")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth"});
            }}
            className="px-6 py-3.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {t("viewWork")}
          </a>

          <a
            href="/Mohamed_Adel_FrontendCv.pdf"
            download
            className="cursor-pointer px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
          >
            {t("downloadCv")}
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="mb-3 md:mb-5 lg:mb-0 flex items-center justify-center lg:justify-start gap-6 mt-4 text-gray-700 dark:text-gray-300 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="https://github.com/MohamedAdelZayed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub className="cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-adel-308101266"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-300"
          >
            <FaLinkedin className="cursor-pointer" />
          </a>

          <a
            href="mailto:zayd0497@gmail.com"
            aria-label="Email"
            className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-300"
          >
            <IoMdMail className="cursor-pointer" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="flex-1 mt-5 lg:mt-0 md:mt-0 lg:mr-4 flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full
            bg-linear-to-r from-blue-600 via-purple-600 to-pink-600
            blur-xl opacity-60 animate-spin-slow"
          />

          <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-white dark:bg-[#0B1220] p-2">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/me.jpg"
                alt="Mohamed Adel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-600 dark:text-purple-400 text-3xl cursor-pointer"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <IoChevronDown />
      </motion.div>
    </section>
  );
}

