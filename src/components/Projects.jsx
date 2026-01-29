import React from 'react'
import useReveal from '../hooks/useReveal';

const Projects = () => {
  const [ref, isVisible] = useReveal();

    return (
        <section id="projects" ref={ref} className="py-24 bg-linear-to-br from-gray-50 via-blue-50 to-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-slate-800">
                    Projects
                </h2>
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                    
                    <div key="ecommerce" className={`border border-slate-200 rounded-xl p-6 bg-white hover:shadow-md transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <h3 className="text-xl font-semibold text-slate-800">
                            E-commerce Website
                        </h3>
                        <p className="mt-3 text-slate-600">
                            A responsive e-commerce frontend built with React and Tailwind CSS,
                            featuring product listings, cart functionality, and a clean UI.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
                            <span className="px-3 py-1 bg-slate-100 rounded-full">React</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">Tailwind</span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full">JavaScript</span>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <a href="#" className="text-sky-600 font-medium hover:underline">Live</a>
                            <a href="#" className="text-sky-600 font-medium hover:underline">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects