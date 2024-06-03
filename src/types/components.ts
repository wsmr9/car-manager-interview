import { ReactNode } from 'react';

/**
 * Properties for the Carousel component.
 * @param images Array of image URLs to display in the carousel.
 */
export interface CarouselProps {
    images: string[]; // Array of strings representing the URLs of images to be displayed in the carousel
}

/**
 * Properties for a custom modal component.
 * @param isOpen Boolean indicating if the modal is open or not.
 * @param onRequestClose Function to call when there is a request to close the modal.
 * @param children The content to be displayed within the modal.
 */
export interface ModalCustomProps {
    isOpen: boolean;           // Determines whether the modal is currently open
    onRequestClose: () => void; // Function to execute when modal needs to be closed, typically set by parent component
    children: ReactNode;        // The content to be rendered inside the modal, can include any valid React nodes
}
