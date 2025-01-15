// Components:
import Tags from "../components/tags"

const About = () => {
    // Constants:
    const skilsTags = [
        'HTML',
        'CSS',
        'Vanilla.js',
        'GraphQL',
        'React',
        'Typescript',
        'Tailwind',
        'SCSS/SASS',
        'UI/UX',
    ]
    return <div className='flex-1 my-[60px] flex justify-between'>
        <div>
            <h3 className='text-[24px] font-semibold text-[#B1B1B1]'>About</h3>
            <h2 className='font-light text-[40px] mb-[25px]'>Hello, I'm <span className='font-bold text-[#263568]'>Nav Jindal</span></h2>
            <div className='ml-[75px] pl-[25px] w-[550px] font-normal text-[#8A8484] border-solid border-l-2 border-[#263568]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ante eget dolor commodo, 
                quis efficitur dui tincidunt. Nulla non nisi metus. Curabitur in posuere augue. 
                Vestibulum tincidunt tincidunt erat, egestas consequat felis consequat nec. Donec bibendum risus 
                quis urna ultrices aliquet quis sit amet lorem. Nunc commodo sem nulla. Donec sagittis dapibus 
                augue, eget auctor leo consequat ac. Suspendisse potent
            </div>
        </div>
        <div className='mt-[28px] w-[20%]'>
            <div className='mb-[40px]'>
                <h3 className='text-[#263568] font-bold text-[24px]'>Education</h3>
                <div className='mt-[12px] pl-[12.5px] text-[#B1B1B1] border-solid border-l-2 border-[#263568]'>
                    <span className='font-bold text-[#B1B1B1]'>Btech (CS)</span> <br/>
                    Graphic Era University
                </div>
            </div>
            <div className='mb-[40px]'>
                <h3 className='text-[#263568] font-bold text-[24px]'>Skills</h3>
                <div className='mt-[12px] flex gap-[12px] flex-wrap'>
                    {skilsTags.map((skillTag:string)=>
                        <Tags
                            title={skillTag}
                        />
                    )}
                </div>
            </div>
        </div>
    </div>
}

export default About