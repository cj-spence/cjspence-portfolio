import { RevealOnScroll } from "../components/RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "TailwindCSS",
    ];

    const backendSkills = [
        "Python",
        "Java",
        "C#",
        "SQL",

      ];

      const learningWants = [
        "Golang",
        "Three.JS",
        "Node.JS",
        "Angular",
        "PostgreSQL",
        "MongoDB"
      ];


    return (

        <section id="about" className="flex items-center justify-center py-20 bg-[#2b2d42]">

            <RevealOnScroll>
            
                <div className="max-w-3xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 text-center text-[#F7EC59]"> 
                        About Me
                    </h2>

                    <div className="glass rounded-xl p-8 border-[#F7EC59] border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(247,236,89,0.4)] transition-all">

                        <p className="text-[#F8F7F9] mb-6 text-lg text-center">
                            I'm a passion-driven Software Engineer and Web Developer. I'm currently interested in exploring fullstack development. I love learning, and believe there is always new knowledge to acquire.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                                <h3 className="text-2xl text-[#F8F7F9] font-bold mb-4 text-center">
                                    Frontend Skills
                                </h3>

                                <div className="flex flex-wrap gap-2 justify-center">
                                        {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-[#F7EC59]/10 text-[#F7EC59] py-1 px-3 rounded-full text-sm hover:bg-[#F7EC59]/20 hover:shadow-[0_2px_8px_rgba(247,236,89,0.2)] transition">{tech}</span>
                                    ))}
                                </div>

                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                                <h3 className="text-2xl text-[#F8F7F9] font-bold mb-4 text-center">
                                    Backend Skills
                                </h3>

                                <div className="flex flex-wrap gap-2 justify-center">
                                        {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-[#F7EC59]/10 text-[#F7EC59] py-1 px-3 rounded-full text-sm hover:bg-[#F7EC59]/20 hover:shadow-[0_2px_8px_rgba(247,236,89,0.2)] transition">{tech}</span>
                                        ))}
                                </div>                 

                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4 text-center"> Current Interests </h3>

                            <div className="flex flex-wrap gap-2 items-center justify-center">

                                {learningWants.map((tech, key) => (
                                <span key={key} className="bg-[#F7EC59]/10 text-[#F7EC59] py-1 px-3 rounded-full text-sm hover:bg-[#F7EC59]/20 hover:shadow-[0_2px_8px_rgba(247,236,89,0.2)] transition">{tech}</span>
                                ))}

                            </div>

                        </div>

                    </div>

                    <h2 className="text-3xl font-bold mb-8 mt-8 text-center text-[#F7EC59]">
                        Education
                    </h2>

                    <div className="glass rounded-xl p-8 border-[#F7EC59] border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(247,236,89,0.4)] transition-all">
                        <div className='flex -translate-x-0 justify-center'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Saint_Mary%27s_College_Gaels_logo.svg/396px-Saint_Mary%27s_College_Gaels_logo.svg.png?20180118015937' alt='icon' class='w-30 h-20'/>
                        </div>
                        <ul className="flex-col text-[#F8F7F9] mt-4 space-y-2 text-center">
                            <h3 className="text-2xl"><strong>Saint Mary's College of California </strong></h3>
                            <h4 className="text-lg">B.S. in Computer Science</h4>
                            <h5 className="text-lg"> August 2021 - May 2025 </h5>
                            <h6 className="text-[#F7EC59]"><strong>Ongoing</strong></h6>
                        </ul>
                    </div>

                </div>

            </RevealOnScroll>

        </section>


    );
};