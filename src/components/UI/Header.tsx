import React from 'react'


type Props = {
    title: string
}
const Header = (props: Props) => {
    return (
        <>
            <h1 className='text-xl sm:text-3xl lg:text-[40px] font-bold tracking-[-0.3px] leading-normal text-gray/700 mb-6'>{props.title}</h1>
        </>
    )
}

export default Header