// Packages:
import { useForm } from "react-hook-form"
import { isEmpty } from "lodash"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { motion, Variants } from "motion/react"


// Components: 
import Textfield from "../components/textfield"

// React Toastify:
import { toast,  ToastOptions } from 'react-toastify'

// React Spinners:
import { ClipLoader } from "react-spinners"

// Typescript:
export interface ContactFormType {
    fullname: string,
    email: string,
    contactMessage: string,
    service: string
}

const Contact = () => {
    // Constant:
    const contentVariant: Variants = {
        hidden: {
            x: -200,
            opacity: 0

        },
        show: {
            x: 0,
            opacity: 1
        }
    }
    const currentPage = useLocation()
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
            form.append('Fullname', data?.fullname)
            form.append('Email', data?.email)
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
        <motion.div 
            initial='hidden'
            animate='show'
            transition={{duration:.75, ease: 'easeInOut'}}
            variants={contentVariant}
            className='mb-[40px] lg:mb-[0px]'>
            <h3 className='text-[16px] text-[#807F7F]'>{currentPage.pathname}</h3>
            <h2 className='font-light text-[32.437px] sm:text-[36.491px] mb-[25px]'>Get in touch, <span className='font-semibold'>I'd love to connect!</span></h2>
        </motion.div>
        <motion.form 
            initial='hidden'
            animate='show'
            transition={{delay: .6, duration:.75, ease: 'easeInOut'}}
            variants={contentVariant}
            className='flex gap-[24px] flex-wrap'
            onSubmit={handleSubmit(contactSubmit)} 
            noValidate
        >
                <div className='flex-1 basis-[47%]'>
                    <Textfield 
                        name='fullname'
                        register={register}
                        errors={errors?.fullname}
                        allFields={allFields}
                        placeholder='John Doe'
                        errorMessage={errors?.fullname?.message}
                        validationOptions={{
                            required: {
                                value: true,
                                message: 'enter a name'
                            }
                        }}
                    />
                </div>
                <div className='flex-1 basis-[47%]'>
                    <Textfield 
                        name='email'
                        register={register}
                        errors={errors?.email}
                        allFields={allFields}
                        placeholder='example@email.com'
                        errorMessage={errors?.email?.message}
                        validationOptions={{
                            required: {
                                value: true,
                                message: 'enter a email'
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'invalid email format',
                            }
                        }}
                    />
                </div>
            
            <div className='flex-1 basis-[100%]'>
                <h3 className={`${!isEmpty(allFields?.contactMessage) && !errors?.contactMessage ? '!text-[14.22px] !font-normal' : '' }
                                    text-[20px] text-[#F6F6F6] font-semibold`}>Message</h3>
                <textarea 
                className={` ${errors?.contactMessage ? '!bg-[#442f2f] placeholder:!text-[#ad7676] !border-[#E02720] text-[#F6F6F6]' : ''}
                    ${!isEmpty(allFields?.contactMessage) && !errors?.contactMessage ? 'text-[20px] font-semibold !border-solid focus-visible:!font-normal' : '' }
                    w-full h-[160px] resize-none mt-[10px] p-[20px] bg-[#292929] border-l-[4px] border-none 
                    border-[#F6F6F6] hover:border-solid focus-visible:border-solid text-[#F6F6F6]
                    focus-visible:outline-none focus-visible:pl-[30px] placeholder:text-[#A2A2A2]`}
                placeholder='Type your message here...'
                {...register('contactMessage', {
                    required : {
                        value: true,
                        message: 'write a query'
                    }
                })}>

                </textarea>
                {errors?.contactMessage && 
                    <div className='mt-[8px] flex items-center gap-[8px] justify-end'>
                        <HiOutlineInformationCircle size={24} stroke='#d14545'/>
                        <p className='text-[#d14545] text-[14px] font-semibold '>{errors?.contactMessage?.message}</p>
                    </div>
                }
            </div>
            <button 
                type='submit'
                className={`${isEmpty(errors) ? '' : 'pointer-events-none bg-[#2e2e2e] text-[#a0a0a0]' } mt-[20px] px-[20px] w-max py-[10px] md:py-[12px] md:px-[30px] bg-[#E02720] text-[#F0F2F6] hover:px-[45px] transition-all duration-[200ms] ease-in-out`}>
                    Message me
            </button>
        </motion.form>
    </div>
    </>
}
export default Contact