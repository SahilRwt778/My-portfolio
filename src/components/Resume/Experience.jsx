import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-auto flex flex-col lgl:flex-row gap-20 lgl:gap-30 mx-8  text-white"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Coursework</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Data Structure & Algorithms"
            subTitle="2024 - Present"
            result="Btech"
            des=" "
          />
          <ResumeCard
            title="Operating System"
            subTitle="2024 - Present"
            result="Btech"
            des=" "
          />
          <ResumeCard
            title="Web Development"
            subTitle="2024 - Present"
            result="Btech"
            des=" "
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Training & Workshops</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Advance Web Development with React JS"
            subTitle="Udemy (Nov,2023 - Present)"
            result="Online"
            des=" "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
 