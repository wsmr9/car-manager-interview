import { ReactNode } from 'react';

export interface CarouselProps {
    images: string[];
}

export interface ModalCustomProps {
    isOpen: boolean; 
    onRequestClose: () => void;
    children: ReactNode;
}
