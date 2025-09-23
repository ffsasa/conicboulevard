const Hero = () => {
  return (
    <section className="relative mb-5 h-screen w-screen overflow-hidden">
      <picture className="pointer-events-none absolute inset-0 block h-full w-full">
        <source media="(min-width: 1024px)" srcSet="/hero.jpg" />
        <img
          src="/hero-mobile.jpg"
          alt="Phối cảnh tổng quan dự án Conic Boulevard"
          className="h-full w-full object-cover"
          fetchpriority="high"
          decoding="async"
          sizes="100vw"
          srcSet="/hero-mobile.jpg 960w, /hero.jpg 1920w"
        />
      </picture>

      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Nội dung */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="flex max-w-screen-md flex-col items-center justify-center gap-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">CONIC BOULEVARD</h1>
          <p className="pb-4 text-sm font-semibold italic text-brightgreen sm:pb-6 sm:text-base md:text-[1.3rem]">
            "NHẬN KÝ GỬI - MUA BÁN - CHO THUÊ"
          </p>
          <a
            href="#dangky2"
            className="group flex items-center rounded-md border border-white px-4 py-2 text-sm transition hover:border-brightgreen hover:text-brightgreen sm:px-6 sm:text-base"
          >
            <i className="fas fa-file-signature pr-2 text-white transition group-hover:text-brightgreen" />
            Đăng ký ngay
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
