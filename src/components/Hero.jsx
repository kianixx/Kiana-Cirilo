function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-red-900/20 to-black">
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Hi, I'm <span className="text-red-500">Kai</span>!
      </h1>

      <p className="text-gray-400 max-w-xl text-xl mb-4">
        Student & Aspiring Front-End Developer
      </p>

      <p className="text-gray-400 max-w-xl text-lg mb-10">
        I enjoy designing and building simple, clean websites and learning new ways to improve user experience.
      </p>

      <button
        onClick={() => scrollToSection("about")}
        className="border border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition"
      >
        Learn More
      </button>

      <div className="mt-20 animate-bounce text-red-500 text-4xl">
        ⇩
      </div>
    </section>
  );
}

export default Hero;