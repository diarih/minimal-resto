import React from 'react'
import Header from './header'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='max-w-screen-md bg-neutral py-12 mx-auto flex flex-col gap-8 min-h-screen p-8'>
        <Header />
        {children}
    </div>
  )
}
