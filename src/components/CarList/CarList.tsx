import React from 'react';
import CarItem from '../CarItem/CarItem';
import { Car, CarListProps } from '../../types';
import './CarList.css'

const CarList: React.FC<CarListProps> = ({ cars, onGetElement }) => {

    const onGetElementCar = (car: Car, action: string ) => {
        onGetElement(car, action);
    };

    const renderedCars = cars.map(car => (
        <CarItem 
            key={car.id} 
            car={car} 
            onGetElementCar={onGetElementCar}
        />
    ));

    return (
        <div className="car-list-container">
            <table className="car-list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BRAND</th>
                        <th>MODEL</th>
                        <th>PRICE</th>
                        <th>YEAR</th>
                        <th>CREATED AT</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.length ? renderedCars : <tr><td colSpan={7} className="no-cars">No Products Have Been Registered</td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default CarList;
