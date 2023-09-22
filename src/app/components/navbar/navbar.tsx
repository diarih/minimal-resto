'use client'

import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { MenuContext } from '@/context/MenuContext'

export default function Navbar() {

    const pathname = usePathname()
    const { reset } = useContext(MenuContext)

    return (
        <div className='flex justify-between'>
            <div className="tabs tabs-boxed w-fit">
                <a href='/' className={`tab ${pathname === '/' && 'tab-active'}`}>Menu</a>
                <a href='/order' className={`tab ${pathname === '/order' && 'tab-active'}`}>Order</a>
                <a href='/dapur' className={`tab ${pathname === '/dapur' && 'tab-active'}`}>Dapur</a>
                <a href='/kasir' className={`tab ${pathname === '/kasir' && 'tab-active'}`}>Kasir</a>
            </div>
            <div>
                <button onClick={() => reset()} className="btn btn-error">Reset</button>
            </div>
        </div>
    )
}
