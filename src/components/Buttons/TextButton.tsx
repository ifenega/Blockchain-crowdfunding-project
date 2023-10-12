
import React from "react";



type Props = {
    text: string | JSX.Element;
    action: () => any | void;
    disabled?: boolean;
};


const TextButton = (props: Props) => {
    return (

        <span
            className="text-primary/700 text-xs sm:text-sm font-medium sm:leading-5 "
            onClick={() => {
                if (!props.disabled) {
                    props.action()
                }
            }}

        >
            {props.text}
        </span>

    );
};

export default TextButton;
