// src/components/Navbar.jsx
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Menu trên desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#thongtin" className="text-luxurybronze hover:text-gold whitespace-nowrap transition duration-300">Thông tin</a>
          <a href="#vitri" className="text-luxurybronze hover:text-gold whitespace-nowrap transition duration-300">Vị trí</a>
          <a href="#tienich" className="text-luxurybronze hover:text-gold whitespace-nowrap transition duration-300">Tiện ích</a>
          <a href="#matbang" className="text-luxurybronze hover:text-gold whitespace-nowrap transition duration-300">Mặt bằng</a>
          <a href="#tiendo" className="text-luxurybronze hover:text-gold whitespace-nowrap transition duration-300">Tiến độ</a>
          <a href="#giaban" className="text-luxurybronze hover:text-gold whitespace-nowrap transition duration-300">Giá bán</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
