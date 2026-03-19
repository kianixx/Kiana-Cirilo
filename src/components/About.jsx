function About() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" class="bg-gray-100 py-24">

    <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-20 text-black">
        About <span class="text-red-500">Me</span>
        </h2>
    <div class="grid md:grid-cols-2 gap-16 items-center">

    <div class="relative flex justify-center">

        <div class="absolute w-80 h-96 bg-red-600 rounded-2xl rotate-12"></div>

        <img src="imgs/me.png" alt="Kiana Cirilo" className="relative w-80 h-96 object-cover rounded-2xl shadow-lg" />

    </div>

    <div>
        <p class="text-gray-700 text-lg mb-6">
        I'm a passionate developer who enjoys creating simple and meaningful digital experiences.
        I focus on building clean, responsive, and user-friendly web designs.
        </p>

        <p class="text-gray-700 text-lg mb-10">
        Currently studying at the University of Cebu Lapu-lapu and Manduae as a 3rd year IT Student and improving my skills in front-end development while working on personal projects.
        </p>

        <div class="flex gap-6">

        <div class="bg-black text-white px-6 py-3 rounded-full">
            <span class="text-red-500 font-semibold">1+</span> Years Experience
        </div>

        <div class="bg-black text-white px-6 py-3 rounded-full">
            <span class="text-red-500 font-semibold">2+</span> Projects Completed
        </div>

        </div>
    </div>
    </div>
    </div>
</section>
    );
};

export default About;