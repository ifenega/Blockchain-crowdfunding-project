import React from 'react'


const SignupProcessingModal = () => {


    return (
        <div className='w-full h-full fixed top-0 left-0 flex items-center justify-center'>
            <div className='bg-black opacity-[56%] w-full h-full z-50 fixed top-0 left-0'></div>
            <div className='bg-white sm:py-6 sm:px-8 p-4 w-full m-4 sm:w-[500px] rounded-[32px] flex gap-8 sm:gap-4 relative flex-col items-center z-[55]'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin">
                    <path d="M24 4V12M24 36V44M12 24H4M44 24H36M38.1569 38.1569L32.5 32.5M38.1569 9.99988L32.5 15.6567M9.84315 38.1569L15.5 32.5M9.84315 9.99988L15.5 15.6567" stroke="#475467" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <p className='text-gray/500 text-center'>
                    Creating your account, this won't take long. <br /> Please do not close/leave this page
                </p>
            </div>
        </div>
    )
}

export default SignupProcessingModal