
import React from "react";
import LoadingSpinner from "../UI/LoadingSpinner";


type Props = {
    text: string | JSX.Element;
    action?: () => any | void;
    type: "submit" | "reset" | "button";
    disabled?: boolean;
    size?: "fit" | "full";
    status?: boolean
};

//button used during auth
const BorderButton = (props: Props) => {
    return (
        <>
            <button
                className={`py-2.5 px-4 text-primary/600 disabled:text-primary/200 rounded-lg bg-transparent border border-primary/600 disabled:border-primary/200 flex gap-2 items-center text-sm leading-5 font-medium justify-center ${props.size === 'fit' ? " w-fit " : " w-full "} `}
                onClick={props.action}
                type={props.type}
                disabled={props.disabled}
            >
                {props.text}
                {props.status && <LoadingSpinner />}
            </button>
        </>
    );
};

export default BorderButton;
