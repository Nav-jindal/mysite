// Packages:
import { useLocation } from "react-router-dom"

// Components:
import ServicesCard from "../components/servicesCard"

// Icons:
import { FaIdCard, FaPenNib, FaUser, FaUserTie } from "react-icons/fa6"


const Services = () => {
    // Constants:
    const iconSize = 24
    const iconColor = '#F0F2F6'
    const currentPage = useLocation()
    const servicesArr = [
        {
            id: 0,
            title: 'Personalized Site',
            icon:  <FaUser size={iconSize} style={{fill: iconColor}} />,
            desc: 'Your website will be clean, functional, and built to empower your success—whether for job hunting, business growth, or branding. I have you covered',
        },
        {
            id: 1,
            title: 'Digital Card',
            icon:  <FaIdCard size={iconSize} style={{fill: iconColor}} />,
            desc: 'Your website will be clean, functional, and built to empower your success—whether for job hunting, business growth, or branding. I have you covered',
        },
        {
            id: 2,
            title: 'Custom Web Design',
            icon:  <FaPenNib size={iconSize} style={{fill: iconColor}} />,
            desc: 'Your website will be clean, functional, and built to empower your success—whether for job hunting, business growth, or branding. I have you covered',
        },
        {
            id: 3,
            title: 'Consultation',
            icon:  <FaUserTie size={iconSize} style={{fill: iconColor}} />,
            desc: 'Your website will be clean, functional, and built to empower your success—whether for job hunting, business growth, or branding. I have you covered',
        },
    ]

    return <div className='flex-1 my-[60px]'>
        <h3 className='text-[22.781px] text-[#AFB2BB]'>{currentPage.pathname.slice(1)}</h3>
        <h2 className='text-[32.437px] sm:text-[36.491px] mb-[25px] font-bold'>
            What do you need?
        </h2>
        <div className='flex items-center gap-[30px] flex-wrap'>
            {servicesArr?.map((service)=>
                <ServicesCard
                    key={service?.id}
                    title={service?.title}
                    icon={service?.icon}
                    desc={service?.desc}
                />
            )}
        </div>
    </div>
}

export default Services