import { classNames } from '@/utils'
import { overrideTailwindClasses } from 'tailwind-override'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  md?: boolean
  sm?: boolean
  lg?: boolean
  xl?: boolean
  transparent?: boolean
  danger?: boolean
  full?: boolean
}

/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
export const Button = ({
  children,
  className = '',
  md = false,
  sm = false,
  lg = false,
  xl = false,
  transparent = false,
  danger = false,
  full = false,
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && 'cursor-not-allowed opacity-50'
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          'cursor-pointer px-3 py-2',
          'inline-flex items-center border border-transparent',
          'text-sm font-medium rounded-md shadow-sm ',
          'focus:outline-none active:scale-[0.97] transition-all',
          'flex justify-center',
          full ? 'w-full' : '',
          sm ? 'px-2 py-1.5 text-xs rounded-md' : '',
          md ? 'px-3 py-2 text-sm leading-4 rounded-md' : '',
          lg ? 'px-5 py-2 text-lg' : '',
          xl ? 'px-6 py-2.5 text-xl font-[420]' : '',
          transparent
            ? 'border-gray-300 text-gray-700 bg-white' +
                ' hover:bg-gray-50 ripple-on-surface'
            : 'bg-[#9155FD] text-white',
          danger ? 'bg-red-500 text-white' : '',
          transparent && danger
            ? 'bg-white-700 border-red-500 text-red-500'
            : '',
          isDisabled ? isDisabled : '',
          className,
        ),
      )}
      {...props}
    >
      {children}
    </button>
  )
}
