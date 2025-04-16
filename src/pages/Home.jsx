// src/pages/Home.jsx
import RegisterForm from "../components/RegisterForm";
import EndingRegisterForm from "../components/EndingRegisterForm";
import FloorSlider from "../components/FloorSlider";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-10 lg:px-20">
        <section id="thongtin" className="px-5 py-5 sm:px-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Khối bên trái chứa tiêu đề + nội dung */}
            <div className="flex-1 flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold pb-2 text-black font-dancing">Tổng Quan Dự Án</h2>
              <h2 className="text-2xl sm:text-3xl font-bold pb-4 text-darkgreen">CONIC BOULEVARD</h2>

              <div className="text-sm sm:text-base">
                <p>
                  <strong>TỔNG DIỆN TÍCH:</strong> 5.3 ha<br />
                  <strong>QUY MÔ:</strong> Gồm 2 phân khu<br />
                  - 114 căn thấp tầng<br />
                  - 2 khối căn hộ: 952 căn hộ + 24 căn shophouse<br />
                </p>

                <div className="pl-3 pt-2">
                  <p>
                    <strong>Block A:</strong> 4 nguyên đơn, cao 15 tầng, 1 tầng hầm,<br />
                    tổng số 420 căn hộ & 10 căn shophouse
                  </p>
                  <p>
                    <strong>Block B:</strong> 5 nguyên đơn, cao 15 tầng, 1 tầng hầm,<br />
                    tổng số 532 căn hộ & 14 căn shophouse
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <p><strong>MẬT ĐỘ XÂY DỰNG:</strong> 28,7%</p>
                  <p><strong>HÌNH THỨC SỞ HỮU:</strong> Lâu dài</p>
                  <p><strong>TIẾN ĐỘ DỰ ÁN:</strong> Dự kiến Quý II/2025</p>
                  <p><strong>VỊ TRÍ:</strong> Đ. Huỳnh Bá Chánh, Tân Kiên, H. Bình Chánh, TP. HCM</p>
                </div>
              </div>
            </div>

            {/* Hình ảnh bên phải */}
            <div className="flex-1 h-full self-stretch">
              <img
                src="/thongtin.jpg"
                alt="Thông tin dự án"
                className="w-full h-full object-cover rounded-xl shadow-lg"
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

          <RegisterForm />
        </section>

        <section id="vitri" className="px-10 py-5 pt-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            {/* Hình ảnh bên trái với dòng chữ bên dưới */}
            <div className="w-[65%] w-full">
              <img
                src="/vitri.jpg"
                alt="Vị trí Conic Boulevard"
                className="shadow-lg w-full max-w-3xl object-cover"
              />
              <p className="text-xl text-darkgreen font-dancing mt-3 text-center">
                ĐỦ GẦN PHỒN HOA - ĐỦ XA VỘI VÃ
              </p>
            </div>
            {/* Văn bản bên phải canh giữa theo chiều cao */}
            <div className="w-[35%] w-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-darkgreen font-dancing">Vị Trí Đắc Địa</h2>
              <h1 className="text-2xl text-darkgreen font-dancing">Đủ gần</h1>
              <p>
                • Năm ngay nút giao Võ Văn Kiệt với Quốc Lộ 1A <br />
                • Kết nối Quận 5, 6, 1 qua Đại Lộ Võ Văn Kiệt. <br />
                • Kết nối các tỉnh miền tây qua cao tốc Trung Lương, Quốc Lộ 1A. <br />
              </p>
              <h1 className="text-2xl text-darkgreen font-dancing pt-4">Đủ xa</h1>
              <p>
                • Nằm biệt lập trong khu dân cư 584 đường Huỳnh Bá Chánh, xã Tân Kiên, Huyện Bình Chánh.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 pt-5 md:pt-10 items-center">
            {/* Văn bản bên trái */}
            <div className="w-[35%] w-full">
              <h3 className="text-3xl sm:text-4xl font-bold text-darkgreen font-dancing pb-2">
                Vị trí chiến lược, <br />
                đón đầu tương lai
              </h3>
              <p className="pb-2">
                Conic Boulevard tọa lạc kiêu hãnh tại khu Tây Nam TP.HCM,
                đón đầu sự phát triển của khu vực thông qua hàng loạt dự án hạ tầng giao thông nghìn tỷ.
                Đây không chỉ là nơi kết nối các tuyến giao thông trọng điểm mà còn là đầu mối thông thương liên vùng,
                đảm bảo khả năng di chuyển thuận tiện trong khu vực và liên tỉnh.
              </p>
              <p className="pb-2">
                Đón đầu quy hoạch Bình Chánh - đầu mối quan trọng kết nối TP.HCM với các tỉnh ĐBSCL
              </p>
              <ul className="ml-2 list-disc pl-5">
                <li>Đón đầu các dự án hạ tầng giao thông trọng điểm: Metro 3A (Bến Thành – Tân Kiên), tuyến đường sắt cao tốc TP.HCM -Cần Thơ</li>
                <li>Đón đầu tuyến thủy lộ xuyên tâm dài gần 32km đi qua 7 quận/huyện của TP.HCM đang được đầu tư hơn 9.000 tỷ đồng - kênh Bến Cát - Tham Lương -Rạch Nước Lên</li>
              </ul>
            </div>
            <div className="w-[65%] w-full">
              <img
                src="/map.png"
                alt="Vị trí Conic Boulevard"
                className="shadow-lg w-full max-w-3xl object-cover"
              />
            </div>
          </div>
          <div className="pt-16 w-full flex justify-center">
            <div className="w-full max-w-5xl aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/7fXVvcROavY"
                title="Video giới thiệu vị trí đắc địa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="tienich" className="px-4 sm:px-6 md:px-10 py-5 pt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkgreen pb-4 font-dancing text-center md:text-left">
            Tiện Ích Nội Khu
          </h2>

          <div className="w-full">
            <img
              src="/tienich.jpg"
              alt="Tiện ích nội khu"
              className="shadow-lg w-full object-cover"
            />
          </div>

          <div className="w-full flex justify-center">
            <div className="pt-8 w-full max-w-5xl aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/X_acjcDRyU8"
                title="Video giới thiệu tiện ích nội khu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center pt-7">
            <div className="w-full md:w-[55%]">
              <img
                src="/tienichdichuyen.jpg"
                alt="Di chuyển đến tiện ích"
                className="shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-[45%]">
              <h2 className="text-3xl sm:text-4xl font-bold text-darkgreen font-dancing pb-3 text-center md:text-left">
                Thời gian di chuyển đến các tiện ích trong khu vực.
              </h2>
              <ul className="ml-4 list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                <li className="hover:text-darkgreen transition duration-200">5 phút: đến bến xe miền tây mới</li>
                <li className="hover:text-darkgreen transition duration-200">7 phút: chợ Bình Chánh</li>
                <li className="hover:text-darkgreen transition duration-200">8 phút: trường THPT Bình Tân</li>
                <li className="hover:text-darkgreen transition duration-200">10 phút: Aeon mall Tên Lửa</li>
                <li className="hover:text-darkgreen transition duration-200">15 phút: UBND Bình Chánh</li>
                <li className="hover:text-darkgreen transition duration-200">20 phút: làng đại học Q.7</li>
                <li className="hover:text-darkgreen transition duration-200">25 phút: bệnh viện Nhi Đồng 2</li>
                <li className="hover:text-darkgreen transition duration-200">25 phút: trung tâm quận 1, quận 7</li>
                <li className="hover:text-darkgreen transition duration-200">30 phút: trường quốc tế RMIT</li>
                <li className="hover:text-darkgreen transition duration-200">35 phút: sân bay Tân Sơn Nhất</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="matbang" className="px-10 py-5">
          <FloorSlider />
          <h2 className="text-3xl sm:text-4xl font-bold text-darkgreen pb-4 font-dancing">Thiết kế căn hộ hiện đại với diện tích lớn - sang trọng</h2>
          <p className="pb-1">
            Conic Boulevard thiết lập tiêu chuẩn sống đẳng cấp với những căn hộ diện tích lớn từ 84,32m2 đến 114m2,
            đáp ứng nhu cầu ngày càng cao về không gian sống rộng, thoáng giữa trung tâm thành phố.
            Trong bối cảnh “đất chật, người đông”, Conic Boulevard trở thành lựa chọn hiếm hoi mang
            lại sự thoải mái và tiện nghi cho gia đình nhiều thế hệ.
          </p>
          <div className="w-full">
            <img
              src="/mauab.jpg"
              alt="Mẫu căn hộ A và B"
              className="shadow-lg w-full object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src="/maucd.jpg"
              alt="Mẫu căn hộ C và D"
              className="shadow-lg w-full object-cover"
            />
          </div>
          <RegisterForm />
        </section>

        <section className="bg-white bg-opacity-70 px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-base sm:text-lg md:text-2xl font-semibold text-green-800 mb-6 leading-relaxed">
              Đặc điểm nổi bật trong thiết kế căn hộ tại Conic Boulevard so với chung cư khác tại khu vực như:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base md:text-lg text-white font-medium">
              <div className="bg-green-500 rounded-xl py-3 px-6 text-center">
                Thiết kế 2 ban công, đối lưu không khí
              </div>
              <div className="bg-green-500 rounded-xl py-3 px-6 text-center">
                Diện tích lớn, căn nhỏ nhất 84,6m²
              </div>
              <div className="bg-green-500 rounded-xl py-3 px-6 text-center">
                Thiết kế căn 3PN linh động cho việc sử dụng
              </div>
              <div className="bg-green-500 rounded-xl py-3 px-6 text-center">
                Tất cả các căn đều có ban công
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              {/* Video 1 */}
              <div className="pt-8 max-w-5xl w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/4rvx9gn-1UI"
                  title="Video giới thiệu căn hộ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm sm:text-base italic text-gray-700 mt-4 text-center">
                Video căn hộ 2 phòng ngủ diện tích 84,32 m²
              </p>

              {/* Video 2 */}
              <div className="pt-8 max-w-5xl w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/0Mc6heGCs2Q"
                  title="Video giới thiệu căn hộ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm sm:text-base italic text-gray-700 mt-4 text-center">
                Video căn hộ 3 phòng ngủ diện tích 114m²
              </p>
            </div>
          </div>
        </section>

        <section id="tiendo" className="px-10 py-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-darkgreen font-dancing pb-3 md:pb-5">Tiến Độ</h2>
          <p className="text-lg pb-4">
            CĂN HỘ <strong>CONIC BOULEVARD</strong> ĐÃ HOÀN THIỆN - SẴN SÀNG BÀN GIAO TỪ <strong>THÁNG 4/2025</strong>. <br />
            Với cương vị <strong>chủ đầu tư</strong>, chúng tôi cam kết xây dựng đúng quy chuẩn và đúng tiến độ,
            minh bạch về pháp lý, đảm bảo quyền lợi cho những cư dân tương lai của dự án.
            Chúng tôi cũng cam kết đồng hành cùng cư dân tương lai, đảm bảo cuộc sống tốt đẹp.
            Chúng tôi tin tưởng rằng <strong>Conic Boulevard</strong> sẽ là một biểu tượng mới của <strong>Bình Chánh</strong>,
            mang lại giá trị thật cho tất cả khách hàng của chúng tôi.
          </p>

          <h3 className="text-xl font-semibold text-darkgreen mb-2">
            VIDEO THỰC TẾ CĂN HỘ CONIC BOULEVARD
          </h3>

          <div className="w-full flex justify-center">
            <div className="max-w-5xl w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/PeD2KdxiGWA"
                title="Video thực tế căn hộ Conic Boulevard"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-[100%] w-full py-5">
            <img
              src="/thucte.jpg"
              alt="Thực tế Conic Boulevard"
              className="shadow-lg w-full object-cover"
            />
          </div>
          <div className="w-[100%] w-full">
            <img
              src="/bangiao.jpg"
              alt="Bàn giao Conic Boulevard"
              className="shadow-lg w-full object-cover"
            />
          </div>
        </section>

        <section id="giaban" className="px-6 md:px-20 py-5 md:py-10 bg-[#fdfaf5]">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-darkgreen font-dancing md:pb-4">Giá Bán</h2>
          <h2 className="text-2xl md:text-4xl text-center text-luxurybronze font-allura pt-3">
            Cơ hội vàng sở hữu căn hộ Conic Boulevard với mức giá bất ngờ
          </h2>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {/* Card 2 phòng ngủ */}
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-green-300 transition-transform hover:scale-105 hover:shadow-2xl">
              <img src="/giaban-2pn.jpg" alt="Căn hộ 2 phòng ngủ" className="w-full h-auto" />
              <div className="bg-[#a8844e] p-5 text-white">
                <div className="bg-[#603813] text-white px-4 py-2 rounded-t-md font-semibold text-lg text-center">
                  Căn hộ 2 phòng ngủ
                </div>
                <div className="pt-4 text-sm font-semibold">
                  Diện tích: <span className="text-white font-normal">84.6 m²</span>
                </div>
                <div className="mt-4 bg-white text-center text-[#a8844e] font-bold text-sm py-3 rounded-md">
                  GIÁ BÁN: Chỉ từ 2,5 tỷ VNĐ
                </div>
              </div>
            </div>

            {/* Card 3 phòng ngủ */}
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-green-300 transition-transform hover:scale-105 hover:shadow-2xl">
              <img src="/giaban-3pn.jpg" alt="Căn hộ 3 phòng ngủ" className="w-full h-auto" />
              <div className="bg-[#a8844e] p-5 text-white">
                <div className="bg-[#603813] text-white px-4 py-2 rounded-t-md font-semibold text-lg text-center">
                  Căn hộ 3 phòng ngủ
                </div>
                <div className="pt-4 text-sm font-semibold">
                  Diện tích: <span className="text-white font-normal">114 m²</span>
                </div>
                <div className="mt-4 bg-white text-center text-[#a8844e] font-bold text-sm py-3 rounded-md">
                  GIÁ BÁN: Chỉ từ 3,5 tỷ VNĐ
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl text-center text-luxurybronze font-allura pt-10 md:pt-16">
            Đột phá với mức giá rẻ nhất thị trường khu Tây
          </h2>

          <div className="w-[100%] w-full py-5">
            <img
              src="/bando.jpg"
              alt="Vị trí Conic Boulevard"
              className="shadow-lg w-full object-cover"
            />
          </div>
        </section>

        <section id="pttt" className="px-4 md:px-10 pb-5">
          <h2 className="text-3xl sm:text-4xl font-bold pt-4 text-darkgreen font-dancing text-center">
            Phương Thức Thanh Toán Mới Nhất Tháng 4/2025
          </h2>

          <div className="flex justify-center py-5">
            <img
              src="/pttt.jpg"
              alt="PTTT Conic Boulevard"
              className="shadow-lg w-full max-w-4xl h-auto"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold pt-8 text-darkgreen font-dancing text-center">
            Phương Thức Thanh Toán Vay Ngân Hàng
          </h2>

          <div className="flex justify-center py-5">
            <img
              src="/ptvay.jpg"
              alt="PTTT Conic Boulevard"
              className="shadow-lg w-full max-w-4xl h-auto"
            />
          </div>

          <div className="flex justify-center pb-5 md:pt-10">
            <img
              src="/uudai.jpg"
              alt="Ưu đãi Conic Boulevard"
              className="shadow-lg w-full h-auto"
            />
          </div>

          <EndingRegisterForm />
        </section>
        {/* Nút Zalo */}
        <a
          href="https://zalo.me/0845588589"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-4 md:bottom-24 md:right-6 z-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
            alt="Zalo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-md shadow-lg transition-transform duration-300 animate-shake"
          />
        </a>

        {/* Nút Gọi điện */}
        <a href="tel:0845588589" className="fixed bottom-5 right-4 md:bottom-5 md:right-6 z-50">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="Call"
            className="w-10 h-10 md:w-14 md:h-14 animate-shake"
          />
        </a>

      </div>
    </>
  );
};

export default Home;
