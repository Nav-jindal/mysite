// Components:
import Tags from "../components/tags"

const About = () => {
    // Constants:
    const skilsTags = [
        'html',
        'css',
        'vanilla.js',
        'graphQL',
        'react',
        'typescript',
        'tailwind',
        'scss/sass',
        'ui/ux',
    ]

    return <div className='flex-1 my-[60px] flex justify-between flex-wrap'>
        <div>
            <h3 className='text-[22.781px] text-[#AFB2BB]'>about</h3>
            <h2 className='font-light text-[32.437px] sm:text-[36.491px] mb-[18px]'>
                Hello, My name is 
                <span className='font-semibold'> Nav Jindal</span></h2>
            <div className='pl-[18px] md:pl-[24px] max-w-[600px] text-[#9699A1] border-solid border-l-[2px] border-black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ante eget dolor commodo, 
                quis efficitur dui tincidunt. Nulla non nisi metus. Curabitur in posuere augue. 
                Vestibulum tincidunt tincidunt erat, egestas consequat felis consequat nec. Donec bibendum risus 
                quis urna ultrices aliquet quis sit amet lorem. Nunc commodo sem nulla. Donec sagittis dapibus 
                augue, eget auctor leo consequat ac. Suspendisse potent
            </div>
        </div>
        <div className='mt-[28px] sm:w-[60%] lg:w-[22%]'>
            <div className='mb-[40px]'>
                <h3 className='font-bold text-[25.629px] mb-[12px]'>Education</h3>
                <div className=' pl-[9px] md:pl-[12.5px] text-[#9699A1] border-solid border-l-[2px] border-black'>
                    <span className='font-bold text-[#9699A1]'>Btech (CS)</span> <br/>
                    Graphic Era University
                </div>
            </div>
            <div className='mb-[40px]'>
                <h3 className='font-bold text-[25.629px] mb-[12px]'>Skills</h3>
                <div className='flex gap-[12px] flex-wrap'>
                    {skilsTags.map((skillTag:string, index:number)=>
                        <Tags
                            key={index}
                            title={skillTag}
                        />
                    )}
                </div>
            </div>
        </div>
    </div>
}

export default About