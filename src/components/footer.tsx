// React Icons:
import { FaInstagram, FaLinkedin } from "react-icons/fa6"


const Footer = () => {
    // Constant:
    const iconSize = 18
    return <div className='my-[18px] text-[14px]'>
    <div className='flex items-center gap-[30px] flex-wrap lg:justify-end'>
        <a href='https://www.linkedin.com/in/nav-j-399ba112a/' target='_blank' rel="noreferrer" className='group flex items-center gap-[8px] text-[#e64949] hover:underline'>
            <i> <FaLinkedin size={iconSize} className='fill-[#e64949] group-hover:underline' /> </i>
            linkedin
        </a>
        <a href='https://www.instagram.com/navjindal622/' target='_blank' rel="noreferrer" className='group flex items-center gap-[8px] text-[#e64949] hover:underline'>
             <i> <FaInstagram size={iconSize} className='fill-[#e64949] group-hover:underline' /> </i>
            instagram
        </a>
        <span className='text-[#807F7F] hover:text-[#f6f6f6]'>
            navjindal@peakpixelworks.com
        </span>
    </div>
    </div>
}

export default Footer