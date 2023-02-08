import React, { useContext } from 'react'
import Link from 'next/link'
import { ReactIcon } from '../common/ReactIcon/ReactIcon'
import { Context } from '@/context'
import { classNames } from '@/utils'
import { useRouter } from 'next/router'

const SidebarData = [
  { title: 'Dashboard', icon: 'AiOutlineFieldTime', urls: '/dashboard' },
  { title: 'Calender', icon: 'HiOutlineCalendar', urls: '/calender' },
  { title: 'Notes', icon: 'AiOutlineFieldTime', urls: '/notes' },
  // { title: 'Todo lists', icon: 'AiOutlineFieldTime', urls: '#' },
  // { title: 'Scheduling', icon: 'AiOutlineSchedule', urls: '#' },
  // { title: 'Comments', icon: 'FaRegCommentDots', urls: '#' },
  // { title: 'Inbox', icon: 'FiMessageSquare', urls: '#' },
  // { title: 'Channel', icon: 'RiBubbleChartLine', urls: '#' },
  // { title: 'Account', icon: 'MdErrorOutline', urls: '#' },
  // { title: 'Settings', icon: 'AiOutlineSetting', urls: '#' },
  // { title: 'Logout', icon: 'FiLogOut', urls: '#' },
]

const Sidebar = () => {
  const { open, setOpen } = useContext(Context)
  const router = useRouter()

  return (
    <div className="hidden md:flex overflow-hidden z-10 h-screen">
      <div
        className={`${
          open ? 'w-[218px]' : 'w-20'
        } duration-300 group hover:w-[218px] relative bg-[#28243D]`}
      >
        <div className="flex items-center justify-between pb-6 pt-3.5 pl-5 pr-2 text-[#9155FD]">
          <div className="font-bold flex items-end">
            <span className="font-bold text-2xl border border-[#0000FF] px-1">W</span>
            <span
              className={`${
                !open && 'hidden group-hover:block'
              } pl-[3px]`}
            >
              ritely
            </span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className={`${
              !open && 'rotate-180 hidden group-hover:block'
            }  z-40`}
          >
            <ReactIcon icon="BsChevronDoubleLeft" className="text-white" />
          </button>
        </div>
        <ul className="mt-5">
          {SidebarData.map((items: any, index) => (
            <>
              <Link href={`${items.urls}`}>
                <li
                  key={index}
                  className={classNames(
                    items.urls == router.pathname
                      ? 'bg-[#9155FD] text-white'
                      : '',
                    '-right-3 gap-x-3 text-white text-md flex px-7 py-2 cursor-pointer items-center mt-1.5',
                  )}
                >
                  <span className="text-[25px] block float-right ">
                    {items.icon ? <ReactIcon icon={items.icon} /> : ''}
                  </span>
                  <span
                    className={`text-sm font-medium flex-1 ${
                      !open && 'hidden group-hover:block'
                    }`}
                  >
                    {items.title}
                  </span>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
