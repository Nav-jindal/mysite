// Packages:
import { motion, Variants } from "motion/react"


const BookSession = () => {
    // Constants:
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
    return <div className='mt-[150px] '>
    <motion.div 
        initial='hidden'
        whileInView='show'
        viewport={{
            once: true,
        }}
        transition={{ duration: .45 ,ease: 'easeInOut',  when: "beforeChildren"}}
        variants={contentVariant}
        className='flex justify-between items-center gap-[16px] flex-wrap mt-[30px] group max-lg:py-[20px]'
        style={{
            backgroundColor: '#313030',
            boxShadow: '0 0 0 100vmax #313030',
            clipPath: 'inset(0 -100vmax)'
        }}
    >
        <motion.div 
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
            }}
            transition={{delay: .5, duration: .45 ,ease: 'easeInOut'}}

            variants={contentVariant}
            className='py-[24px] lg:py-[42px] max-lg:order-2'>
            <h2 className='font-extrabold text-[40px]'>Let's talk about you</h2>
            <p className='text-[#A2A2A2] mt-[20px] max-w-[600px]'>Book a call or send a message, and we’ll take the time to discuss your goals, requirements, and how I can help you build a high-performing website tailored to your fitness business</p>
            <a href='https://calendly.com/navjindal-peakpixelworks/30min' target='_blank' rel='noreferrer' type='button' className='block w-max mt-[32px] px-[20px] py-[14px] md:px-[30px] bg-[#E02720] text-[18px] sm:text-[20.25px] hover:px-[45px] transition-all duration-[200ms] ease-in-out'>Book now</a>
            
        </motion.div>
        <motion.div 
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
            }}
            transition={{delay: .8, duration: .6 ,ease: 'easeInOut'}}
            variants={imageVariant}
            className='overflow-hidden w-[100vw] lg:max-w-[45%] lg:flex-1'>
            <img 
                className='max-lg:max-h-[225px] object-cover w-full h-auto group-hover:scale-125 transition-all duration-200'
                src='./images/bookASection.jpg' 
                alt='book a session'
            />
        </motion.div>
    </motion.div>
</div>
}

export default BookSession