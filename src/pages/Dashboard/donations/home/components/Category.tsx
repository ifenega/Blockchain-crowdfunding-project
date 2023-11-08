import React from 'react'
import { categories } from '../../../../../util/util'

type Props = {
    currentCategory: string
    selectCategory: (category: Category) => void
}
const Category = (props: Props) => {



    return (
        <div className='flex gap-4 w-full overflow-scroll'>
            {
                categories.map((item, index) => (
                    <button
                        key={index}
                        type='button'
                        className={`${props.currentCategory === item ? " text-white bg-primary/600 rounded-full py-2 px-4  " : " text-gray/500 py-2"} font-medium h-fit whitespace-nowrap `}
                        onClick={() => {
                            props.selectCategory(item)
                        }}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    )
}

export default Category