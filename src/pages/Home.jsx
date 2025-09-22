// src/pages/Home.jsx
import RegisterForm from "../components/RegisterForm";
import EndingRegisterForm from "../components/EndingRegisterForm";
import FullscreenImage from "../components/FullscreenImage";
import FullscreenVideo from "../components/FullscreenVideo";
import ImageCarousel from "../components/ImageCarousel";
import SectionWrapper from "../components/SectionWrapper";
import { FaBed, FaCrown } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";

const Home = () => {

  const createSlides = (folder, count, altBase) =>
  Array.from({ length: count }, (_, index) => ({
    src: `/${folder}/${index + 1}.jpg`,
    alt: `${altBase} - Hình ${index + 1}`,
  }));

  const gallerySections = [
    {
      images: createSlides("maub", 13, "Mẫu căn hộ B"),
      videoUrl: "https://www.youtube.com/embed/p_3ldfGiZH8?enablejsapi=1",
      caption: "Video thực tế căn hộ 2 phòng ngủ 84m² - Conic Boulevard",
      title: "HÌNH ẢNH THỰC TẾ CĂN HỘ 2 PHÒNG NGỦ 84m² – CONIC BOULEVARD",
    },
    {
      images: createSlides("mauc", 6, "Mẫu căn hộ C1/C2"),
      videoUrl: "https://www.youtube.com/embed/RvNsxklD32w?enablejsapi=1",
      caption: "Video thực tế căn hộ 2 phòng ngủ 85m² - Conic Boulevard",
      title: "HÌNH ẢNH THỰC TẾ CĂN HỘ 2 PHÒNG NGỦ 85m² – CONIC BOULEVARD",
    },
    {
      images: createSlides("maud", 13, "Mẫu căn hộ D"),
      videoUrl: "https://www.youtube.com/embed/ME0pLer1Kx0?enablejsapi=1",
      caption: "Video thực tế căn hộ góc 2 phòng ngủ 89m² - Conic Boulevard",
      title: "HÌNH ẢNH THỰC TẾ CĂN HỘ GÓC 2 PHÒNG NGỦ 89m² – CONIC BOULEVARD",
    },
    {
      images: createSlides("maua", 15, "Mẫu căn hộ A"),
      videoUrl: "https://www.youtube.com/embed/pMdQXzUlJRI?enablejsapi=1",
      caption: "Video thực tế căn hộ góc 3 phòng ngủ 114m² - Conic Boulevard",
      title: "HÌNH ẢNH THỰC TẾ CĂN HỘ GÓC 3 PHÒNG NGỦ 114m² – CONIC BOULEVARD",
    },
  ];

  const priceCards = [
    {
      id: "two-bed-84",
      title: "Căn hộ 2 phòng ngủ",
      subtitle: "Layout tiêu chuẩn",
      image: "/giaban-2pn.jpg",
      area: "84 m²",
      highlight: "Ban công thông thoáng, tối ưu ánh sáng tự nhiên.",
      prices: [
        { label: "Giao nhà thô", value: "2,2 tỷ VNĐ" },
        { label: "Giao nhà hoàn thiện", value: "2,75 tỷ VNĐ" },
      ],
      icon: FaBed,
    },
    {
      id: "two-bed-85",
      title: "Căn hộ 2 phòng ngủ",
      subtitle: "View công viên nội khu",
      image: "/giaban-2pn2.jpg",
      area: "85 m²",
      highlight: "Không gian mở liền mạch phòng khách - bếp.",
      prices: [
        { label: "Giao nhà thô", value: "2,1 tỷ VNĐ" },
        { label: "Giao nhà hoàn thiện", value: "2,55 tỷ VNĐ" },
      ],
      icon: FaBed,
    },
    {
      id: "two-bed-89",
      title: "Căn hộ 2 phòng ngủ",
      subtitle: "Căn góc hai mặt thoáng",
      image: "/giaban-2pn3.jpg",
      area: "89 m²",
      highlight: "Hai logia riêng, đón gió tự nhiên mọi thời điểm.",
      prices: [
        { label: "Giao nhà thô", value: "2,8 tỷ VNĐ" },
        { label: "Giao nhà hoàn thiện", value: "3,15 tỷ VNĐ" },
      ],
      icon: FaBed,
    },
    {
      id: "three-bed-114",
      title: "Căn hộ 3 phòng ngủ",
      subtitle: "Không gian sống đẳng cấp",
      image: "/giaban-3pn.jpg",
      area: "114 m²",
      highlight: "Phòng master rộng, khu vực sinh hoạt riêng tư.",
      prices: [
        { label: "Giao nhà thô", value: "3,3 tỷ VNĐ" },
        { label: "Giao nhà hoàn thiện", value: "3,8 tỷ VNĐ" },
      ],
      icon: GiFamilyHouse,
    },
  ];

  return (
    <>
      <div className="w-full px-2 sm:px-6 lg:px-10">
        <SectionWrapper id="thongtin" innerClassName="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-start">
            {/* Khối bên trái chứa tiêu đề + nội dung */}
            <div className="w-full md:w-2/5 flex flex-col">
              <h2
                className="text-3xl sm:text-5xl font-bold text-lightgreen"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontStyle:  "italic"
                }}
              >
                Tổng Quan Dự Án
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-luxurybronze/60 md:mx-0" />

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
              />
            </div>
          </div>

          <div className="w-full mt-8">
            <img
              src="/promotion.jpg"
              alt="Thông tin khuyến mãi"
              className="w-full h-auto object-cover rounded-3xl shadow-[0_25px_80px_-35px_rgba(96,56,19,0.55)] ring-1 ring-luxurybronze/20"
            />
          </div>

          <div className="pb-4 md:pb-0">
            <RegisterForm />
          </div>
        </SectionWrapper>

        <SectionWrapper id="vitri" innerClassName="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            {/* Hình ảnh bên trái với dòng chữ bên dưới */}
            <div className="w-full md:w-[60%]">
              <FullscreenImage
                src="/vitri.jpg"
                alt="Vị trí Conic Boulevard"
              />
            </div>

            {/* Văn bản bên phải canh giữa theo chiều cao */}
            <div className="w-full md:w-[40%] sm:pl-16">
              <h2 className="text-3xl sm:text-6xl font-bold text-darkgreen font-dancing">
                Vị Trí
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-luxurybronze/60 md:mx-0" />
              <ul className="text-sm sm:text-3xl space-y-5 list-disc pl-9 pt-4">
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
              <h3 className="text-3xl sm:text-5xl font-bold text-darkgreen font-dancing">
                Vị trí chiến lược, <br className="hidden md:inline" />
                đón đầu tương lai
              </h3>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-luxurybronze/60 md:mx-0" />
              <ul className="list-none text-sm sm:text-2xl text-darkgreen sm:space-y-5 pt-4">
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
                  src="/map.jpg"
                  alt="Vị trí Conic Boulevard"
                  className="absolute inset-0 h-full"
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
        </SectionWrapper>

        <SectionWrapper id="tienich" innerClassName="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen font-dancing">
            Tiện Ích
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-luxurybronze/60 md:mx-0" />

          <div className="w-full pt-4">
            <FullscreenImage
              src="/tienich.jpg"
              alt="Tiện ích nội khu"
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
              />
            </div>
            <div className="w-full md:w-[35%]">
              <h2 className="text-3xl sm:text-5xl font-bold text-darkgreen font-dancing">
                Thời gian di chuyển đến các tiện ích trong khu vực.
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-luxurybronze/60 md:mx-0" />
              <ul className="list-none ml-4 list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-2xl mt-4">
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
        </SectionWrapper>

        <SectionWrapper id="matbang" innerClassName="max-w-screen-2xl mx-auto">
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
          <h2 className="text-md sm:text-4xl font-bold font-dancing text-darkgreen text-center sm:pt-8 sm:mb-2">
            Mặt Bằng Tầng Điển Hình -  Block B
          </h2>
          <div className="w-full">
            <FullscreenImage
              src="/blockb2.jpg"
              alt="Tiện ích nội khu"
              className="shadow-lg w-full object-cover"
            />
          </div>
        </SectionWrapper>

        <SectionWrapper id="hinhanh" innerClassName="max-w-screen-2xl mx-auto">
          {/* <FloorSlider /> */}
          <div className="space-y-10 sm:space-y-16">
            {gallerySections.map((section, index) => (
              <div key={section.videoUrl ?? index}>
                <h2 className="text-3xl sm:text-4xl font-bold text-darkgreen sm:pt-6 font-dancing">{section.title}</h2>
                <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-luxurybronze/60 md:mx-0 mb-4" />
                <ImageCarousel images={section.images} />
                <div className="pt-4 md:pt-16 pb-4 md:pb-0 w-full flex justify-center">
                  <FullscreenVideo
                    videoUrl={section.videoUrl}
                    className="w-full max-w-5xl aspect-video"
                  />
                </div>
                <p className="text-sm sm:text-base italic text-gray-700 mt-2 sm:mt-4 text-center">
                  {section.caption}
                </p>
              </div>
            ))}
          </div>
          
          <RegisterForm />
        </SectionWrapper>

        <SectionWrapper id="giaban" innerClassName="max-w-screen-2xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-bold text-darkgreen font-dancing">GIÁ BÁN CĂN HỘ CONIC BOULEVARD</h2>
          <div className="sm:mt-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f0e6)] p-5 sm:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {priceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.id}
                    className="group relative flex w-full flex-col rounded-3xl border border-luxurybronze/40 bg-gradient-to-br from-white via-white to-emerald-50/70 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-luxurybronze/70 hover:shadow-2xl"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-48 w-full rounded-2xl object-cover sm:h-56"
                      />
                    </div>
                    <div className="mt-5 flex flex-1 flex-col gap-5">
                      <header className="flex items-start gap-3">
                        <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-darkgreen shadow-inner">
                          <Icon className="text-2xl" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                            {card.subtitle}
                          </p>
                          <h3 className="text-lg font-semibold text-darkgreen sm:text-xl">
                            {card.title}
                          </h3>
                        </div>
                      </header>

                      <div className="rounded-2xl border border-luxurybronze/30 bg-white/80 p-4 shadow-sm">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-700">Diện tích</p>
                        <p className="mt-2 text-xl font-heading text-darkgreen">{card.area}</p>
                        <p className="mt-2 text-sm text-gray-600">{card.highlight}</p>
                      </div>

                      <div className="rounded-2xl border border-luxurybronze/40 bg-white/90 p-4 shadow-sm">
                        {card.prices.map((price, index) => (
                          <div
                            key={price.label}
                            className={`${
                              index > 0
                                ? "mt-3 border-t border-dashed border-luxurybronze/30 pt-3"
                                : ""
                            } flex items-baseline justify-between gap-3`}
                          >
                            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                              {price.label}
                            </span>
                            <span className="text-2xl font-heading text-darkgreen">
                              {price.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-emerald-100/80 via-white to-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-darkgreen shadow">
                        <FaCrown className="text-base text-luxurybronze" />
                        Nhận ưu đãi
                      </span>
                    </div>
                  </article>
                );
              })}
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
                    <p className="text-gray-600">Mặt tiền đường số 1 lộ giới 18m</p>
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
        </SectionWrapper>

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
