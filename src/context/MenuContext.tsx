'use client'

import { loadFromLocalStorage, saveToLocalStorage } from '@/lib/helpers/localstorage';
import React, { useEffect } from 'react'
import { createContext, useState } from 'react'


const defaultMenus: Menu[] = [
    {
        id: 12312,
        name: "Ayam"
    }
]

export const MenuContext = createContext<menuContextType>({
    menu: [],
    addMenu: () => { },
    deleteMenu: () => { },
    order: [],
    addOrder: () => { },
    deleteOrders: () => { },
    reset: () => { }
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {

    const [menu, setmenu] = useState<Menu[]>([])
    const [order, setOrder] = useState<Order[]>([])

    const addMenu = (newMenu: string) => {
        const id = Math.floor(Math.random() * 1000);
        const food = {
            id,
            name: newMenu
        }
        setmenu((prev) => {
            saveToLocalStorage("menu", [...prev, food])
            return [...prev, food]
        })
    }

    const addOrder = (newOrder: Order) => {
        setOrder((prev) => {
            saveToLocalStorage("order", [...prev, newOrder])
            return [...prev, newOrder]
        })
    }

    const deleteMenu = (id: number | string) => {
        const updatedFavs = menu.filter((post) => post.id !== id);
        setmenu(updatedFavs);
        saveToLocalStorage("menu", updatedFavs)
    }
 
    const deleteOrders = () => {
        setOrder([])
        saveToLocalStorage("order", [])
    }

    const reset = () => {
        setmenu(defaultMenus)
        saveToLocalStorage("menu", defaultMenus)
        deleteOrders()
        return true
    }

    useEffect(() => {
        setmenu((prev) => {
            const menuStorage = loadFromLocalStorage("menu")
            if (menuStorage.length !== 0) return [...prev, ...menuStorage]
            saveToLocalStorage("menu", defaultMenus)
            return defaultMenus
        })
        setOrder((prev) => {
            const storage = loadFromLocalStorage("order")
            return [...prev, ...storage]
        })
    }, [])

    return (
        <MenuContext.Provider value={{ menu, addMenu, deleteMenu, order, addOrder, deleteOrders, reset }}>
            <div>{children}</div>
        </MenuContext.Provider>
    )
}