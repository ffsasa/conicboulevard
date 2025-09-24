import logo from '../assets/logo2.jpg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-darkgreen font-body">
      <section
        id="lienhe"
        className="mx-auto max-w-6xl px-4 py-12 text-darkgreen"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold uppercase text-green-700 md:text-4xl">
                Phòng kinh doanh dự án
              </h2>
            </div>
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-1/2 object-cover mx-auto"
              loading="lazy"
              decoding="async"
            />
            <ul className="space-y-3 text-base font-medium leading-relaxed md:text-lg">
              <li>
                <span className="font-semibold text-green-700">Địa chỉ dự án:</span> Khu Căn Hộ Conic Boulevard, Đường Huỳnh Bá Chánh, Tân Kiên, Bình Chánh, TP.HCM.
              </li>
              <li>
                <span className="font-semibold text-green-700">Địa chỉ Phòng giao dịch:</span> Lô 13B, KDC Conic, Nguyễn Văn Linh, Xã Phong Phú, Bình Chánh, TP.HCM.
              </li>
              <li>
                <span className="font-semibold text-green-700">Email:</span> cuongcoach6879@gmail.com
              </li>
              <li>
                <span className="font-semibold text-green-700">Hotline/Zalo:</span>{' '}
                <a
                  href="tel:0941841024"
                  className="text-green-700 underline transition hover:text-green-900"
                >
                  0941.841.024
                </a>
              </li>
            </ul>
          </div>

        {/* Logo */}
        <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase text-green-700 md:text-3xl">
              Quyền lợi đăng ký thông tin
            </h3>
            <ul className="space-y-3 text-base font-medium leading-relaxed md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Cập nhật thông tin nhanh chóng và chính xác trực tiếp từ chủ đầu tư.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Hỗ trợ khách hàng xuyên suốt với đội ngũ tư vấn giàu kinh nghiệm.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Tư vấn các phương án đầu tư phù hợp cùng chính sách ưu đãi mới nhất.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Được cung cấp đầy đủ tài liệu, hình ảnh và thông tin pháp lý của dự án.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Nhận hỗ trợ trực tiếp trong suốt quá trình giao dịch và bàn giao.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-green-200 pt-6 text-center text-sm text-green-800 space-y-2">
          <p>
            © 2025 <span className="font-semibold text-green-700">ConicBoulevard</span>. All rights reserved.
          </p>
          <p>
            <span className="font-medium">Đơn vị phát triển:</span> An Tạ Ngọc (ffsasa)
          </p>
          <p>
            <Link 
              to="/privacy-policy" 
              className="underline hover:text-green-900 transition"
            >
              Chính sách bảo mật
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
