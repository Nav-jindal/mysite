// Typescipt: 
interface ExamplesType {
    id?: number
    title: string
    type: string
    imgSrc: string
    url?: string | undefined
    sentImgToIsFullScreenOpen: (arg0: string, arg1: string, arg2: string, arg3: string | undefined) => void
}

const ExamplesCard = ({
    title,
    type,
    imgSrc,
    url,
    sentImgToIsFullScreenOpen,
} : ExamplesType) => <div 
                        className='group cursor-pointer w-full sm:w-[48%] lg:w-[25%] rounded-[8px]'
                        onClick={()=>
                            url === '' ? sentImgToIsFullScreenOpen(imgSrc, title, type, url) :  
                            window.open("https://alexcarter.netlify.app", "_blank")
                        }
                    >
    <div className='relative w-full h-[300px]'>
        <img 
            className='absolute object-cover w-full h-full grayscale rounded-[8px] group-hover:grayscale-0 group-hover:object-contain'
            src={imgSrc} 
            alt={title} 
        />
        <div className='absolute z-[30] w-full h-full pb-[20px] pl-[20px] flex items-end rounded-[8px] bg-[rgba(65,78,128,0.5)] group-hover:hidden'>
            
        </div>
    </div>
    <div className='ml-[15px]'>
        <h3 className='font-light text-[25.629px] mt-[12px]'> <span className='font-semibold'> {title}</span></h3>
        <h4 className=' text-[#263669]'>{type}</h4>
    </div>

</div>


export default ExamplesCard