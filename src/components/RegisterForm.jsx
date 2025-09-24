import { FaPaperPlane } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { sendConsultation } from "../service/consultationApi";

export default function RegisterForm() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    let phone = formData.get("phoneNumber");
    if (phone && !phone.startsWith("0") && !phone.startsWith("+84")){
      phone = "0" + phone;
      formData.set("phoneNumber", phone);
    }

    const data = Object.fromEntries(formData.entries());

    try {
      const res = await sendConsultation(data);
      if (res.status == 201) {
        alert("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.");
        form.current.reset();
      } 
    } catch (error) {
      if(error.response){
        alert("Đăng ký thất bại: " + (error.response.data.message || "vui lòng thử lại sau."));
      } else if (error.request) {
      // Request gửi đi nhưng không có phản hồi
      alert("Không kết nối được đến server.");
      } else {
      // Lỗi khác
      alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    }
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
              name="customerName"
              placeholder="Họ tên (*)"
              required
              className="w-full sm:w-[48%] px-4 py-3 rounded-full bg-green-200 bg-opacity-50 text-black border border-green-400"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Điện thoại (*)"
              required
              className="w-full sm:w-[48%] px-4 py-3 rounded-full bg-green-200 bg-opacity-50 text-black border border-green-400"
            />
          </div>

          <div className="w-full overflow-hidden">
            <select
              name="consultNeed"
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

          <input name="projectName" type="hidden" value={"Conic Boulevard"} />

          <div className="w-full rounded-2xl bg-opacity-50 px-4 py-3 text-left">
            <label className="flex items-start gap-3 text-sm text-green-800">
              <input
                type="checkbox"
                name="consentToSubmit"
                value="agree"
                required
                className="mt-1 h-4 w-4 rounded border-green-500 text-green-700 focus:ring-green-600"
              />
              <span>
                Tôi đồng ý gửi thông tin của mình để được tư vấn và nhận liên hệ từ
                Conic Boulevard.
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full inline-flex items-center gap-2 transition-all animate-pulseScale"
          >
            <FaPaperPlane />
            ĐĂNG KÝ
          </button>
          <p className="text-xs sm:text-sm text-green-700 mt-2">
            Bằng việc gửi form, bạn đồng ý với{' '}
            <Link to="/privacy-policy" className="underline hover:text-green-900">
              Chính sách bảo mật
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
