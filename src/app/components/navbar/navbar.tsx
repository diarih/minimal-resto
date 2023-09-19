import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between'>
            <div className="tabs tabs-boxed w-fit">
                <a className="tab tab-active">Menu</a>
                <a className="tab">Order</a>
                <a className="tab">Dapur</a>
                <a className="tab">Kasir</a>
            </div>
            <div>
                <button className="btn btn-error">Reset</button>
            </div>
        </div>
    )
}
