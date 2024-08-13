import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiRedux, SiNodedotjs } from "react-icons/si";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import photo from "../../assets/photo.jpg"
const Header = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const slideInStyles = useSpring({
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });

    const imageSlideInStyles = useSpring({
        transform: inView ? 'translateX(0)' : 'translateX(100px)',
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });

    const [text] = useTypewriter({
        words: ["Full Stack Developer.", "Mern Developer.", "Competitive Programmer."],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 5,
        delaySpeed: 3000,
    });

    return (
        <>
            <animated.div style={slideInStyles} ref={ref}>
                <section
                    id="home"
                    className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
                >
                    <div className="mx-[6rem] relative overflow-hidden">
                        <div className="mt-5 flex flex-wrap items-center p-8 bg-blue-70 m-0 relative z-10">
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left md:text-left mb-4 md:mb-0">
                                <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl mt-4 capitalize text-white">Hi, I'm</h1>
                                <h1 className="text-blue-500 font-nunito text-3xl md:text-4xl lg:text-5xl mt-2 capitalize">
                                    <span className="font-mono" id="span"> Sahil Rawat</span>
                                </h1>

                                <h2 className="text-4xl font-bold text-white">
                                    a <span className='text-designColor text-red-600'>{text}</span>
                                    <Cursor
                                        cursorBlinking="false"
                                        cursorStyle="|"
                                        cursorColor="#ff014f"
                                    />
                                </h2>
                                <p className="text-base md:text-lg lg:text-[16px] font-sans text-white">
                                    My name is Sahil Rawat, and I'm pursuing a Btech degree in Computer Science and Engineering.
                                    I'm a proficient Full Stack Developer with React JS and have a strong understanding of Data Structures and Algorithms.
                                </p>

                                <div className="flex flex-wrap mt-[80px]">
                                    <div className="social-links max-[768px]:my-4">
                                        <h1 className="text-white text-center mb-4 text-xl max-[768px]:text-left">Social Links</h1>
                                        <div className="flex">
                                            <a href="https://www.linkedin.com/in/sahil-rawat-9385a1245/"><FaLinkedinIn className="text-white text-[50px] bg-black rounded-lg p-3 mx-4 shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-500 hover:bg-red-600" /></a>                                        
                                            <a href="https://github.com/SahilRwt778"><FaGithub className="text-white text-[50px] bg-black rounded-lg p-3 mx-4 shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-500 hover:bg-red-600"/></a>
                                        </div>
                                    </div>
                                    <div className="best-skills ml-16 max-[768px]:ml-0 max-[768px]:text-center max-[768px]:my-8">
                                        <h1 className="text-white text-center max-[768px]:text-left mb-4 text-xl">Good skills</h1>
                                        <div className="flex">
                                            <FaReact className="text-white text-[50px] bg-black rounded-lg p-3 mx-4 shadow-lg" />
                                            <SiJavascript className="text-white text-[50px] bg-black rounded-lg p-3 mx-4 shadow-lg" />
                                            <SiNodedotjs className="text-white text-[50px] bg-black rounded-lg p-3 mx-4 shadow-lg" />
                                            <SiRedux className="text-white text-[50px] bg-black rounded-lg p-3 mx-4 shadow-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full ml-auto md:w-1/2">
                                <animated.img
                                    src={photo}
                                    className="w-full ml-auto h-[550px] object-cover max-[768px]:h-auto shadow-xl shadow-black"
                                    alt="Front view"
                                    style={imageSlideInStyles}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </animated.div>
        </>
    )
}

export default Header;
