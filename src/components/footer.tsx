// Packages:
import { IconContext } from 'react-icons'

// Icons:
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6"

const Footer = () => {
    return <div className='flex gap-[24px] items-center'>
        <IconContext.Provider 
            value={{ 
                className: 'socialIcons', 
                size: '26px', 
                style: {cursor: 'pointer', backgroundColor:'none', fill:'#92A8E0'}}}> 
    {/* hover color is in index.css */}
    <a href='https://www.linkedin.com/in/nav-j-399ba112a/' target='_blank' rel="noreferrer">
        <FaLinkedinIn />
    </a>
    <a href='mailto:navjindal201998@gmail.com' target='_blank' rel="noreferrer">
        <FaEnvelope />
    </a>
</IconContext.Provider>
    </div>
}

export default Footer