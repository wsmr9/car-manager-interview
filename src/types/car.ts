export interface CarFormValues {
    brand: string;
    model: string;
    year: number;
    price: number;
}

export interface Car extends CarFormValues {
    id: number;
    created_at: string;
}
