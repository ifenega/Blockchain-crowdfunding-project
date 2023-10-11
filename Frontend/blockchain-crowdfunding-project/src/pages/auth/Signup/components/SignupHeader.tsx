import React from 'react'
import RoundedIcon from '../../../../components/UI/RoundedIcon'
import AlertInfo from '../../../../components/UI/AlertInfo'

const SignupHeader = () => {
    return (
        <div className='flex flex-col text-center items-center'>
            <div className='mb-8'>
                <RoundedIcon>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 25C14.7166 25 10.018 27.5511 7.02667 31.5099C6.38286 32.362 6.06095 32.788 6.07148 33.3638C6.07961 33.8086 6.35895 34.3698 6.70896 34.6445C7.16199 35 7.7898 35 9.0454 35H30.9546C32.2102 35 32.838 35 33.2911 34.6445C33.6411 34.3698 33.9204 33.8086 33.9286 33.3638C33.9391 32.788 33.6172 32.362 32.9734 31.5099C29.982 27.5511 25.2835 25 20 25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 20C24.1422 20 27.5 16.6421 27.5 12.5C27.5 8.35786 24.1422 5 20 5C15.8579 5 12.5 8.35786 12.5 12.5C12.5 16.6421 15.8579 20 20 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </RoundedIcon>
            </div>

            <div className='text-center flex flex-col gap-1 items-center mb-6'>
                <h2 className='text-gray/800 font-bold sm:leading-8 sm:text-2xl '>Create an account</h2>
                <p className='text-gray/500 text-xs sm:text-sm sm:leading-5'>Provide the details to create an account</p>

            </div>

            <AlertInfo>
                Upon successful sign up you will be prompted to sign in with your metamask details. <span className='underline cursor-pointer '
                    onClick={() => {

                    }}
                >Learn more</span>
            </AlertInfo>


        </div>
    )
}

export default SignupHeader