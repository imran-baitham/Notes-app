import React, { InputHTMLAttributes } from 'react'
import { overrideTailwindClasses } from 'tailwind-override'
import { ReactIcon, TAppIcons } from '../ReactIcon/ReactIcon'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  required?: any
  name?: string
  type?: string
  width?: string | number
  value?: string
  className?: string
  disabled?: boolean
  placeholder?: string
  error?: string
  labal?: string
  inputIcon?: TAppIcons
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({
  name,
  id,
  value,
  type,
  className = '',
  placeholder,
  required,
  disabled,
  width,
  labal,
  error,
  inputIcon,
  onChange,
  ...props
}: InputProps) => {
  const isDisabled =
    disabled && 'cursor-not-allowed opacity-50 font-normal border border-1'
  return (
    <div className="py-1.5">
      {labal && (
        <label
          htmlFor={name}
          className="block text-poppins font-normal text-sm text-black text-left"
        >
          {labal}
        </label>
      )}
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id={id}
          name={name}
          value={value}
          type={type ? type : 'text'}
          className={overrideTailwindClasses(
            `w-${
              width ? width : 'full'
            } p-4 rounded-sm border-[1px] text-sm font-Poppins font-normal border-gray-300 focus:outline-none focus:ring-0 focus:border-pink ${className}`,
          )}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
        {inputIcon && (
          <div className=" absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer overflow-hidden">
            <ReactIcon icon={inputIcon} className="h-5 w-5" />
          </div>
        )}
      </div>
      {error && (
        <div className="flex items-center text-poppins font-normal text-sm text-red-400 py-1">
          <ReactIcon icon="MdErrorOutline" />
          <span className="text-left pl-1.5">{error}</span>
        </div>
      )}
    </div>
  )
}
