// Typescript:
interface TagsType{
    title: string
}

const Tags = ({
    title
}: TagsType) => {
    return <div className='w-max rounded-[6px] px-[14px] py-[6px] bg-[#d5d8e2] text-[#595c64]'>
        {title}
    </div>
}

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
            <h2 className='text-[32.437px] sm:text-[36.491px] mb-[18px] font-bold'>
                A bit about me
                </h2>
            <div className='max-w-[700px] font-light'>
                <p className='mb-[18px] text-[#51545c] '>As a freelance web developer, I specialize in creating visually stunning and highly functional websites tailored to meet the unique needs of each client. With expertise in front-end development, responsive design, and modern web technologies like React, TypeScript, and Tailwind CSS, I bring creative ideas to life on the web.</p>

                <p className='mb-[18px] text-[#51545c] '>From sleek landing pages to dynamic web applications, I am passionate about delivering user-friendly experiences and pixel-perfect designs. My goal is to not only build websites but to help businesses grow their online presence through thoughtful design and seamless functionality.
                </p>

                <p className='mb-[18px] text-[#51545c] '>Whether you're a small business, startup, or individual looking to enhance your digital footprint, I’m here to provide personalized solutions that align with your vision and goals. </p>

                <p className="mb-[18px] text-[#51545c]">Let’s collaborate and bring your ideas to life on the web!</p>
            </div>
        </div>
        <div className='mt-[28px] sm:w-[60%] lg:w-[22%]'>
            <div className='mb-[40px]'>
                <h3 className='font-bold text-[25.629px] mb-[12px]'>Education</h3>
                <div className='text-[#51545c] border-solid'>
                    <span className='font-bold text-[#51545c]'>Btech (CS)</span> <br/>
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