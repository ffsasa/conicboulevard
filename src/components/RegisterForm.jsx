import { FaPaperPlane } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function RegisterForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8rcufbj",     // 🔁 thay bằng service ID của bạn
        "template_ox5ruiq",    // 🔁 thay bằng template ID của bạn
        form.current,
        "hCI-_txumfN6OAFVB"      // 🔁 thay bằng public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.");
          form.current.reset(); // reset form sau khi gửi
        },
        (error) => {
          console.error(error.text);
          alert("Gửi thất bại, vui lòng thử lại sau.");
        }
      );
  };

  return (
    <section className="bg-white bg-opacity-70 pt-4 px-4 sm:px-6 lg:px-8" id="dangky1">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-1xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-6 pb-2">
          TƯ VẤN NHANH THÔNG TIN GIÁ BÁN <br />
          CHÍNH SÁCH ƯU ĐÃI VÀ PTTT
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Họ tên (*)"
              required
              className="w-full sm:w-[48%] px-4 py-3 rounded-full bg-green-200 bg-opacity-50 text-black border border-green-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Điện thoại (*)"
              required
              className="w-full sm:w-[48%] px-4 py-3 rounded-full bg-green-200 bg-opacity-50 text-black border border-green-400"
            />
          </div>

          <div className="w-full overflow-hidden">
            <select
              name="type"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-2xl bg-green-200 bg-opacity-50 text-black border border-green-400"
            >
              <option value="" disabled hidden>
                Mời Quý Khách chọn nhu cầu sản phẩm
              </option>
              <option value="Căn hộ 2 phòng ngủ">Căn hộ 2 phòng ngủ</option>
              <option value="Căn hộ 3 phòng ngủ">Căn hộ 3 phòng ngủ</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full inline-flex items-center gap-2 transition-all animate-pulseScale"
          >
            <FaPaperPlane />
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    </section>
  );
}
