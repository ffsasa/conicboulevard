// src/pages/Home.jsx
import Hero from "../components/Hero";
import RegisterForm from "../components/RegisterForm";

const Home = () => {
    return (
      <>
        <div className="container mx-auto px-20">
          <section id="thongtin" className="px-10 py-5">
            <h2 className="text-4xl font-bold pb-1 text-black font-dancing">Tổng Quan Dự Án</h2>
            <h2 className="text-3xl font-bold pb-4 text-darkgreen">CONIC BOULEVARD</h2>
            
            <div className="flex flex-col md:flex-row gap-10">
              {/* Văn bản bên trái */}
              <div className="flex-1 text-base">
                <p>
                  <strong>Chủ đầu tư:</strong> Công Ty CP ĐT XD Khai Thác Công Trình 584<br />
                  <strong>Đơn vị Phát triển:</strong> Công Ty Lĩnh Phong - CONIC<br />
                  <strong>Quy mô dự án:</strong> Tổng diện tích: 5.3 Ha - Loại hình: Căn hộ chung cư<br />
                  <strong>Gồm 2 Block:</strong><br />
                  <div className="pl-3">
                    Block A: Có 4 đơn nguyên, cao 15 tầng 1 tầng hầm, tổng căn hộ 430 căn<br />
                    Block B: Có 5 đơn nguyên, cao 15 tầng 1 tầng hầm, tổng căn hộ 546 căn<br />
                  </div>
                  <strong>Diện tích căn hộ:</strong> từ 84 - 114 m<sup>2</sup>, từ 02 Phòng ngủ đến 03 phòng ngủ <br />
                </p>

                <div className="pt-4 space-y-2">
                  <p>
                    Tọa lạc ngay trung tâm thị trấn Tân Kiên Bình Chánh. Nằm biệt lập trong đường Huỳnh Bá Chánh, Conic Boulevard có lợi thế lớn về vị trí.
                  </p>
                  <p>
                    <strong>Vị trí thuận lợi:</strong> Nằm tại cửa ngõ phía nam thành phố, kết nối các tỉnh miền tây qua cao tốc Trung Lương, Quốc Lộ 1A. Kết nối Quận 5, 6, 1 qua Đại Lộ Võ Văn Kiệt. Khu đô thị Phú Mỹ Hưng qua đại lộ Nguyễn Văn Linh.
                  </p>
                  <p>
                    <strong>Tiện ích ngoại khu sầm uất:</strong> Dễ dàng tìm thấy các tiện ích đa dạng như trường học, bệnh viện, trung tâm thương mại chỉ trong bán kính 1 km.
                  </p>
                  <p>
                    <strong>Thiết kế căn hộ hiện đại:</strong> Hiện đại và tươi mới trong từng thiết kế nhưng không kém phần sang trọng và đẳng cấp.
                  </p>
                  <p>
                    <strong>Hệ thống hạ tầng hoàn thiện:</strong> Đường xá được nâng cấp.
                  </p>
                </div>
              </div>

              {/* Hình ảnh bên phải */}
              <div className="flex justify-center items-start -mt-11">
                <img
                  src="/thongtin.jpg"
                  alt="Thông tin dự án"
                  className="shadow-lg w-full max-w-xl object-cover"
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
   
          <section id="vitri" className="px-10 py-5">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Hình ảnh bên trái với dòng chữ bên dưới */}
              <div className="flex flex-col items-center justify-start">
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
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-4xl pb-4 text-darkgreen font-dancing">Vị Trí Đắc Địa</h2>
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
            <div className="flex flex-col md:flex-row gap-10 pt-10 items-center">
              {/* Văn bản bên trái */}
              <div className="w-[35%]">
                <h3 className="text-4xl text-darkgreen font-dancing pb-2">
                  Vị trí chiến lược, <br />
                  đón đầu tương lai
                </h3>
                <p className="pb-2">
                  Conic Boulevard toa lac kiêu hãnh tại khu Tây Nam TP.HCM, 
                  đón đầu sự phát triển của khu vực thông qua hàng loạt dự án hạ tầng giao thông nghìn tỷ. 
                  Đây không chỉ là nơi kết nối các tuyến giao thông trọng điểm mà còn là đầu mối thông thương liên vùng, 
                  đảm bảo khả năng di chuyển thuận tiện trong khu vực và liên tỉnh.
                </p>
                <p className="pb-2">
                  Đón đầu quy hoạch Bình Chánh - đầu mối quan trọng kết nối TP.HCM với các tỉnh ĐBSCL
                </p>
                <ul className="ml-2 list-disc pl-5">
                  <li>Đón đầu các dự án hạ tầng giao thông trọng điểm: Metro 3A (Bến Thành – Tân Kiên), tuyến đường sắt cao tốc TP.HCM -Cần Thơ</li>
                  <li>Đón đầu tuyến thủy lộ xuyên tâm dài gần 32km đi qua 7 quận/huyện của TP.HCM đang được đầu tư hơn 9.000 tỷ đồng - kênh Bến Cát - Tham Lương -Rach Nước Lên</li>
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
            <div className="pt-8 w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/3TP5MNMq74U?start=6"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
            </div>
          </section>
    
          <section id="tienich" className="px-10 py-5">
            <h2 className="text-2xl font-bold">Tiện ích</h2>
            <p>...</p>
          </section>
    
          <section id="matbang" className="px-10 py-5">
            <h2 className="text-2xl font-bold">Mặt bằng</h2>
            <p>...</p>
          </section>
    
          <section id="tiendo" className="px-10 py-5">
            <h2 className="text-2xl font-bold">Tiến độ</h2>
            <p>...</p>
          </section>
    
          <section id="giaban" className="px-10 py-5">
            <h2 className="text-2xl font-bold">Giá bán</h2>
            <p>...</p>
          </section>

          <section id="lienhe" className="px-10 py-5">
            <h2 className="text-2xl font-bold">Liên hệ</h2>
            <p>...</p>
          </section>
        </div>
      </>
    );
  };
  
  export default Home;
  