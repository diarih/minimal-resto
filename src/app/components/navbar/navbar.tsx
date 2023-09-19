'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathname = usePathname()

    const isHome = pathname === '/'

    return (
        <div className='flex justify-between'>
            <div className="tabs tabs-boxed w-fit">
                <a href='/' className={`tab ${pathname === '/' && 'tab-active'}`}>Menu</a>
                <a href='/order' className={`tab ${pathname === '/order' && 'tab-active'}`}>Order</a>
                <a href='/dapur' className={`tab ${pathname === '/dapur' && 'tab-active'}`}>Dapur</a>
                <a href='/kasir' className={`tab ${pathname === '/kasir' && 'tab-active'}`}>Kasir</a>
            </div>
            <div>
                <button className="btn btn-error">Reset</button>
            </div>
        </div>
    )
}
