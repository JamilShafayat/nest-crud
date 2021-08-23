import { Product } from './product.model';
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateSingleProduct(productId: string, title: string, desc: string, price: number): void;
    deleteSingleProduct(productId: string): void;
    private findProduct;
}
