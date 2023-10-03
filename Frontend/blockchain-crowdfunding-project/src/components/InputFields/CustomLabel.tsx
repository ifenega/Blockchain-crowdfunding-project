import React from 'react'


type Props = {
    name: string;
    value_name: string;
}
const CustomLabel = (props: Props) => {
    return (
        <label
            className="mb-1 text-sm leading-5 text-[#667085] block w-full"
            htmlFor={props.value_name}
        >
            {props.name}
        </label>
    )
}

export default CustomLabel