const Hero = () => {
    return (
      <section
        className="w-screen h-screen bg-cover bg-center relative mb-5"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
        {/* Nội dung hiển thị ở giữa ảnh */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div className="flex flex-col justify-center items-center gap-6 px-4">
            <h1 className="text-4xl md:text-6xl font-bold">CONIC BOULEVARD</h1>
            <p className="text-lg md:text-[1.3rem] italic font-semibold text-brightgreen pb-6">"ĐỦ GẦN ĐỂ TẬN HƯỞNG - ĐỦ XA ĐỂ RIÊNG TƯ"</p>
            <a 
              href="#lienhe"
              className="group border border-white px-6 py-2 rounded-md hover:text-brightgreen hover:border-brightgreen transition flex items-center"
            >
              <i className="fas fa-file-signature text-white pr-2 group-hover:text-brightgreen transition"></i>
              Đăng ký ngay
            </a>

          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  