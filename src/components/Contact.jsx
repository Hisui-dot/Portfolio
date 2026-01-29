import useReveal from "../hooks/useReveal";

export default function Contact() {
    const [ref, isVisible] = useReveal();

    return (
        <section id="contact" ref={ref} className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 className={`text-3xl font-semibold text-slate-800 mb-6 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    Contact Me
                </h2>

                <p className={`text-slate-600 mb-12 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-200`}>
                    Feel free to reach out for collaborations or just a friendly hello 👋
                </p>
                
                <form className="flex flex-col gap-6 max-w-xl">
                    <input type="text" placeholder="Your Name" className={`px-4 py-3 border rounded-lg border-slate-200 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-400`}/>
                    <input type="email" placeholder="Your Email" className={`px-4 py-3 border rounded-lg border-slate-200 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-500`}/>
                    <textarea placeholder="Your Message" className={`px-4 py-3 border rounded-lg border-slate-200 resize-none transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-60`}/>
                    <button type="submit" className={`px-6 py-3 bg-sky-600 text-white rounded-lg font-medium transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-700`}>
                    Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}