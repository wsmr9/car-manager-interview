import React, { useState, useEffect } from "react";
import { CarFormValues, CarFormProps, FormErrors } from "../../types";
import './CarForm.css';
import Joi from 'joi';

const CarForm: React.FC<CarFormProps> = ({ car, onSave }) => {
    const [isCreateView, setIsCreateView] = useState<boolean>(true);

    useEffect(() => {
        if (car === null) {
            setIsCreateView(true);
            return;
        }
        setIsCreateView(false);
    }, [car]);

    const [formData, setFormData] = useState<CarFormValues>({
        brand: car?.brand || '',
        model: car?.model || '',
        year: car?.year || 2020,
        price: car?.price || 1
    });

    const [errors, setErrors] = useState<FormErrors>({
        brand: '',
        model: '',
        year: '',
        price: ''
    });

    const [isFormValid, setIsFormValid] = useState<boolean>(true);

    const schema = Joi.object({
        brand: Joi.string().required().label("Brand"),
        model: Joi.string().required().label("Model"),
        year: Joi.number().integer().min(1900).max(new Date().getFullYear()).required().label("Year"),
        price: Joi.number().greater(0).required().label("Price")
    });

    useEffect(() => {
        const { error } = schema.validate(formData, { abortEarly: false });
        const newErrors = { brand: '', model: '', year: '', price: '' };
        if (error) {
            for (let item of error.details) {
                const key = item.path[0] as keyof typeof newErrors;
                newErrors[key] = item.message;
            }
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
        setErrors(newErrors);
    }, [formData]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isFormValid) return;
        onSave(formData);
    };

    return (
        <form className="car-form" onSubmit={handleSubmit}>
            <div className="car-form-header">
                <h2>{isCreateView ? 'CREATE NEW CAR' : 'EDIT CAR'}</h2>
            </div>
            <label>
                BRAND:
                <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} />
                {errors.brand && <div className="error-message">{errors.brand}</div>}
            </label>
            <label>
                MODEL:
                <input type="text" name="model" value={formData.model} onChange={handleInputChange} />
                {errors.model && <div className="error-message">{errors.model}</div>}
            </label>
            <label>
                PRICE:
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
                {errors.price && <div className="error-message">{errors.price}</div>}
            </label>
            <label>
                YEAR:
                <input type="number" name="year" value={formData.year} onChange={handleInputChange} />
                {errors.year && <div className="error-message">{errors.year}</div>}
            </label>
            <button type="submit" className="save-car-button" disabled={!isFormValid}>
                {isCreateView ? 'SAVE CAR' : 'UPDATE CAR'}
            </button>
        </form>
    );
}

export default CarForm;
