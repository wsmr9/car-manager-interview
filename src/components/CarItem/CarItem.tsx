import React from "react";
import { CarItemPropsView } from '../../types';
import './CarItem.css';

const CarItem: React.FC<CarItemPropsView> = ({ car, onGetElementCar }) => {
    return (
        <tr className="car-item">
            <td>{car.id}</td>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>${car.price}</td>
            <td>{car.year}</td>
            <td>{new Date(car.created_at).toLocaleDateString()}</td>
            <td>
                <button className="view" onClick={() => onGetElementCar(car , 'view')}>VIEW</button>
                <button className="delete"  onClick={() => onGetElementCar(car , 'delete')}>DELETE</button>
            </td>
        </tr>
    );
}

export default CarItem;
