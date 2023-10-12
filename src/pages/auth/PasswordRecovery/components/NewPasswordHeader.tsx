import React from 'react'
import RoundedIcon from '../../../../components/UI/RoundedIcon'



const NewPasswordHeader = () => {
    return (
        <div className='flex flex-col text-center items-center'>
            <div className='mb-8'>
                <RoundedIcon>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 15H25.0167M25 25C30.5228 25 35 20.5228 35 15C35 9.47715 30.5228 5 25 5C19.4772 5 15 9.47715 15 15C15 15.4561 15.0305 15.9051 15.0897 16.3451C15.187 17.0686 15.2356 17.4304 15.2029 17.6593C15.1688 17.8978 15.1253 18.0262 15.0078 18.2365C14.895 18.4383 14.6962 18.6371 14.2986 19.0348L5.78105 27.5523C5.4928 27.8405 5.34867 27.9847 5.2456 28.1529C5.15422 28.302 5.08688 28.4646 5.04605 28.6346C5 28.8264 5 29.0303 5 29.4379V32.3333C5 33.2668 5 33.7335 5.18166 34.09C5.34144 34.4036 5.59641 34.6586 5.91002 34.8183C6.26654 35 6.73325 35 7.66667 35H10.5621C10.9697 35 11.1736 35 11.3654 34.9539C11.5354 34.9131 11.698 34.8458 11.8471 34.7544C12.0153 34.6513 12.1595 34.5072 12.4477 34.219L20.9652 25.7014C21.3628 25.3038 21.5617 25.105 21.7635 24.9922C21.9738 24.8747 22.1022 24.8312 22.3407 24.7971C22.5696 24.7644 22.9314 24.813 23.6549 24.9103C24.0949 24.9695 24.5439 25 25 25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </RoundedIcon>
            </div>

            <div className='text-center flex flex-col gap-1 items-center mb-6'>
                <h2 className='text-gray/800 font-bold sm:leading-8 sm:text-2xl '>New password</h2>
                <p className='text-gray/500 text-xs sm:text-sm sm:leading-5'>Create a new password for <span className='text-gray/800 font-medium'>ifeoluwa@gmail.com</span></p>

            </div>



        </div>
    )
}

export default NewPasswordHeader