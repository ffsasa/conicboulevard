// src/pages/Home.jsx
import Hero from "../components/Hero";
import RegisterForm from "../components/RegisterForm";

const Home = () => {
    return (
      <>
        <div className="container mx-auto px-20">
          <section id="thongtin" className="p-10">
            <h2 className="text-4xl font-bold pb-1 text-black font-dancing">Thông tin dự án</h2>
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
          </section>
   
          <section id="vitri" className="p-10">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Hình ảnh bên trái */}
              <div className="flex justify-center items-start">
                <img
                  src="/vitri.jpg"
                  alt="Vị trí Conic Boulevard"
                  className="shadow-lg w-full max-w-2xl object-cover"
                />
              </div>

              {/* Văn bản bên phải canh giữa theo chiều cao */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-4xl pb-4 text-darkgreen font-dancing">Vị trí vàng</h2>
                <p>
                  Conic Boulevard tọa lạc tại đường Huỳnh Bá Chánh, xã Tân Kiên, huyện Bình Chánh, TP.HCM. 
                  Dự án nằm liền kề giao điểm của tuyến Quốc lộ 1A và đại lộ Võ Văn Kiệt thuận tiện cho việc di chuyển đến các quận trung tâm thành phố.
                </p>
                <p className="pt-4">
                  Với vị trí chiến lược này, cư dân dễ dàng kết nối với các khu vực như Quận 5, 6, 1, khu đô thị Phú Mỹ Hưng, hay các tỉnh miền Tây thông qua cao tốc Trung Lương.
                </p>                
              </div>             
            </div>
            <RegisterForm />
            <div className="flex flex-col md:flex-row gap-10 pt-10 items-center">
              {/* Văn bản bên trái */}
              <div className="w-[30%]">
                <h3 className="text-4xl text-darkgreen font-dancing pb-2">
                  Tâm điểm kết nối
                </h3>
                <p>
                  Bên cạnh đó, một loạt tuyến đường nghìn tỷ kết nối Bình Chánh với các tỉnh miền Tây 
                  đã và đang thực hiện càng giúp cư dân rút ngắn thời gian di chuyển, tạo thông suốt trong giao thương.
                </p>
              </div>

              {/* Video bên phải */}
              <div className="w-[70%] w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/3TP5MNMq74U?start=6"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
    
          <section id="tienich" className="p-10">
            <h2 className="text-2xl font-bold">Tiện ích</h2>
            <p>...</p>
          </section>
    
          <section id="matbang" className="p-10">
            <h2 className="text-2xl font-bold">Mặt bằng</h2>
            <p>...</p>
          </section>
    
          <section id="tiendo" className="p-10">
            <h2 className="text-2xl font-bold">Tiến độ</h2>
            <p>...</p>
          </section>
    
          <section id="giaban" className="p-10">
            <h2 className="text-2xl font-bold">Giá bán</h2>
            <p>...</p>
          </section>

          <section id="lienhe" className="p-10">
            <h2 className="text-2xl font-bold">Liên hệ</h2>
            <p>...</p>
          </section>
        </div>
      </>
    );
  };
  
  export default Home;
  