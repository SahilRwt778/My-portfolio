import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-auto flex flex-col lgl:flex-row gap-10 lgl:gap-20 "
    >
      {/* part one */}
      <div className='className="mt-14 w-auto flex flex-col gap-6 mx-8 text-white'> 
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Computer Science and Engineering"
            subTitle="Bachelor of Technology(2022 - 2025)"
            result="70.4/100"
            des="Uttarakhand Technical University"
          />
          <ResumeCard
            title="Information technology"
            subTitle="diploma (2019 - 2022)"
            result="84.6%"
            des="Government Polytechnic Kashipur Uttarakhand-244713"
          />
          <ResumeCard
            title="Science"
            subTitle="Senior Secondary Education (2018 - 2019)"
            result="65/100"
            des="J.I.C. GweenKhal"
          />
          <ResumeCard
            title="Science"
            subTitle="Higher Secondary Education (2016 - 2017)"
            result="70.4/100"
            des="J.I.C. Gweenkhal"
          />
          
        </div>
      </div>
      {/* part Two */}

      <div className='className="mt-14 mx-8 w-auto flex flex-col gap-6'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Internship</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
           
          <ResumeCard
            title="React - The Complete Guide 2024 (incl. Next.js, Redux)"
            subTitle="Udemy- (Nov,2023 - Present)"
            result=""
            des=" Worked on different technologies like HTML, CSS, JavaScript, React JS, Redux."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education