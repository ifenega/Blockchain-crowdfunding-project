import React from 'react'

type Props = {
    children: React.ReactNode;
    border?: boolean
}

const RoundedIcon = (props: Props) => {
    return (
        <div className={`rounded-full p-2 flex items-center justify-center custom-gradient ${props.border && " border border-white "}`}>
            {props.children}
        </div>
    )
}

export default RoundedIcon

