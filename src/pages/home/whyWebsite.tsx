// Packages:
import { motion, Variants } from "motion/react"

// React icons
import { FaCircleCheck } from "react-icons/fa6";

const WhyWebsite = () => {
    // Constant:
    const iconSize: number | string | undefined = 20
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
    <div className='flex gap-[32px] flex-wrap justify-between mt-[30px]'>
        <motion.div 
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
            }}
            transition={{duration: .6 ,ease: 'easeInOut'}}
            variants={imageVariant}
            className='overflow-hidden w-full h-full min-[950px]:max-w-[54%] min-[950px]:flex-1 '>
            
                <img className='max-lg:max-h-[300px] object-cover w-full h-auto group-hover:scale-125 transition-all duration-200'
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
            className='max-w-[500px] mt-[25px]'>
            <h2 className='font-bold text-[40px]'>Why every fitness pro needs a website</h2>
            <div>
                <p className='text-[#807F7F] mt-[12px]'>A website is a powerful tool for fitness professionals to showcase their expertise, build trust, and attract more clients. It acts as a central hub for your brand, services, and client engagement.
                </p>
                <ul className='mt-[12px] list-none text-[#807F7F]'>
                    <li className='flex gap-[16px] mt-[15px]'>
                        <i className='mt-[3.2px]'><FaCircleCheck size={iconSize} /> </i>
                        <span className='text-[#807F7F]'>
                            <b className='mr-[8px]'>First Impressions: </b>Creates a strong, professional first impression that sets you apart.
                        </span>
                    </li>
                     <li className='flex gap-[16px] mt-[15px]'>
                        <i className='mt-[3.2px]'><FaCircleCheck size={iconSize} /> </i>
                        <span className='text-[#807F7F]'>
                            <b className='mr-[8px]'>Service Clarity: </b>Clearly displays your offerings, pricing, and transformation results.
                        </span>
                    </li>
                     <li className='flex gap-[16px] mt-[15px]'>
                        <i className='mt-[3.2px]'><FaCircleCheck size={iconSize} /> </i>
                        <span className='text-[#807F7F]'>
                            <b className='mr-[8px]'>Client Convenience: </b>Enables easy booking, payments, and program access.
                        </span>
                    </li>
                     <li className='flex gap-[16px] mt-[15px]'>
                        <i className='mt-[3.2px]'><FaCircleCheck size={iconSize} /> </i>
                        <span className='text-[#807F7F]'>
                            <b className='mr-[8px]'>Scalability: </b>Supports growth by integrating online programs, memberships, or digital products.
                        </span>
                    </li>
                    
                </ul>
            </div>
        </motion.div>
    </div>
</div>
}

export default WhyWebsite