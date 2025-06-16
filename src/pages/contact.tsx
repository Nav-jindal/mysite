// Packages:
import { useForm } from "react-hook-form"
import { isEmpty } from "lodash"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { motion, Variants } from "motion/react"
import axios from 'axios'

// React Icons:
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6"

// Components: 
import Textfield from "../components/textfield"
import Combobox from "../components/comboBox"
import Modal from "../components/modal"

// React Toastify:
import { toast,  ToastOptions } from 'react-toastify'

// React Spinners:
import { ClipLoader } from "react-spinners"

// Typescript:
export interface ContactFormType {
    fullname: string,
    email: string,
    contactMessage: string,
    phone: string,
    service: string
}

export interface SelectedCountryCodeType {
    dialCode: string,
    flag: string
}
export interface CountryCodesType {
    name: string
    dialCode: string
    flag: string
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
    const iconSize = 22
    const currentPage = useLocation()
    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        setValue,
    } = useForm<ContactFormType>({
        mode: 'all'
    })
    const allFieldsWatch = watch()
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
    const [countryCodesArr, setCountryCodesArr] = useState<CountryCodesType[]>([])
      const [openModal, setOpenModal] = useState<boolean>(false);

    // Function:
    const contactSubmit = async (data: ContactFormType) => {
        try {
            setIsLoading(true)
            const form = new FormData();
            form.append('Fullname', data?.fullname)
            form.append('Email', data?.email)
            form.append('Phone Number', data?.phone)
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
                setOpenModal(true)
            } else {
                setIsLoading(false)
                toast.warning('Something went wrong. Message not sent!', toastStyle)
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(`${error}`, toastStyle)
        }
        
    }

      const getCountryCodes = async () => {
        let datafromApi:any = []
        await axios.get('https://restcountries.com/v3.1/all?fields=name,idd,flag')
        .then(response => {
            datafromApi = response?.data
        }).catch(err => {
            console.log(err)
        })

        const finalValues = datafromApi?.flatMap((data: any) => 
                data?.idd?.suffixes?.map((suffix: string) => ({
                dialCode: data?.idd?.suffixes?.length > 1 ? `${data?.idd?.root || ''}${suffix}` : `${data?.idd?.root || ''}${suffix}`,
                name: data?.name?.common || '',
                flag: data?.flag || '',
            })) || []
        )
        setCountryCodesArr(finalValues)
    }


    // Effects:
     useEffect(()=>{
        getCountryCodes()
    },[])

    return <>
     {isLoading && <div className='z-[100] fixed top-0 left-0 right-0 bottom-0 w-full   h-full bg-[rgba(0,0,0,0.95)] flex justify-center items-center'>
            <ClipLoader size={80} color="#90a0de" />
    </div>}


    <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2 className="text-2xl font-bold mb-4">One-on-One Inquiry</h2>
        <p className="mb-4">Book a one-on-one session and I will show how technology can increase your leads and sales. </p>
        <div className='flex items-center justify-end gap-4'>
            <button
                type='button'
                onClick={() => window.open("https://calendly.com/navjindal-peakpixelworks/30min", "_blank")}
                className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white"
            >
                Yes
            </button>
            <button
                type='button'
                onClick={() => setOpenModal(false)}
                className="mt-2 px-4 py-2 shadow-[0px_0px_0px_1px_rgba(224, 39, 32, 1)] hover:shadow-[0px_0px_0px_2px_rgba(224, 39, 32, 1)] rounded text-[#E02720]"
            >
                No
            </button>
        </div>
    </Modal>

    <div className={`{${isLoading ? 'pointer-events-none' : '' } flex-1 my-[60px] md:w-[75%] lg:w-[60%]`}>
        <motion.div 
            initial='hidden'
            animate='show'
            transition={{duration:.75, ease: 'easeInOut'}}
            variants={contentVariant}
            className='mb-[40px] lg:mb-[0px]'>
            <h3 className='text-[18px] text-[#807F7F]'>{currentPage.pathname}</h3>
            <div className='flex justify-between gap-[18px] mb-[60px] flex-wrap'>
                <h2 className='font-light text-[32.437px] sm:text-[36.491px]'>Get in touch, <span className='font-semibold'>I'd love to connect!</span></h2>
                <div className='flex gap-[20px] items-center'>
                    <a href='https://www.linkedin.com/in/nav-j-399ba112a/' target='_blank' rel="noreferrer" className='group p-[9px] rounded-full border-2 border-[#E02720] flex items-center outline-none hover:bg-[#E02720] focus-visible:bg-[#E02720]' title='linkedin'>
                        <FaLinkedinIn size={iconSize} className='fill-[#E02720] group-hover:fill-[#0A0A0A] group-focus-visible:fill-[#0A0A0A]' />
                    </a>
                    <a href='https://www.instagram.com/navjindal622/' target='_blank' rel="noreferrer" className='group p-[9px] rounded-full border-2 border-[#E02720] flex items-center outline-none hover:bg-[#E02720] focus-visible:bg-[#E02720]' title='instagram'>
                        <FaInstagram size={iconSize} className='fill-[#E02720] group-hover:fill-[#0A0A0A] group-focus-visible:fill-[#0A0A0A]' /> 
                    </a>
                </div>
            </div>
            
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
                    <h3 className={`text-[18px] text-[#F6F6F6] capitalize`}>
                        Fullname
                    </h3>
                    <Textfield 
                        name='fullname'
                        register={register}
                        errors={errors?.fullname}
                        allFieldsWatch={allFieldsWatch}
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
                    <h3 className={`text-[18px] text-[#F6F6F6] capitalize`}>
                        Email
                    </h3>
                    <Textfield 
                        name='email'
                        register={register}
                        errors={errors?.email}
                        allFieldsWatch={allFieldsWatch}
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
                    <h3 className={`text-[18px] text-[#F6F6F6] capitalize`}>
                        Phone No
                    </h3>
                    <Combobox 
                        register={register}
                        errors={errors?.phone}
                        allFieldsWatch={allFieldsWatch}
                        originalOptions={countryCodesArr}
                        setValue={setValue}
                    />
                </div>
            
            <div className='flex-1 basis-[100%]'>
                <h3 className={`${!isEmpty(allFieldsWatch?.contactMessage) && !errors?.contactMessage ? '!text-[14.22px] !font-normal' : '' }
                                    text-[16px]text-[#F6F6F6] font-semibold`}>Message</h3>
                <textarea 
                className={` ${errors?.contactMessage ? '!bg-[#442f2f] placeholder:!text-[#ad7676] !border-[#E02720] text-[#F6F6F6]' : ''}
                    ${!isEmpty(allFieldsWatch?.contactMessage) && !errors?.contactMessage ? 'text-[16px] !border-solid focus-visible:!font-normal' : '' }
                    w-full h-[160px] resize-none mt-[10px] p-[16px] bg-[#292929] border-l-[4px] border-none 
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
                className={`${isEmpty(errors) ? '' : ' !bg-[#794d4d] text-[#000000]' } mt-[20px] px-[20px] w-max py-[10px] md:py-[12px] md:px-[30px] bg-[#E02720] text-[#F0F2F6] hover:px-[45px] transition-all duration-[200ms] ease-in-out`}>
                    Message me
            </button>
        </motion.form>
    </div>
    </>
}
export default Contact