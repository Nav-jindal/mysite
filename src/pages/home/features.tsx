// Packages:
import { motion, Variants } from "motion/react"

// Typesript:
interface FeaturesType {
    id?: number
    title: string
    imgSrc: string
    desc: string
}
const Features = () => {
    // Constant:
    const contentVariant: Variants = {
        hidden: {
            x: -200,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1, 
        }
    }
    const featuresCardVariant: Variants = {
        hidden: {
            opacity: 0
        },
        show: (index: number) => ({
            opacity: 1,
            transition: {
                delay: .2 * index,
                duration: .35,
            }
        })
    }
    const featuresArr = [
        {
            id: 0,
            imgSrc: './images/noTechJargon.jpg',
            title: 'No Tech Jargon. Everything Simplified',
            desc: "No confusing tech talk or steep learning curves. I set up automated lead capture and booking systems—so you don't have to"
        },
        {
            id: 1,
            imgSrc: './images/highConversionRate.jpg',
            title: 'Conversion Focused Simplified',
            desc: "Your website is more than a brochure — it's built with strategy to convert visitors into clients using design and clear buttons."
        },
        {
            id: 2,
            imgSrc: './images/fitnessTailored.jpg',
            title: 'Tailored for the Fitness Industry',
            desc: "I design with your industry in mind — building trust, showcasing results, and creating what actually works for fitness professionals."
        },
    ]
    return <div className='my-[175px]'>
        <motion.h2 
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
            }}
            transition={{duration: .6 ,ease: 'easeInOut'}}
            variants={contentVariant}
            className='font-extrabold text-[40px]'>
                Your growth partner
        </motion.h2>
        <div className='flex items-stretch gap-[16px] flex-wrap mt-[30px]'>
            {featuresArr?.map((feature: FeaturesType, index: number)=>
                <motion.div 
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                    }}
                    variants={featuresCardVariant}
                    custom={index}
                    className='relative p-[30px] w-full sm:w-[48.6%] lg:w-[32.4%] group overflow-hidden' key={feature?.id}>
                        <img className='absolute z-[-1] top-0 left-0 object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-200' src={feature?.imgSrc} alt={feature?.title}/>
                        <h3 className='text-[26px] font-bold'>{feature?.title}</h3>
                        <p className='text-[#A2A2A2] mt-[12px] group-hover:text-[#CDAAAA]'>{feature?.desc}</p>
                </motion.div>
            )}
        </div>
    </div>
}

export default Features