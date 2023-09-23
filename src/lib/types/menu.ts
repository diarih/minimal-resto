interface Menu {
    id: number,
    name: string
}

interface Order {
    menuId: string,
    tableId: string,
    qty: string | number
}

interface Print extends Omit<Order, 'menuId'> {
    menu: Menu;
}

type menuContextType = {
    menu: Menu[] | [];
    addMenu: (newFav: string) => void;
    deleteMenu: (id: number | string) => void;
    order: Order[] | [],
    addOrder: (newOrder: Order) => void
    deleteOrders: () => void
    reset: () => void
};