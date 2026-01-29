import React from 'react'
import useReveal from "../hooks/useReveal";

const About = () => {
    const [ref, isVisible] = useReveal();

  return (
    <section ref={ref} id="about" className={`py-24 bg-white transition-all duration-1200 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="max-w-6xl mx-auto px-6">
            <div>
                
                <h2 className={`text-3xl font-semibold text-slate-800 mb-6 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-0`}>
                    About Me
                    </h2>
                
                <p className={`text-slate-600 text-lg mb-6 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-200`}>
                    I'm Hisui, a developer passionate about building
                    beautiful and functional web interfaces. I love crafting
                    responsive and interactive experiences with React and Tailwind CSS.
                </p>
                
                <p className={`text-slate-600 text-lg mb-6 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-300`}>
                    I focus on clean code, accessibility, and modern design patterns,
                    ensuring every project is user-friendly and visually appealing.
                </p>
                
                <div className="flex flex-wrap gap-3">
                    {[
                        { name: "React", url: "https://react.dev" },
                        { name: "Tailwind CSS", url: "https://tailwindcss.com" },
                        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                    ].map((tech, index) => (
                        <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className={`px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg=sky=100 transition opacity-0 translate-y-4 ${isVisible ? "opacity-100 translate-y-0" : ""} transition-all duration-1200 ease-out delay-${index * 100}`}>
                            {tech.name}
                        </a>
                    ))}
                </div>
            
            </div>

            <div className="flex justify-center md:justify-end">
            <img src="./src/assets/anime-profile-flat-vector.jpg" alt="Adrianne" className="w-64 h-64 rounded-xl shadow-lg object-cover"/>
            </div>
        
        </div>
        </section>
  )
}

export default About