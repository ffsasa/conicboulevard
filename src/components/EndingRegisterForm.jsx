import { FaPaperPlane } from "react-icons/fa";

export default function RegisterForm() {
    return (
        <section
            className="bg-gradient-to-b from-green-400 to-green-100 py-8 px-4 flex flex-col md:flex-row items-stretch"
            id="dangky2"
        >
            {/* Phần ảnh */}
            <div className="w-full md:w-7/12 mb-6 md:mb-0">
                <div className="w-full h-full">
                    <img
                        src="/promotion2.jpg"
                        alt="Promotion"
                        className="shadow-lg w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>

            {/* Phần form */}
            <div className="w-full md:w-5/12 max-w-md mx-auto bg-white bg-opacity-80 rounded-xl shadow-lg p-8 text-center flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                    Đăng ký liền tay <br /> nhận ngay chiết khấu
                </h2>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Họ và Tên"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black border border-green-400 focus:outline-none"
                    />

                    <input
                        type="tel"
                        placeholder="Số điện thoại"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black border border-green-400 focus:outline-none"
                    />

                    <select
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black border border-green-400 focus:outline-none"
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

                {/* Quyền lợi đăng ký */}
                <div className="mt-6 text-left text-green-800 text-lg leading-relaxed">
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
