import React from 'react'

type Props = {
    currentCategory: string
    selectCategory: (category: string) => void
}
const Category = (props: Props) => {

    const categories = ["General", "Accident", "Arts & culture", "Heritage", "Wildlife", "Childcare", "Democracy", "Education", "Environment", "Health", "Justice", "Mental Health"]

    return (
        <div className='flex gap-4 w-full overflow-scroll'>
            {
                categories.map((item, index) => (
                    <button
                        key={index}
                        type='button'
                        className={`${props.currentCategory === item ? " text-white bg-primary/600 rounded-full py-2 px-4  " : " text-gray/500 py-2"} font-medium`}
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