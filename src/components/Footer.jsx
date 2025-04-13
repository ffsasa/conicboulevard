import logo from '../assets/logo2.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <section id="lienhe" className="px-4 py-10 text-center text-darkgreen">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          PHÒNG KINH DOANH DỰ ÁN
        </h2>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Nội dung liên hệ */}
        <div className="space-y-3 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          <p>
            <strong>Địa chỉ dự án:</strong> Khu dân cư Huỳnh Bá Chánh, Tân Kiên, Bình Chánh, TP.HCM.
          </p>
          <p>
            <strong>Địa chỉ Phòng giao dịch:</strong> 677/1 Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM
          </p>
          <p>
            <strong>Hotline/Zalo:</strong> <a href="tel:0845588589" className="text-green-700 hover:underline">0845.588.589</a>
          </p>
        </div>
      </section>      </footer>
  );
};
export default Footer;
