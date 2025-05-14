// Packages:
import { useLocation } from "react-router-dom"
import { motion, Variants } from "motion/react"

// Components:
import ExamplesCard from "../components/examplesCard"

const Works = () => {
    // Constants:
    const contentVariant: Variants = {
        hidden: {
            x: -200,
            opacity: 0

        },
        show: {
            x: 0,
            opacity: 1
        }
    }
    const currentPage = useLocation()
    const exampleArr = [
        {
            id: 1,
            title: 'Fitness Coach',
            imgSrc: './images/portfolio2.png',
            url: 'https://alexcarter.netlify.app',
        },
        {
            id: 2,
            title: 'Job Portfolio',
            imgSrc: './images/jobPortfolio.jpg',
            url: 'https://johndoe2323.netlify.app/',
        },
    ]

    // Return:
    return <div className='flex-1 mt-[60px] mb-[100px]'>
        <motion.div 
            initial='hidden'
            animate='show'
            transition={{duration:.75, ease: 'easeInOut'}}
            variants={contentVariant}
            className='mb-[40px]'>
            <h3 className='text-[16px] text-[#807F7F]'>{currentPage.pathname}</h3>
            <h2 className='text-[32.437px]  sm:text-[36.491px] mb-[25px] font-bold'>Some of my recent works
            </h2>
        </motion.div>

        <div className='flex items-center gap-[45px] sm:gap-[20px] flex-wrap'>
            {exampleArr?.map((example, index)=>
                <ExamplesCard
                    key={example?.id}
                    id={example?.id}
                    title={example?.title}
                    imgSrc={example?.imgSrc}
                    url={example?.url ?? ''}
                    index={index}
                />
            )}
        </div>
    </div>
}

export default Works