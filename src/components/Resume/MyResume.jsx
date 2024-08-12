import React from "react";
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"
import { useState } from "react";
import Title from "./Title";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
const MyResume = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
      });
    
      
      const slideInStyles = useSpring({
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
      });
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    return (
        <>
        <animated.div
          style={slideInStyles}
          ref={ref}>
            <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
                <div className="flex justify-center items-center text-center ">
                    <Title title="--RESUME--" des="My Resume" />
                </div>
                <div className="mx-8 ">
                    <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                        <li
                            onClick={() =>
                                setEducationData(true) &
                                setSkillData(false) &
                                setExperienceData(false) 
                            }
                            className={`${educationData
                                    ? "border-blue-500 rounded-lg"
                                    : "border-transparent"
                                } resumeLi `}
                        >
                            Education
                        </li>
                        <li
                            onClick={() =>
                                setEducationData(false) &
                                setSkillData(true) &
                                setExperienceData(false) 
                            }
                            className={`${skillData ? "border-blue-500 rounded-lg" : "border-transparent"
                                } resumeLi`}
                        >
                            Professional Skills
                        </li>
                        <li
                            onClick={() =>
                                setEducationData(false) &
                                setSkillData(false) &
                                setExperienceData(true) 
                             
                            }
                            className={`${experienceData
                                    ? "border-blue-500 rounded-lg"
                                    : "border-transparent"
                                } resumeLi`}
                        >
                            Training & Coursework
                        </li>
                     
                    </ul>
                </div>
                {educationData && <Education />}
                {skillData && <Skills />}
                {experienceData && <Experience />}

            </section>
            </animated.div>
        </>
    )
}
export default MyResume