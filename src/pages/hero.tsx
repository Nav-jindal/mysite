// Packages:
import { NavLink } from "react-router-dom"

const Hero = () => {
    // Return:
    return <div className=''>
        <div className='mb-[40px] pl-[25px] w-[450px] border-l-4 border-solid border-[#263568]'>
            <h2 className='text-[1.728rem] font-medium'>Nav Jindal</h2>
            <h1 className='text-[2.986rem] font-bold'>Web Designer</h1>
            <p className='text-[#B1B1B1]'>designing beautiful, user-friendly websites that engage with your customers</p>
        </div>
        
        <NavLink to='contact' type='button' className='py-[12px] px-[30px] bg-[#263568] text-[#F0F2F6] hover:px-[45px]'>Hire me!</NavLink>
        
        <div>
            <img 
                className='absolute right-0 bottom-0'
                src='./images/heroBackground.png'
                alt='Hero Background'
            />
        </div>
    
    </div>
}

export default Hero