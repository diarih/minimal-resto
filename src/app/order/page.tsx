'use client'

import { MenuContext } from '@/context/MenuContext'
import React, { useContext, useEffect, useState } from 'react'

const tables = ["1", "2", "3"]

const quantity = ["1", "2", "3"]

export default function Order() {

  const { menu, addOrder, reset } = useContext(MenuContext)

  const [order, setOrder] = useState({
    menuId: "",
    tableId: "",
    qty: 0
  })

  const onChange = (key: string, e: any) => {
    setOrder((prev) => {
      return {
        ...prev,
        [key]: e
      }
    })
  }

  const onDisable = () => {
    const { menuId, tableId, qty } = order
    if (!order) return undefined
    return !menuId || !tableId || !qty
  }

  const isDisable = onDisable()

  const resetOrder = () => {
    return setOrder({
      menuId: "",
      tableId: "",
      qty: 0
    })
  }

  const onSubmit = () => {
    addOrder(order)
    resetOrder()
  }

  useEffect(() => {
    if (reset) resetOrder()
  }, [reset])


  return (
    <div className='w-full'>
      <div className="flex rounded-md mb-4">
        {
          tables.map((e, i) => {
            const rounded = i === 0 ? "rounded-l-md" : i === tables.length - 1 ? "rounded-r-md" : ""
            const isActive = e === order.tableId
            return (
              <div key={i} onClick={() => onChange("tableId", e)} className={`${isActive && "!bg-primary"} flex-1 p-2 text-center hover:bg-neutral-focus cursor-pointer transition-colors bg-neutral text-foreground text-sm h-[60px] flex items-center justify-center ${rounded}`}>
                Table {e}
              </div>
            )
          })
        }
      </div>
      <div className='flex gap-3 mb-16'>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Menu</span>
          </label>
          <select value={order.menuId} onChange={(e) => onChange("menuId", e.target.value)} className="select select-bordered">
            <option value="">Pilih Menu</option>
            {menu.map((e: any) => {
              return <option key={e.id} value={e.id}>{e.name}</option>
            })}
          </select>

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <select value={order.qty} onChange={(e) => onChange("qty", e.target.value)} className="select select-bordered">
            <option value="">Choose Quantity</option>
            {
              quantity.map((e: any) => {
                return (<option key={e} value={e}>{e}</option>)
              })
            }
          </select>
        </div>
      </div>
      <div className='text-right'>
        <button onClick={onSubmit} disabled={isDisable} className="btn btn-primary">Add Order</button>
      </div>
    </div>
  )

}
