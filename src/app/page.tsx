'use client'

import { MenuContext } from "@/context/MenuContext"
import { useContext, useState } from "react"

export default function Home() {

  const { menu, addMenu, deleteMenu } = useContext(MenuContext)
  const [name, setName] = useState("")

  const onSubmitMenu = () => {
    addMenu(name)
    setName("")
  }

  const onDelete = (id: any) => {
    deleteMenu(id)
  }

  if (!menu) return <div>Not Found</div>

  return (
    <main>
      <div className='flex items-end justify-between gap-3 mb-6'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Food & Beverage Menu</span>
          </label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Create new menu" className="input input-bordered w-full" />
        </div>
        <button disabled={!name.trim()} onClick={onSubmitMenu}  className="btn btn-primary">Add</button>
      </div>
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Menu</th>
                <th>Hapus</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((e: any) => {
                return (
                  <tr key={e.id} className="hover">
                    <td width={'30%'}>{e.id}</td>
                    <td width={'50%'}>{e.name}</td>
                    <td width={'20%'}>
                      <button onClick={() => onDelete(e.id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
