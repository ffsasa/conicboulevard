const Hero = () => {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center relative mb-5"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Nội dung */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div className="flex flex-col justify-center items-center gap-4 px-4 sm:px-6 md:px-8 max-w-screen-md">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            CONIC BOULEVARD
          </h1>
          <p className="text-sm sm:text-base md:text-[1.3rem] italic font-semibold text-brightgreen pb-4 sm:pb-6">
            "ĐỦ GẦN ĐỂ TẬN HƯỞNG - ĐỦ XA ĐỂ RIÊNG TƯ"
          </p>
          <a
            href="#dangky2"
            className="group border border-white px-4 sm:px-6 py-2 rounded-md hover:text-brightgreen hover:border-brightgreen transition flex items-center text-sm sm:text-base"
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
