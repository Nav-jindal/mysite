// Packages:
import { useLocation } from "react-router-dom"
import { motion, Variants } from "motion/react"

// Typescript:
interface TagsType{
    title: string
}

const Tags = ({
    title
}: TagsType) => {
    return <div className='w-max rounded-[6px] px-[14px] py-[6px] bg-[#6e6e6e] text-[#0A0A0A]'>
        {title}
    </div>
}

const About = () => {
    // Constants:
    const contentVariant: Variants = {
        hidden: {
            x: -200,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
        }
    }
    const currentPage = useLocation()
    const skilsTags = [
        'Web Development',
        'UI/UX',
        'Webflow',
        'Framer',
    ]

    return <div className='flex-1 mt-[60px] flex justify-between flex-wrap'>
        <motion.div
            initial='hidden'
            animate='show'
            transition={{duration:.75, ease: 'easeInOut'}}
            variants={contentVariant}
        >
            <h3 className='text-[16px] text-[#807F7F]'>{currentPage.pathname}</h3>
            <h2 className='text-[32.437px] sm:text-[36.491px] mb-[25px] font-bold'>
                A bit about me
            </h2>
            <div className='max-w-[700px] font-light '>
                <p className='mb-[18px] text-[#807F7F]'>
                    As a freelance web developer, I create visually stunning and highly functional websites tailored to your needs. With expertise in React, TypeScript, and Tailwind CSS, I specialize in front-end development, responsive design, and user-friendly experiences.
                </p>
                <p className='mb-[18px] text-[#807F7F]'>
                    From sleek landing pages to dynamic web applications, I focus on seamless functionality and pixel-perfect designs to help businesses grow their online presence.
                </p>
                <p className='text-[#807F7F]'>Let’s collaborate to bring your ideas to life on the web!</p>
            </div>
        </motion.div>
        <motion.div 
            initial='hidden'
            animate='show'
            transition={{duration:.75, delay: .55, ease: 'easeInOut'}}
            variants={contentVariant}
            className='mt-[28px] sm:w-[60%] lg:w-[22%]'>
            <div className='mb-[40px]'>
                <h3 className='font-bold text-[25.629px] mb-[12px]'>Education</h3>
                <div className='text-[#807F7F] border-solid'>
                    <span className='font-bold text-[#807F7F]'>Btech (CS)</span> <br />
                    2017 - 2021
                </div>
            </div>
            <div className='mb-[40px]'>
                <h3 className='font-bold text-[25.629px] mb-[12px]'>Skills</h3>
                <div className='flex gap-[12px] flex-wrap'>
                    {skilsTags.map((skillTag:string, index:number)=>
                        <Tags
                            key={index}
                            title={skillTag}
                        />
                    )}
                </div>
            </div>
        </motion.div>
    </div>
}

export default About