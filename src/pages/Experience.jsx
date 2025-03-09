import { RevealOnScroll } from "../components/RevealOnScroll";

export const Experience = () => {
    return (
        <section id="experience" className="flex items-center justify-center py-20 bg-[#2b2d42]">
            
            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 text-center text-[#F7EC59]"> 
                        Work Experience
                    </h2>

                    <div className="glass rounded-xl p-8 border-[#F7EC59] border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(247,236,89,0.4)] transition-all">

                        <h3 className="font-semibold text-lg text-[#F7EC59]">
                            CS-222 Grader & Assistant @ SMC
                        </h3>

                        <h4>
                            February 2025 – Present
                        </h4>

                        <p className="mt-3 pl-5">
                            As a grader for CS-222 (Data Structures and Algorithms), my role is to support and grade students’ labs and homework assignments as they tackle OOP, time complexities, and data structures in Java. Assignments are graded weekly, and I answer questions and give support via email 
                        </p>

                        <h3 className="font-semibold mt-8 text-lg text-[#F7EC59]">
                            Front Desk Coordinator @ Bodylines Day Spa
                        </h3>

                        <h4>
                            August 2024 – Present
                        </h4>

                        <p className="mt-3 pl-5">
                            As a Front Desk Coordinator, I oversee daily operations of the spa. My responsibilities include opening and closing the facility, managing phone calls, scheduling appointments for clients, and creating work schedules for our team of masseuses and estheticians. This role requires me excel at multitasking as well as create a customer service friendly environment for both clients and staff.
                        </p>

                        <h3 className="font-semibold mt-8 text-lg text-[#F7EC59]">
                            Computer Science Researcher @ SMC
                        </h3>

                        <h4>
                            May 2023 – December 2023
                        </h4>

                        <p className="mt-3 pl-5">
                            Chosen to participate in the 2023 Summer Student Research Program at Saint Mary’s, I evaluated the performance of mainstream LLMs when given technical language processing tasks. This research was approved to extend through the Fall 2023 semester and was later presented at <a href="https://link.springer.com/chapter/10.1007/978-3-031-62110-9_8" target="_blank" className="text-[#F7EC59] underline">HCI International 2024</a>.
                        </p>

                    </div>

                    <h2 className="text-3xl mt-15 text-center justify-center underline "> 
                        I'm currently looking for full-time positions. 
                    </h2>

                </div>

            </RevealOnScroll>

        </section>
    );
};