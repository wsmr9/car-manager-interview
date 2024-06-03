/**
 * Defines the structure for car form values used in forms across the application.
 */
export interface CarFormValues {
    brand: string;  // Brand of the car, e.g., "Toyota"
    model: string;  // Model of the car, e.g., "Corolla"
    year: number;   // Manufacturing year of the car
    price: number;  // Price of the car in USD
}

/**
 * Extends CarFormValues to include additional properties for a car entity.
 */
export interface Car extends CarFormValues {
    id: number;           // Unique identifier for the car
    created_at: string;   // Timestamp of when the car was added to the database
}
