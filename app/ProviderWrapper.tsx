'use client'
import { SessionProvider } from 'next-auth/react'

export default function ProvidersWrapper({ children }: {
  children: React.ReactNode
}) {
  //entire app will have the access of session
  return (
    <SessionProvider>
      {children} 
    </SessionProvider>
  )
}