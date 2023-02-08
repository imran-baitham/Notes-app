import { ReactIcon } from '../common/ReactIcon/ReactIcon'
import { Context } from '@/context'
import { useContext } from 'react'
import { classNames } from '@/utils'

export function TopNavatation() {
  const { open } = useContext(Context)

  return (
    <div
      className={classNames(
        open ? 'md:left-[218px]' : 'md:left-[80px]',
        'fixed w-full md:w-auto right-0 p-4 bg-white z-0 border-b-2',
      )}
    >
      <div className="flex justify-between md:justify-end items-center">
        <span className="md:hidden">
          <ReactIcon icon={'HiMenuAlt2'} className={'w-6 h-6'} />
        </span>
        <div className="flex items-center space-x-1.5">
          <ReactIcon icon={'RiSunFill'} className={'w-6 h-6'} />
        </div>
      </div>
    </div>
  )
}
