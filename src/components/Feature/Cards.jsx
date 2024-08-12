import React from "react";
import { FaArrowRight, FaChartLine, FaDatabase, FaLaptopCode, FaServer, } from "react-icons/fa";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { TfiWrite } from "react-icons/tfi";
import { MdDesignServices } from "react-icons/md";

const cards = [
    {
        id: 1,
        icon: FaLaptopCode,
        title: 'Frontend Developer',
        des: 'Design and develop high-quality and highly reliable software UI features by using HTML, CSS, JavaScript, Bootstrap & React JS.'
    },
    {
        id: 2,
        icon: FaServer,
        title: 'Backend Developer',
        des: 'Designed, implemented and maintained various back-end applications and utilities on using  Node.JS.'
    },
    {
        id: 3,
        icon: MdDesignServices,
        title: 'UI & Design',
        des: 'Building interfaces in software or computerized devices, focusing on looks or style.'
    },
    {
        id: 4,
        icon: TfiWrite,
        title: 'Content Writing',
        des: 'Design and developing the high quality reliable site with creative content writing.'
    },
    {
        id: 5,
        icon: FaChartLine,
        title: 'Data Analyst',
        des: 'Analysis of the data using python.'
    },
    {
        id: 6,
        icon: FaDatabase,
        title: 'DBMS',
        des: 'knowledge of MongoDB, SQL for the Database management system.'
    },
]

const Cards = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="flex flex-wrap justify-center gap-4" ref={ref}>
            {cards.map((card, index) => {
                const slideInStyles = useSpring({
                    transform: inView ? 'translateY(0)' : 'translateY(100px)',
                    transform: 'hover:-translate-y-4',
                    opacity: inView ? 1 : 0,
                    delay: index * 200, // Adjust delay based on index
                    config: { duration: 700 },
                });

                return (
                    <animated.div key={card.id} style={slideInStyles} className="group bg-black rounded-xl hover:-translate-y-4 transition-all ease-in-out duration-500 p-4 border mx-2 my-2 rounded shadow-xl shadow-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
                        <card.icon className="rounded-full group-hover:scale-150 transition-all ease-in-out h-[80px] duration-500 text-5xl mb-2 text-red-600" />
                        <h2 className="text-lg font-semibold mb-2 text-blue-600 flex items-center"><FaArrowRight className="text-blue-600" />{card.title}</h2>
                        <p className="mb-4 text-center text-white">{card.des}</p>
                    </animated.div>
                );
            })}
        </div>
    )
}

export default Cards;
