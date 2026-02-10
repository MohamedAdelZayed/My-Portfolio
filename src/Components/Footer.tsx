"use client"

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer"); 

  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111827] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
       
        <div className="flex gap-6">
          <Link
            href="https://github.com/MohamedAdelZayed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#A78BFA] hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={28} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mohamed-adel-308101266"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#A78BFA] hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </Link>

          <Link
            href="mailto:zayd0497@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#A78BFA] hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={28} />
          </Link>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0 text-center md:text-left">

          {/* Mobile layout */}
          <div className="flex flex-col items-center space-y-3 md:hidden">
            <div className="flex items-center">
              <span className="font-bold text-gray-900 dark:text-gray-100">
                {t("copyright", { year })}
              </span>
            </div>

            <div className="text-gray-700 dark:text-gray-300">
              {t("builtWith")} <span className="font-semibold">{t("nextJs")}</span> &{" "}
              <span className="font-semibold">{t("tailwind")}</span> 💙
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center gap-2">
            <span className="font-bold text-gray-900 dark:text-gray-100">
              {t("copyright", { year })}
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              • {t("builtWith")} <span className="font-semibold">{t("nextJs")}</span> &{" "}
              <span className="font-semibold">{t("tailwind")}</span> 💙
            </span>
          </div>

        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm cursor-pointer
                     text-gray-500 dark:text-gray-400
                     hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]
                     transition-all duration-300 mt-1.5 md:mt-0"
        >
          <span
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600
                       hover:border-[#8B5CF6] dark:hover:border-[#A78BFA]
                       transition-all duration-300"
          >
            <FaArrowUp size={14} />
          </span>
          <span className="font-medium">{t("backToTop")}</span>
        </button>

      </div>
    </footer>
  );
}
