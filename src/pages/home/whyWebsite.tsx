// Packages:
import { motion, Variants } from "motion/react"

const WhyWebsite = () => {
    // Constant:
    const imageVariant: Variants = {
        hidden: {
            x: -200,
            opacity: 0
        },
        show: {
            x: 0, 
            opacity: 1
        }
    }
    const contentVariant: Variants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
        }
    }
    return <div className='my-[175px] group'>
    <div className='flex gap-[32px] flex-wrap justify-between items-center mt-[30px]'>
        <motion.div 
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
            }}
            transition={{duration: .6 ,ease: 'easeInOut'}}
            variants={imageVariant}
            className='overflow-hidden w-full min-[950px]:max-w-[54%] min-[950px]:flex-1 '>
            
                <img className='max-lg:max-h-[325px] object-cover w-full h-auto group-hover:scale-125 transition-all duration-200'
                    src='./images/whyWebsite.jpg'
                    alt='Why you should have a website'
                />
        </motion.div>
        <motion.div 
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
            }}
            transition={{delay: .45, duration: .6 ,ease: 'easeInOut'}}
            variants={contentVariant}
            className='max-w-[500px]'>
            <h2 className='font-extrabold text-[40px]'>Why every fitness pro needs a website</h2>
            <p className='text-[#807F7F] mt-[12px] '>In today's digital age, a website isn't just a nice-to-have — it's essential. For fitness professionals, it acts as your online hub: showcasing your services, building credibility, and helping potential clients find and trust you. It works 24/7 to generate leads, book sessions, and grow your brand — even while you're training others.</p>
        </motion.div>
    </div>
</div>
}

export default WhyWebsite