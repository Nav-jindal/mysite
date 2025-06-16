// Packages:
import { useState, useRef, useEffect } from "react"
import { useClickAway } from 'react-use';

// Icons:
import { FaChevronDown } from "react-icons/fa6"

// Typescript:
import { ContactFormType, CountryCodesType, SelectedCountryCodeType } from "../pages/contact"
import Textfield from "./textfield";
import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form";
interface ComboboxType {
  register: UseFormRegister<ContactFormType>
  errors: FieldError | undefined
  allFieldsWatch: ContactFormType
  originalOptions: CountryCodesType[]
  setValue: UseFormSetValue<ContactFormType>
}

const Combobox = ({
  register,
  errors,
  allFieldsWatch,
  originalOptions,
  setValue,
} : ComboboxType) => {

  // Constants:
  const comboBoxRef = useRef<HTMLDivElement>(null)
  const comboBoxOptionsRef = useRef<HTMLDivElement>(null)

  // States:
  const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedCountryCode, setSelectedCountryCode] = useState<SelectedCountryCodeType>({
        dialCode: '+91',
        flag: '🇮🇳'
    })
  const [filteredCountryCodes, setFilteredCountryCodes] = useState<CountryCodesType[]>([])


  // Functions:
  const selectCountry = (option: CountryCodesType) => {
    setSelectedCountryCode({
                dialCode: option?.dialCode,
                flag: option?.flag
      })
  }

  const handleClick = (e: React.MouseEvent, option: CountryCodesType) => {
    e.stopPropagation()
    selectCountry(option)
    setIsOpen(false)
  }


  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, option: CountryCodesType) => {
      if(isOpen){
        switch(e.key) {
          case 'ArrowDown': 
              (e.currentTarget.nextElementSibling as HTMLElement)?.focus()
              break;
          case 'ArrowUp':
              (e.currentTarget.previousElementSibling as HTMLElement)?.focus()
              break;
          case 'Enter':
              (document.querySelector(`[name="phone"]`) as HTMLInputElement)?.focus()
              selectCountry(option)
              setIsOpen(false)
              break;
        }
      }
  }

    const handlePhoneInput = () => {
        const phoneInput = allFieldsWatch?.phone.trim()
        if(!phoneInput.includes(`(${selectedCountryCode.dialCode.replace('+', '')})`)){
            setIsOpen(true)
            const newValue = phoneInput?.replace(/[+()]/g, '')
            const filteredValues = originalOptions?.filter((countryCode:CountryCodesType)=>countryCode?.dialCode?.includes(newValue))
            setFilteredCountryCodes(filteredValues)
            //setSelectedCountryCode(filteredValues[0])
        } else {
            setFilteredCountryCodes(originalOptions)
            setIsOpen(false)
        }   

    }
    
    // Effects:

    useEffect(()=>{
      // if(filter)
      // setFilteredCountryCodes(originalOptions)
      (document.getElementById('phone') as HTMLInputElement)?.focus()
      setIsOpen(false)
      setValue('phone', `(${selectedCountryCode?.dialCode.replace(/\+/g, '')}) `)
    },[selectedCountryCode])

    useEffect(()=>{
      setFilteredCountryCodes(originalOptions)
    },[originalOptions])

    useEffect(()=>{
        if(allFieldsWatch?.phone){
            handlePhoneInput()
        } else {
          setIsOpen(false)
        }
    },[allFieldsWatch?.phone])
  
  useClickAway(comboBoxRef, () => {
    setIsOpen(false);
  })

  // for clicking directly on the dropdown button
  useEffect(()=>{
    const handleKeyDown = (event:KeyboardEvent) => {
    const key = event.key?.toLowerCase();
    switch (key) {
      case 'enter':
        setIsOpen(true);
        break;
      case 'escape':
        setIsOpen(false);
        break;
    }
  };

  const comboBoxEl = comboBoxRef?.current;
  if (comboBoxEl) {
    comboBoxEl.addEventListener('keydown', handleKeyDown);
  }
  
  return () => {
    if (comboBoxEl) {
      comboBoxEl.removeEventListener('keydown', handleKeyDown);
    }
  };
  },[])

  return (
  <div className='relative'>
    <div  
        onClick={()=>setIsOpen(prev => !prev)}
        className='absolute left-0 mt-[10px] cursor-pointer h-[60px] max-h-[60px] px-[20px] py-[16px] bg-[#3b3b3b] outline-none hover:bg-[#3d3d3d] focus-visible:bg-[#3d3d3d]' 
        tabIndex={0} 
        ref={comboBoxRef}
    >
      <div className='flex items-center gap-[16px]'>
        <div className='text-[24px] leading-[21px] align-middle'>{selectedCountryCode?.flag}</div>
        <div className={`${isOpen ? 'rotate-180' : '' } transition-all duration-300`}>
            <FaChevronDown size={16} />
        </div>
      </div>
      {isOpen && <div
        aria-labelledby="dropdown-button" 
        tabIndex={0}
        ref={comboBoxOptionsRef}
        onClick={(e)=>e.stopPropagation()}
        className='bg-[#292929] z-[100] absolute top-16 left-0 h-max max-h-[320px] overflow-y-scroll outline-0'>
        {filteredCountryCodes?.map((option:CountryCodesType, index:number) => (
          
            <button 
              key={index}
              onClick={(e) => handleClick(e,option)}
              onKeyDown={(e)=> onKeyDown(e,option)}
              className={`${selectedCountryCode?.flag === option?.flag ? 'py-[32px] pl-[42px] text-white' : 'px-[20px] py-[12px] text-[#919191]' } max-w-full w-fit min-[400px]:w-max appearance-none relative grid 
              grid-flow-col grid-cols-[30px_minmax(120px,100%)] sm:grid-cols-[30px_minmax(120px,440px)] items-center gap-[16px] hover:py-[32px] focus-visible:py-[32px] focus-visible:font-bold hover:font-bold outline-none group transition-all duration-200 cursor-pointer`}>
              <div className='col-span-1 text-[24px] translate-x-0 group-hover:translate-x-8 group-focus-visible:translate-x-8 transition-all duration-200'>{option?.flag}</div>
              <div className='w-max col-span-1 text-left text-inherit group-hover:text-[#ffffff] group-focus-visible:text-[#ffffff] translate-x-0 group-hover:translate-x-8 group-focus-visible:translate-x-8 transition-all duration-200'>
                {option?.name}  ({option?.dialCode})
              </div>
              
            </button>
          
        ))}
      </div> }
    </div>
     <Textfield 
          id='phone'
          name='phone'
          register={register}
          errors={errors}
          allFieldsWatch={allFieldsWatch}
          errorMessage={errors?.message}
          placeholder='(+91) 65656 65656'
          validationOptions={{
              required: {
                  value: true,
                  message: 'enter a phone number'
              },
              pattern: {
                  value: /^(\(\d{1,3}\)|\d{1,3})[\d ]{6,19}$/,
                  message: "Invalid phone number format",
              }
          }}
          keyDown={(e)=>{
              const key = e.key
              if(key === 'ArrowDown' && isOpen){
                (comboBoxOptionsRef?.current?.children[0] as HTMLButtonElement).focus()
              }
            
          }}
          isInputModeNumeric={true}
          maxLength={18}
      />
    </div>
  )
}

export default Combobox