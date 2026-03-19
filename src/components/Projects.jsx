function Projects() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <section id="projects" class="max-w-6xl mx-auto px-4 py-20 text-center">
            <h1 class="text-5xl font-bold mb-10">
                My <span class="text-red-600">Projects</span>
            </h1>

            <div class="mb-20">
                <h2 class="text-3xl font-bold text-left mb-8 text-red-600">Systems</h2>
                <div class="grid md:grid-cols-2 gap-10 justify-items-center">

                <div class="group relative h-[400px] w-full max-w-[700px] rounded-3xl overflow-hidden bg-zinc-900 cursor-default">
                    <img src="imgs/MultiVapeShop.png" 
                        class="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                        alt="MultiVape Shop"/>
                    <div class="absolute bottom-10 left-10 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 class="text-3xl font-bold">MultiVape Shop</h3>
                    </div>
                    <div class="absolute inset-0 bg-black/80 flex flex-col justify-end p-10 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 class="text-2xl font-bold mb-2">MultiVape Shop</h3>
                    <p class="text-gray-400 text-sm mb-6 leading-relaxed">Online vape shop</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-red-600 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Java</span>
                    </div>
                    </div>
                </div>

                <div class="group relative h-[400px] w-full max-w-[700px] rounded-3xl overflow-hidden bg-zinc-900 cursor-default">
                    <img src="imgs/GustoMoto.png" 
                        class="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                        alt="Gusto Moto"/>
                    <div class="absolute bottom-10 left-10 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 class="text-3xl font-bold">Gusto Moto</h3>
                    </div>
                    <div class="absolute inset-0 bg-black/80 flex flex-col justify-end p-10 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 class="text-2xl font-bold mb-2">Gusto Moto</h3>
                    <p class="text-gray-400 text-sm mb-6 leading-relaxed">Motor Rental System</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-red-600 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">C#</span>
                        <span class="bg-red-600 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">SQL Server Management Studio</span>
                    </div>
                    </div>
                </div>

                </div>
            </div>

            <div>
            <h2 class="text-3xl font-bold text-left mb-8 text-red-600">UI/UX Designs</h2>
            <div class="flex justify-center">
                <div class="group relative h-[750px] w-[350px] rounded-3xl overflow-hidden bg-zinc-900 cursor-default">
                <img 
                    src="imgs/chew.png" 
                    class="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                    alt="Mobile App Design"
                />
                <div class="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 class="text-2xl font-bold">Chew!</h3>
                </div>
                <div class="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 class="text-xl font-bold mb-2">Chew!</h3>
                    <p class="text-gray-400 text-sm mb-4 leading-relaxed">
                        Mobile app design for Meal Planning and Recipe Recommendation App
                    </p>
                    <div class="flex flex-wrap gap-2">
                    <span class="bg-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Figma</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Projects;