import React, { useState } from "react";
import ModalCustom from "../Layout/Modal/Modal";
import CarHome from "../CarHome/CarHome";
import Carousel from "../Carousel/Carousel";
import config from "../../config/config";
import './Home.css'

const Home: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const openModal = (): void => {
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
        setModalIsOpen(false);
    };

    return (
        <div className="home-container">

            <Carousel images={config.carBrandsImages} />
            
            <button className="create-btn" onClick={openModal}>SHOW CARS INFORMATION</button>
            <ModalCustom
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <CarHome />
            </ModalCustom>

            <Carousel images={[...config.carBrandsImages].reverse()} />


        </div>
    );
}
export default Home;
