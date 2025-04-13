import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function RegisterForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8rcufbj",     // 🔁 thay bằng service ID của bạn
        "template_ox5ruiq",    // 🔁 thay bằng template ID của bạn
        formRef.current,
        "hCI-_txumfN6OAFVB"
      )
      .then(
        (result) => {
          alert("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.");
          formRef.current.reset();
        },
        (error) => {
          alert("Có lỗi xảy ra, vui lòng thử lại sau.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      className="bg-gradient-to-b from-green-400 to-green-100 py-8 px-4 flex flex-col md:flex-row items-stretch"
      id="dangky2"
    >
      {/* Phần ảnh */}
      <div className="w-full md:w-7/12 mb-6 md:mb-0">
        <img
          src="/promotion2.jpg"
          alt="Promotion"
          className="shadow-lg w-full h-48 sm:h-64 md:h-full object-cover rounded-xl"
        />
      </div>

      {/* Phần form */}
      <div className="w-full md:w-5/12 max-w-md mx-auto bg-white bg-opacity-80 rounded-xl shadow-lg px-4 py-6 sm:px-6 sm:py-8 text-center flex flex-col justify-center">
        <h2 className="text-1xl md:text-3xl font-bold text-green-800 mb-6">
          Đăng ký liền tay <br /> nhận ngay chiết khấu
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Họ và Tên"
            required
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black border border-green-400 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            required
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black border border-green-400 focus:outline-none"
          />
          <select
            name="type"
            required
            defaultValue=""
            className="w-full max-w-full truncate px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black border border-green-400 focus:outline-none"
          >
            <option value="" disabled hidden>
              Mời quý khách chọn nhu cầu sản phẩm
            </option>
            <option value="2pn">Căn hộ 2 phòng ngủ</option>
            <option value="3pn">Căn hộ 3 phòng ngủ</option>
          </select>

          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-all"
          >
            <FaPaperPlane />
            Đăng Ký Ngay
          </button>
        </form>

        <div className="mt-6 text-left text-green-800 text-sm sm:text-lg leading-relaxed">
          <h3 className="font-bold mb-2">QUYỀN LỢI ĐĂNG KÝ THÔNG TIN</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Cung cấp những thông tin nhanh chóng & cập nhật mới nhất từ chủ đầu tư.</li>
            <li>Hỗ trợ quý khách tìm được căn đẹp nhất.</li>
            <li>Cung cấp bảng giá gốc và tư vấn căn phù hợp với ngân sách.</li>
            <li>Nhận được chính sách tốt nhất thị trường.</li>
            <li>Hỗ trợ làm thủ tục trực tiếp với chủ đầu tư, trước và sau bán hàng.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
