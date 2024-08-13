import React from "react";
import { FaGithub, FaInternetExplorer } from "react-icons/fa";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import ss43 from '../../assets/ss43.png'
import ss42 from '../../assets/ss42.png'
import ss44 from '../../assets/ss44.png'
const cardData = [
    {
        id: 1,
        imgsrc: ss43,
        title: 'Weather Website',
        des: 'To create this project I used React.JS and API from the openweathermap.org which provides the data related to the current weather of a city that we’ll search.',
        icon1: FaGithub,
        icon2: FaInternetExplorer,
        link: 'https://weather-application-1001.netlify.app/',
        link2:'https://github.com/SahilRwt778/WeatherApplication1'
    },
    {
        id: 2,
        imgsrc: ss42,
        title: 'World-Seed',
        des: 'A website to educate people about the different kinds of seeds from planting to harvesting.',
        icon1: FaGithub,
        icon2: FaInternetExplorer,
        link: 'https://world-seed.netlify.app/',
        link2:'https://github.com/SahilRwt778/world-seed-website'
    },
    {
        id: 3,
        imgsrc: ss44,
        title: 'Corona Live tracker',
        des: 'A site built to track the cases of the corona (COVID-19) virus.',
        icon1: FaGithub,
        icon2: FaInternetExplorer,
        link: 'https://corona-live-tracker-by-sahil.netlify.app',
        link2:'https://github.com/SahilRwt778/React-apps'
    },
];

const Project = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <>
            <section id="projects" className="my-[8rem]">
                <div className="text-center mt-[5rem] mb-6">
                    <h2 className="text-red-600">--Projects--</h2>
                    <h1 className="text-white text-[2rem]">My Projects</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-4" ref={ref}>
                    {cardData.map((card, index) => {
                        const slideInStyles = useSpring({
                            transform: inView ? 'translateY(0)' : 'translateY(100px)',
                            opacity: inView ? 1 : 0,
                            delay: index * 300, // Adjust delay based on index
                            config: { duration: 1000 },
                        });

                        // Apply scaling to the center card
                       

                        return (
                            <animated.div
                                key={card.id}
                                style={slideInStyles}
                                className={`group bg-black rounded-xl p-4 border mx-2 my-2 rounded shadow-xl shadow-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center max-[768px]:scale-100`}
                            >
                                <div className="my-2 mx-2">
                                    <img
                                        src={card.imgsrc}
                                        alt={card.title}
                                        className="w-full rounded-lg group-hover:scale-110 transition-all ease-in-out duration-500"
                                    />
                                </div>
                                <div className="flex items-center my-2">
                                    <h2 className="text-lg font-semibold mb-2 text-blue-600">{card.title}</h2>
                                    <div className="flex text-white">
                                        <a href={card.link2}><card.icon1 className="bg-gray-700 text-[40px] mx-2 p-2 rounded-lg hover:-translate-y-2 transition-all ease-in-out duration-500" /></a>
                                        <a href={card.link}><card.icon2 className="bg-blue-500 text-[40px] mx-2 p-2 rounded-lg hover:-translate-y-2 transition-all ease-in-out duration-500" /></a>
                                    </div>
                                </div>
                                <p className="mb-4 text-center text-white">{card.des}</p>
                            </animated.div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Project;
