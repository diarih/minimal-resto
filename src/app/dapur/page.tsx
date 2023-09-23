'use client'

import { MenuContext } from '@/context/MenuContext'
import React, { useContext, useMemo } from 'react'

export default function Dapur() {

  const { order, menu } = useContext(MenuContext)

  const orderMenu = () => {
    const res = order?.map((e) => {
      const [menuFilter] = menu.filter((x) => x.id.toString() == e.menuId)
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

  const data = useMemo(
    () => orderMenu(),
    [menu, order]
  );

  console.log(data)

  return (
    <div className="flex">
      <div className="w-1/3 space-y-4">
        <h3 className="font-semibold text-xl leading-none">Meja 1</h3>
        <div className="space-y-1">
          {
            data?.filter((e) => e.tableId === '1').map((x, i: number) => {
              return (
                <div key={i} className="flex text-sm text-muted-foreground">
                  <div className="w-[30px]">{x.qty}x</div>
                  <div className="w-full">{x.menu.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="w-1/3 space-y-4">
        <h3 className="font-semibold text-xl leading-none">Meja 2</h3>
        <div className="space-y-1">
          {
            data?.filter((e) => e.tableId === '2').map((x, i: number) => {
              return (
                <div key={i} className="flex text-sm text-muted-foreground">
                  <div className="w-[30px]">{x.qty}x</div>
                  <div className="w-full">{x.menu.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="w-1/3 space-y-4">
        <h3 className="font-semibold text-xl leading-none">Meja 3</h3>
        <div className="space-y-1">
          {
            data?.filter((e) => e.tableId === '3').map((x, i: number) => {
              return (
                <div key={i} className="flex text-sm text-muted-foreground">
                  <div className="w-[30px]">{x.qty}x</div>
                  <div className="w-full">{x.menu.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
