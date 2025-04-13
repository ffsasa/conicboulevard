import { FaPaperPlane } from "react-icons/fa";

export default function RegisterForm() {
  return (
    <section className="bg-white bg-opacity-70 pt-4 px-4" id="dangky1">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2 pb-2">
          TƯ VẤN NHANH THÔNG TIN GIÁ BÁN <br />
          CHÍNH SÁCH ƯU ĐÃI VÀ PTTT
        </h2>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Họ tên (*)"
              required
              className="flex-1 px-4 py-3 rounded-full bg-green-200 bg-opacity-50 placeholder-lightgrey-50 text-black focus:outline-none border border-green-400"
            />
            <input
              type="tel"
              placeholder="Điện thoại (*)"
              required
              className="flex-1 px-4 py-3 rounded-full bg-green-200 bg-opacity-50 placeholder-lightgrey-50 text-black focus:outline-none border border-green-400"
            />
          </div>

          {/* Dropdown nhu cầu sản phẩm */}
          <select
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-2xl bg-green-200 bg-opacity-50 text-black focus:outline-none border border-green-400"
          >
            <option value="" disabled hidden>
              Mời Quý Khách chọn nhu cầu sản phẩm
            </option>
            <option value="2pn">Căn hộ 2 phòng ngủ</option>
            <option value="3pn">Căn hộ 3 phòng ngủ</option>
          </select>

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full inline-flex items-center gap-2 transition-all animate-pulseScale"
          >
            <FaPaperPlane />
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    </section>
  );
}
