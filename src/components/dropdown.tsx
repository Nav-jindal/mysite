// Packages:
import { FieldError, RegisterOptions, Controller, Control } from "react-hook-form"
import Select from "react-select"

// Typescipt:
import { ContactFormType } from "../pages/contact"
import { isEmpty } from "lodash"
interface DropdownType {
    options: DropdownOptionsType[] 
    validationOptions: RegisterOptions<ContactFormType>
    control: Control<ContactFormType>
    errors: FieldError | undefined
    errorMessage: string | undefined
    allFields: ContactFormType
    name: keyof ContactFormType
    placeholder: string
    valueFromServicePage: string
}

interface DropdownOptionsType {
    value: string,
    label: string
}

const Dropdown = ({
    options,
    placeholder,
    validationOptions,
    errors,
    control,
    allFields,
    errorMessage,
    name,
    valueFromServicePage,
} : DropdownType) => {
    // constant
    const value = options.find(item => item.label === valueFromServicePage) 
    // return:
    return <div>
                <h3 className={`${errors ? '!text-[#682627]' : '' } 
                                                        ${!isEmpty(!allFields?.[name]) && !errors ? 'text-[14.22px] !font-normal' : 'text-[20px]' }
                                                         text-[#263568] font-semibold capitalize mb-[10px]`}>{name}</h3>
                <Controller
                    control={control}
                    name={name}
                    defaultValue={value?.value ?? ''}
                    render={({ field }) => (
                        <Select
                            options={options}
                            defaultValue={value}
                            className='hover:border-l-2 hover:border-solid hover:border-[#263568]'
                            placeholder={placeholder}
                            isSearchable={false}
                            onChange={(selectedOption)=> field.onChange(selectedOption?.value)}
                            value={options.find((option) => option.value === field.value)}
                            unstyled={true}
                            styles={{
                                container: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border:  '0px',
                                    cursor: 'pointer',
                                    outline: '0px',

                                }),
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border: 'none',
                                    borderLeft: state.isFocused ? '2px solid #263568' : '0px',
                                    borderColor: errors ? '#682627' : '#263568',
                                    background: errors ? '#ECCECF' : '#CED7EC',
                                    color: errors ? '#682627' : '',
                                    paddingBlock: '12px',
                                    paddingInline: '10px',
                                    paddingInlineStart: state.isFocused ? '30px' : '18px',
                                    outline: 'none',
                                }),
                                valueContainer: (baseStyles) => ({
                                    ...baseStyles,
                                    padding: '0px',
                                }),
                                indicatorsContainer: () => ({
                                    paddingInline: '10px',
                                }),
                                placeholder: (baseStyles) => ({
                                    ...baseStyles,
                                    color: errors ? '#9C6D6D' : '#6D789C',
                                }),
                                menuList: () => ({
                                    background: '#F0F2F6',
                                    paddingTop: '20px',
                                    boxShadow: '0px 8px 9px -2px rgba(0,0,0,0.35)',
                                }),
                                option: () => ({
                                    paddingInline: '12px',
                                    paddingBlock: '10px',

                                    "&:hover": {
                                        background: '#263568',
                                        color: '#F0F2F6',
                                    }
                                }),
                                singleValue: () => ({
                                    color: '#263568',
                                    gridRow: '1/-1',
                                    gridColumn: '1/2'
                                })
                            }}
                        />
                        )}
                      rules={validationOptions}
                />
                {errors && <p className='mt-[8px] text-[#682627] font-semibold text-[14px] float-right'>{errorMessage}</p>}
    </div>
}

export default Dropdown