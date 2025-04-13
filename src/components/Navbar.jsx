import { useState, useEffect } from "react";
import logo from "../assets/logo2.jpg";
import { Menu, X } from "lucide-react"; // Cần cài: `lucide-react`

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "thongtin", label: "TỔNG QUAN" },
    { id: "vitri", label: "VỊ TRÍ" },
    { id: "tienich", label: "TIỆN ÍCH" },
    { id: "matbang", label: "MẶT BẰNG" },
    { id: "tiendo", label: "TIẾN ĐỘ" },
    { id: "giaban", label: "GIÁ BÁN" },
    { id: "pttt", label: "PTTT" },
    { id: "lienhe", label: "LIÊN HỆ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry.isIntersecting);
        });

        const visible = [...visibleSections.entries()]
          .filter(([_, isVisible]) => isVisible)
          .map(([id]) => document.getElementById(id))
          .filter(Boolean)
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

        if (visible.length > 0) {
          setActiveSection(visible[0].id);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

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
    <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-lightgrey-150" : "bg-transparent"}`}>
      <div className="w-full px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className={`w-auto transition-all duration-300 
              ${isScrolled ? "h-10 md:h-12" : "h-14 md:h-20"}
            `}
                      />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-9 xl:space-x-12 mt-2 pr-6">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xl font-semibold font-sans whitespace-nowrap transition duration-300
                  ${isActive
                    ? "text-luxurybronze underline underline-offset-8 decoration-1"
                    : isScrolled
                      ? "text-green-900 hover:text-luxurybronze"
                      : "text-white hover:text-luxurybronze"
                  } hover:underline hover:underline-offset-8`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8 text-green-900" /> : <Menu className="w-8 h-8 text-green-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden bg-white px-6 py-4 space-y-4 shadow-md`}>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-base font-semibold transition duration-300 ${activeSection === item.id ? "text-luxurybronze underline underline-offset-8" : "text-green-900 hover:text-luxurybronze"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
