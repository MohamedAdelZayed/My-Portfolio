"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane, FaSpinner } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations("Contact");

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    try {
      await emailjs.send(
        "service_chkrwqo",
        "template_ticmmha",
        {
          user_name: data.user_name,
          user_email: data.user_email,
          message: data.message,
        },
        "GR59G7VBVRuTeENWo"
      );
      toast.success(t("successToast"));
      reset();
    } catch (error) {
      toast.error(t("errorToast"));
    }
  }

  return (
    <section
      id="contact"
      // className="px-4 sm:px-6 md:px-12 lg:px-24 pt-6 md:pt-10 pb-16 bg-gray-50 dark:bg-[#0B1220] overflow-hidden"
      className="px-4 sm:px-6 md:px-12 lg:px-24 pt-10 md:pt-19 pb-16 bg-gray-50 dark:bg-[#0B1220] overflow-hidden"

    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
          {t("title")}
        </h2>
        <div className="mt-4 h-1.5 w-32 md:w-48 mx-auto rounded-full bg-linear-to-r from-blue-600 to-purple-600 dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-100 dark:bg-[#0F172A] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {t("formTitle")}
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-serif dark:text-gray-300 mb-2">
                {t("nameLabel")}
              </label>
              <input
                type="text"
                {...register("user_name", { required: t("nameLabel") + " " + "is required" })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.user_name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white dark:bg-[#1e293b] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition`}
                placeholder={t("namePlaceholder")}
              />
              {errors.user_name && (
                <p className="text-red-500 mt-1 text-sm">{errors.user_name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-serif mb-2 dark:text-gray-300">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                {...register("user_email", {
                  required: t("emailLabel") + " " + "is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.user_email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white dark:bg-[#1e293b] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition`}
                placeholder={t("emailPlaceholder")}
              />
              {errors.user_email && (
                <p className="text-red-500 mt-1 text-sm">{errors.user_email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-serif dark:text-gray-300 mb-2">
                {t("messageLabel")}
              </label>
              <textarea
                rows={5}
                {...register("message", { required: t("messageLabel") + " " + "is required" })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700 "
                } bg-white dark:bg-[#1e293b] dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none`}
                placeholder={t("messagePlaceholder")}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
              {isSubmitting ? t("sending") : t("sendButton")}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("contactTitle")}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t("contactText")}
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href={`mailto:${t("email")}`}
              className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#A78BFA] hover:scale-105 hover:shadow-md transition-all duration-300 p-4 rounded-xl bg-gray-100 dark:bg-[#1e293b] hover:bg-purple-50 dark:hover:bg-[#111827]"
            >
              <HiOutlineMail className="text-blue-600" size={24} />
                zayd0497@gmail.com
            </Link>

            <Link
              href={`tel:${t("phone")}`}
              className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#A78BFA] hover:scale-105 hover:shadow-md transition-all duration-300 p-4 rounded-xl bg-gray-100 dark:bg-[#1e293b] hover:bg-purple-50 dark:hover:bg-[#111827]"
            >
              <HiOutlinePhone className="text-green-600" size={24} />
              {t("phone")}
                {/* +20 1227245823 */}
            </Link>

            <div className="flex items-center gap-4 text-lg text-gray-700 dark:text-gray-300 p-4 rounded-xl bg-gray-100 dark:bg-[#1e293b] hover:bg-purple-50 dark:hover:bg-[#111827] hover:shadow-md transition-all duration-300">
              <HiOutlineLocationMarker className="text-purple-600" size={24} />
              {t("location")}
              
            </div>
          </div>

          <div className="pt-5 flex items-center gap-4 pl-2">
            <span className="text-gray-700 dark:text-gray-300 font-bold">{t("followMe")}:</span>
            <Link
              href="https://github.com/MohamedAdelZayed"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-[#A78BFA] hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohamed-adel-308101266"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-[#A78BFA] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={32} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
