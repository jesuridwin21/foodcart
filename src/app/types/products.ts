export interface Product {
    id: number,
    name: string,
    price: number,
    image: string
}

export interface cartproducts extends Product {
    qty: number;
}