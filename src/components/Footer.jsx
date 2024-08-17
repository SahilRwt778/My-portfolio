import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const slideInStyles = useSpring({
        transform: inView ? 'translateY(0)' : 'translateY(-100px)',
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });

    return (
        <animated.div style={slideInStyles} ref={ref}>
            <footer className="bg-[#262626] text-white pt-10 pb-6">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>
                        <h1 className="text-blue-500 text-2xl font-bold">Sahil Rawat</h1>
                        <p className="text-[14px] my-4">
                            I'm Sahil Rawat, pursuing a Btech degree in Computer Science and Engineering.
                            I'm a proficient Full Stack Developer with React JS and have a strong understanding of Data Structures and Algorithms.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.instagram.com/rawatsahil778/">
                                <FaInstagram className="text-[25px] hover:-translate-y-2 hover:text-pink-500 transition-all duration-500" />
                            </a>
                            <a href="https://www.linkedin.com/in/sahil-rawat-9385a1245/">
                                <FaLinkedinIn className="text-[25px] hover:-translate-y-2 hover:text-blue-400 transition-all duration-500" />
                            </a>
                            <a href="https://www.facebook.com/sahil.rawat.18294053">
                                <FaFacebook className="text-[25px] hover:-translate-y-2 hover:text-blue-400 transition-all duration-500" />
                            </a>
                            <a href="https://www.x.com/@SahilRawat778">
                                <FaTwitter className="text-[25px] hover:-translate-y-2 hover:text-blue-400 transition-all duration-500" />
                            </a>
                            <a href="https://wa.me/917454945875">
                                <FaWhatsapp className="text-[25px] hover:-translate-y-2 hover:text-green-500 transition-all duration-500" />
                            </a>
                            <a href="mailto:sahilrawatjj@gmail.com">
                                <SiGmail className="text-[25px] hover:-translate-y-2 hover:text-red-500 transition-all duration-500" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Useful Links</h1>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-blue-500 hover:text-blue-800 transition">Home</a></li>
                            <li><a href="#feature" className="text-blue-500 hover:text-blue-800 transition">Features</a></li>
                            <li><a href="#projects" className="text-blue-500 hover:text-blue-800 transition">Projects</a></li>
                            <li><a href="#resume" className="text-blue-500 hover:text-blue-800 transition">My Resume</a></li>
                            <li><a href="#contact" className="text-blue-500 hover:text-blue-800 transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Contact Me</h1>
                        <p className="mt-4">
                            Kashipur, Uttarakhand 24....<br />
                            <b>Phone:</b> +(91)7454945875<br />
                            <b>Email:</b> sahilrawatjj@gmail.com
                        </p>
                    </div>
                </div>
            </footer>

            <div className="bg-black text-center py-4 text-white">
                <h1>© Copyright 2024 <b>Sahil Rawat</b>. All Rights Reserved</h1>
                <p>Created with ❤️</p>
            </div>
        </animated.div>
    );
};

export default Footer;
