// Packages:
import { useState } from "react"
import { motion, Variants } from "motion/react"

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
    // Constants:
    const hoverVariants: Variants = {
        onHover: {
            transform: 'scale(1.25)'
        },
        default: {
            transform: 'scale(1)'
        }
    }

    // States:
    const [isHovering, setIsHovering] = useState<boolean>(false)
    return <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: index * 0.5, ease: 'easeInOut'}}
                className='cursor-pointer w-full sm:w-[48%] lg:w-[25%] rounded-[8px]'
                onClick={()=>
                    window.open(url, "_blank")
                }
            >
    <div className='w-full h-[300px] overflow-hidden'>
        <motion.img 
            variants={hoverVariants}
            initial={'default'}
            animate={isHovering ? 'onHover' : 'default'}
            onMouseEnter={()=> setIsHovering(true)}
            onMouseLeave={()=> setIsHovering(false)}
            transition={{ duration: .2, ease: 'easeInOut' }}
            className='object-cover w-full h-full rounded-[8px]'
            src={imgSrc} 
            alt={title} 
        />
        {/* <div className='absolute z-[30] w-full h-full pb-[20px] pl-[20px] flex items-end rounded-[8px] bg-[rgba(224,39,32,0.5)] group-hover:hidden'>
            
        </div> */}
    </div>
    <h3 className='font-light text-[25.629px] mt-[12px]'> <span className='font-semibold'> {title}</span></h3>
</motion.div>}


export default ExamplesCard