function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex justify-between items-center px-10 py-5">
      <img src="/imgs/kai-logo.png" alt="Logo" className="w-12 h-12 object-contain" />

      <nav className="hidden md:flex space-x-8 text-gray-300">
        <a href="#about" className="hover:text-red-500">About</a>
        <a href="#education" className="hover:text-red-500">Education</a>
        <a href="#skills" className="hover:text-red-500">Skills</a>
        <a href="#achievements" className="hover:text-red-500">Achievements</a>
        <a href="#projects" className="hover:text-red-500">Projects</a>
      </nav>

      <button
        onClick={() => scrollToSection("contact")}
        className="bg-red-500 px-5 py-2 rounded-full font-semibold hover:bg-red-600"
      >
        Contact Me
      </button>
    </header>
  );
}

export default Header;