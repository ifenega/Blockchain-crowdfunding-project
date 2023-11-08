import React from 'react'

type Props = {
    currentCategory: string
    selectCategory: (category: string) => void
}
const Category = (props: Props) => {
    const data = ["Active", "Ended"]

    return (
        <div className='w-full border-b border-gray/100 flex gap-4 items-center'>

            {
                data.map((item, index) => (
                    <button
                        key={index}
                        type='button'
                        className={`whitespace-nowrap pb-2 border-b font-medium ${props.currentCategory === item ? " border-primary/600 text-primary/600 " : " border-transparent text-gray/500 "}`}
                        onClick={() => props.selectCategory(item)}
                    >
                        {item}
                    </button>
                ))
            }


        </div>
    )
}

export default Category