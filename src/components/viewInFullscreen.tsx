// Icons:
import { FaXmark } from "react-icons/fa6";

// Typescript:
interface ViewInFullScreenType {
    title: string,
    imgSrc: string,
    type: string
    toggleIsFullScreenOpen: () => void
}

const ViewInFullScreen = ({
    title,
    imgSrc,
    type,
    toggleIsFullScreenOpen
} : ViewInFullScreenType ) => {

    // Return:
    return <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,.95)] z-[40]'>
        <div className='mb-[30px] grid grid-cols-2 w-full items-center px-[20px] pt-[25px] z-[50]'>
            <div className='col-[1_/_3] text-center'>
                <h3 className='font-semibold text-white text-[32.437px]'> {title} </h3>
                <h4 className='font-light text-[#3a5ac2] text-[16pxpx]'>{type}</h4>
            </div>
            <FaXmark
                size={30}
                className='col-[3_/_4] justify-self-end cursor-pointer z-[50] fill-white hover:!fill-[#92A8E0]'
                onClick={toggleIsFullScreenOpen}
            />
        </div>
        
        <div className='flex justify-center items-center w-full h-[75%] max-h-[900px] z-[50]'>
                <img 
                    className='w-[auto] h-full object-contain md:object-cover'
                    src={imgSrc}
                    alt='Fullscreen'
                />
        </div>
    </div>
}

export default ViewInFullScreen