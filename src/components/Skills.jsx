function Skills() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
        <section id="skills" class="max-w-4xl mx-auto px-4 py-20">
        <div class="text-center mb-16">
            <h1 class="text-5xl font-bold text-white">
            My <span class="text-red-600">Skills</span>
            </h1>
        </div>

        <div class="flex flex-col gap-8">
            
            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-red-600/50 transition duration-300">
            <h2 class="text-2xl font-bold text-white min-w-[250px]">Frontend Development</h2>
            <div class="flex flex-wrap gap-3 justify-start md:justify-end">
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">HTML</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">CSS</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">JavaScript</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">Tailwind CSS</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">Figma</span>
            </div>
            </div>

            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-red-600/50 transition duration-300">
            <h2 class="text-2xl font-bold text-white min-w-[250px]">Backend Development</h2>
            <div class="flex flex-wrap gap-3 justify-start md:justify-end">
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">SQL Server Management Studio</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">PHP</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">Laravel</span>
            </div>
            </div>

            <div class="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-red-600/50 transition duration-300">
            <h2 class="text-2xl font-bold text-white min-w-[250px]">Other Languages</h2>
            <div class="flex flex-wrap gap-3 justify-start md:justify-end">
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">C</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">C++</span>
                <span class="bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-red-600 transition">Java</span>
            </div>
            </div>

        </div>
        </section>
    );
};

export default Skills;