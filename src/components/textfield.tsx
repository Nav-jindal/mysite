// Packages:
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form"
import { isEmpty } from "lodash"

// Typescript:
import { ContactFormType } from "../pages/contact"
import { HiOutlineInformationCircle } from "react-icons/hi"
interface TextFieldType {
    register: UseFormRegister<ContactFormType>
    validationOptions: RegisterOptions<ContactFormType>
    errors: FieldError | undefined
    errorMessage: string | undefined
    allFields: ContactFormType
    name: keyof ContactFormType
    type?: string
    placeholder: string
}

const Textfield = ({
    register,
    placeholder,
    validationOptions,
    errors,
    errorMessage,
    name,
    type,
    allFields,
} : TextFieldType) => {
    return (<>
                <div className='flex justify-between items-center gap-[24px]'>
                    <h3 className={`${!isEmpty(!allFields?.[name]) && !errors ? 'text-[14.22px] !font-normal' : 'text-[20px]' }
                    text-[#F6F6F6] font-semibold capitalize`}>
                        {name}
                    </h3>
                    {errors && 
                            <div className='mt-[8px] flex items-center gap-[12px] justify-end'>
                                <HiOutlineInformationCircle size={24} stroke='#d14545' />
                                <p className='text-[#d14545] text-[14px] font-semibold'>{errorMessage}</p>
                            </div>
                    }
                </div>
                <input 
                className={` ${errors ? '!bg-[#442f2f] placeholder:!text-[#ad7676] !border-[#E02720] text-[#F6F6F6]' : ''}
                            ${!isEmpty(allFields?.[name]) && !errors ? 'text-[20px] font-semibold !border-solid focus-visible:!font-normal' : '' }
                            w-full mt-[10px] p-[20px] bg-[#292929] border-l-[4px] border-none 
                            border-[#F6F6F6] hover:border-solid focus-visible:border-solid text-[#F6F6F6]
                            focus-visible:outline-none focus-visible:pl-[30px] placeholder:text-[#A2A2A2]`}
                type={type ?? 'text'}
                {...register(name, validationOptions)}
                placeholder={placeholder}
                />
    
    </>)
}

export default Textfield