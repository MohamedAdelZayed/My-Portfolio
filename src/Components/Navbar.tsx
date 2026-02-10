"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/routing"; 
import { useLocale, useTranslations } from "next-intl";
import { IoMoonOutline} from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { HiOutlineGlobeAlt } from "react-icons/hi";

export default function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: t("home"), id: "home" },
    { name: t("about"), id: "about" },
    { name: t("skills"), id: "skills" },
    { name: t("projects"), id: "projects" },
    { name: t("contact"), id: "contact" },
  ];

  // const toggleLanguage = () => {
  //   const nextLocale = locale === "en" ? "ar" : "en";
  //   const currentHash = window.location.hash.replace("#", "") || "home";

  //   localStorage.setItem("pendingSection", currentHash);

  //   router.replace(
  //     {
  //       pathname,
  //       hash: currentHash !== "home" ? currentHash : undefined 
  //     },
  //     { locale: nextLocale, scroll: false }
  //   );
    
  // };



const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    const currentHash = window.location.hash.replace("#", "") || "home";

    localStorage.setItem("pendingSection", currentHash);

    router.replace(
      { pathname }, 
      { locale: nextLocale, scroll: false }
    );

    // إذا أردت التأكد من بقاء الـ hash في الـ URL فوراً
    if (currentHash !== "home") {
      window.location.hash = currentHash;
    }
  };













  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
            localStorage.setItem("activeSection", link.id);
            if (window.location.hash !== `#${link.id}`) {
              history.replaceState(null, "", `#${link.id}`);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);


  // Dark Mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);



  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));
    const top = section.offsetTop - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
    localStorage.setItem("activeSection", id);
    setMenuOpen(false);
  }
};


  useEffect(() => {
    const pendingSection = localStorage.getItem("pendingSection");
    const hash = window.location.hash.replace("#", "");
    const targetSection = pendingSection || hash || "home";

    if (targetSection && targetSection !== "home") {
      setActiveSection(targetSection);
      
      let attempts = 0;
      const maxAttempts = 20;

      const tryScroll = () => {
        const section = document.getElementById(targetSection);
        
        if (section) {
          const top = section.offsetTop - 7;
          window.scrollTo({ top, behavior: "instant" });
          localStorage.removeItem("pendingSection");
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 150);
        } else {
          localStorage.removeItem("pendingSection");
        }
      };

      setTimeout(tryScroll, 300);
    } else {
      localStorage.removeItem("pendingSection");
      setActiveSection("home");
    }
  }, [locale]);


  
  // useEffect(() => {
  //   const hash = window.location.hash.replace("#", "");
  //   const savedSection = localStorage.getItem("activeSection");
    
  //   if (hash) {
  //     setActiveSection(hash);
  //   } else if (savedSection) {
  //     setActiveSection(savedSection);
  //   }
  // }, []);






  /////////////////////////////////

  useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  const savedSection = localStorage.getItem("activeSection");
  
  // إذا كان المستخدم في أعلى الصفحة تماماً، اجعل الهوم هو النشط دائماً
  if (window.scrollY < 100 && !hash) {
    setActiveSection("home");
    localStorage.setItem("activeSection", "home");
  } 
  else if (hash) {
    setActiveSection(hash);
  } 
  else if (savedSection) {
    setActiveSection(savedSection);
  }
}, []);





  /////////////////////////////////////



  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "") || "home";
      setActiveSection(id);
      localStorage.setItem("activeSection", id);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (

    <nav className="fixed  top-0 z-50 w-full bg-white/70 dark:bg-[#111827]/95 backdrop-blur-md border-b border-gray-300/50 dark:border-gray-800/50 transition-colors duration-300">
  <div className="mx-auto max-w-7xl flex items-center justify-between pl-2.5 pr-1 sm:px-6 md:px-5 lg:px-0 py-3">

    {/* Logo */}
    <button 
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
        localStorage.setItem("activeSection", "home");
        history.replaceState(null, "", window.location.pathname);
      }} 
      className="flex items-center cursor-pointer group shrink-0"
    >
      <span className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-2 rtl:ml-2 text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
        MA
      </span>
      <div className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
        Mohamed Adel
      </div>
    </button>

    {/* Desktop Links */}
    <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className={`group relative text-base lg:text-lg font-medium transition-colors duration-200 cursor-pointer ${
            activeSection === link.id 
              ? "text-blue-600 dark:text-blue-400" 
              : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300"
          }`}
        >
          {link.name}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
              activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </button>
      ))}
    </div>

    {/* Right Controls */}
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">

      {/* Language Switcher */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-1.5 p-2 rounded-xl cursor-pointer bg-gray-200/20 dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-200/50 dark:hover:bg-gray-800 transition-all text-gray-700 dark:text-gray-200 border border-gray-200 hover:border-gray-300 dark:hover:border-gray-700"
        title={locale === "en" ? "العربية" : "English"}
      >
        <HiOutlineGlobeAlt size={18} className="text-blue-600 dark:text-blue-400 " />
        <span className="text-xs font-bold uppercase w-4">
          {locale === "en" ? "AR" : "EN"}
        </span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2.5 rounded-xl cursor-pointer bg-gray-200/20 hover:bg-gray-200/50 dark:bg-gray-800 dark:border-gray-600 text-blue-600 dark:text-yellow-400 border border-gray-200 hover:border-gray-300 dark:hover:border-gray-700  ring-blue-500/50 transition-all"
        aria-label="Toggle Theme"
      >
        {darkMode ? <FiSun size={18} /> : <IoMoonOutline size={18} />}
      </button>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
      >
        {menuOpen ? <IoMdClose size={26} /> : <RiMenu3Fill size={26} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div

    className={`md:hidden absolute top-16.25 right-6 sm:right-6 mt-3 w-80 max-w-xs
bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-xl shadow-2xl rounded-2xl
border border-gray-200 dark:border-gray-800
origin-top-right
transition-all duration-300 
ease-in-out
${menuOpen
  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto  shadow-2xl ring-1 ring-black/5 dark:ring-white/5"
  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
}`}

  >
    <div className={`flex flex-col px-6 py-4 gap-4 ${locale === "ar" ? "items-start" : "text-left"} `}>
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className={`text-lg font-semibold transition-all text-left cursor-pointer ${
            activeSection === link.id 
              ? "text-blue-600 " 
              : "text-gray-600 dark:text-gray-300"
          }`}
        >
          {link.name}
        </button>
      ))}
    </div>
  </div>
</nav>





  );
}