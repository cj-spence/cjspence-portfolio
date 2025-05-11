import { RevealOnScroll } from "../components/RevealOnScroll";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {

    return (

        <section id="projects" className="flex items-center justify-center py-20 bg-[#2b2d42] overflow-hidden">
            
            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 text-center text-[#F7EC59]"> 
                        Featured Project
                    </h2>

                    <div className="p-6 rounded-xl border border-[#F7EC59] hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(247,236,89,0.4)] transition-all">

                        <h3 className="text-xl font-bold text-[#F7EC59] text-center">
                                Our Ancestors Have Given Us An Assignment
                        </h3>

                        <p className="text-[#F8F7F9] mb-4 mt-4 text-center">
                                An interactive webpage dedicated to support and document the oral histories of Herman Brown and Musheer Abdul-Jabbar, two African-American Saint Mary's College of California alumni from the 1960s who experienced heinous racism while playing for Saint Mary's D1 NCAA basketball team. 
                        </p>

                        <div className="flex flex-col text-center mt-4 mb-2">
                            <a href="https://github.com/cj-spence/cs-capstone" target="_blank" className=""><FaGithub className="inline-block w-6 h-6 sm:w-8 sm:h-8 text-[#F8F7F9] hover:text-[#F7EC59] hover:scale-115 transition-transform"/></a>
                            <a href="https://hermanandmusheer.com" target="_blank" className="text-center items-center justify-center text-[#F7EC59] underline decoration-dotted mb-4 mt-2 hover:scale-105 transition-transform">
                                hermanandmusheer.com
                            </a>
                        </div>


                        <div className="flex flex-wrap gap-2 items-center justify-center">
                            {["React", "TailwindCSS", "JavaScript"].map((tech, key) => (
                                <span key={key} className="bg-[#F7EC59]/10 text-[#F7EC59] py-1 px-3 rounded-full text-sm hover:bg-[#F7EC59]/20 hover:shadow-[0_2px_8px_rgba(247,236,89,0.2)] transition">{tech}</span>
                            ))}
                        </div>

                    </div>

                        <h2 className="text-2xl mt-10 text-center justify-center underline">
                            more coming soon 
                        </h2>

                </div>
        
            </RevealOnScroll>

        </section>

    );
};