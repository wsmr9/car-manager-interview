import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import { ModalCustomProps} from '../../../types'

// Define custom styles for the modal content and overlay.
const customStyles = {
    content: {
        top: '50%',  // Center the modal vertically.
        left: '50%', // Center the modal horizontally.
        right: 'auto',  // Use auto right positioning.
        bottom: 'auto', // Use auto bottom positioning.
        marginRight: '-50%', // Adjust the right margin to help center the modal.
        transform: 'translate(-50%, -50%)', // Use transform for precise centering.
        width: 'auto', // Set a relative width to viewport for better responsiveness.
        minWidth: '500px', // Minimum width to ensure content has enough space.
        maxHeight: '90vh', // Maximum height to avoid overflow.
        overflow: 'auto', // Enable scrolling within the modal.
        border: 'none', // No border for a cleaner look.
        backgroundColor: '#fff', // Changed to white background for the modal content.
        padding: '20px', // Padding inside the modal.
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)', // Subtle shadow for depth.
        color: '#333' // Ensuring text is visible against the white background.
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)' // Semi-transparent overlay.
    }
};

const ModalCustom: React.FC<ModalCustomProps> = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            {children}
        </Modal>
    );
}

export default ModalCustom;  // Export the component for reuse.
