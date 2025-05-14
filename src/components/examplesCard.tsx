// Packages:
import { motion } from "motion/react"

// Typescipt: 
interface ExamplesType {
    id?: number
    title: string
    imgSrc: string
    index: number
    url?: string | undefined
}

const ExamplesCard = ({
    index,
    title,
    imgSrc,
    url,
} : ExamplesType) => {

    return <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: index * 0.5, ease: 'easeInOut'}}
                className='cursor-pointer w-full sm:w-[48%] lg:w-[25%]'
                onClick={()=>
                    window.open(url, "_blank")
                }
            >
    <div className='relative w-full h-[300px] group overflow-hidden'>
        <img 
            className='object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-200'
            src={imgSrc} 
            alt={title} 
        />
        <div className='absolute left-0 top-0 z-[30] w-full h-full bg-[rgba(224,38,32,0.5)] group-hover:hidden transition-all duration-200'>
            
        </div>
    </div>
    <h3 className='font-light text-[25.629px] mt-[12px]'> <span className='font-semibold'> {title}</span></h3>
</motion.div>}


export default ExamplesCard