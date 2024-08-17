import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from 'react-intersection-observer';
import { ImCheckboxChecked } from "react-icons/im";
import { VscError } from "react-icons/vsc";
import MyImage from '../assets/my-image.jpg'
import Resume from '../assets/resume.pdf'
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
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError(''); // Clear any previous errors

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

    const bg={
        backgroundColor:"#dc2626"
    }

    return (
        <>
            <section id="contact" className="my-8 flex flex-col items-center px-4">
                <div className="text-center mt-[2rem] mb-8">
                    <h2 className="text-red-600">--Contact--</h2>
                    <h1 className="text-white text-[2rem]">Contact Me</h1>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-[80%] p-4 ">
                    <animated.div style={leftSpring} ref={leftRef} className="flex flex-col items-center md:items-start md:mx-8 mb-8 md:mb-0">
                        <img src={MyImage} className="h-[300px] w-auto rounded-lg shadow-lg mb-4" alt="Profile" />
                        <h2 className="text-white text-[2rem]">Sahil Rawat</h2>
                        <h4 className="text-white text-[1rem]">Full Stack Developer | Software Engineer</h4>
                        <p className="mt-6 text-white flex items-center"><SiGmail className="text-blue-500 text-[25px] mr-3" /> sahilrawatjj@gmail.com</p>
                        <p className="mt-6 text-white flex items-center"><FaPhoneAlt className="text-blue-500 text-[25px] mr-3" /> (+91) 7454945875</p>
                        <div className="social-icons flex justify-center md:justify-start mt-6">
                            <a href="https://www.facebook.com/sahil.rawat.18294053" className="text-[30px] mr-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-blue-400 hover:-translate-y-2"><FaFacebook /></a>
                            <a href="https://www.x.com/@SahilRawat778" className="text-[30px] mx-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-blue-400 hover:-translate-y-2"><FaTwitter /></a>
                            <a href="https://www.instagram.com/rawatsahil778/" className="text-[30px] mx-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-pink-600 hover:-translate-y-2"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/sahil-rawat-9385a1245/" className="text-[30px] mx-3 my-2 text-[#ababab] inline-block transition-all ease-in-out duration-500 hover:text-blue-400 hover:-translate-y-2"><FaLinkedinIn /></a>
                        </div>
                        <a href={Resume} download className="mt-6 inline-block bg-red-600 p-3 rounded-lg transition-all ease-in-out hover:-translate-y-2 duration-500 hover:shadow-lg hover:shadow-red-600">Download Resume</a>
                    </animated.div>

                    <animated.div style={rightSpring} ref={rightRef} className=" mx-[12rem] flex justify-center w-full md:w-auto">
                        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full md:w-auto">
                            <div className="w-full max-w-md">
                                <input className="w-full bg-[#262626] p-3 my-4 text-white text-[18px] border border-black rounded-lg focus:outline-none focus:border-blue-500" type="text" name="name" placeholder="Your name" required />
                                <input className="w-full bg-[#262626] p-3 my-4 text-white text-[18px] border border-black rounded-lg focus:outline-none focus:border-blue-500" type="email" name="email" placeholder="Your Email" required />
                                {error && <p className="text-red-500">{error}</p>}
                                <textarea className="w-full bg-[#262626] p-3 my-4 text-white text-[18px] border border-black rounded-lg focus:outline-none focus:border-blue-500" name="message" rows={6} placeholder="Your message" required />
                                <button type="submit" style={bg} className="w-full bg-red-600 py-3 rounded-lg transition-all ease-in-out hover:-translate-y-2 duration-500 hover:shadow-lg hover:shadow-red-600">Submit</button>
                            </div>
                        </form>

                        {showPopup && (
                            <div className={`fixed inset-0 flex flex-col items-center justify-center rounded-lg shadow-lg ${formStatus === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white h-[300px] w-[350px]`}>
                                {formStatus === 'success' ? <ImCheckboxChecked className="text-blue-500 text-[150px] my-6" /> : <VscError className="text-blue-500 text-[150px] my-6" />}
                                <div className="text-center">
                                    {formStatus === 'success' ? 'Form submitted successfully!' : 'Error submitting form!'}
                                </div>
                            </div>
                        )}
                    </animated.div>
                </div>
            </section>
        </>
    );
};

export default Contact;
