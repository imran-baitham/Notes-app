import { TopNavatation } from '@/components/TopNavatation/TopNavatation'
import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'

interface AppShellProps {
  children?: React.ReactNode
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="flex">
      <div className="flex">
        <Sidebar />
        <div className="">
          <TopNavatation />
        </div>
      </div>
      <main className="w-full mt-[58px]">{children}</main>
    </div>
  )
}
