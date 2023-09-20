'use client'

import { loadFromLocalStorage, saveToLocalStorage } from '@/lib/helpers/localstorage';
import React, { useEffect } from 'react'
import { createContext, useState } from 'react'


const defaultMenus = [
    {
        id: 12312,
        name: "Ayam"
    }
]

type menuContextType = {
    favPokemon: any[];
    addFav: (newFav: any) => void;
    deleteFav: (id: number | string) => void;
};

export const MenuContext = createContext<any>({
    menus: [],
    addMenu: () => { },
    deleteMenu: () => { }
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {

    const [menu, setmenu] = useState<any>([])

    const addMenu = (newMenu: any) => {
        const id = Math.floor(Math.random() * 1000);
        const food = {
            id,
            name: newMenu
        }
        setmenu((prev: any) => {
            saveToLocalStorage("menu", [...prev, food])
            return [...prev, food]
        })
    }

    const deleteMenu = (id: number | string) => {
        const updatedFavs = menu.filter((post: any) => post.id !== id);
        setmenu(updatedFavs);
        saveToLocalStorage("menu", updatedFavs)
    }

    const reset = () => {
        setmenu(defaultMenus)
    }

    useEffect(() => {
        setmenu((prev: any) => {
            const menuStorage = loadFromLocalStorage("menu")
            if (menuStorage.length !== 0) return [...prev, ...menuStorage]
            saveToLocalStorage("menu", defaultMenus)
            return defaultMenus
        })
    }, [])

    return (
        <MenuContext.Provider value={{ menu, addMenu, deleteMenu }}>
            <div>{children}</div>
        </MenuContext.Provider>
    )
}