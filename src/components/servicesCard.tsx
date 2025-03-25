// Packages:
import { NavLink } from "react-router-dom"

// Icons:
import { FaChevronRight } from "react-icons/fa6"

// Typescript:
interface ServicesCardType {
    title: string
    desc: string
    icon: React.JSX.Element
}

const ServicesCard = ({
    title,
    desc,
    icon
} : ServicesCardType) => {
    return <div className='md:max-w-[430px] bg-[#C9CCD4] p-[24px] w-full md:basis-[48%] lg:basis-[30%]'>
        <div className='flex gap-[24px] items-center mb-[22px] flex-wrap'>
            <div className='bg-[#070a16] rounded-full p-[12px]'>
                {icon}
            </div>
            <h2 className='text-[25.629px] font-bold'>{title}</h2>
        </div>
        <p className='text-[#626775] mb-[22px]'> {desc} </p>
        <NavLink to='/contact' state={{ service: title }} className='text-[#204CBC] flex items-center font-bold gap-[10px] border-b-2 border-solid border-[#204CBC] pb-[4px] hover:gap-[16px] transition-all duration-200 ease-in-out w-fit'>
            Book a call
            <FaChevronRight size={16} fill='#204CBC' />
        </NavLink>

    </div>
}

export default ServicesCard