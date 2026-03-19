function Contact() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <section id="contact" class="max-w-4xl mx-auto px-4 py-24 text-center">
            <h2 class="text-5xl font-bold text-white mb-6">
                Start a <span class="text-red-600">Conversation</span>
            </h2>
            <p class="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
                I'm still a student exploring web development and design. 
                Feel free to reach out if you want to share ideas, ask questions, or just say hi!
            </p>

            <div class="flex justify-center gap-6 mb-12">
                <a href="https://github.com/kianixx" target="_blank" 
                class="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:bg-red-600 transition">
                <img src="imgs/github.png" className="w-6 h-6 fill-white hover:fill-black" />
                </a>

                <a href="https://www.linkedin.com/in/kiana-kae-cirilo-a621833b7" target="_blank" 
                class="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:bg-red-600 transition">
                <img src="imgs/linkedin.png" className="w-6 h-6 fill-white hover:fill-black" />
                </a>

                <a href="mailto:kianacirilo23@gmail.com" 
                class="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:bg-red-600 transition">
                <img src="imgs/email.png" className="w-6 h-6 fill-white hover:fill-black" />
                </a>
            </div>

            <p class="text-zinc-600 text-sm">© 2026 All rights reserved.</p>
        </section>
    );
};

export default Contact;