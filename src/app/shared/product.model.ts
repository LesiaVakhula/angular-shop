export enum ProductCategory {
    book = 1,
    pen,
    pencil,
    any
}

export interface Product {
    name: string;
    price: number;
    id: number;
    description: string;
    isAvailable: boolean;
    category: ProductCategory;
    imgUrl: string;
    quantity?: number;
}

