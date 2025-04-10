import { useState, useEffect } from "react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "thongtin", label: "THÔNG TIN" },
    { id: "vitri", label: "VỊ TRÍ" },
    { id: "tienich", label: "TIỆN ÍCH" },
    { id: "matbang", label: "MẶT BẰNG" },
    { id: "tiendo", label: "TIẾN ĐỘ" },
    { id: "giaban", label: "GIÁ BÁN" },
  ];

  // ✅ Xử lý scroll để đổi màu nền
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Xử lý IntersectionObserver cho active menu
  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 
        ${isScrolled ? "bg-[#144c32]" : "bg-transparent"}`}
    >
      <div className="w-full px-10 py-3 flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-14 mt-2 pr-16">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-xl font-sans whitespace-nowrap transition duration-300 ${
                activeSection === item.id
                  ? "text-luxurybronze underline underline-offset-8 decoration-1"
                  : "text-white hover:text-luxurybronze hover:underline hover:underline-offset-8"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
