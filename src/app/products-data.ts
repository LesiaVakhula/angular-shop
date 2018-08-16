import { Product } from './shared/product.model';

export const PRODUCTS: Product[] = [
    {
        name: 'Sherlock Holmes',
        price: 100,
        id: 111,
        description: 'something about this book',
        isAvailable: true,
        category: 1,
        imgUrl: '../assets/sherlock_holmes.jpg'
    },
    {
        name: 'Red pen',
        price: 20,
        id: 121,
        description: 'something about this pen',
        isAvailable: false,
        category: 2,
        imgUrl: '../assets/pens.jpg'
    },
    {
        name: 'pencil',
        price: 35,
        id: 96,
        description: 'something about this pencil',
        isAvailable: true,
        category: 3,
        imgUrl: '../assets/pencil.jpg'
    }
];
