import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    
        useEffect(() => {
            document.body.style.overflow = menuOpen ? "hidden" : ""
        }, [menuOpen]);
    
    return (
        <nav className="fixed w-full top-0 z-40 bg-[rgba(43, 45, 66, 0.8)] backdrop-blur-lg border-b border-white/10 shadow/lg overflow-hidden">
            
            <div className="max-w-5xl mx-auto px-4">
                
                <div className="flex justify-between items-center h-16">

                    <div className="flex space-x-8 items-center">

                        <a href="#home" className="font-mono text-xl font-bold text-[#F8F7F9] hover:text-[#F7EC59] transition-color hover:scale-105 transition-transform"> cj spence </a>

                        <a href="https://github.com/cj-spence" target="_blank" className=""><FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-[#F8F7F9] hover:text-[#F7EC59] transition-colors hover:scale-115 transition-transform"/></a>

                        <a href="https://www.linkedin.com/in/cjspencejr/" target="_blank" className=""><FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-[#F8F7F9] hover:text-[#F7EC59] transition-colors hover:scale-115 transition-transform"/></a>

                    </div>

                    <div className="w-7 h-5 relative cursor-pointer z-50 md:hidden hover:text-[#F7EC59] transition-colors hover:scale-115 transition-transform" 
                    onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8 text-lg">

                        <a href="#about" className="text-[#F8F7F9] hover:text-[#F7EC59] transition-colors hover:scale-110 transition-transform"> About </a>

                        <a href="#experience" className="text-[#F8F7F9] hover:text-[#F7EC59] transition-colors hover:scale-110 transition-transform"> Experience </a>

                        <a href="#projects" className="text-[#F8F7F9] hover:text-[#F7EC59] transition-colors hover:scale-110 transition-transform"> Projects </a>

                        <a href="#contact" className="text-[#F8F7F9] hover:text-[#F7EC59] transition-colors hover:scale-110 transition-transform"> Contact </a>

                    </div>

                </div>
            
            </div>
        
        </nav>
    );
};