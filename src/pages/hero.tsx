// Packages:
import { NavLink } from "react-router-dom"

const Hero = () => {
    // Return:
    return <div>
        <div className='mb-[40px]  max-w-[450px] '>
            <div className='mb-[6px]'>
                <h2 className='text-[20.25px] font-bold text-[#1E306C]'>Web Designer / Developer</h2>
                <h1 className='text-[41.053px] sm:text-[58.452px]'>Hi, I'm <span className="font-bold">Nav Jindal</span></h1>
            </div>
            <p className='text-[#51545c] text-[20.25px] font-light'>I help coaches, gyms, and businesses boost their leads and profits with smart, strategic web design </p>
        </div>
        
        <div className='flex items-center gap-[18px] flex-wrap'>
        
            <NavLink to='contact' type='button' className='px-[20px] py-[10px] md:px-[30px] bg-[#263568] text-[#F0F2F6] text-[18px] sm:text-[20.25px] hover:px-[45px] transition-all duration-[200ms] ease-in-out'>Hire me</NavLink>
            
            <NavLink to='examples' type='button' className='px-[20px] py-[10px] md:px-[30px] border-[2px] border-solid border-[#263568] text-[#263568] text-[18px] sm:text-[20.25px] hover:px-[45px] transition-all duration-[200ms] ease-in-out'>View my work</NavLink>
        
        </div>
        
        <div className='hidden sm:block fixed z-[-2] opacity-30 lg:opacity-100 max-lg:h-full lg:absolute w-[800px] right-0 bottom-0 lg:w-[44%] 2xl:w-[650px] 2xl:right-24'>
            <img 
                className='h-[auto] w-full object-cover'
                src='./images/heroBackground.png'
                alt='Hero Background'
            />
        </div>
    
    </div>
}

export default Hero