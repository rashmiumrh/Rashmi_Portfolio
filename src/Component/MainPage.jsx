import React, { useRef, useEffect, useState } from "react";
import NavBar from "./NavBar";
import portfolioImage from "../assets/portfolio.png";
import postman from "../assets/postman.png";
import swagger from "../assets/swagger.png";
import tailwind from "../assets/tailwind.png";
import react_certi from "../assets/react_certi.png";
import css_certi from "../assets/css_certi.png";

const MainPage = ({ setActiveNav, activeNav }) => {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("education");

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveNav("Home");
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveNav("About");
  };

  const scrollToPortfolio = () => {
    const headerOffset = 100;
    const elementPosition = portfolioRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setActiveNav("Portfolio");
  };

  const scrollToContact = () => {
    const headerOffset = 80;
    const elementPosition = contactRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setActiveNav("Contact");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current) {
            setIsHeroVisible(entry.isIntersecting);
            if (entry.isIntersecting) setActiveNav("Home");
          } else if (entry.target === aboutRef.current) {
            setIsAboutVisible(entry.isIntersecting);
            if (entry.isIntersecting) setActiveNav("About");
          } else if (entry.target === portfolioRef.current) {
            setIsPortfolioVisible(entry.isIntersecting);
            if (entry.isIntersecting) setActiveNav("Portfolio");
          } else if (entry.target === contactRef.current) {
            setIsContactVisible(entry.isIntersecting);
            if (entry.isIntersecting) setActiveNav("Contact");
          }
        });
      },
      { threshold: 0.3 } 
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [setActiveNav]);

  return (
    <>
      <style>
        {`
          @keyframes scaleOut {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes slideInFromBottom {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInFromRight {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-scale-out { animation: scaleOut 0.8s ease-in-out forwards; }
          .animate-slide-in-bottom { animation: slideInFromBottom 0.8s ease-in-out forwards; }
          .animate-slide-in-right { animation: slideInFromRight 0.8s ease-in-out forwards; }
          .animate-fade-in { animation: fadeIn 0.8s ease-in-out forwards; }
          .text-gradient-pink-purple {
            background: linear-gradient(to right, #be185d, #4b0082);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 2px 2px 4px rgba(75, 0, 130, 0.5);
          }
          .hero-text-shadow { text-shadow: 2px 2px 6px rgba(75, 0, 130, 0.5); }
          .button-gradient-pink-purple {
            background: linear-gradient(to right, #be185d, #4b0082);
            box-shadow: 2px 2px 8px rgba(75, 0, 130, 0.5);
            transition: all 0.3s ease;
          }
          .button-gradient-pink-purple:hover {
            background: linear-gradient(to right, #db2777, #6b21a8);
            transform: translateY(-2px);
            box-shadow: 4px 4px 12px rgba(75, 0, 130, 0.7);
          }
          .button-gradient-pink-purple:active {
            transform: translateY(0);
            box-shadow: 1px 1px 4px rgba(75, 0, 130, 0.3);
          }
          .photo-shadow {
            box-shadow: 0 0 40px 10px rgba(75, 0, 130, 0.7);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .photo-shadow:hover {
            transform: scale(1.05);
            box-shadow: 0 0 50px 15px rgba(75, 0, 130, 0.9);
          }
        `}
      </style>
      <NavBar
        scrollToHero={scrollToHero}
        scrollToAbout={scrollToAbout}
        scrollToPortfolio={scrollToPortfolio}
        scrollToContact={scrollToContact}
        activeNav={activeNav}
      />
      <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="min-h-screen flex items-center justify-center p-4"
        >
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white hero-text-shadow ${
                isHeroVisible ? "animate-scale-out" : ""
              }`}
            >
              Welcome to My
            </h1>
            <h1
              className={`text-4xl sm:text-5xl md:text-6ırlar

System: 6xl font-bold text-gradient-pink-purple ${
                isHeroVisible ? "animate-scale-out" : ""
              }`}
            >
              Portfolio Website
            </h1>
            <p
              className={`text-md sm:text-lg text-gray-300 hero-text-shadow ${
                isHeroVisible ? "animate-scale-out" : ""
              }`}
            >
              Explore my skills and projects to discover new possibilities for
              connection and growth!
            </p>
            <button
              className={`mt-6 px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                isHeroVisible ? "animate-scale-out" : ""
              }`}
              onClick={scrollToAbout}
            >
              Get Started →
            </button>
          </div>
        </div>

        {/* About Section */}
         <div
          ref={aboutRef}
          id="about"
          className={`min-h-screen flex items-center justify-center p-4 bg-gray-900 transition-opacity duration-1000 ${
            isAboutVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto w-full space-y-8 md:space-y-0 md:space-x-12">
            {/* Left Content */}
            <div className="text-left space-y-3 max-w-lg">
              <h5
                className={`text-xl -mb-5 sm:text-xl md:text-xl  font-bold text-white ${
                  isAboutVisible ? "animate-slide-in-bottom" : ""
                }`}
              >
                Meet
              </h5>
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-pink-purple ${
                  isAboutVisible ? "animate-slide-in-bottom" : ""
                }`}
              >
                Rashmi Umeshi
              </h1>
              <p
                className={`text-lg font-semibold text-gray-300 ${
                  isAboutVisible ? "animate-slide-in-bottom" : ""
                }`}
              >
                Software Engineer
              </p>
              <p
                className={`text-lg sm:text-md text-gray-300 ${
                  isAboutVisible ? "animate-slide-in-bottom" : ""
                }`}
              >
                I'm Rashmi Umesh, a dedicated Software Engineer with nearly 2
                years of experience crafting innovative, user-centric web
                applications. Specializing in React.js and Tailwind CSS, I build
                seamless, responsive, and visually stunning digital solutions.
                My passion for clean code, performance optimization, and
                intuitive design drives me to share my expertise through
                impactful projects. I'm excited to connect with others to
                explore new possibilities, whether through networking, freelance
                opportunities, or showcasing my skills. Dive into my portfolio
                and reach out to start a conversation!
              </p>
              <div className="flex space-x-3">
                <button
                  className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                    isAboutVisible ? "animate-slide-in-bottom" : ""
                  }`}
                >
                  Html / Css
                </button>
                <button
                  className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                    isAboutVisible ? "animate-slide-in-bottom" : ""
                  }`}
                >
                  Js{" "}
                </button>
                <button
                  className={`px-6 py-3 text-white text-gmbh font-semibold rounded-lg button-gradient-pink-purple ${
                    isAboutVisible ? "animate-slide-in-bottom" : ""
                  }`}
                >
                  React Js
                </button>
                <button
                  className={`px-6 py-3 text-white text-gmbh font-semibold rounded-lg button-gradient-pink-purple ${
                    isAboutVisible ? "animate-slide-in-bottom" : ""
                  }`}
                >
                  Tailwind Css
                </button>

                <button
                  className={` text-white text-gmbh font-semibold rounded-lg button- ${
                    isAboutVisible ? "animate-slide-in-bottom" : ""
                  }`}
                  onClick={scrollToPortfolio}
                >
                  →{" "}
                </button>
              </div>
            </div>
            <div>
              <img
                src={portfolioImage}
                alt="Rashmi Umesh"
                className={`w-64 h-64 md:w-96 md:h-96 rounded-full object-cover photo-shadow ${
                  isAboutVisible ? "animate-slide-in-right" : ""
                }`}
              />
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div
          ref={portfolioRef}
          id="portfolio"
          className={`min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 transition-opacity duration-1000 ${
            isPortfolioVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-pink-purple ${
                isPortfolioVisible ? "animate-scale-out" : ""
              }`}
            >
              Portfolio Showcase
            </h1>
            <p
              className={`text-md sm:text-lg text-gray-300 hero-text-shadow ${
                isPortfolioVisible ? "animate-scale-out" : ""
              }`}
            >
              Explore My Journey Through Projects, Certifications, and Technical
              Expertise. Each Section Represents a Milestone in My Continuous
              Learning Path.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                  isPortfolioVisible ? "animate-slide-in-bottom" : ""
                }`}
                onClick={() => setActiveSection("education")}
              >
                Education
              </button>
              <button
                className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                  isPortfolioVisible ? "animate-slide-in-bottom" : ""
                }`}
                onClick={() => setActiveSection("work-experience")}
              >
                Work Experience
              </button>
              <button
                className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                  isPortfolioVisible ? "animate-slide-in-bottom" : ""
                }`}
                onClick={() => setActiveSection("projects")}
              >
                Projects
              </button>
              <button
                className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                  isPortfolioVisible ? "animate-slide-in-bottom" : ""
                }`}
                onClick={() => setActiveSection("skills")}
              >
                Skills
              </button>
              <button
                className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                  isPortfolioVisible ? "animate-slide-in-bottom" : ""
                }`}
                onClick={() => setActiveSection("certifications")}
              >
                Certifications
              </button>
              <button
                className={`px-6 py-3 text-white text-lg font-semibold rounded-lg button-gradient-pink-purple ${
                  isPortfolioVisible ? "animate-slide-in-bottom" : ""
                }`}
                onClick={scrollToContact}
              >
                Contact →
              </button>
            </div>
          </div>

          {/* Dynamic Content Section */}
          <div
            className={`max-w-4xl mx-auto text-left space-y-6 ${
              isPortfolioVisible ? "animate-fade-in" : ""
            }`}
          >
            <div className="mt-6 container mx-auto">
              {activeSection === "education" && (
                <div className="space-y-4">
                  <h2
                    className={`text-3xl font-bold text-gradient-pink-purple ${
                      isPortfolioVisible ? "animate-slide-in-bottom" : ""
                    }`}
                  >
                    Education
                  </h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <p className="text-md text-gray-300">
                        <strong>Pre-University Course (PCMB)</strong>
                        <br />
                        Shree Vasavi PU College, Challakere
                        <br />
                        [2016-2018] - 72%
                      </p>
                    </div>
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <p className="text-md text-gray-300">
                        <strong>B.E. in Computer Science</strong>
                        <br />
                        MVJ College of Engineering, Bangalore
                        <br />
                        [2018-2022] - 7.18 CGPA
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="container mx-auto">
              {activeSection === "work-experience" && (
                <div className="space-y-4">
                  <h2
                    className={`text-3xl font-bold text-gradient-pink-purple ${
                      isPortfolioVisible ? "animate-slide-in-bottom" : ""
                    }`}
                  >
                    Work Experience
                  </h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <h3>Software Engineer</h3>
                      <p className="text-lg text-gray-300">
                        Novagito AI Pvt Ltd, [Bangalore, India]
                        <br />
                        Oct 2024 - Present
                        <br />
                      </p>
                      <br />
                      <p className="text-sm">
                        - Developed responsive front-end for NG360 using
                        React.js and Tailwind CSS, improving user engagement for
                        N-Cogito, N-Desk, N-IQ, and N-secure.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Integrated RESTful APIs for real-time data in
                        AI-driven customer solutions, reducing data retrieval
                        time.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Collaborated with teams to optimize workflows and
                        dynamic UI components in Agile sprints.
                      </p>
                    </div>
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <h3>Junior Software Engineer</h3>
                      <p className="text-lg text-gray-300">
                        ezAtlas Pvt Ltd, [Bangalore, India]
                        <br />
                        June 2023– June 2024
                      </p>
                      <br />
                      <p className="text-sm">
                        - Developed scalable front-end applications using
                        React.js and Redux, adhering to modern coding standards.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Maintained code quality through regular code reviews
                        and collaborative design practices.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Resolved issues rapidly to enhance the performance and
                        maintainability of applications.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Produced clean, efficient code to ensure optimal user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {activeSection === "projects" && (
              <div className="space-y-8">
                <h2
                  className={`text-3xl font-bold text-gradient-pink-purple ${
                    isPortfolioVisible ? "animate-slide-in-bottom" : ""
                  }`}
                >
                  Projects
                </h2>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-200">
                    Novagito AI Pvt Ltd, [Bangalore, India]
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <h4 className="text-xl font-bold">
                        Chatbot Product Development
                      </h4>
                      <br />
                      <p className="text-sm">
                        - Designed AI-driven chatbot interfaces with React.js,
                        boosting customer support efficiency.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Integrated front-end with backend APIs for seamless
                        functionality and streamlined deployment.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Collaborated with teams to gather requirements,
                        enhancing user interaction quality.
                      </p>
                    </div>
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <h4 className="text-xl font-bold">
                        NG360 CXaaS Platform– Novagito
                      </h4>
                      <br />
                      <p className="text-sm">
                        - Developed responsive interfaces for N-Cogito and
                        N-Desk, supporting AI-driven customer solutions.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Built analytics dashboards with React.js for real-time
                        insights in N-IQ, improving decision-making.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Streamlined workflows with support ticket views and
                        automation dashboards.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                      isPortfolioVisible ? "animate-slide-in-bottom" : ""
                    }`}
                  >
                    <h4 className="text-xl font-bold">
                      E-Commerce Management System– Sangeetha Studio
                    </h4>
                    <br />
                    <p className="text-sm">
                      - Built responsive front-end with React.js and Tailwind
                      CSS for product listings and checkout flows, enhancing
                      user navigation.
                    </p>
                    <br />
                    <p className="text-sm">
                      - Optimized performance for seamless cross-device
                      experiences, reducing bounce rates.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-200">
                    ezAtlas Pvt Ltd, [Bangalore, India]
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <h4 className="text-xl font-bold">
                        Asset Management System – Pioneer Toyota
                      </h4>
                      <br />
                      <p className="text-sm">
                        - Developed a React.js-based front-end for an Asset
                        Management System tailored for Pioneer Toyota, enabling
                        efficient tracking of company assets such as vehicle
                        tools, and machinery.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Implemented features such as asset lifecycle
                        management, real-time tracking, maintenance scheduling,
                        and alert notifications to ensure minimal downtime and
                        maximize asset utilization.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Designed the interface to be responsive and
                        user-friendly, ensuring accessibility across desktops
                        and mobile devices.
                      </p>
                    </div>
                    <div
                      className={`bg-gray-800 p-6 rounded-lg flex-1 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                        isPortfolioVisible ? "animate-slide-in-bottom" : ""
                      }`}
                    >
                      <h4 className="text-xl font-bold">
                        Distributor Management System – Melt and Mellow
                      </h4>
                      <br />
                      <p className="text-sm">
                        - Built a responsive React.js front-end for a
                        Distributor Management System, specifically designed for
                        managing the inventory and distribution of ice cream
                        products across various channels.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Streamlined operations by implementing modules for
                        inventory control, order tracking, performance
                        reporting, and distribution scheduling.
                      </p>
                      <br />
                      <p className="text-sm">
                        - Integrated alert notifications and real-time updates
                        to enhance communication between the central warehouse
                        and distributors, improving operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "skills" && (
              <div className="space-y-6 flex flex-col items-start">
                <style>
                  {`
                    .text-gradient-pink-purple {
                      background: linear-gradient(to right, #be185d, #4b0082);
                      -webkit-background-clip: text;
                      background-clip: text;
                      color: transparent;
                      text-shadow: 2px 2px 4px rgba(75, 0, 130, 0.5);
                    }
                    .shadow-gradient-pink-purple {
                      box-shadow: 0 0 6px 1px rgba(190, 24, 93, 0.4), 0 0 10px 2px rgba(75, 0, 130, 0.3);
                    }
                    .hover-shadow-gradient-pink-purple {
                      box-shadow: 0 0 10px 2px rgba(190, 24, 93, 0.7), 0 0 14px 3px rgba(75, 0, 130, 0.5);
                    }
                    .tooltip {
                      position: relative;
                    }
                    .tooltip::after {
                      content: attr(data-tooltip);
                      position: absolute;
                      bottom: 100%;
                      left: 50%;
                      transform: translateX(-50%);
                      background-color: rgba(0, 0, 0, 0.8);
                      color: white;
                      padding: 4px 8px;
                      border-radius: 4px;
                      font-size: 12px;
                      white-space: nowrap;
                      opacity: 0;
                      visibility: hidden;
                      transition: opacity 0.3s, visibility 0.3s;
                    }
                    .tooltip:hover::after {
                      opacity: 1;
                      visibility: visible;
                    }
                  `}
                </style>
                <h2
                  className={`text-4xl font-bold text-gradient-pink-purple ${
                    isPortfolioVisible ? "animate-slide-in-bottom" : ""
                  }`}
                >
                  Skills
                </h2>
                <div className="text-start">
                  <h3 className="text-2xl font-semibold text-white mb-8">
                    Front-End Development
                  </h3>
                  <div className="flex flex-wrap justify-start gap-14">
                    <div className="tooltip" data-tooltip="React.js">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                        alt="React.js Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="Redux">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                        alt="Redux Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="JavaScript">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="JavaScript Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="TypeScript">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        alt="TypeScript Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="HTML5">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                        alt="HTML5 Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="CSS3">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                        alt="CSS3 Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-start">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Styling Frameworks
                  </h3>
                  <div className="flex flex-wrap justify-start gap-14">
                    <div className="tooltip" data-tooltip="Tailwind CSS">
                      <img
                        src={tailwind}
                        alt="Tailwind CSS Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="Bootstrap">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                        alt="Bootstrap Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-start">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    API Testing/Integration
                  </h3>
                  <div className="flex flex-wrap justify-start gap-14">
                    <div className="tooltip" data-tooltip="Postman">
                      <img
                        src={postman}
                        alt="Postman Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="Swagger">
                      <img
                        src={swagger}
                        alt="Swagger Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-start">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Tools
                  </h3>
                  <div className="flex flex-wrap justify-start gap-14">
                    <div className="tooltip" data-tooltip="Git">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                        alt="Git Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="GitLab">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg"
                        alt="GitLab Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="Azure DevOps">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
                        alt="Azure DevOps Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                    <div className="tooltip" data-tooltip="Visual Studio Code">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
                        alt="Visual Studio Code Logo"
                        className="w-16 h-16 rounded-2xl border-2 border-white shadow-gradient-pink-purple object-contain hover:scale-110 hover-shadow-gradient-pink-purple transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "certifications" && (
              <div className="text-start">
                <h2
                  className={`text-4xl font-bold text-gradient-pink-purple ${
                    isPortfolioVisible ? "animate-slide-in-bottom" : ""
                  }`}
                >
                  Certifications
                </h2>
                <div className="flex flex-nowrap gap-4 justify-start mt-12">
                  <div
                    className="tooltip flex flex-col items-center"
                    data-tooltip="React Certification"
                  >
                    <a
                      href="https://drive.google.com/file/d/1zmEynmgCnPEy1pkDffXK0dFNjU_C6LV5/view?pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={react_certi}
                        alt="React Certification"
                        className="w-[400px] h-[240px] rounded-2xl shadow-gradient-pink-purple object-contain hover:scale-105 hover-shadow-gradient-pink-purple transition-transform duration-300 cursor-pointer"
                      />
                    </a>
                    <p className="mt-4 text-md font-semibold text-white">
                      React basic certification, HackerRank, July 2024
                    </p>
                  </div>
                  <div
                    className="tooltip flex flex-col items-center"
                    data-tooltip="CSS Certification"
                  >
                    <a
                      href="https://drive.google.com/file/d/1ElPNH-iPJ0PDJ3USPSSN_shT5kyYNDUA/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={css_certi}
                        alt="CSS Certification"
                        className="w-[400px] h-[240px] rounded-2xl shadow-gradient-pink-purple object-contain hover:scale-105 hover-shadow-gradient-pink-purple transition-transform duration-300 cursor-pointer"
                      />
                    </a>
                    <p className="mt-4 text-md font-semibold text-white">
                      CSS basic certification, HackerRank, July 2024
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          ref={contactRef}
          id="contact"
          className={`min-h-screen flex items-center justify-center p-4 bg-gray-900 transition-opacity duration-1000 ${
            isContactVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-pink-purple ${
                isContactVisible ? "animate-scale-out" : ""
              }`}
            >
              Get in Touch
            </h1>
            <p
              className={`text-md sm:text-lg text-gray-300 hero-text-shadow ${
                isContactVisible ? "animate-scale-out" : ""
              }`}
            >
              I'm open to new possibilities! Connect with me via LinkedIn or
              download my resume to learn more about my skills and experience.
            </p>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/rashmi-u-6ab07a213/"
                target="_blank"
                rel="noopener noreferrer"
                className={`icon-hover ${
                  isContactVisible ? "animate-slide-in-bottom" : ""
                }`}
              >
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/12Rb2ZfLf2shnv4T_yA5IwRra_f0TCZo6/view"
                download
                className={`icon-hover ${
                  isContactVisible ? "animate-slide-in-bottom" : ""
                }`}
              >
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zm-1 7.5a.5.5 0 0 1 .5.5v5.79l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7l2.15 2.15V11a.5.5 0 0 1 .5-.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
