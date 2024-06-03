import React, { useState, useEffect } from "react";
import CarList from "../CarList/CarList";
import CarForm from "../CarForm/CarForm";
import Loading from "../Layout/Loading/Loading/Loading";
import { Car, CarFormValues } from "../../types/index"
import useHttp from '../../hook/useHttp';
import config from "../../config/config";

const CarHome = () => {
    const [carSelected, setCarSelected] = useState<Car|null>(null);
    const [isInitialView, setIsInitialView] = useState<boolean>(true);
    const { error, isLoading, sendRequest } = useHttp();
    const [cars, setCars] = useState<Car[]>([]);

    const fetchData = async () => {
        try {
            const data = await sendRequest(`${config.carEndpoint}/car`);
            setCars(data.cars);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const saveCarItem = async (item: CarFormValues) => {
        const url = carSelected ? `${config.carEndpoint}/car/${carSelected.id}` : `${config.carEndpoint}/car`;
        const method = carSelected ? 'PUT' : 'POST';
        try {
            await sendRequest(url, { method, body: item });
            setIsInitialView(true);
            setCarSelected(null);
            fetchData();
        } catch (err) {
            console.error(err);
        }
    };

    const toggleView = () => {
        setIsInitialView(prev => !prev);
    };

    const handleCarSelection = async (car: Car, action: string) => {
        if (action === 'view') {
            setCarSelected(car);
            toggleView();
        } else {
            const url = `${config.carEndpoint}/car/${car.id}`;
            try {
                await sendRequest(url, { method: 'DELETE' });
                fetchData();
            } catch (err) {
                console.error("Error deleting car:", err);
            }
        }
    };

    return (
        <>  
            { isLoading && <Loading /> }

            <button className="create-btn" onClick={toggleView}>
                { isInitialView ? 'CREATE NEW CAR' : 'BACK'}
            </button>

            { isInitialView ?
                <CarList 
                    cars={cars}
                    onGetElement={handleCarSelection}
                />
            : 
                <CarForm 
                    car={carSelected} 
                    onSave={saveCarItem}
                />
            }
        </>
    );
}

export default CarHome;
