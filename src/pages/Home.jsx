// src/pages/Home.jsx
import RegisterForm from "../components/RegisterForm";
import EndingRegisterForm from "../components/EndingRegisterForm";
import FloorSlider from "../components/FloorSlider";
import FullscreenImage from "../components/FullscreenImage";
import FullscreenVideo from "../components/FullscreenVideo";

const Home = () => {
  return (
    <>
      <div className="w-full px-2 sm:px-6 lg:px-10">
        <section id="thongtin" className="max-w-screen-2xl mx-auto sm:pt-10">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-start">
            {/* Khối bên trái chứa tiêu đề + nội dung */}
            <div className="w-full md:w-2/5 flex flex-col">
              <h2
                className="text-3xl sm:text-5xl font-bold pb-2 text-lightgreen"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontStyle:  "italic"
                }}
              >
                Tổng Quan Dự Án
              </h2>

              <div className="text-sm sm:text-2xl text-lightgreen pt-2">
                <p>
                  <strong>TỔNG DIỆN TÍCH: </strong> 
                  <strong className="text-xl sm:text-3xl">5.3 </strong>
                  <strong>ha</strong>
                </p>

                <div className="pt-2 sm:pt-4">
                  <p>
                    <strong>QUY MÔ: 5,3 ha</strong> chia làm 2 phân khu:
                  </p>
                  <p>- 114 căn nhà phố</p>
                  <p>- 2 khối căn hộ: 952 căn hộ + 24 shophouse</p>
                </div>

                <div className="pt-2 sm:pt-4">
                  <p>
                    <strong>- Block A:</strong> 4 nguyên đơn cao 15 tầng, 1 tầng hầm, tổng số 420 căn hộ & 10 căn shophouse
                  </p>
                </div>

                <div className="pt-2 sm:pt-4">
                  <p>
                    <strong>- Block B:</strong> 5 nguyên đơn cao 15 tầng, 1 tầng hầm, tổng số 532 căn hộ & 14 căn shophouse
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 space-y-2 sm:space-y-4">
                  <p>
                    <strong>MẬT ĐỘ XÂY DỰNG:</strong>{" "}
                    <strong className="text-xl sm:text-4xl">28,7%</strong>
                  </p>
                  <p><strong>HÌNH THỨC SỞ HỮU:</strong> Lâu dài</p>
                  <p><strong>TIẾN ĐỘ DỰ ÁN:</strong></p>
                  <p><strong>- Bàn giao nhà: Block B</strong> - 02/04/2025</p>
                  <p className="pl-44"><strong>Block A – Quý </strong>04/2025</p>
                  <p><strong>- Sổ hồng: </strong>02/06/2025</p>
                  <p><strong>VỊ TRÍ:</strong> Đ. Huỳnh Bá Chánh, Tân Kiên, H. Bình Chánh, TP. HCM</p>
                </div>
              </div>
            </div>

            {/* Hình ảnh bên phải */}
            <div className="w-full md:w-3/5 flex flex-col h-full self-stretch">
              <FullscreenImage
                src="/thongtin.jpg"
                alt="Thông tin dự án"
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="w-full mt-8">
            <img
              src="/promotion.jpg"
              alt="Thông tin khuyến mãi"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="pb-4 md:pb-0">
            <RegisterForm />
          </div>
        </section>

        <section id="vitri" className="max-w-screen-2xl mx-auto sm:pt-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            {/* Hình ảnh bên trái với dòng chữ bên dưới */}
            <div className="w-full md:w-[60%]">
              <FullscreenImage
                src="/vitri.jpg"
                alt="Vị trí Conic Boulevard"
                className="shadow-lg w-full object-cover rounded-xl"
              />
              <p className="text-sm sm:text-2xl text-darkgreen font-dancing mt-3 text-center">
                ĐỦ GẦN PHỒN HOA - ĐỦ XA VỘI VÃ
              </p>
            </div>

            {/* Văn bản bên phải canh giữa theo chiều cao */}
            <div className="w-full md:w-[40%] sm:pl-16">
              <h2 className="text-3xl sm:text-6xl font-bold text-darkgreen font-dancing">
                Vị Trí
              </h2>
              <ul className="text-sm sm:text-3xl space-y-5 list-disc pl-9">
                <li>Tọa lạc ngay nút giao Võ Văn Kiệt với Quốc Lộ 1A.</li>
                <li>Kết nối Quận 5, 6, 1 qua Đại Lộ Võ Văn Kiệt.</li>
                <li>Kết nối các tỉnh miền tây qua cao tốc Trung Lương, Quốc Lộ 1A.</li>
                <li>Kết nối với 7 Quận, Huyện qua tuyến kênh Tham Lương – Bến Cát – Rạch Nước Lên (32 km).</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-10 pt-3 md:pt-10 items-center">
            {/* Văn bản bên trái */}
            <div className="w-full md:w-[25%]">
              <h3 className="text-3xl sm:text-5xl font-bold text-darkgreen font-dancing md:pb-2">
                Vị trí chiến lược, <br className="hidden md:inline" />
                đón đầu tương lai
              </h3>
              <ul className="list-none text-sm sm:text-2xl text-darkgreen sm:space-y-5">
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  Đón đầu quy hoạch Bình Chánh - đầu mối quan trọng kết nối TP. HCM với các tỉnh ĐBSCL
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  Đón đầu các dự án hạ tầng giao thông trọng điểm: Metro 3A (Bến Thành – Tân Kiên), tuyến đường sắt cao tốc TP.HCM - Cần Thơ
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  Đón đầu tuyến thủy lộ xuyên tâm dài gần 32km đi qua 7 quận/huyện của TP.HCM đang được đầu tư hơn 9.000 tỷ đồng - kênh Bến Cát - Tham Lương – Rạch Nước Lên
                </li>
              </ul>
            </div>

            {/* Ảnh bên phải */}
            <div className="w-full md:w-[75%]">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "75%" }}>
                <FullscreenImage
                  src="/map.png"
                  alt="Vị trí Conic Boulevard"
                  className="absolute inset-0 w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-16 pb-4 md:pb-0 w-full flex justify-center">
            <FullscreenVideo
              videoUrl="https://www.youtube.com/embed/OHxAjoKIL6I?enablejsapi=1"
              className="w-full max-w-5xl aspect-video"
            />
          </div>
        </section>

        <section id="tienich" className="max-w-screen-2xl mx-auto sm:pt-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen pb-1 md:pb-4 font-dancing">
            Tiện Ích Nội Khu
          </h2>

          <div className="w-full">
            <FullscreenImage
              src="/tienich.jpg"
              alt="Tiện ích nội khu"
              className="shadow-lg w-full object-cover"
            />
          </div>

          <div className="w-full flex justify-center">
            <div className="pt-3 md:pt-8 w-full max-w-5xl aspect-video">
              <FullscreenVideo
                videoUrl="https://www.youtube.com/embed/RWv_a_XXLOQ?enablejsapi=1"
                className="w-full max-w-5xl aspect-video"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-center md:pt-7">
            <div className="w-full md:w-[65%]">
              <FullscreenImage
                src="/tienichdichuyen.jpg"
                alt="Di chuyển đến tiện ích"
                className="shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-[35%]">
              <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen font-dancing pb-3 ">
                Thời gian di chuyển đến các tiện ích trong khu vực.
              </h2>
              <ul className="list-none ml-4 list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-2xl">
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  5 phút: đến bến xe miền tây
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  7 phút: chợ Bình Chánh
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  8 phút: trường THPT Bình Tân
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  10 phút: Aeon mall Tên Lửa
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  15 phút: UBND Bình Chánh
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  20 phút: làng đại học Q.7
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  25 phút: bệnh viện Nhi Đồng 2
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  25 phút: trung tâm quận 1, quận 7
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  30 phút: trường quốc tế RMIT
                </li>
                <li className="before:content-['✓'] before:mr-2 before:text-darkgreen">
                  35 phút: Sân Bay
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="matbang" className="max-w-screen-2xl mx-auto pt-4 sm:pt-10">
          <h2 className="text-md sm:text-4xl font-bold font-dancing text-darkgreen text-center sm:pt-4 sm:mb-2">
            Mặt Bằng Tầng Điển Hình - Block A
          </h2>
          <div className="w-full">
            <FullscreenImage
              src="/blocka2.jpg"
              alt="Tiện ích nội khu"
              className="shadow-lg w-full object-cover"
            />
          </div>
          <h2 className="text-md sm:text-4xl font-bold font-dancing text-darkgreen text-center sm:pt-4 sm:mb-2">
            Mặt Bằng Tầng Điển Hình -  Block B
          </h2>
          <div className="w-full">
            <FullscreenImage
              src="/blockb2.jpg"
              alt="Tiện ích nội khu"
              className="shadow-lg w-full object-cover"
            />
          </div>
        </section>

        <section id="hinhanh" className="max-w-screen-2xl mx-auto pt-4 sm:pt-10">
          {/* <FloorSlider /> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-darkgreen pb-4 sm:pt-6 font-dancing">Hình ảnh thực tế căn hộ</h2>
          <p className="md:pb-1 text-sm sm:text-2xl">
            Conic Boulevard thiết lập tiêu chuẩn sống đẳng cấp với những căn hộ diện tích lớn từ 84,32m2 đến 114m2,
            đáp ứng nhu cầu ngày càng cao về không gian sống rộng, thoáng giữa trung tâm thành phố.
            Trong bối cảnh “đất chật, người đông”, Conic Boulevard trở thành lựa chọn hiếm hoi mang
            lại sự thoải mái và tiện nghi cho gia đình nhiều thế hệ.
          </p>
          <div>
            <div className="w-full">
            <FullscreenImage
              src="/mauab.jpg"
              alt="Mẫu căn hộ B"
              className="shadow-lg w-full object-cover"
            />
            </div>
            <div className="pt-4 md:pt-16 pb-4 md:pb-0 w-full flex justify-center">
              <FullscreenVideo
                videoUrl="https://www.youtube.com/embed/p_3ldfGiZH8?enablejsapi=1"
                className="w-full max-w-5xl aspect-video"
              />
            </div>
            <p className="text-sm sm:text-base italic text-gray-700 mt-2 sm:mt-4 text-center">
                  Video thực tế căn hộ góc 2 phòng ngủ 84m² - Conic Boulevard
            </p>
          </div>
          
          <div>
            <div className="w-full">
              <FullscreenImage
                src="/maucd.jpg"
                alt="Mẫu căn hộ C1/C2"
                className="shadow-lg w-full object-cover"
              />
            </div>
            <div className="pt-4 md:pt-16 pb-4 md:pb-0 w-full flex justify-center">
              <FullscreenVideo
                videoUrl="https://www.youtube.com/embed/RvNsxklD32w?enablejsapi=1"
                className="w-full max-w-5xl aspect-video"
              />
            </div>
            <p className="text-sm sm:text-base italic text-gray-700 mt-2 sm:mt-4 text-center">
                  Video thực tế căn hộ góc 2 phòng ngủ 85m² - Conic Boulevard
            </p>
          </div>
          
          <div>
            <div className="w-full">
              <FullscreenImage
                src="/maud.jpg"
                alt="Mẫu căn hộ D"
                className="shadow-lg w-full object-cover"
              />
            </div>
            <div className="pt-4 md:pt-16 pb-4 md:pb-0 w-full flex justify-center">
              <FullscreenVideo
                videoUrl="https://www.youtube.com/embed/ME0pLer1Kx0?enablejsapi=1"
                className="w-full max-w-5xl aspect-video"
              />
            </div>
            <p className="text-sm sm:text-base italic text-gray-700 mt-2 sm:mt-4 text-center">
                  Video thực tế căn hộ góc 2 phòng ngủ 89m² - Conic Boulevard
            </p>
          </div>
          <div>
            <div className="w-full">
              <FullscreenImage
                src="/maua.jpg"
                alt="Mẫu căn hộ A"
                className="shadow-lg w-full object-cover"
              />
            </div>
            <div className="pt-4 md:pt-16 pb-4 md:pb-0 w-full flex justify-center">
              <FullscreenVideo
                videoUrl="https://www.youtube.com/embed/pMdQXzUlJRI?enablejsapi=1"
                className="w-full max-w-5xl aspect-video"
              />
            </div>
            <p className="text-sm sm:text-base italic text-gray-700 mt-2 sm:mt-4 text-center">
                  Video thực tế căn hộ góc 3 phòng ngủ 114m² - Conic Boulevard
            </p>
          </div>
          
          <RegisterForm />
        </section>

        <section id="giaban" className="max-w-screen-2xl mx-auto pt-4 sm:pt-10">
          <h2 className="text-center text-3xl sm:text-5xl font-bold text-darkgreen font-dancing">GIÁ BÁN CĂN HỘ CONIC BOULEVARD</h2>

          <div className="sm:mt-5 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-10 justify-items-center">
            {/* Card 2 phòng ngủ */}
            <div className="w-full max-w-sm flex flex-col rounded-2xl overflow-hidden shadow-xl border border-green-300 transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/giaban-2pn.jpg"
                alt="Căn hộ 2 phòng ngủ"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="bg-[#a8844e] p-5 text-white">
                <div className="bg-[#603813] text-white px-4 py-2 rounded-t-md font-semibold text-lg text-center">
                  Căn hộ 2 phòng ngủ
                </div>
                <div className="pt-4 text-sm font-semibold">
                  Diện tích: <span className="text-white font-normal">84 m²</span>
                </div>
                <div className="mt-4 bg-white text-center text-[#a8844e] font-bold text-sm py-3 rounded-md">
                  <p className="mb-1">GIÁ BÁN: 2,2 tỷ VNĐ (giao nhà thô)</p>
                  <p className="mt-0">2,75 tỷ VNĐ (giao nhà hoàn thiện)</p>
                </div>
              </div>
            </div>

            {/* Card 2 phòng ngủ */}
            <div className="w-full max-w-sm flex flex-col rounded-2xl overflow-hidden shadow-xl border border-green-300 transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/giaban-2pn2.jpg"
                alt="Căn hộ 2 phòng ngủ"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="bg-[#a8844e] p-5 text-white">
                <div className="bg-[#603813] text-white px-4 py-2 rounded-t-md font-semibold text-lg text-center">
                  Căn hộ 2 phòng ngủ
                </div>
                <div className="pt-4 text-sm font-semibold">
                  Diện tích: <span className="text-white font-normal">85 m²</span>
                </div>
                <div className="mt-4 bg-white text-center text-[#a8844e] font-bold text-sm py-3 rounded-md">
                  <p className="mb-1">GIÁ BÁN: 2,1 tỷ VNĐ (giao nhà thô)</p>
                  <p className="mt-0">2,55 tỷ VNĐ (giao nhà hoàn thiện)</p>
                </div>
              </div>
            </div>

            {/* Card 2 phòng ngủ */}
            <div className="w-full max-w-sm flex flex-col rounded-2xl overflow-hidden shadow-xl border border-green-300 transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/giaban-2pn3.jpg"
                alt="Căn hộ 2 phòng ngủ"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="bg-[#a8844e] p-5 text-white">
                <div className="bg-[#603813] text-white px-4 py-2 rounded-t-md font-semibold text-lg text-center">
                  Căn hộ 2 phòng ngủ
                </div>
                <div className="pt-4 text-sm font-semibold">
                  Diện tích: <span className="text-white font-normal">89 m²</span>
                </div>
                <div className="mt-4 bg-white text-center text-[#a8844e] font-bold text-sm py-3 rounded-md">
                  <p className="mb-1">GIÁ BÁN: 2,8 tỷ VNĐ (giao nhà thô)</p>
                  <p className="mt-0">3,15 tỷ VNĐ (giao nhà hoàn thiện)</p>
                </div>
              </div>
            </div>

            {/* Card 3 phòng ngủ */}
            <div className="w-full max-w-sm flex flex-col rounded-2xl overflow-hidden shadow-xl border border-green-300 transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/giaban-3pn.jpg"
                alt="Căn hộ 3 phòng ngủ"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="bg-[#a8844e] p-5 text-white">
                <div className="bg-[#603813] text-white px-4 py-2 rounded-t-md font-semibold text-lg text-center">
                  Căn hộ 3 phòng ngủ
                </div>
                <div className="pt-4 text-sm font-semibold">
                  Diện tích: <span className="text-white font-normal">114 m²</span>
                </div>
                <div className="mt-4 bg-white text-center text-[#a8844e] font-bold text-sm py-3 rounded-md">
                  <p className="mb-1">GIÁ BÁN: 3,3 tỷ VNĐ (giao nhà thô)</p>
                  <p className="mt-0">3,15 tỷ VNĐ (giao nhà hoàn thiện)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="bg-gradient-to-r from-[#fdf3e7] to-[#f6e0bd] border border-[#d6b071] rounded-3xl p-6 sm:p-10 shadow-xl">
              <h3 className="text-lg sm:text-3xl font-semibold text-[#603813] text-center uppercase tracking-widest">
                Giá bán đất nền Conic Boulevard
              </h3>
              <p className="mt-4 text-sm sm:text-xl text-gray-700 text-center">
                Lô tiêu chuẩn <span className="font-semibold text-darkgreen">5m × 20m (100m²)</span> với hai vị trí vàng phù hợp nhu cầu đầu tư và an cư.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-md">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-darkgreen text-white text-lg font-semibold">1</span>
                  <div className="text-sm sm:text-lg text-[#603813]">
                    <p className="font-semibold">5 tỷ</p>
                    <p className="text-gray-600">Mặt tiền đường số 1 lộ giới 16m</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-md">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-darkgreen text-white text-lg font-semibold">2</span>
                  <div className="text-sm sm:text-lg text-[#603813]">
                    <p className="font-semibold">7 tỷ</p>
                    <p className="text-gray-600">Mặt tiền đường nội khu – đối diện công viên</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EndingRegisterForm />
        {/* Nút Zalo */}
        <a
          href="https://zalo.me/0941841024"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
            alt="Zalo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-md shadow-lg transition-transform duration-300 animate-shake"
          />
        </a>

        {/* Nút Gọi điện */}
        <a href="tel:0941841024" className="fixed bottom-5 right-4 md:bottom-5 md:right-6 z-50">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="Call"
            className="w-12 h-12 md:w-14 md:h-14 animate-shake"
          />
        </a>

      </div>
    </>
  );
};

export default Home;
