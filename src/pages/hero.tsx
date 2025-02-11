// Packages:
import { NavLink } from "react-router-dom"

const Hero = () => {
    // Return:
    return <div>
        <div className='mb-[40px] pl-[18px] md:pl-[24px] max-w-[450px] border-l-4 border-solid border-[#263568]'>
            <div className='mb-[12px]'>
                <h2 className='text-[25.629px] font-semibold'>Nav Jindal</h2>
                <h1 className='text-[41.053px] sm:text-[51.957px] font-bold'>Web Designer</h1>
            </div>
            <p className='text-[#9699A1]'>designing beautiful, user-friendly websites that engage with your customers</p>
        </div>
        
        <div className='flex items-center gap-[18px] flex-wrap'>
        <NavLink to='contact' type='button' className='px-[20px] py-[10px] md:py-[12px] md:px-[30px] bg-[#263568] text-[#F0F2F6] text-[18px] sm:text-[20.25px] hover:px-[45px]'>Hire me</NavLink>
        <NavLink to='examples' type='button' className='px-[20px] py-[10px] md:py-[12px] md:px-[30px] border-[2px] border-solid border-[#263568] text-[#263568] text-[18px] sm:text-[20.25px] hover:px-[45px]'>View my work</NavLink>
        </div>
        
        <div>
            <img 
                className='absolute right-0 bottom-0 hidden md:w-[450px] lg:block lg:w-[68%] xl:w-[850px] h-[auto] object-cover'
                src='./images/heroBackground.png'
                alt='Hero Background'
            />
        </div>
    
    </div>
}

export default Hero