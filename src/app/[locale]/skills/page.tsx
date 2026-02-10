"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiFramer,
  SiRedux,
  SiReacthookform,
  SiFormik,
  SiGit,
  SiVercel,
  SiSupabase,
  SiPostman,
  SiFigma,
} from "react-icons/si";

export default function Skills() {
  const t = useTranslations("Skills");

  const skills = [
    {
      title: t("categories.fundamentals"),
      items: [
        { name: t("items.html5"), icon: <SiHtml5 /> },
        { name: t("items.css3"), icon: <SiCss3 /> },
        { name: t("items.javascript"), icon: <SiJavascript /> },
        { name: t("items.typescript"), icon: <SiTypescript /> },
      ],
    },
    {
      title: t("categories.frameworks"),
      items: [
        { name: t("items.react"), icon: <SiReact /> },
        { name: t("items.nextjs"), icon: <SiNextdotjs /> },
      ],
    },
    {
      title: t("categories.styling"),
      items: [
        { name: t("items.tailwind"), icon: <SiTailwindcss /> },
        { name: t("items.bootstrap"), icon: <SiBootstrap /> },
        { name: t("items.scss"), icon: null },
        { name: t("items.mui"), icon: <SiMui /> },
        { name: t("items.framer"), icon: <SiFramer /> },
      ],
    },
    {
      title: t("categories.state"),
      items: [
        { name: t("items.redux"), icon: <SiRedux /> },
        { name: t("items.context"), icon: null },
        { name: t("items.reactQuery"), icon: null },
        { name: t("items.zustand"), icon: null },
      ],
    },
    {
      title: t("categories.forms"),
      items: [
        { name: t("items.reactHookForm"), icon: <SiReacthookform /> },
        { name: t("items.formik"), icon: <SiFormik /> },
        { name: t("items.yup"), icon: null },
      ],
    },
    {
      title: t("categories.tools"),
      items: [
        { name: t("items.git"), icon: <SiGit /> },
        { name: t("items.vercel"), icon: <SiVercel /> },
        { name: t("items.supabase"), icon: <SiSupabase /> },
        { name: t("items.restApi"), icon: null },
        { name: t("items.figma"), icon: <SiFigma /> },
        { name: t("items.postman"), icon: <SiPostman /> },
      ],
    },
  ];


  // px-4 sm:px-6 md:px-12 lg:px-24 

  return (
    <section
      id="skills"
      // className="px-4 sm:px-6 md:px-12 lg:px-24 pt-6 md:pt-10 pb-16 bg-white dark:bg-[#0B1220]"
      className=" px-4.5 sm:px-6 md:px-12 lg:px-17.5 pt-10 md:pt-19 pb-13 bg-white dark:bg-[#0B1220]"
      

    >
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
        <div className="mt-4 h-1.5 w-48 md:w-56 mx-auto rounded-full bg-linear-to-r from-blue-600 to-purple-600 dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]" />
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-0.5">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white border border-gray-200 dark:bg-[#0F172A] dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 cursor-default">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded-full 
                  bg-blue-600 text-white font-semibold
                   dark:bg-[#2b384d] dark:text-[#d5d3dd]
                  hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {item.icon && <span className="text-base">{item.icon}</span>}
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}