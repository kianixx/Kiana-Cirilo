function Achievements() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <section id="achievements" class="bg-gray-100 py-14">
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold text-black">
                My <span class="text-red-600">Achievements</span>
                </h1>
            </div>

            <div class="grid md:grid-cols-2 gap-0 justify-items-center">

                <div class="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden w-full max-w-sm hover:border-red-600/50 transition duration-300">
                <span class="absolute top-6 right-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">2025</span>
                <h3 class="text-xl font-bold text-white mb-2">10th ICT Congress: General IT Quiz Bowl</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                    2nd Placer
                </p>
                </div>

                <div class="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden w-full max-w-sm hover:border-red-600/50 transition duration-300">
                <span class="absolute top-6 right-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">2024</span>
                <h3 class="text-xl font-bold text-white mb-2">UCLM CCS Days: UI/UX Design Competition</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                    2nd Placer
                </p>
                </div>

            </div>
        </section>
    );
};

export default Achievements;