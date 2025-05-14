// Packages:
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { motion, Variants } from "motion/react"

// Typescript:
interface TestimonialType {
    id?: number
    title: string
    content: string
}

const Testimonials = () => {
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
    const testimonialCardsVariant: Variants = {
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
    const testimonialsArr = [
        { id: 1, content: "Lorem ipsum dolor sit amet consectetur. Interdum suspendisse cursus sollicitudin posuere. Tortor justo in sem pharetra aliquet. Quam gravida nec sed tellus eget ullamcorper. Arcu enim vel turpis tristique et.", title: "John Doe" },
        { id: 2, content: "Lorem ipsum dolor sit amet consectetur. Interdum suspendisse cursus sollicitudin posuere. Tortor justo in sem pharetra aliquet. Quam gravida nec sed tellus eget ullamcorper. Arcu enim vel turpis tristique et.", title: "John Doe 2" },
        { id: 3, content: "Lorem ipsum dolor sit amet consectetur. Interdum suspendisse cursus sollicitudin posuere. Tortor justo in sem pharetra aliquet. Quam gravida nec sed tellus eget ullamcorper. Arcu enim vel turpis tristique et.", title: "John Doe 3" },
    ]
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
        perView: 1,
        spacing: 16,
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 16},
            },
        },
    })
    return <div className='my-[175px]'>
        <motion.h2 
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
            }}
            transition={{duration: .6 ,ease: 'easeInOut'}}
            variants={contentVariant}
            className='font-extrabold text-[40px]'>Hear from Fitness Pros I've Worked With</motion.h2>
        <div ref={ref} className='keen-slider mt-[20px]'>
            {testimonialsArr?.map((testimonial: TestimonialType, index: number)=>
                <motion.div 
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                    }}
                    variants={testimonialCardsVariant}
                    custom={index}
                    className={`keen-slider__slide number-slide${index} overflow-hidden relative bg-[#313030] py-[30px] px-[24px] hover:bg-[linear-gradient(115deg,_#282020_15%,_#BC201B_100%)] group`} 
                    key={testimonial?.id}>
                        <img className='z-[-1] opacity-75 sm:opacity-100 absolute bottom-0 right-10 object-cover grayscale group-hover:grayscale-0' src='./images/quote.svg' alt='quote icon' 
                        
                        />
                        <p className='text-[#A2A2A2] group-hover:text-[#CDAAAA] '>{testimonial?.content}</p>
                        <h3 className='mt-[24px] text-[26px] font-bold'>— {testimonial?.title}</h3>
                </motion.div>
            )}
        </div>
    </div>
}

export default Testimonials