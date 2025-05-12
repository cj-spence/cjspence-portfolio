import { RevealOnScroll } from "../components/RevealOnScroll";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    return (
        <section id="projects" className="flex items-center justify-center py-20 bg-[#2b2d42] overflow-hidden">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#F7EC59]"> 
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <div className="p-6 rounded-xl border border-[#F7EC59] hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(247,236,89,0.4)] transition-all flex flex-col h-full">
                            <h3 className="text-xl font-bold text-[#F7EC59] text-center">
                                Our Ancestors Have Given Us An Assignment
                            </h3>

                            <p className="text-[#F8F7F9] mb-4 mt-4 text-center flex-grow">
                                An interactive webpage dedicated to preserving the untold stories, memories, and media of Saint Mary's alumni Herman Brown ('74) and Musheer Abdul-Jabbar ('73), who endured systemic racism as students and lead the charge for student activism to create equality and equity for minority peers.
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

                        {/* Project 2 */}
                        <div className="p-6 rounded-xl border border-[#F7EC59] hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(247,236,89,0.4)] transition-all flex flex-col h-full">
                            <h3 className="text-xl font-bold text-[#F7EC59] text-center">
                                Personal Portfolio Website
                            </h3>

                            <p className="text-[#F8F7F9] mb-4 mt-4 text-center flex-grow">
                                This website was created as a side project to have a space to share my personal projects, work history, and a way to get in contact with me. It will be maintained and updated to accurately display my current professional status.
                            </p>

                            <div className="flex flex-col text-center mt-4 mb-2">
                                <a href="https://github.com/cj-spence/cjspence-portfolio" target="_blank" className=""><FaGithub className="inline-block w-6 h-6 sm:w-8 sm:h-8 text-[#F8F7F9] hover:text-[#F7EC59] hover:scale-115 transition-transform"/></a>
                                <a href="https://cjspence.com" target="_blank" className="text-center items-center justify-center text-[#F7EC59] underline decoration-dotted mb-4 mt-2 hover:scale-105 transition-transform">
                                    cjspence.com
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                {["React", "Javascript", "TailwindCSS", "DaisyUI"].map((tech, key) => (
                                    <span key={key} className="bg-[#F7EC59]/10 text-[#F7EC59] py-1 px-3 rounded-full text-sm hover:bg-[#F7EC59]/20 hover:shadow-[0_2px_8px_rgba(247,236,89,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};