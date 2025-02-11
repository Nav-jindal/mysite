// Packages:
import { useState } from "react"

// Components:
import ViewInFullScreen from "../components/viewInFullscreen"

// Typescipt: 
interface ExamplesType {
    id?: number
    title: string
    imgSrc: string
    sentImgToIsFullScreenOpen: (arg0: string, arg1: string) => void
}

const ExamplesCard = ({
    id,
    title,
    imgSrc,
    sentImgToIsFullScreenOpen,
} : ExamplesType) => <div 
                        className='group cursor-pointer w-full sm:w-[48%] lg:w-[25%] h-[300px] rounded-[8px]'
                        onClick={()=>sentImgToIsFullScreenOpen(imgSrc, title)}
                    >
    
    <h3 className='font-light text-[25.629px] mb-[12px]'>{(id ?? 1) + 1}. <span className='font-semibold'> {title}</span></h3>
    <div className='relative w-full h-full'>
        <img 
            className='absolute object-cover w-full h-full grayscale rounded-[8px] group-hover:grayscale-0 group-hover:object-contain'
            src={imgSrc} 
            alt={title} 
        />
        <div className='absolute z-[30] w-full h-full pb-[20px] pl-[20px] flex items-end rounded-[8px] bg-[rgba(65,78,128,0.5)] group-hover:hidden'>
            
        </div>
    </div>
    

</div>

const Examples = () => {
    // Constants:
    const exampleArr = [
        {
            id: 0,
            title: 'FitFusion',
            imgSrc: './images/portfolio1.png',
        },
        {
            id: 1,
            title: 'Mr.Artzy',
            imgSrc: './images/portfolio2.png'
        },
    ]

    // States:
    const [isFullScreenOpen, setIsFullScreenOpen] = useState<boolean>(false)
    const [openedImageobject, setopenedImageObject] = useState<{
        imgSrc: string
        title: string
    }>({
        imgSrc: '',
        title: ''
    })

    // Functions:
    const toggleIsFullScreenOpen = () => setIsFullScreenOpen(!isFullScreenOpen)

    const sentImgToIsFullScreenOpen = (imgSrc: string, title: string) => {
        setopenedImageObject({
            imgSrc: imgSrc ?? '',
            title: title ?? ''
        })
        toggleIsFullScreenOpen()
    }

    // Return:
    return <div className='flex-1 mt-[60px] mb-[100px]'>
        <div className='mb-[40px]'>
            <h3 className='text-[22.781px] text-[#9699A1]'>portfolio</h3>
            <h2 className='font-light text-[32.437px]  sm:text-[36.491px] mb-[25px]'>Revealing work that
                <span className='font-semibold'> makes an Impact</span>
            </h2>
        </div>

        <div className='flex items-center gap-[75px] sm:gap-[20px] flex-wrap'>
            {exampleArr?.map((example)=>
                <ExamplesCard
                    key={example?.id}
                    id={example?.id}
                    title={example?.title}
                    imgSrc={example?.imgSrc}
                    sentImgToIsFullScreenOpen={sentImgToIsFullScreenOpen}
                />
            )}
        </div>

        {isFullScreenOpen && 
            <ViewInFullScreen
                title={openedImageobject?.title}
                imgSrc={openedImageobject?.imgSrc}
                toggleIsFullScreenOpen={toggleIsFullScreenOpen}
            />
        }
    </div>
}

export default Examples