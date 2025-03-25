// Packages:
import { useState } from "react"
import { useLocation } from "react-router-dom"

// Components:
import ViewInFullScreen from "../components/viewInFullscreen"
import ExamplesCard from "../components/examplesCard"

const Examples = () => {
    // Constants:
    const currentPage = useLocation()
    const exampleArr = [
        {
            id: 0,
            title: 'Fit Fusion',
            imgSrc: './images/portfolio1.png',
            type: 'design (figma)',
        },
        {
            id: 1,
            title: 'Alex Carter',
            imgSrc: './images/portfolio2.png',
            url: 'http://alexcarter.netlify.app',
            type: 'design + code',
        },
    ]

    // States:
    const [isFullScreenOpen, setIsFullScreenOpen] = useState<boolean>(false)
    const [openedImageobject, setopenedImageObject] = useState<{
        imgSrc: string
        title: string
        type: string
        url?: string | undefined
    }>({
        imgSrc: '',
        title: '',
        type: '',
        url: ''
    })

    // Functions:
    const toggleIsFullScreenOpen = () => setIsFullScreenOpen(!isFullScreenOpen)

    const sentImgToIsFullScreenOpen = (imgSrc: string, title: string, type: string, url: string | undefined) => {
        setopenedImageObject({
            imgSrc: imgSrc ?? '',
            title: title ?? '',
            type: type ?? '',
            url: url ?? '',
        })
        toggleIsFullScreenOpen()
    }

    // Return:
    return <div className='flex-1 mt-[60px] mb-[100px]'>
        <div className='mb-[40px]'>
            <h3 className='text-[22.781px] text-[#9699A1]'>{currentPage?.pathname.slice(1)}</h3>
            <h2 className='font-light text-[32.437px]  sm:text-[36.491px] mb-[25px]'>Revealing work that
                <span className='font-semibold'> makes an Impact</span>
            </h2>
        </div>

        <div className='flex items-center gap-[45px] sm:gap-[20px] flex-wrap'>
            {exampleArr?.map((example)=>
                <ExamplesCard
                    key={example?.id}
                    id={example?.id}
                    title={example?.title}
                    type={example?.type}
                    imgSrc={example?.imgSrc}
                    url={example?.url ?? ''}
                    sentImgToIsFullScreenOpen={sentImgToIsFullScreenOpen}
                />
            )}
        </div>

        {isFullScreenOpen && 
            <ViewInFullScreen
                title={openedImageobject?.title}
                imgSrc={openedImageobject?.imgSrc}
                type={openedImageobject?.type}
                toggleIsFullScreenOpen={toggleIsFullScreenOpen}
            />
        }
    </div>
}

export default Examples