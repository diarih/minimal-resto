'use client'

import { MenuContext } from '@/context/MenuContext'
import { mergeArrayDuplicates } from '@/lib/helpers/mergeDuplicateArr'
import React, { useContext, useEffect, useMemo, useState } from 'react'

export default function Kasir() {

  const { order, menu, deleteOrders, reset } = useContext(MenuContext)

  const [table, selectTable] = useState("")
  const [print, setPrint] = useState<any[]>([])

  const onChange = (e: any) => {
    const val = e?.target?.value || ""
    if (!val) setPrint([])
    selectTable(val)
  }

  const tableList = () => {
    const listResult = mergeArrayDuplicates(order).sort()
    return listResult
  }

  const orderMenu = () => {
    const res = order?.map((e: any) => {
      const [menuFilter] = menu.filter((x: any) => x.id == e.menuId)
      const { menuId, ...res } = e
      return {
        ...res,
        menu: {
          ...menuFilter
        }
      }
    })
    return res
  }

  const dataTable = useMemo(() => tableList(),
    [order, menu])

  const dataOrder = useMemo(() => orderMenu(),
    [order, menu])

  const onPrint = () => {
    const filteredOrder = dataOrder.filter((e: any) => e.tableId === table)
    setPrint(filteredOrder)
  }

  const onDeleteOrders = () => {
     deleteOrders()
     onChange("")
  }

  useEffect(() => {
    if(reset) onChange("")
  }, [reset])
  

  return (
    <div>
      <div className='flex items-end justify-between gap-3 mb-6'>
        <div className='flex items-end gap-3'>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Table</span>
            </label>
            <select value={table} onChange={onChange} className="select select-bordered">
              <option value="">Choose Table</option>
              {dataTable.map((e: any) => {
                return <option key={e} value={e}>Table #{e}</option>
              })}
            </select>
          </div>
          <button onClick={onPrint} className="btn btn-primary" disabled={!table}>Print</button>
        </div>
        {
          table && <button onClick={() => onDeleteOrders()} className="btn btn-error" disabled={!table}>Empty Orders</button>
        }
      </div>
      {
        print.length !== 0 && (
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Jumlah</th>
                    <th>Menu</th>
                    <th>Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {print.map((e: any, i: number) => {
                    return (
                      <tr key={i} className="hover">
                        <td width={'20%'}>{e.qty}</td>
                        <td width={'60%'}>{e.menu.name}</td>
                        <td width={'20%'}>Gratis!</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      }

    </div>
  )
}
