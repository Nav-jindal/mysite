// Packages:
import { motion, Variants } from "motion/react"

// Typesript:
interface ServicesType {
    id?: number
    icon: string
    title: string
}

const Services = () => {
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
    const servicesCardVariant: Variants = {
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
    const ServicesArr = [
        {
            id: 0,
            icon: './images/WebDevIcon.svg',
            title: 'Custom Web Design',
        },
        {
            id: 1,
            icon: './images/LandingIcon.svg',
            title: 'Landing Page Design',
        },
        {
            id: 2,
            icon: './images/SeoAnalytics.svg',
            title: 'SEO Analytics'
        }
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
            How I help fitness brands grow
        </motion.h2>
    <div className='flex items-center gap-[16px] flex-wrap mt-[30px]'>
        {ServicesArr?.map((service: ServicesType, index: number)=>
            <motion.div 
                initial='hidden'
                whileInView='show'
                viewport={{
                    once: true,
                }}
                variants={servicesCardVariant}
                custom={index}
                className='flex gap-[24px] items-center bg-[#313030] w-full sm:w-[48.6%] lg:w-[32.4%]' key={service?.id}>
                <div className='bg-[#E04944] p-[10px]'>
                    <img className='object-contain h-[80px] lg:h-[125px] aspect-square' src={service?.icon} alt='Icon' />
                </div>
                <h3 className='text-[26px] font-bold flex-1 ' >{service?.title}</h3>
            </motion.div>
        )}
    </div>
</div>
}

export default Services