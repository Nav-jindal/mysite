// Packages:
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form"
import { isEmpty } from "lodash"

// Typescript:
import { ContactFormType } from "../pages/contact"
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
    <h3 className={`${errors ? '!text-[#682627]' : '' } 
                                        ${!isEmpty(!allFields?.[name]) && !errors ? 'text-[14.22px] !font-normal' : 'text-[20px]' }
                                        text-[#263568] font-semibold capitalize`}>{name}</h3>
                        <input 
                        className={` ${errors ? '!bg-[#ECCECF] placeholder:!text-[#9C6D6D] !border-[#682627] text-[#682627]' : ''}
                                    ${!isEmpty(allFields?.[name]) && !errors ? 'text-[20px] font-semibold !border-solid focus-visible:!font-normal' : '' }
                                    w-full mt-[10px] px-[18px] py-[10px] bg-[#CED7EC] border-l-[2px] border-none 
                                    border-[#263568] hover:border-solid focus-visible:border-solid text-[#263568]
                                    focus-visible:outline-none focus-visible:pl-[30px] placeholder:text-[#6D789C]`}
                        type={type ?? 'text'}
                        {...register(name, validationOptions)}
                        placeholder={placeholder}
                        />
                        {errors && <p className='mt-[8px] text-[#682627] font-semibold text-[14px] float-right'>{errorMessage}</p>}
    
    </>)
}

export default Textfield