export interface CartItemsProps {
    id?: string;
    movieCover: string;
    movieTitle: string;
    moviePrice: number;
    unitQuantity: number;
    totalPrice: number;
}

export interface ICartContext {
    cartItemsList: CartItemsProps[];
    totalItemsNumber: number;
    addMovieToCart: (cartItemsList) => void;
    increaseQuantityItem: (id) => void;
    decreaseQuantityItem: (id) => void;
    removeItemFromCart: (id: string) => void;
}

export type CartProvider_Props = {
    children: React.ReactNode
}