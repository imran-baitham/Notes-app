import { AppShell } from '@/components'
import { Context } from '@/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(true)
  /* ======{ Right Login }====== */
  const router = useRouter()

  useEffect(() => {
    const sessionToken = true
    if (sessionToken) {
      // router.push('/dashboard')
    } else {
      // router.push('/')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Context.Provider value={{ open, setOpen }}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </Context.Provider>
    </>
  )
}
