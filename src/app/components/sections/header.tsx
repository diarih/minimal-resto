import React from 'react'
import Navbar from '../navbar/navbar'

export default function Header() {
    return (
        <div>
            <div className='mb-8'>
                <div className='text-4xl mb-2 font-semibold'>Welcome to Our Eatary 🍴</div>
                <div className='font-semibold'>by Minimal Resto</div>
            </div>
            <Navbar />
        </div>
    )
}
