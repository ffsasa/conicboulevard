const Hero = () => {
    return (
      <section
        className="w-screen h-screen bg-cover bg-center relative -mt-0"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
        {/* Nội dung hiển thị ở giữa ảnh */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div className="px-4">
            <h1 className="text-4xl md:text-6xl font-bold"></h1>
            <p className="text-lg md:text-2xl mt-4"></p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  