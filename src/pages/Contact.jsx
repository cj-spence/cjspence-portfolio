import { useState } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Your message was sent.");
            setFormData({name: "", email: "", message: ""});

        }).catch(() => alert("Oops - Something went wrong. Please try again."));

    };

    return (

        <section id="contact" className="min-h-[70vh] mx-auto flex items-center justify-center bg-[#2B2D42]">
            <RevealOnScroll>

                <div className="px-4 w-150">

                    <h2 className="text-3xl font-bold mb-8 text-[#F7EC59] text-center">
                        Connect With Me
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div className="relative">

                            <input type="text" id="name" name="name" required value={formData.name} className="w-full bg-[#F8F7F9]/5 border border-[#F7EC59] rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F8F7F9] focus:scale-105 text-center transition-transform" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})}>
                            </input>

                        </div>

                        <div className="relative">

                            <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-[#F8F7F9]/5 border border-[#F7EC59] rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F8F7F9] focus:scale-105 text-center transition-transform" placeholder="example@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value})}>
                            </input>

                        </div>

                        <div className="relative">

                            <textarea id="message" name="message" required rows={5} value={formData.message} className="w-full bg-[#F8F7F9]/5 border border-[#F7EC59] rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#F8F7F9] focus:scale-105 text-center transition-transform" placeholder="Your Message Here" onChange={(e) => setFormData({...formData, message: e.target.value})}>
                            </textarea>

                        </div>

                        <button type="submit" className="w-full bg-[#F7EC59] text-[#2b2d42] py-3 px-6 rounded font-medium text-xltransition relative overflow-hidden hover:scale-105 text-center hover:shadow-[0_0_15px_rgba(146,220,229,0.2)] hover:bg-[#F8F7F9] hover:text-[#2B2D42] hover:border-[#F8F7F9] hover:cursor-pointer transition-transform">
                            Send Message
                        </button>

                    </form>

                </div>


            </RevealOnScroll>
        </section>


    );
};