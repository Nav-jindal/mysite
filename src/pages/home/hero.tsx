// Packages:
import { motion, Variants } from "motion/react"
import { NavLink } from "react-router-dom"


const Hero = () => {
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
    const imageVariant: Variants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1
        }
    }
    return <div className='flex justify-between gap-[45px] items-center flex-wrap'>
        <div className='max-w-[580px] max-lg:order-2'>
            <motion.div 
                    initial='hidden'
                    animate='show'
                    transition={{delay: .45, duration:.75, ease: 'easeInOut'}}
                    variants={contentVariant}
                className='mb-[40px]'>
                <h1 className='mb-[6px] text-[41.053px] sm:text-[51.957px] font-bold leading-tight'>Let your website converts, while you keep others fit</h1>
                <p className='text-[#807F7F] text-[20.25px] font-light mt-[12px]'>I help coaches, gyms, and businesses boost their leads and profits with websites automation & more </p>
            </motion.div>
            
            <motion.div 
                initial='hidden'
                animate='show'
                transition= {{delay: .75, duration:.75, ease: 'easeInOut'}}
                variants={contentVariant}
                className='flex items-center gap-[18px] flex-wrap'
            >
                {/* <a href='https://calendly.com/navjindal-peakpixelworks/30min' target='_blank' rel='noreferrer' type='button' className='px-[20px] py-[14px] md:px-[30px] bg-[#E02720] text-[18px] sm:text-[20.25px] hover:px-[45px] transition-all duration-[200ms] ease-in-out'>Book a Session</a> */}

                <NavLink to='contact' className='px-[20px] py-[14px] md:px-[30px] bg-[#E02720] text-[18px] sm:text-[20.25px] hover:px-[45px] transition-all duration-[200ms] ease-in-out'>Book a Session</NavLink>
                <NavLink to='works' type='button' className='font-semibold px-[20px] py-[14px] md:px-[30px] border-[2px] border-solid border-[#E02720] text-[#E02720] text-[18px] sm:text-[20.25px] hover:px-[45px] transition-all duration-[200ms] ease-in-out'>Recent works</NavLink>
            </motion.div>
        </div>
        
        <motion.div 
            initial='hidden'
            animate='show'
            variants={imageVariant}
            transition={{duration: .6, ease:'easeInOut'}}
            className='w-[100vw] max-lg:order-1 lg:flex-1 lg:max-w-[42%] overflow-hidden'>
                <picture>
                    <source media='(min-width:1024px)' srcSet='./images/heroBackground.png' />
                    <img 
                        className='max-lg:max-h-[400px] h-auto w-full object-cover'
                        src='./images/heroBackgroundMobile.png'
                        alt='Hero Background'
                    />
                </picture>
            
        </motion.div>   
    </div>
}

export default Hero