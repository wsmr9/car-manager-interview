import React, { useState, useEffect } from 'react';
import { CarouselProps } from '../../types'
import './Carousel.css';

const Carousel: React.FC<CarouselProps> = ({ images }) => {

    const extendedImages = [...images, ...images];

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prevOffset => (prevOffset + 1) % (extendedImages.length * 100));
        }, 6000);

        return () => clearInterval(interval);
    }, [extendedImages.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-inner" style={{ transform: `translateX(-${offset}%)` }}>
                {extendedImages.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image} alt={`Brand ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
