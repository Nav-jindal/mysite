// Packages:
import { useLocation } from "react-router-dom"

// Components:
import ServicesCard from "../components/servicesCard"

// Icons:
import { FaIdCard, FaPenNib, FaUser, FaUserTie, FaClock  } from "react-icons/fa6"


const Services = () => {
    // Constants:
    const iconSize = 24
    const iconColor = '#F0F2F6'
    const currentPage = useLocation()
    const servicesArr = [
        {
            id: 0,
            title: 'Lead Generator',
            icon:  <FaUser size={iconSize} style={{fill: iconColor}} />,
            desc: 'We build high converting Landing pages with booking systems - designed to double your leads. if not, we will return your money.',
        },
        {
            id: 1,
            title: 'Grow with content',
            icon:  <FaIdCard size={iconSize} style={{fill: iconColor}} />,
            desc: 'We will help you showcase your expertise by organizing your content into a blog built to educate and expand your reach.',
        },
        {
            id: 2,
            title: 'Custom Web Design',
            icon:  <FaPenNib size={iconSize} style={{fill: iconColor}} />,
            desc: 'I help you create a custom web design tailored to your target audience, elevating your brand identity and boosting your leads',
        },
        {
            id: 3,
            title: 'Launch Site in 5-days',
            icon:  <FaClock size={iconSize} style={{fill: iconColor}} />,
            desc: `A conversion focused site, designed & launched in just 7-days - so you can start getting clients faster.`,
        },
        {
            id: 4,
            title: 'Consultation',
            icon:  <FaUserTie size={iconSize} style={{fill: iconColor}} />,
            desc: `Book a consultation to turn your vision into a focused web design strategy, tailored to your boast your sales and leads.`,
        },
    ]

    return <div className='flex-1 my-[60px]'>
        <h3 className='text-[22.781px] text-[#AFB2BB]'>{currentPage.pathname.slice(1)}</h3>
        <h2 className='text-[32.437px] sm:text-[36.491px] mb-[25px] font-bold'>
            What do you need?
        </h2>
        <div className='flex items-stretch gap-[30px] flex-wrap'>
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