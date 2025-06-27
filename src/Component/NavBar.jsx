import React, { useState } from "react";

const NavBar = ({ scrollToHero, scrollToAbout, scrollToPortfolio, scrollToContact, activeNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (scrollFn, section) => {
    scrollFn();
    setIsOpen(false);
  };

  return (
    <>
      <style>
        {`
          .text-gradient-pink-purple {
            background: linear-gradient(to right, #ec4899, #7e22ce);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 2px 2px 4px rgba(75, 0, 130, 0.3);
          }
          .nav-link {
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #93c5fd;
          }
          .nav-link.active {
            color: #ec4899;
            font-weight: bold;
          }
          @media (max-width: 640px) {
            .text-2xl { font-size: 1.5rem; }
            .text-lg { font-size: 1rem; }
            .p-4 { padding: 1rem; }
          }
        `}
      </style>
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <button onClick={() => handleScroll(scrollToHero, "Home")} className="text-gradient-pink-purple">
              Rashmi Umesh
            </button>
          </div>

          <button className="sm:hidden flex flex-col gap-1.5" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

          <div className={`${isOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row absolute sm:static top-12 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-4 sm:p-0 text-center sm:text-left gap-4 sm:gap-8 text-lg`}>
            {[
              { name: "Home", scrollFn: scrollToHero },
              { name: "About", scrollFn: scrollToAbout },
              { name: "Portfolio", scrollFn: scrollToPortfolio },
              { name: "Contact", scrollFn: scrollToContact },
            ].map((item) => (
              <button
                key={item.name}
                className={`nav-link py-2 sm:py-0 ${activeNav === item.name ? "active" : ""}`}
                onClick={() => handleScroll(item.scrollFn, item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;