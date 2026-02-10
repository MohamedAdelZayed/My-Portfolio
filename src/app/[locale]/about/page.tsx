
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  FaCode,
  FaHeart,
  FaPalette,
  FaBolt,
  FaGraduationCap,
} from "react-icons/fa";

export default function About() {
  const t = useTranslations("About"); 

  const points = [
    t("point1"),
    t("point2"),
    t("point3"),
    t("point4"),
    t("point5"),
    t("point6"),
    t("point7"),
  ];

  const skillIcons = [
    { icon: <FaCode size={28} />, label: t("cleanCode") },
    { icon: <FaPalette size={28} />, label: t("beautifulDesign") },
    { icon: <FaBolt size={28} />, label: t("performance") },
    { icon: <FaHeart size={28} />, label: t("greatUX") },
  ];

        // px-4 sm:px-6 md:px-12 lg:px-24  

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-centr
      px-4.5 sm:px-6 md:px-12 lg:px-17.5
      pt-10 md:pt-19 pb-13
      bg-white dark:bg-[#0B1220] overflow-hidden "
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-13"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          {t("title")}
        </h2>
        <div
          className="mt-4 h-1.5 w-28 md:w-36 mx-auto rounded-full
          bg-linear-to-r from-blue-600 to-purple-600 
          dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]"
        />
      </motion.div>

      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full max-w6xl mxau ">
      
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-9 h-full"
        >
          <div className="space-y-6 text-center md:text-start">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-full lg:max-w-xl">
              {t("description1")}
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-full lg:max-w-lg">
              {t("description2")}
            </p>
          </div>


          {/* Skills Icons */}
          <div className=" px-1 sm:px-0 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-1 lg:pt-0 w-full mx-auto md:mx-0">
          
            {skillIcons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                className="flex items-center gap-4 py-2 sm:py-3 px-2 bg-gray-100 dark:bg-[#1B1F2A] rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                  // className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-100 dark:bg-[#1B1F2A] rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"

             >
                <div className="p-3 rounded-full bg-[#8B5CF6]/20 dark:bg-[#A78BFA]/20">
                  <span className="text-blue-600 dark:text-[#A78BFA]">
                    {item.icon}
                  </span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col h-full  px-0.5 "
        >
          <div className="p-5 sm:p-6 bg-gray-100 dark:bg-[#1B1F2A] rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap
                className="text-blue-600 dark:text-[#A78BFA]"
                size={24}
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                {t("educationTitle")}
              </h3>
            </div>

            <p className="text-gray-800 dark:text-gray-200 font-medium text-base md:text-lg mb-1">
              {t("degree")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-1">
              {t("university")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {t("years")}
            </p>
          </div>

          <motion.div
            className="mt-6 p-5 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t("thinkTitle")}
            </h4>

            <motion.ul className="space-y-3 text-sm sm:text-base">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-[#A78BFA] shrink-0" />
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
}

