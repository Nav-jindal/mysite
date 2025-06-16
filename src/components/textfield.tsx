// Packages:
import { KeyboardEvent } from "react"
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form"
import { isEmpty } from "lodash"

// Typescript:
import { ContactFormType } from "../pages/contact"
import { HiOutlineInformationCircle } from "react-icons/hi"
interface TextFieldType {
    id?: string
    register: UseFormRegister<ContactFormType>
    validationOptions: RegisterOptions<ContactFormType>
    errors: FieldError | undefined
    errorMessage: string | undefined
    allFieldsWatch: ContactFormType
    name: keyof ContactFormType
    type?: string
    placeholder?: string
    isInputModeNumeric?: boolean
    maxLength?: number
    keyDown?: (para0: KeyboardEvent<HTMLInputElement>) => void 
}

const Textfield = ({
    id,
    register,
    placeholder,
    keyDown,
    isInputModeNumeric,
    maxLength,
    validationOptions,
    errors,
    errorMessage,
    name,
    type,
    allFieldsWatch,
} : TextFieldType) => {
    // Constant:
    //const hasErrors = errors?.[name as keyof FieldError]
    return (<div className='flex-1 basis-[70%]'>
                <input 
                id={name}
                className={`${ errors ? '!bg-[#442f2f] placeholder:!text-[#ad7676] !border-[#d63030] text-[#F6F6F6] border-l-4 border-solid' : ''}
                            ${!isEmpty(allFieldsWatch?.[name]) && !errors ? 'text-[20px] font-semibold focus-visible:!font-normal' : '' }
                            ${ name === 'phone' ? '!pl-[120px]' : '' }
                            w-full mt-[10px] h-[60px] max-h-[60px] p-[16px] bg-[#292929] 
                            text-[#F6F6F6] hover:bg-[#3d3d3d] focus-visible:bg-[#3d3d3d]
                            outline-none focus-visible:pl-[30px] placeholder:text-[#A2A2A2]`}
                type={type ?? 'text'}
                {...register(name, validationOptions)}
                placeholder={placeholder}
                autoComplete='off'
                onKeyDown={keyDown}
                inputMode={ isInputModeNumeric ? 'numeric' : 'text' }
                maxLength={maxLength}
                />
                {errors && <div className='mt-[8px] flex items-center gap-[12px] justify-end'>
                        <HiOutlineInformationCircle size={24} stroke='#d14545' />
                        <p className='text-[#d14545] text-[14px] font-semibold'>{errorMessage}</p>
                    </div>
                }
    </div>)
}

export default Textfield