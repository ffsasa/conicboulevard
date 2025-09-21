import { useState, useEffect, useMemo } from "react";
import logo from "../assets/logo2.jpg";
import { Menu, X } from "lucide-react"; // Cần cài: `lucide-react`
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = useMemo(() => ([
    { id: "thongtin", label: "TỔNG QUAN", type: "section" },
    { id: "vitri", label: "VỊ TRÍ", type: "section" },
    { id: "tienich", label: "TIỆN ÍCH", type: "section" },
    { id: "matbang", label: "MẶT BẰNG", type: "section" },
    { id: "tiendo", label: "TIẾN ĐỘ", type: "section" },
    { id: "giaban", label: "GIÁ BÁN", type: "section" },
    { id: "pttt", label: "PTTT", type: "section" },
    { id: "lienhe", label: "LIÊN HỆ", type: "section" },
  ]), []);

  const sectionItems = useMemo(
    () => menuItems.filter((item) => item.type === "section"),
    [menuItems],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10 || location.pathname !== "/");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }
    
    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            visibleSections.set(id, {
              id,
              ratio: entry.intersectionRatio,
              top: entry.boundingClientRect.top,
            });
          } else {
            visibleSections.delete(id);
          }
        });

        const visible = [...visibleSections.values()].sort((a, b) => {
          if (b.ratio !== a.ratio) {
            return b.ratio - a.ratio;
          }
          return a.top - b.top;
        });

        if (visible.length > 0) {
          const nextActive = visible[0].id;
          setActiveSection((current) => (current === nextActive ? current : nextActive));
        } else {
          setActiveSection("");
        }
      },
      {
        root: null,
        threshold: Array.from({ length: 101 }, (_, index) => index / 100),
      }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, [location.pathname, sectionItems, menuItems]);

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
            const isSection = item.type === "section";
            const isActive = isSection
              ? activeSection === item.id
              : location.pathname === item.path;
            const linkClasses = `text-xl font-semibold font-sans whitespace-nowrap transition duration-300 ${isActive
              ? "text-luxurybronze underline underline-offset-8 decoration-1"
              : isScrolled
                ? "text-green-900 hover:text-luxurybronze"
                : "text-white hover:text-luxurybronze"
            } hover:underline hover:underline-offset-8`;

            if (isSection) {
              const href = location.pathname === "/" ? `#${item.id}` : `/#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  className={linkClasses}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.path}
                className={linkClasses}
              >
                {item.label}
              </Link>
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
          {menuItems.map((item) => {
            const isSection = item.type === "section";
            const isActive = isSection
              ? activeSection === item.id
              : location.pathname === item.path;
            const mobileClasses = `block text-base font-semibold transition duration-300 ${isActive
              ? "text-luxurybronze underline underline-offset-8"
              : "text-green-900 hover:text-luxurybronze"
            }`;

            if (isSection) {
              const href = location.pathname === "/" ? `#${item.id}` : `/#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  className={mobileClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.id}
                to={item.path}
                className={mobileClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
