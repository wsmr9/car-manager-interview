import { Car, CarFormValues } from './car';

/**
 * Properties for a component that displays a single car.
 * @param car The car to be displayed.
 * @param onGetElementCar Function to handle actions like edit or delete on the car.
 */
export interface CarItemPropsView {
    car: Car;
    onGetElementCar: (item: Car, action: string) => void;
}

/**
 * Properties for a form component used for creating or updating a car.
 * @param car Optional car object for editing. If not provided, the form is for creating a new car.
 * @param onSave Function to save the car data submitted by the form.
 */
export interface CarItemPropsForm {
    car?: Car | null;
    onSave: (item: CarFormValues) => void;
}

/**
 * Properties for a component that lists cars.
 * @param cars Array of car objects to be listed.
 * @param onGetElement Function to handle actions like edit or delete on a car from the list.
 */
export interface CarListProps {
    cars: Car[];
    onGetElement: (item: Car, action: string) => void;
}

/**
 * Properties for a form component used for creating or updating a car.
 * @param car Optional car object for editing. If null, the form is for creating a new car.
 * @param onSave Function to save the car data submitted by the form.
 */
export interface CarFormProps {
    car: Car | null;
    onSave: (item: CarFormValues) => void;
}

/**
 * Defines the structure for error messages related to car form fields.
 */
export interface FormErrors {
    brand: string;   // Error message for the car brand field
    model: string;   // Error message for the car model field
    year: string;    // Error message for the car year field
    price: string;   // Error message for the car price field
}
