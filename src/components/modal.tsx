import React from "react";
import { Button } from "./ui/button";
import {useTranslations} from "next-intl";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void; // Callback for closing the modal
    children?: React.ReactNode; // Content to render inside the modal
    className?: string; // Optional additional class for styling
    btnClassName?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className,btnClassName }) => {
    const t = useTranslations("iframe");
    if (!isOpen) {
        return null;
    }
    const handleBackdropClick = () => {
        onClose();
    };
    return (
        <div className={`fixed w-full h-full inset-0 flex items-center justify-center bg-black bg-opacity-85 z-[9999] ${className}`}
             onClick={handleBackdropClick}
        >
            {children}
            <Button
                onClick={onClose}
                variant="webar"
                className={`absolute left-[2rem] top-[2rem] z-[1000] ${btnClassName}`}
            >
                {t("button")}
            </Button>
        </div>
    );
};

export default Modal;