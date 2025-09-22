// src/pages/Home.jsx
import RegisterForm from "../components/RegisterForm";
import EndingRegisterForm from "../components/EndingRegisterForm";
import FullscreenImage from "../components/FullscreenImage";
import FullscreenVideo from "../components/FullscreenVideo";
import ImageCarousel from "../components/ImageCarousel";
import SectionWrapper from "../components/SectionWrapper";
import { FaBed, FaCrown } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";

const alignmentMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

const SectionHeading = ({ eyebrow, title, description, emphasis, align = "left" }) => {
  const alignmentClasses = alignmentMap[align] ?? alignmentMap.left;
  const dividerClass = align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto";
  const textAlignment = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
  const descriptionSpacing = align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto";

  return (
    <div className={`flex flex-col gap-3 ${alignmentClasses}`}>
      {eyebrow && (
        <span className="text-xs sm:text-sm uppercase tracking-[0.5em] text-luxurybronze/80">{eyebrow}</span>
      )}
      <h2 className="font-heading text-3xl sm:text-5xl text-darkgreen leading-tight">{title}</h2>
      <div className={`h-[3px] w-24 bg-gradient-to-r from-luxurybronze via-luxurybronze/50 to-transparent ${dividerClass}`} />
      {description && (
        <p className={`max-w-2xl text-sm sm:text-lg text-gray-600 ${textAlignment} ${descriptionSpacing}`}>{description}</p>
      )}
      {emphasis && (
        <p className={`max-w-xl text-base sm:text-lg font-medium text-darkgreen ${textAlignment}`}>{emphasis}</p>
      )}
    </div>
  );
};

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

  const projectStats = [
    { label: "Tổng diện tích", value: "5,3 ha" },
    { label: "Mật độ xây dựng", value: "28,7%" },
    { label: "Hình thức sở hữu", value: "Lâu dài" },
  ];

  const blockSummaries = [
    {
      title: "Quy mô tổng thể",
      items: ["114 căn nhà phố sang trọng", "2 khối căn hộ với 952 căn hộ và 24 shophouse"],
    },
    {
      title: "Block A",
      items: ["4 nguyên đơn cao 15 tầng cùng 1 tầng hầm", "420 căn hộ và 10 căn shophouse thương mại"],
    },
    {
      title: "Block B",
      items: ["5 nguyên đơn cao 15 tầng cùng 1 tầng hầm", "532 căn hộ và 14 căn shophouse"],
    },
  ];

  const projectMilestones = [
    { label: "Bàn giao Block B", value: "02/04/2025" },
    { label: "Bàn giao Block A", value: "Quý 04/2025" },
    { label: "Sổ hồng", value: "02/06/2025" },
  ];

  const locationAdvantages = [
    "Tọa lạc ngay nút giao Võ Văn Kiệt và Quốc Lộ 1A.",
    "Kết nối Quận 5, 6, 1 qua Đại Lộ Võ Văn Kiệt.",
    "Thuận tiện đi các tỉnh miền Tây qua cao tốc Trung Lương và Quốc Lộ 1A.",
    "Liên kết 7 quận, huyện thông qua tuyến kênh Tham Lương – Bến Cát – Rạch Nước Lên (32 km).",
  ];

  const strategicHighlights = [
    "Đón đầu quy hoạch Bình Chánh - đầu mối trọng yếu kết nối TP. HCM và ĐBSCL.",
    "Tiệm cận các dự án hạ tầng trọng điểm: Metro 3A (Bến Thành – Tân Kiên), đường sắt cao tốc TP.HCM - Cần Thơ.",
    "Lợi thế tuyến thủy lộ xuyên tâm dài gần 32 km với nguồn vốn đầu tư hơn 9.000 tỷ đồng.",
  ];

  const travelTimes = [
    { label: "Bến xe Miền Tây", time: "5 phút" },
    { label: "Chợ Bình Chánh", time: "7 phút" },
    { label: "THPT Bình Tân", time: "8 phút" },
    { label: "Aeon Mall Tên Lửa", time: "10 phút" },
    { label: "UBND Bình Chánh", time: "15 phút" },
    { label: "Làng đại học Q.7", time: "20 phút" },
    { label: "Bệnh viện Nhi Đồng 2", time: "25 phút" },
    { label: "Trung tâm Quận 1 & 7", time: "25 phút" },
    { label: "Đại học RMIT", time: "30 phút" },
    { label: "Sân bay", time: "35 phút" },
  ];

  return (
    <>
      <div className="w-full px-2 sm:px-6 lg:px-10">
        <SectionWrapper id="thongtin" innerClassName="max-w-screen-2xl mx-auto">
          <div className="space-y-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-stretch">
              <div className="w-full md:w-1/2">
                <div className="h-full rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 p-6 sm:p-10 shadow-[0_25px_80px_-40px_rgba(1,68,33,0.45)] backdrop-blur">
                  <SectionHeading
                    eyebrow="Conic Boulevard"
                    title="Tổng quan dự án"
                    description="Khu phức hợp nhà phố và căn hộ cao cấp tại cửa ngõ Tây Sài Gòn với quy hoạch đồng bộ, chuẩn mực cho một cộng đồng thịnh vượng."
                    emphasis="Không gian sống chuẩn resort với tiện ích khép kín và pháp lý minh bạch."
                  />

                  <dl className="mt-8 grid gap-4">
                    {projectStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col gap-1 rounded-2xl border border-luxurybronze/20 bg-white/70 px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">{stat.label}</dt>
                        <dd className="font-heading text-2xl text-darkgreen">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 space-y-6 text-sm sm:text-base leading-relaxed text-gray-700">
                    {blockSummaries.map((block) => (
                      <div key={block.title}>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-darkgreen">{block.title}</p>
                        <ul className="mt-3 space-y-2 list-disc list-inside marker:text-luxurybronze">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl border border-luxurybronze/30 bg-gradient-to-r from-emerald-50/70 via-white to-emerald-50/40 p-6 shadow-inner">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-darkgreen/70">Tiến độ dự án</p>
                    <ul className="mt-4 space-y-3 text-sm sm:text-base text-darkgreen">
                      {projectMilestones.map((milestone) => (
                        <li key={milestone.label} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <span className="font-medium">{milestone.label}</span>
                          <span className="font-heading text-lg">{milestone.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative h-full overflow-hidden rounded-[2.75rem] border border-white/40 shadow-[0_30px_90px_-50px_rgba(96,56,19,0.6)]">
                  <FullscreenImage src="/thongtin.jpg" alt="Thông tin dự án" className="h-full" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-emerald-100/10" />
                </div>
              </div>
            </div>

            {/* Hình ảnh bên phải */}
            <div className="w-full">
              <img
                src="/promotion.jpg"
                alt="Thông tin khuyến mãi"
                className="w-full rounded-[2.75rem] border border-white/50 object-cover shadow-[0_40px_110px_-60px_rgba(96,56,19,0.65)]"
              />
            </div>

            <div className="pt-2">
              <div className="rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 shadow-[0_25px_80px_-45px_rgba(1,68,33,0.35)] overflow-hidden">
                <RegisterForm />
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="vitri" innerClassName="max-w-screen-2xl mx-auto">
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Kết nối vùng"
              title="Vị trí kết nối chiến lược"
              description="Nằm trên trục huyết mạch Võ Văn Kiệt – Quốc Lộ 1A, Conic Boulevard là tâm điểm giao thương của khu Tây, giúp cư dân dễ dàng di chuyển đến trung tâm thành phố và các tỉnh miền Tây."
              align="center"
            />

            {/* Văn bản bên phải canh giữa theo chiều cao */}
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/40 shadow-[0_30px_90px_-55px_rgba(1,68,33,0.45)]">
                <FullscreenImage src="/vitri.jpg" alt="Vị trí Conic Boulevard" className="h-full" />
              </div>

              {/* Văn bản bên trái */}
              <div className="rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 p-6 sm:p-10 shadow-[0_25px_80px_-40px_rgba(96,56,19,0.45)]">
                <SectionHeading title="Kết nối đa chiều" description="Hệ thống giao thông hoàn thiện giúp cư dân di chuyển nhanh chóng đến các quận trung tâm và hạ tầng tiện ích hiện hữu." />
                <ul className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
                  {locationAdvantages.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-luxurybronze" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ảnh bên phải */}
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 p-6 sm:p-10 shadow-[0_25px_80px_-40px_rgba(1,68,33,0.45)]">
                <SectionHeading title="Tâm điểm phát triển tương lai" description="Sở hữu vị thế chiến lược giữa các dự án hạ tầng quy mô, Conic Boulevard đón đầu làn sóng đầu tư và gia tăng giá trị bền vững." />
                <ul className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
                  {strategicHighlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/40 shadow-[0_30px_90px_-55px_rgba(96,56,19,0.55)]">
                <FullscreenImage src="/map.jpg" alt="Bản đồ vị trí Conic Boulevard" className="h-full" />
              </div>
            </div>

            <div className="flex justify-center">
              <FullscreenVideo
                videoUrl="https://www.youtube.com/embed/OHxAjoKIL6I?enablejsapi=1"
                className="w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/40 shadow-[0_35px_110px_-60px_rgba(1,68,33,0.5)]"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="tienich" innerClassName="max-w-screen-2xl mx-auto">
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Hệ tiện ích"
              title="Tiện ích nội khu đẳng cấp"
              description="Chuỗi tiện ích đa tầng được thiết kế độc quyền cho cư dân Conic Boulevard, mang lại trải nghiệm sống chuẩn resort trong lòng thành phố."
              align="center"
            />

            <FullscreenImage src="/tienich.jpg" alt="Tiện ích nội khu" className="rounded-[2.75rem]" />

            <div className="flex justify-center">
              <FullscreenVideo
                videoUrl="https://www.youtube.com/embed/RWv_a_XXLOQ?enablejsapi=1"
                className="w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/40 shadow-[0_35px_110px_-60px_rgba(96,56,19,0.5)]"
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/40 shadow-[0_30px_90px_-55px_rgba(1,68,33,0.45)]">
                <FullscreenImage src="/tienichdichuyen.jpg" alt="Liên kết tiện ích" className="h-full" />
              </div>

              <div className="rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 p-6 sm:p-10 shadow-[0_25px_80px_-40px_rgba(96,56,19,0.45)]">
                <SectionHeading title="Thời gian di chuyển lý tưởng" description="Khoảng cách hoàn hảo để tận hưởng đầy đủ tiện ích ngoại khu chỉ trong vài phút di chuyển." />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {travelTimes.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-luxurybronze/20 bg-white/80 px-5 py-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">{item.time}</p>
                      <p className="mt-2 font-heading text-lg text-darkgreen">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="matbang" innerClassName="max-w-screen-2xl mx-auto">
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Mặt bằng"
              title="Bố trí không gian tinh tế"
              description="Thiết kế tối ưu công năng và tầm nhìn, mang lại trải nghiệm sống đẳng cấp cho từng căn hộ."
              align="center"
            />

            <div className="space-y-10">
              <div className="rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 p-6 shadow-[0_25px_80px_-45px_rgba(1,68,33,0.4)]">
                <SectionHeading title="Mặt bằng tầng điển hình - Block A" align="center" />
                <div className="mt-6">
                  <FullscreenImage src="/blocka2.jpg" alt="Mặt bằng tầng điển hình Block A" className="rounded-[2.5rem]" />
                </div>
              </div>

              <div className="rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 p-6 shadow-[0_25px_80px_-45px_rgba(96,56,19,0.4)]">
                <SectionHeading title="Mặt bằng tầng điển hình - Block B" align="center" />
                <div className="mt-6">
                  <FullscreenImage src="/blockb2.jpg" alt="Mặt bằng tầng điển hình Block B" className="rounded-[2.5rem]" />
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="hinhanh" innerClassName="max-w-screen-2xl mx-auto">
          {/* <FloorSlider /> */}
          <div className="space-y-16">
            <SectionHeading
              eyebrow="Trải nghiệm thực tế"
              title="Bộ sưu tập hình ảnh căn hộ mẫu"
              description="Khám phá không gian sống chuẩn mực thông qua bộ hình ảnh và video thực tế được ghi lại tại dự án."
              align="center"
            />

            {gallerySections.map((section, index) => (
              <div
                key={section.videoUrl ?? index}
                className="space-y-8 rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 p-6 sm:p-10 shadow-[0_25px_80px_-45px_rgba(1,68,33,0.35)]"
              >
                <SectionHeading title={section.title} />
                <ImageCarousel images={section.images} />
                <div className="flex justify-center">
                  <FullscreenVideo
                    videoUrl={section.videoUrl}
                    className="w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/40 shadow-[0_35px_110px_-60px_rgba(96,56,19,0.5)]"
                  />
                </div>
                <p className="text-sm sm:text-base italic text-gray-600 text-center">{section.caption}</p>
              </div>
            ))}

            <div className="rounded-[2.75rem] border border-luxurybronze/20 bg-white/80 shadow-[0_25px_80px_-45px_rgba(1,68,33,0.35)] overflow-hidden">
              <RegisterForm />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="giaban" innerClassName="max-w-screen-2xl mx-auto">
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Giá bán"
              title="Bảng giá căn hộ Conic Boulevard"
              description="Những lựa chọn linh hoạt phù hợp nhu cầu an cư và đầu tư, kèm nhiều ưu đãi độc quyền dành riêng cho cư dân tiên phong."
              align="center"
            />

            <div className="sm:mt-5 rounded-[2.75rem] bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f0e6)] p-5 sm:p-8 shadow-[0_25px_80px_-45px_rgba(96,56,19,0.35)] border border-luxurybronze/20">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {priceCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.id}
                      className="group relative flex w-full flex-col rounded-3xl border border-luxurybronze/40 bg-gradient-to-br from-white via-white to-emerald-50/70 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-luxurybronze/70 hover:shadow-2xl"
                    >
                      <div className="relative overflow-hidden rounded-2xl">
                        <img src={card.image} alt={card.title} className="h-48 w-full rounded-2xl object-cover sm:h-56" />
                      </div>

                      <div className="mt-5 flex flex-1 flex-col gap-5">
                        <header className="flex items-start gap-3">
                          <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-darkgreen shadow-inner">
                            <Icon className="text-2xl" />
                          </span>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">{card.subtitle}</p>
                            <h3 className="text-lg font-semibold text-darkgreen sm:text-xl">{card.title}</h3>
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
                              className={`${index > 0 ? "mt-3 border-t border-dashed border-luxurybronze/30 pt-3" : ""} flex items-baseline justify-between gap-3`}
                            >
                              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">{price.label}</span>
                              <span className="text-2xl font-heading text-darkgreen">{price.value}</span>
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

            <div className="rounded-[2.75rem] border border-[#d6b071]/60 bg-gradient-to-r from-[#fdf3e7] to-[#f6e0bd] p-6 sm:p-10 shadow-[0_25px_80px_-45px_rgba(96,56,19,0.35)]">
              <h3 className="text-lg sm:text-3xl font-heading font-semibold text-[#603813] text-center uppercase tracking-[0.35em]">
                Giá bán đất nền Conic Boulevard
              </h3>
              <p className="mt-4 text-sm sm:text-xl text-gray-700 text-center">
                Lô tiêu chuẩn <span className="font-semibold text-darkgreen">5m × 20m (100m²)</span> với hai vị trí vàng phù hợp nhu cầu đầu tư và an cư.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/70 p-4 shadow-md">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-darkgreen text-white text-lg font-semibold">1</span>
                  <div className="text-sm sm:text-lg text-[#603813]">
                    <p className="font-heading text-xl text-darkgreen">5 tỷ</p>
                    <p className="text-gray-600">Mặt tiền đường số 1 lộ giới 18m</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/70 p-4 shadow-md">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-darkgreen text-white text-lg font-semibold">2</span>
                  <div className="text-sm sm:text-lg text-[#603813]">
                    <p className="font-heading text-xl text-darkgreen">7 tỷ</p>
                    <p className="text-gray-600">Mặt tiền đường nội khu – đối diện công viên</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <EndingRegisterForm />

        {/* Nút Zalo */}
        <a href="https://zalo.me/0941841024" target="_blank" rel="noopener noreferrer" className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
            alt="Zalo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-md shadow-lg transition-transform duration-300 animate-shake"
          />
        </a>

        {/* Nút Gọi điện */}
        <a href="tel:0941841024" className="fixed bottom-5 right-4 md:bottom-5 md:right-6 z-50">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Call" className="w-12 h-12 md:w-14 md:h-14 animate-shake" />
        </a>
      </div>
    </>
  );
};

export default Home;
