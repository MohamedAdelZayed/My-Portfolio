

"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import { useTranslations } from "next-intl";


type projectType = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  github: string;
};

export default function Projects() {
  const t = useTranslations("Projects");

  const projects: projectType[] = [
    {
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      technologies: ["Next.js", "React 19", "Tailwind CSS 4", "Swiper", "Framer Motion", "Axios"],
      image: "/images/moviesAppp.png",
      liveDemo: "https://movies-app-bice-pi.vercel.app/",
      github: "https://github.com/MohamedAdelZayed/Movies-App..git",
    },
    {
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      technologies: ["React", "Tailwind CSS", "React Query", "Formik", "Yup", "Axios", "react-toastify", "react-slick"],
      image: "/images/freshCart.png",
      liveDemo: "https://fresh-cart-one-ruby.vercel.app/",
      github: "https://github.com/MohamedAdelZayed/Fresh-Cart.git",
    },
    {
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      technologies: ["React", "Tailwind CSS", "Clerk", "Framer Motion", "react-toastify"],
      image: "/images/hotelBooking.png",
      liveDemo: "https://hotel-booking-app-lake-eight.vercel.app/",
      github: "https://github.com/MohamedAdelZayed/Hotel-Booking-App.git",
    },
    {
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      technologies: ["React", "Tailwind CSS", "i18next", "Framer Motion", "react-slick"],
      image: "/images/real-estate.jpg",
      liveDemo: "https://real-estate-murex-eight-99.vercel.app/",
      github: "https://github.com/MohamedAdelZayed/Real-Estate.git",
    },
    {
      title: t("projects.4.title"),
      description: t("projects.4.description"),
      technologies: ["HTML5", "CSS", "JavaScript (ES6)", "WeatherAPI", "Browser Geolocation API"],
      image: "/images/weather_app.png",
      liveDemo: "https://weather-app-two-mu-16.vercel.app/",
      github: "https://github.com/MohamedAdelZayed/weather-App.git",
    },
  ];

  return (
    <section
      id="projects"
      // className="px-4 sm:px-6 md:px-12 lg:px-20 pt-6 md:pt-10 pb-16 bg-gray-50 dark:bg-[#0B1220]"
            className="px-4.5 sm:px-6 md:px-12 lg:px-17.5 pt-10 md:pt-19 pb-13 bg-white dark:bg-[#0B1220] scroll-mt-2!"

>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          {t("title")}
        </h2>
        <div className="mt-4 h-1.5 w-40 md:w-48 mx-auto rounded-full bg-linear-to-r from-blue-600 to-purple-600 dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-0.5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              rotateX: 1.5,
              rotateY: -1.5,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              group
              bg-white/90 backdrop-blur-sm dark:bg-[#202632]
              rounded-lg overflow-hidden
              shadow-xl border border-gray-300/80 dark:border-[#3c3f51]
              transition-shadow duration-300
              hover:shadow-2xl
            "
          >
            {/* Project Image */}
            {/* <div className="relative h-48 w-full overflow-hidden"> */}
              <a
  href={project.liveDemo}
  target="_blank"
  rel="noopener noreferrer"
  className="relative h-48 w-full overflow-hidden block cursor-pointer"
>


              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="
                  object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-102
                  group-hover:-translate-y-2 group-hover:brightness-110
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-linear-to-t
                  opacity-40
                  group-hover:opacity-70
                  transition-opacity duration-500
                "
              />

              <div
                className="
                  absolute inset-0
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-1000
                  bg-linear-to-r
                  from-transparent via-white/20 to-transparent
                  pointer-events-none
                "
              />

            </a>

            {/* Project Content */}
            <div className="px-4 pt-4 pb-4">
              
              <div className="flex items-center justify-between mb-3">
            
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <AiOutlineCalendar size={14} className="mr-1" />
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="
                      px-2.5 py-1 rounded-full text-xs font-medium
                      bg-blue-700 text-white
                      dark:bg-[#3c3f51] dark:text-[#c0b8da]
                      hover:scale-110 transition-transform duration-200
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>


              {/* Links */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center px-3 py-2.5
                bg-blue-600 text-white
                rounded-lg hover:bg-blue-700
                transition-all duration-300
                text-xs sm:text-sm font-bold
                shadow-sm hover:shadow-md
              "
            >
              <FaExternalLinkAlt size={14} className="mr-2 rtl:mr-0 rtl:ml-2" />
              {t("liveDemo")}
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center px-3 py-2.5
                border border-gray-300 dark:border-[#3c404e]
                text-gray-700 dark:text-[#c0b8da]
                rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2e3d]
                transition-all duration-300
                text-xs sm:text-sm font-bold
              "
            >
              <FaGithub size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
              {t("code")}
            </a>
          </div>



            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}












/////////////////////////////////////////







// "use client";
// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { AiOutlineCalendar } from "react-icons/ai";
// import Image from "next/image";


// type projectType = {
//   title: string;
//   description: string;
//   technologies: string[];
//   image: string;
//   liveDemo: string;
//   github: string;
// };


// const projects : projectType[] = [
//  {
//   title: "Movies Stream App",
//   description: "An immersive cinematic platform providing movies and TV series, real-time search, advanced filtering, pagination, detailed profiles with trailers,cast, dynamic sliders, smooth animations, and optimized UI.",
//   technologies: ["Next.js", "React 19", "Tailwind CSS 4", "Swiper", "Framer Motion","Axios"],
//   image: "/images/moviesAppp.png",
//   liveDemo: "https://movies-app-five-sigma-12.vercel.app/",  
//   github: "https://github.com/MohamedAdelZayed/Movies-App.git", 
// },
// {
//   title: "Fresh Cart — E-Commerce",
//   description: "A modern e-commerce app feautring secure authentication, products, categories, brands pages, advanced cart, wishlist management, real-time updates, pagination, and checkout with payment.",
//   technologies: ["React", "Tailwind CSS", "React Query", "Formik", "Yup" ,"Axios","react-toastify","react-slick"],
//   image: "/images/freshCart.png",
//   liveDemo: "https://fresh-cart-one-ruby.vercel.app/",
//   github: "https://github.com/MohamedAdelZayed/Fresh-Cart.git",
// },
// {
//   title: "Hotel Booking Web App",
//   description: "A responsive hotel booking web app with advanced search and filtering, interactive dashboard, secure authentication, real-time availability,efficient and  comprehensive reservation management.",
//   technologies: ["React", "Tailwind CSS", "Clerk", "Framer Motion","react-toastify"],
//   image: "/images/hotelBooking.png", 
//   liveDemo: "https://hotel-booking-app-lake-eight.vercel.app/",
//   github: "https://github.com/MohamedAdelZayed/Hotel-Booking-App.git",
// },


//   {
//     title: "Real Estate Website",
//     description: "Multi-language real estate platform with dynamic listings, responsive design, and interactive ui. Featuring search, filtering and smooth animations.",
//     technologies: ["React", "Tailwind CSS", "i18next", "Framer Motion","react-slick"],
//     image: "/images/real-estate.jpg", 
//     liveDemo: "https://real-estate-murex-eight-99.vercel.app/",  
//     github: "https://github.com/MohamedAdelZayed/Real-Estate.git", 
//   },
//   {
//     title: "Weather App",
//     description:"Modern weather application providing real-time weather data, location-based forecasts, and dynamic UI updates with a clean and responsive design.",
//     technologies: ["HTML5", "CSS", "JavaScript (ES6)", "WeatherAPI","Browser Geolocation API"],
//     image: "/images/weather_app.png", 
//     liveDemo: "https://weather-app-two-mu-16.vercel.app/", 
//     github: "https://github.com/MohamedAdelZayed/weather-App.git", 
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       // className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0B1220]"
//       className="px-4 sm:px-6 md:px-12 lg:px-24 pt-6 md:pt-10 pb-16 bg-gray-50 dark:bg-[#0B1220]"

//     >
//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-8 sm:mb-16"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
//           Featured Projects
//         </h2>
//         <div className="mt-4 h-1.5 w-40 md:w-48 mx-auto rounded-full bg-linear-to-r from-blue-600 to-purple-600 dark:from-[#A78BFA] dark:via-[#8B5CF6] dark:to-[#6D28D9]" />
//       </motion.div>

//       {/* Projects Grid */}
//       <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {projects.map((project, index) => (

//           <motion.div
//   key={index}
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   whileHover={{
//     y: -6,
//     rotateX: 1.5,
//     rotateY: -1.5,
//   }}
//   transition={{
//     duration: 0.5,
//     ease: "easeOut",
//     delay: index * 0.1,
//   }}
//   style={{
//     transformStyle: "preserve-3d",
//   }}
//   className="
//     group
//     bg-white/90 backdrop-blur-sm dark:bg-[#202632]
//     rounded-lg overflow-hidden
//     shadow-xl border border-gray-300/80 dark:border-[#3c3f51]
//     transition-shadow duration-300
//     hover:shadow-2xl
//   "
// >

//   {/* Project Image */}
//   <div className="relative h-48 w-full overflow-hidden">
//     {/* IMAGE */}
//     <Image
//       src={project.image}
//       alt={project.title}
//       fill
//       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       className="
//         object-cover
//         transition-transform duration-700 ease-out
//         group-hover:scale-102
//         group-hover:-translate-y-2
//       "
//     />

//     {/* CINEMATIC GRADIENT OVERLAY */}
//     <div
//       className="
//         absolute inset-0
//         bg-gradient-to-t
//         opacity-40
//         group-hover:opacity-70
//         transition-opacity duration-500
//       "
//     />

//     {/* LIGHT SWEEP EFFECT */}
//     <div
//       className="
//         absolute inset-0
//         -translate-x-full
//         group-hover:translate-x-full
//         transition-transform duration-1000
//         bg-gradient-to-r
//         from-transparent via-white/20 to-transparent
//         pointer-events-none
//       "
//     />
//   </div>

//   {/* Project Content */}
//   <div className="px-4 pt-4 pb-4 bg-red500">
//     <div className="flex items-center justify-between mb-3">
//       <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
//         {project.title}
//       </h3>

//       <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//         <AiOutlineCalendar size={14} className="mr-1" />
//       </div>
//     </div>

//     <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
//       {project.description}
//     </p>

//     {/* Technologies */}
//     <div className="flex flex-wrap gap-2.5 mb-6">
//       {project.technologies.map((tech, techIndex) => (
//         <span
//           key={techIndex}
//           className="
//             px-3 py-1 rounded-full text-xs font-medium
//             bg-blue-700 text-white
//             dark:bg-[#3c3f51] dark:text-[#c0b8da]
//             hover:scale-110 transition-transform duration-200
//           "
//         >
//           {tech}
//         </span>
//       ))}
//     </div>

//     {/* Links */}
//     <div className="flex space-x-3">
//       <a
//         href={project.liveDemo}
//         target="_blank"
//         className="
//           flex items-center px-4 py-2
//           bg-blue-600 text-white
//           rounded-lg
//           hover:bg-blue-700
//           transition-colors duration-200
//           text-sm font-medium
//         "
//       >
//         <FaExternalLinkAlt size={16} className="mr-2" />
//         Live Demo
//       </a>

//       <a
//         href={project.github}
//         target="_blank"
//         className="
//           flex items-center px-4 py-2
//           border border-gray-300 dark:border-[#3c404e]
//           text-gray-700 dark:text-[#c0b8da]
//           rounded-lg
//           hover:bg-gray-100 dark:hover:bg-[#2a2e3d]
//           transition-colors duration-200
//           text-sm font-medium
//         "
//       >
//         <FaGithub size={16} className="mr-2" />
//         Code
//       </a>
//     </div>
//   </div>
// </motion.div>



//         ))}
//       </div>
//     </section>
//   );
// }
