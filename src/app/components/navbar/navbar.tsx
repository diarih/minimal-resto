'use client'

import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { MenuContext } from '@/context/MenuContext'
import Link from 'next/link'

export default function Navbar() {

    const pathname = usePathname()
    const { reset } = useContext(MenuContext)
    

    return (
        <div className='flex justify-between'>
            <div className="tabs tabs-boxed w-fit">
                <Link href='/' className={`tab ${pathname === '/' && 'tab-active'}`}>Menu</Link>
                <Link href='/order' className={`tab ${pathname === '/order' && 'tab-active'}`}>Order</Link>
                <Link href='/dapur' className={`tab ${pathname === '/dapur' && 'tab-active'}`}>Dapur</Link>
                <Link href='/kasir' className={`tab ${pathname === '/kasir' && 'tab-active'}`}>Kasir</Link>
            </div>
            <div>
                <button onClick={() => reset()} className="btn btn-error">Reset</button>
            </div>
        </div>
    )
}
