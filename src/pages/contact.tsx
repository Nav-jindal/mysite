// Packages:
import { useForm } from "react-hook-form"
import { isEmpty } from "lodash"
import { useState } from "react"

// React Toastify:
import { toast,  ToastOptions } from 'react-toastify'

// React Spinners:
import { ClipLoader } from "react-spinners"

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
        formState: { errors },
        reset,
    } = useForm<ContactFormType>({
        mode: 'all'
    })
    const allFields = watch()
    const toastStyle: ToastOptions = { 
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'dark',
    }

    // States:
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Function:
    const contactSubmit = async (data: ContactFormType) => {
        try {
            setIsLoading(true)
            const form = new FormData();
            form.append('Fullname', data?.name)
            form.append('Email', data?.contactEmail)
            form.append('Message', data?.contactMessage)

            // Sending to data to owner's email
            const response = await fetch('https://formsubmit.co/ajax/717a7507b3a2ce2f832d6be38b780c9e', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: form,
            });

            if (response.ok) {
                setIsLoading(false)
                toast.success('Message sent successfully!', toastStyle)
                reset() // Reset form after successful submission
            } else {
                setIsLoading(false)
                toast.warning('Something went wrong. Message not sent!', toastStyle)
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(`${error}`, toastStyle)
        }
        
    }

    return <>
     {isLoading && <div className='z-[100] fixed top-0 left-0 right-0 bottom-0 w-full   h-full bg-[rgba(0,0,0,0.95)] flex justify-center items-center'>
            <ClipLoader size={80} color="#90a0de" />
    </div>}
    <div className={`{${isLoading ? 'pointer-events-none' : '' } flex-1 my-[60px] md:w-[75%] lg:w-[60%]`}>
        <div className='mb-[40px] lg:mb-[0px]'>
            <h3 className='text-[22.781px] text-[#9699A1]'>contact</h3>
            <h2 className='font-light text-[32.437px] sm:text-[36.491px] mb-[25px]'>Get in touch, <span className='font-semibold'>I’d love to connect!</span></h2>
        </div>
        <form 
            className='flex gap-[24px] flex-wrap'
            onSubmit={handleSubmit(contactSubmit)} 
            noValidate
        >
                <div className='flex-1 basis-[47%]'>
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
                    {errors?.name && <p className='mt-[8px] text-[#682627] font-semibold text-[14px] float-right'>{errors?.name?.message}</p>}
                </div>
                <div className='flex-1 basis-[47%]'>
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
                    {errors?.contactEmail && <p className='mt-[8px] text-[#682627] text-[14px] font-semibold float-right'>{errors?.contactEmail?.message}</p>}
                </div>
            
            
            <div className='flex-1 basis-[100%]'>
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
                {errors?.contactMessage && <p className=' mt-[8px] text-[#682627] text-[14px] font-semibold float-right'>{errors?.contactMessage?.message}</p>}
            </div>
            <button 
                type='submit'
                className={`${isEmpty(errors) ? '' : 'pointer-events-none bg-[#8189a5]' } mt-[20px] px-[20px] w-max py-[10px] md:py-[12px] md:px-[30px] bg-[#263568] text-[#F0F2F6] hover:px-[45px]`}>
                    Message me
            </button>
        </form>
    </div>
    </>
}
export default Contact