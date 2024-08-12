import React from "react"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
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
        <>
            <animated.div style={slideInStyles}
                ref={ref}>
                <footer className=" mt-auto bg-[#262626]  pt-3 text-white  mt-10 pt-10">
                    <div className="mx-20 flex flex-wrap " >
                        <div className="w-[] sm:w-1/2 ">
                            <div className="flex items-center ">

                                <h1 className=" text-blue-500 text-[2rem]"><b>Sahil Rawat</b><br /></h1>

                            </div>

                            <p className="text-[14px] my-4 font-sans">My name is Sahil Rawat, and I'm pursuing a Btech degree in Computer Science and Engineering.
                                I'm a proficient Full Stack Developer with React JS and have a strong understanding of Data Structures and Algorithms.</p>

                            <div className="flex max-[992px]:my-8">
                                <a href="https://www.instagram.com/rawatsahil778/">
                                    <FaInstagram className=" mx-2 text-[25px] hover:-translate-y-2 hover:text-pink-500 cursor-pointer transtion-all ease-in-out duration-500 " />
                                </a>
                                <a href="https://www.linkedin.com/in/sahil-rawat-9385a1245/">
                                    <FaLinkedinIn className=" mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-400 cursor-pointer transtion-all ease-in-out duration-500 " />
                                </a>
                                <a href="https://www.facebook.com/sahil.rawat.18294053">
                                    <FaFacebook className=" mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-400 cursor-pointer transtion-all ease-in-out duration-500 " />
                                </a>
                                <a href="https://www.x.com/@SahilRawat778">
                                <FaTwitter className=" mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-400 cursor-pointer transtion-all ease-in-out duration-500 " />
                                </a>
                                <a href="https://wa.me/917454945875">
                                    <FaWhatsapp className=" mx-2 text-[25px] hover:-translate-y-2 hover:text-green-500 cursor-pointer transtion-all ease-in-out duration-500 " />
                                </a>
                                <a href="mailto:sahilrawatjj@gmail.com">
                                    <SiGmail className=" mx-2 text-[25px] hover:-translate-y-2 hover:text-red-500 cursor-pointer transtion-all ease-in-out duration-500 " />
                                </a>
                            </div>
                        </div>

                        <div className="sm:w-1/4 ">
                            <h1 className="text-25px uppercase"><b>Usefull Links</b></h1>
                            <div className="flex flex-col my-4">

                                <a className="text-blue-500 hover:no-underline hover:text-blue-800 my-2 w-[100px]" href='#'>Home</a>
                                <a className="text-blue-500 hover:no-underline hover:text-blue-800 my-2 w-[100px]" href='#feature'>Features</a>
                                <a className="text-blue-500 hover:no-underline hover:text-blue-800 my-2 w-[100px]" href='#projects'>Projects</a>
                                <a className="text-blue-500 hover:no-underline hover:text-blue-800 my-2 w-[100px]" href='#resume'>My Resume</a>
                                <a className="text-blue-500 hover:no-underline hover:text-blue-800 my-2 w-[100px]" href='#contact'>Contact</a>
                            </div>
                        </div>
                        <div className="sm:w-1/4 ">
                            <h1 className="text-25px uppercase "><b>Contact Me</b></h1>
                            <p className="my-4">Kashipur, Uttarakhand 24.... <br /><b>Phone :</b> +(91)7454945875 <br /><b>Email : </b>sahilrawatjj@gmail.com</p>
                        </div>
                        <div className="4">

                        </div>
                    </div>

                </footer>

                <div className=" mt-auto text-center items-center content-center h-[120px] bg-black  text-white">
                    <h1 className="">© Copyright 2024 <b>Sahil Rawat</b>. All Rights Reserved</h1>
                    <p>Created wtih ❤️</p>
                </div>
            </animated.div>
        </>

    )
}
export default Footer