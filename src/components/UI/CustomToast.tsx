import React, { useEffect, useState } from 'react';
import bulb from '../../assets/components/UI/bulb.svg'
import success from '../../assets/components/UI/success.svg'
import warning from '../../assets/components/UI/warning.svg'
import close from '../../assets/components/general/close.svg'


interface ToastProps {
    message: string;
    onClose: () => void;
    type: ToastType;
    title?: string;
    index: number; // Add index prop to determine the delay
}

const Toast: React.FC<ToastProps> = ({ message, onClose, type, title, index }) => {
    const toastBG = `${type === 'error' ? 'bg-[#FDEBEB]' : type === 'success' ? 'bg-[#EBFDED]' : 'bg-[#EBF7FD]'}`;
    const icon = type === 'error' ? warning : type === 'success' ? success : bulb;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay showing the toast by multiplying the index to stagger them
        const showTimeout = setTimeout(() => {
            setIsVisible(true);
        }, index * 100); // Adjust the delay as needed

        return () => {
            clearTimeout(showTimeout);
        };
    }, [index]);

    useEffect(() => {
        if (isVisible) {
            // Add a timeout to remove the toast after it's displayed
            const removeTimeout = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, 3000); // Adjust the time as needed

            return () => {
                clearTimeout(removeTimeout);
            };
        }
    }, [isVisible, onClose]);

    // Calculate opacity based on the index
    const maxOpacity = 1; // Maximum opacity for the most recent toast
    const minOpacity = 0.1; // Minimum opacity for older toasts
    const opacity = maxOpacity - (index * (maxOpacity - minOpacity)) / 10;

    const toastStyle: React.CSSProperties = {
        opacity,
        zIndex: 9999999999 - index,
    };

    return (
        <div
            className={`py-2.5 px-4 grid grid-cols-[auto_1fr_auto] items-start gap-2.5 rounded-lg text-[#475467] text-xs sm:text-sm  text-left ${toastBG} transform transition-transform duration-300 ease-in-out w-full  z-[9999999999] max-w-[478px] `}
            style={toastStyle}
        >
            <img src={icon} alt="" />
            <div className='sm:leading-5'>
                {title && <h5 className="font-medium ">{title}</h5>}
                <p className='pt-0.5'>{message}</p>
            </div>
            <button
                onClick={onClose}
            >
                <img src={close} alt="close toast" />
            </button>
        </div>
    );
};





interface ToastMessage {
    title?: string;
    message: string;
    type: ToastType;
    id: number;
}

const ToastContainer: React.FC = () => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const showToast = (message: string, type: ToastType, title?: string) => {
        const newToast: ToastMessage = {
            title,
            message,
            type,
            id: new Date().getTime(),
        };

        setToasts([ ...toasts, newToast,]);
    };

    const removeToast = (id: number) => {
        const filteredToasts = toasts.filter((toast) => toast.id !== id);
        setToasts(filteredToasts);
    };

    useEffect(() => {
        // Custom event listener to show toasts
        const handleShowToast: EventListener = (event: Event) => {
            const customEvent = event as CustomEvent<{ message: string; type: ToastType; title?: string }>;
            const { message, type, title } = customEvent.detail;
            showToast(message, type, title);
        };
        // Add event listener
        window.addEventListener('show-toast', handleShowToast);

        // Cleanup: Remove event listener when component unmounts
        return () => {
            window.removeEventListener('show-toast', handleShowToast);
        };
    }, [toasts, showToast]);

    // Reverse the order of toasts before mapping and rendering them
    const reversedToasts = [...toasts].reverse();

    // Slice the toasts array to display up to 4 toasts at a time
    const visibleToasts = reversedToasts.slice(0, 4);


    return (
        <div className="toast-container" >
            {visibleToasts.map((toast, index) => (
                <div key={toast.id} style={{ marginBottom: '4px' }}>
                    <Toast
                        key={toast.id}
                        title={toast.title}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                        index={index} // Pass the index prop to the Toast component
                    />
                </div>
            ))}
        </div>
    );
};

export default ToastContainer;

