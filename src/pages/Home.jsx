import { RevealOnScroll } from "../components/RevealOnScroll";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center text-center justify-center relative bg-[#2B2D42] overflow-hidden">

            <RevealOnScroll>

                <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-[#F7EC59] bg-clip-text text-transparent"> Hi, I'm CJ. </h1>
                    <p className="bg-[#F8F7F9] bg-clip-text text-2xl mb-8 max-w-xl mx-auto text-center"> Aspiring Software Engineer and Web Developer. </p>

                    <div className="flex justify-center space-x-4">
                    
                        <a href="#experience" className="border border-[#F7EC59] text-[#F7EC59] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(146,220,229,0.3)] hover:bg-[#F8F7F9] hover:text-[#2B2D42] hover:border-[#F8F7F9]">Work History</a>
                        
                        <a href="#contact" className="bg-[#F7EC59] text-[#2B2D42] py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:bg-[#F8F7F9] hover:shadow-[0_0_15px_rgba(146,220,229,0.3)]">Contact Me</a>
                    
                        <a href="#projects" className="border border-[#F7EC59] text-[#F7EC59] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(146,220,229,0.3)] hover:bg-[#F8F7F9] hover:text-[#2B2D42] hover:border-[#F8F7F9]">My Projects</a>

                    </div>

                    <p className='text-xs text-[#F8F7F9] translate-y-25'>Created in React.JS with TailwindCSS.</p>

                    <div className='flex space-x-6 translate-y-30 justify-center'>
                        
                        <FaReact className="w-8 h-8 text-[#F7EC59] hover:text-[#F8F7F9] transition-color hover:scale-120 duration-150 transition-transform"/>
                        <RiTailwindCssFill className="w-8 h-8 text-[#F7EC59] hover:text-[#F8F7F9] transition-color hover:scale-120 duration-150 transition-transform" />

                    </div>

                </div>

            </RevealOnScroll>

        </section>
    );
};