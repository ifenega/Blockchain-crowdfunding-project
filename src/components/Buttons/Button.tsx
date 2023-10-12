
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
const Button = (props: Props) => {
    return (
        <>
            <button
                className={`py-2.5 px-4 text-white rounded-lg bg-primary/600 disabled:bg-primary/200 flex gap-2 items-center text-sm leading-5 font-medium justify-center ${props.size === 'fit' ? " w-fit " : " w-full "} `}
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

export default Button;
