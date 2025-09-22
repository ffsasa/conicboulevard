import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { sendConsultation } from "../service/consultationApi";

export default function RegisterForm() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    let phone = formData.get("phoneNumber");
    if (phone && !phone.startsWith("0") && !phone.startsWith("+84")) {
      phone = "0" + phone;
      formData.set("phoneNumber", phone);
    }

    const data = Object.fromEntries(formData.entries());

    try {
      const res = await sendConsultation(data);
      if (res.status == 201) {
        alert("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.");
        formRef.current.reset();
      }
    } catch (error) {
      if (error.response) {
        alert(
          "Đăng ký thất bại: " +
            (error.response.data.errors || "vui lòng thử lại sau."),
        );
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
    <section
      id="dangky2"
      className="relative overflow-hidden bg-gradient-to-br from-[#0d5e2b] via-[#1aa250] to-[#7ede91] py-14 font-body"
    >
      {/* Phần ảnh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* Phần form */}
      <div className="relative mx-auto flex w-full flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:items-stretch md:justify-center">
        {/* Khối hình ảnh bên trái */}
        <div className="relative flex-1 min-h-[360px] overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm">
          <div className="pointer-events-none absolute -top-24 right-12 h-60 w-60 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-8 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <img
            src="/promotion2.jpg"
            alt="Phối cảnh dự án Conic Boulevard"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
        </div>

        {/* Khối form bên phải */}
        <div className="relative flex flex-1 min-h-[360px] items-center justify-center">
          <div className="absolute inset-0 overflow-hidden rounded-[36px] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[url('/thongtin.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-emerald-700/75 to-lime-500/70" />
            <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-6 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 py-10 text-center text-white sm:px-12">
            <div className="mb-6 h-1 w-20 rounded-full bg-white/70" />
            <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
              Đăng ký liền tay
              <br />
              nhận ngay chiết khấu
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 w-full space-y-4 text-left">
              <input
                type="text"
                name="customerName"
                placeholder="Họ và Tên"
                required
                className="w-full rounded-md border border-white/25 bg-white/90 px-5 py-3 text-base font-medium text-emerald-900 placeholder:text-emerald-500 shadow-[0_18px_40px_rgba(13,93,43,0.28)] outline-none transition focus:border-white focus:ring-4 focus:ring-white/70"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Số điện thoại"
                required
                className="w-full rounded-md border border-white/25 bg-white/90 px-5 py-3 text-base font-medium text-emerald-900 placeholder:text-emerald-500 shadow-[0_18px_40px_rgba(13,93,43,0.28)] outline-none transition focus:border-white focus:ring-4 focus:ring-white/70"
              />
              <div className="relative">
                <select
                  name="consultNeed"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-md border border-white/25 bg-white/90 px-5 py-3 text-base font-medium text-emerald-900 shadow-[0_18px_40px_rgba(13,93,43,0.28)] outline-none transition focus:border-white focus:ring-4 focus:ring-white/70"
                >
                  <option value="" disabled hidden>
                    Mời quý khách chọn nhu cầu sản phẩm
                  </option>
                  <option value="Căn hộ 2 phòng ngủ">Căn hộ 2 phòng ngủ</option>
                  <option value="Căn hộ 3 phòng ngủ">Căn hộ 3 phòng ngủ</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.02 1.1l-4.25 3.845a.75.75 0 01-1.02 0l-4.25-3.845a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <input name="projectName" type="hidden" value="Conic Boulevard" />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#9af182] via-[#3cd572] to-[#18a24d] px-6 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-[0_20px_45px_rgba(20,128,61,0.45)] transition hover:scale-[1.01] hover:shadow-[0_24px_55px_rgba(20,128,61,0.55)] focus:outline-none focus:ring-4 focus:ring-lime-200/80"
              >
                <FaPaperPlane className="text-lg" />
                Đăng ký ngay
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-white/80 sm:text-sm">
              Bằng việc gửi form, bạn đồng ý với{' '}
              <Link to="/privacy-policy" className="font-medium underline underline-offset-2 hover:text-white">
                Chính sách bảo mật
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
