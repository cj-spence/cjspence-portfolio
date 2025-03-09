import { RevealOnScroll } from "../components/RevealOnScroll";

export const Projects = () => {

    return (

        <section id="projects" className="flex items-center justify-center py-20 bg-[#2b2d42]">
            
            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 text-center text-[#F7EC59]"> 
                        Featured Project
                    </h2>

                    <div className="p-6 rounded-xl border border-[#F7EC59] hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(247,236,89,0.4)] transition-all">

                        <h3 className="text-xl font-bold text-[#F7EC59] text-center">
                                Resistance Beyond the Court
                        </h3>

                        <p className="text-[#F8F7F9] mb-4 mt-4 text-center">
                                An interactive webpage dedicated to support and document the oral histories of Herman Brown and Musheer Abdul-Jabbar, two African-American Saint Mary's College of California alumni from the 1960s who experienced heinous racism while playing for Saint Mary's D1 NCAA basketball team. 
                        </p>

                        <p className="text-[#F8F7F9] text-sm mb-4 mt-4 text-center">
                            Created in partnership with my ES-201 class, Herman, Musheer, and Professor Michael Viola.
                        </p>

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