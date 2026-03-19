function Education() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

    return (
        <section id="education" class="min-h-screen py-20 px-6">
            <div class="max-w-4xl mx-auto text-center mb-16">
                <h1 class="text-5xl font-bold text-white">
                    My <span class="text-red-600">Education</span>
                </h1>
                <p class="text-gray-400 mt-2 text-lg">
                    My academic journey from elementary to present
                </p>
            </div>

            <div class="max-w-2xl mx-auto space-y-8">

                <div class="bg-white rounded-3xl p-8 flex gap-6 shadow-2xl">

                    <div class="h-fit flex justify-center items-center">
                        <img src="imgs/uclm-logo.png" alt="University of Cebu Logo" class="w-12 h-12 object-contain shadow-xl rounded-md"/>
                    </div>

                    <div class="flex-1">

                        <div class="flex justify-between mb-2">
                            <span class="bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">College</span>
                            <span class="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">2023 - Present</span>
                        </div>

                        <h2 class="text-xl font-bold text-gray-900">BS Information Technology</h2>
                        <p class="text-red-600 font-semibold text-sm mb-3">University of Cebu Lapu-lapu and Manduae</p>

                        <p class="text-gray-600 text-sm mb-4">
                            Currently pursuing my degree focusing on Front-end Development and User Experience Design.
                        </p>

                        <ul class="space-y-1 text-sm text-gray-700">
                            <li class="flex items-center"><span class="w-2 h-2 bg-red-600 rounded-full mr-2"></span>Dean's List</li>
                        </ul>

                    </div>
                </div>

                <div class="bg-white rounded-3xl p-8 flex gap-6 shadow-2xl">

                    <div class="h-fit flex justify-center items-center">
                        <img src="imgs/sfc-logo.jpg" alt="University of Cebu Logo" class="w-12 h-12 object-contain shadow-xl rounded-md"/>
                    </div>

                    <div class="flex-1">

                        <div class="flex justify-between mb-2">
                            <span class="bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">SHS</span>
                            <span class="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">2021 - 2023</span>
                        </div>

                        <h2 class="text-xl font-bold text-gray-900">Senior High School</h2>
                        <p class="text-red-600 font-semibold text-sm mb-3">St. Francis College - Allen</p>

                        <p class="text-gray-600 text-sm mb-4">
                            Science, Technology, Engineering, and Mathematics.
                        </p>

                        <ul class="space-y-1 text-sm text-gray-700">
                            <li class="flex items-center"><span class="w-2 h-2 bg-red-600 rounded-full mr-2"></span>With High Honors</li>
                        </ul>

                    </div>
                </div>

                <div class="bg-white rounded-3xl p-8 flex gap-6 shadow-2xl">

                    <div class="h-fit flex justify-center items-center">
                        <img src="imgs/sja-logo.jpg" alt="University of Cebu Logo" class="w-12 h-12 object-contain shadow-xl rounded-md"/>
                    </div>

                    <div class="flex-1">

                        <div class="flex justify-between mb-2">
                            <span class="bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">JHS</span>
                            <span class="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">2017 - 2021</span>
                        </div>

                        <h2 class="text-xl font-bold text-gray-900">Junior High School</h2>
                        <p class="text-red-600 font-semibold text-sm mb-3">St. Joseph Academy</p>

                        <ul class="space-y-1 text-sm text-gray-700">
                            <li class="flex items-center"><span class="w-2 h-2 bg-red-600 rounded-full mr-2"></span>With Honors</li>
                        </ul>

                    </div>
                </div>

                <div class="bg-white rounded-3xl p-8 flex gap-6 shadow-2xl">

                    <div class="h-fit flex justify-center items-center">
                        <img src="imgs/sjcs-logo.png" alt="University of Cebu Logo" class="w-12 h-12 object-contain shadow-xl rounded-md"/>
                    </div>

                    <div class="flex-1">

                        <div class="flex justify-between mb-2">
                            <span class="bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">Elementary</span>
                            <span class="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">2011 - 2016</span>
                        </div>

                        <h2 class="text-xl font-bold text-gray-900">Elementary School</h2>
                        <p class="text-red-600 font-semibold text-sm mb-3">San Jose Central Elementary School</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;