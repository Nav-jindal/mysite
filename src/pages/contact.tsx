// Packages:
import { useForm } from "react-hook-form"
import { isEmpty } from "lodash"

// Typescript:
interface ContactFormType {
    name: string,
    contactEmail: string,
    contactMessage: string
}

const Contact = () => {
    // Constant:
    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<ContactFormType>({
        mode: 'all'
    })
    const allFields = watch()
    // Function:
    const contactSubmit = (data: ContactFormType) => {
        console.log('data: ',data)
    }

    return <div className='flex-1 my-[60px] w-[50%]'>
        <div className='mb-[40px]'>
            <h3 className='text-[24px] font-semibold text-[#B1B1B1]'>Contact</h3>
            <h2 className='font-light text-[40px] mb-[25px]'>Get in touch - <span className='text-[#263568]'>I’d love to connect!</span></h2>
        </div>
        <form onSubmit={handleSubmit(contactSubmit)} noValidate>
            <div className='flex gap-[20px] items-center'>
                <div className='relative flex-1'>
                    <h3 className={`${errors?.name ? '!text-[#682627]' : '' } 
                                    ${!isEmpty(allFields?.name) && !errors?.name ? '!text-[16px] !font-normal' : '' }
                                    text-[20px] text-[#263568] font-semibold`}>Fullname</h3>
                    <input 
                    className={` ${errors?.name ? '!bg-[#ECCECF] placeholder:!text-[#9C6D6D] !border-[#682627] text-[#682627]' : ''}
                                ${!isEmpty(allFields?.name) && !errors?.name ? 'text-[20px] font-semibold !border-solid focus-visible:!font-normal' : '' }
                                w-full mt-[10px] px-[12px] py-[10px] bg-[#CED7EC] border-l-[2px] border-none 
                                border-[#263568] hover:border-solid focus-visible:border-solid text-[#263568]
                                focus-visible:outline-none focus-visible:pl-[30px] placeholder:text-[#6D789C]`}
                    type='text'
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Please, enter your name'
                        }
                    })}
                    placeholder='John Doe'
                    />
                    {errors?.name && <p className='absolute right-0 mt-[8px] text-[#682627] font-semibold text-[14px]'>{errors?.name?.message}</p>}
                </div>
                <div className='relative flex-1'>
                    <h3 className={`${errors?.contactEmail ? '!text-[#682627]' : '' } 
                                    ${!isEmpty(allFields?.contactEmail) && !errors?.contactEmail ? '!text-[16px] !font-normal' : '' }
                                    text-[20px] text-[#263568] font-semibold`}>Email</h3>
                    <input 
                        className={` ${errors?.contactEmail ? '!bg-[#ECCECF] placeholder:!text-[#9C6D6D] !border-[#682627] text-[#682627]' : ''}
                            ${!isEmpty(allFields?.contactEmail) && !errors?.contactEmail ? 'text-[20px] font-semibold !border-solid focus-visible:!font-normal' : '' }
                            w-full mt-[10px] px-[12px] py-[10px] bg-[#CED7EC] border-l-[2px] border-none 
                            border-[#263568] hover:border-solid focus-visible:border-solid text-[#263568]
                            focus-visible:outline-none focus-visible:pl-[30px] placeholder:text-[#6D789C]`}
                        type='email' 
                        placeholder='email@email.com'
                        {...register('contactEmail', {
                        required: {
                            value: true,
                            message: 'Please, enter your email'
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email format',
                        }
                    })}/>
                    {errors?.contactEmail && <p className='absolute right-0 mt-[8px] text-[#682627] text-[14px] font-semibold'>{errors?.contactEmail?.message}</p>}
                </div>
            </div>
            
            <div className='relative mt-[20px]'>
                <h3 className={`${errors?.contactMessage ? '!text-[#682627]' : '' } 
                                    ${!isEmpty(allFields?.contactMessage) && !errors?.contactMessage ? '!text-[16px] !font-normal' : '' }
                                    text-[20px] text-[#263568] font-semibold`}>Message</h3>
                <textarea 
                className={` ${errors?.contactMessage ? '!bg-[#ECCECF] placeholder:!text-[#9C6D6D] !border-[#682627] text-[#682627]' : ''}
                    ${!isEmpty(allFields?.contactMessage) && !errors?.contactMessage ? 'text-[20px] font-semibold !border-solid focus-visible:!font-normal' : '' }
                    w-full h-[160px] resize-none mt-[10px] px-[12px] py-[10px] bg-[#CED7EC] border-l-[2px] border-none 
                    border-[#263568] hover:border-solid focus-visible:border-solid text-[#263568]
                    focus-visible:outline-none focus-visible:pl-[30px] placeholder:text-[#6D789C]`}
                placeholder='Type your message here...'
                {...register('contactMessage', {
                    required : {
                        value: true,
                        message: 'Pleae write your query'
                    }
                })}>

                </textarea>
                {errors?.contactMessage && <p className='absolute right-0 mt-[8px] text-[#682627] text-[14px] font-semibold'>{errors?.contactMessage?.message}</p>}
            </div>
            <button 
                type='submit'
                className='mt-[20px] py-[12px] px-[30px] bg-[#263568] text-[#F0F2F6] hover:px-[45px]'>
                    Send
            </button>
        </form>
    </div>
}
export default Contact