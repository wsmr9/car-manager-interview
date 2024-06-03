import React from 'react';
import './Header.css';
import logo from '../../../assets/images/oneway_logo.png'; // Asegúrate de ajustar la ruta al logo

const Header: React.FC = () => {
    return (
        <header className="main-header">
            <div className="header-logo-container">
                <img src={logo} alt="Logo" className="header-logo" />
            </div>
            <div className="header-title">Cars Management</div>
        </header>
    );
}
export default Header;
