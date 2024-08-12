import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from 'react-intersection-observer';
import { ImCheckboxChecked } from "react-icons/im";

const Contact = () => {
    const { ref: leftRef, inView: leftInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const { ref: rightRef, inView: rightInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const leftSpring = useSpring({
        opacity: leftInView ? 1 : 0,
        transform: leftInView ? "translateX(0)" : "translateX(-50px)",
        config: { duration: 1000 },
        delay: 200,
    });

    const rightSpring = useSpring({
        opacity: rightInView ? 1 : 0,
        transform: rightInView ? "translateX(0)" : "translateX(50px)",
        config: { duration: 1000 },
        delay: 400,
    });

    const [showPopup, setShowPopup] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setShowPopup(true);
                e.target.reset(); // Reset the form

                setTimeout(() => {
                    setShowPopup(false); // Hide popup after 3 seconds
                }, 3000);
            } else {
                setFormStatus('error');
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                }, 3000);
                console.error('Error submitting form');
            }
        } catch (error) {
            setFormStatus('error');
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
            console.error('Error:', error);
        }
    };

    return (
        <>
            <section id="contact" className="mx-[4rem] max-[768px]:mx-14 my-8">
                <div className="text-center mt-[2rem] mb-8">
                    <h2 className="text-red-600">--Contact--</h2>
                    <h1 className="text-white text-[2rem]">Contact Me</h1>
                </div>
                <div className="mx-14 max-[768px]:mx-2">
                    <div className="flex flex-wrap">
                        <animated.div style={leftSpring} ref={leftRef} className="contact-left ml-10 -mt-6 max-[768px]:mx-0 mx-16">
                            <img src="src/assets/my-image.jpg" className='h-[300px] max-[768px]:w-[300px]' alt="Profile" />
                            <h2 className="text-white text-[2rem]">Sahil Rawat</h2>
                            <h4 className="text-white text-[1rem]">Full Stack Developer | Software Engineer</h4>
                            <p className="mt-[30px] text-white flex"><SiGmail className="text-blue-500 text-[25px] mr-3" /> sahilrawatjj@gmail.com</p>
                            <p className="mt-[30px] text-white flex"><FaPhoneAlt className="text-blue-500 text-[25px] mr-3" /> (+91) 7454945875</p>
                            <div className="social-icons my-[20px]">
                                <a href="https://www.facebook.com/sahil.rawat.18294053" className="text-[30px] mr-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-blue-400 hover:-translate-y-2"><FaFacebook /></a>
                                <a href="https://www.x.com/@SahilRawat778" className="text-[30px] mx-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-blue-400 hover:-translate-y-2"><FaTwitter /></a>
                                <a href="https://www.instagram.com/rawatsahil778/" className="text-[30px] mx-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-pink-600 hover:-translate-y-2"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/sahil-rawat-9385a1245/" className="text-[30px] mx-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-blue-400 hover:-translate-y-2"><FaLinkedinIn /></a>
                            </div>
                            <a href="src/assets/resume.pdf" download className="inline-block bg-red-600 p-3 rounded-lg transition-all ease-in-out hover:-translate-y-2 duration-500 hover:shadow-lg hover:shadow-red-600 ">Download Resume</a>
                        </animated.div>
                        <animated.div style={rightSpring} ref={rightRef} className="contact-right max-[768px]:mx-0 mx-8 max-[768px]:-mx-5">
                            <form onSubmit={handleSubmit} className="w-auto">
                                <input className="w-full focus:outline-none max-[706px]:w-[300px] focus:border-blue-500 outline-none bg-[#262626] p-2 my-4 text-white text-[18px] border-black border rounded-lg" type="text" name="name" placeholder="Your name" required />
                                <input className="w-full focus:outline-none max-[706px]:w-[300px] focus:border-blue-500 outline-none bg-[#262626] p-2 my-4 text-white text-[18px] border-black border rounded-lg" type="email" name="email" placeholder="Your Email" required />
                                <textarea className="w-full focus:outline-none max-[706px]:w-[300px] focus:border-blue-500 outline-none bg-[#262626] p-2 my-4 text-white text-[18px] border-black border rounded-lg" name="message" rows={6} placeholder="Your message" required />
                                <b className="inline-block bg-red-600 py-[7px] px-[13px] rounded-lg transition-all ease-in-out hover:-translate-y-2 duration-500 hover:shadow-lg hover:shadow-red-600 "> <button  type="submit">Submit</button>
                                </b>
                            </form>
                            {showPopup && (
                    <div className={`fixed inset-0 flex flex-col items-center justify-center  max-[768px]:-mx-6 rounded shadow-lg ${formStatus === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white h-[300px] w-[350px] `}>
                        <ImCheckboxChecked className="text-blue-500 text-[150px] text-center my-6"/>
                        <div className="text-center items-center content-center">
                            
                            {formStatus === 'success' ? 'Form submitted successfully!' : 'Error submitting form!'}
                        </div>
                    </div>
                )}
                        </animated.div>
                       
                    </div>
                    
                </div>

                {/* Popup Notification */}
                
            </section>
        </>
    );
};

export default Contact;
