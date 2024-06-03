import { Car, CarFormValues } from './car';

export interface CarItemPropsView {
    car: Car;
    onGetElementCar: (item: any, action: string) => void;
}

export interface CarItemPropsForm {
    car?: Car | null;
    onSave: (item: any) => void;
}

export interface CarListProps {
    cars: Car[];
    onGetElement: (item: any, action: string) => void;
}

export interface CarFormProps {
    car: Car | null;
    onSave: (item: CarFormValues) => void;
}

export interface FormErrors {
    brand: string;
    model: string;
    year: string;
    price: string;
}
