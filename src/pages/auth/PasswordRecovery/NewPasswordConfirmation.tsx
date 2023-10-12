import React from 'react'
import RoundedIcon from '../../../components/UI/RoundedIcon'
import Button from '../../../components/Buttons/Button'
import { useNavigate } from 'react-router-dom'
import AuthBody from '../AuthBody'

const NewPasswordConfirmation = () => {

    const navigate = useNavigate()

    return (
        <AuthBody>
            <div className='flex flex-col text-center items-center'>
                <div className='mb-8'>
                    <RoundedIcon>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4997 19.9999L17.4997 24.9999L27.4997 14.9999M36.6663 19.9999C36.6663 29.2047 29.2044 36.6666 19.9997 36.6666C10.7949 36.6666 3.33301 29.2047 3.33301 19.9999C3.33301 10.7952 10.7949 3.33325 19.9997 3.33325C29.2044 3.33325 36.6663 10.7952 36.6663 19.9999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </RoundedIcon>
                </div>

                <div className='text-center flex flex-col gap-1 items-center mb-10'>
                    <h2 className='text-gray/800 font-bold sm:leading-8 sm:text-2xl '>Password reset successfully</h2>
                    <p className='text-gray/500 text-xs sm:text-sm sm:leading-5'>Your password has been successfully reset, you can proceed to login with your newly created passwords</p>

                </div>

                <Button
                    text={'Proceed to login'}
                    type='button'
                    disabled={false}
                    size='full'
                    status={false}
                    action={() => {
                        navigate('/signin')
                    }}
                />
            </div>
        </AuthBody>
    )
}

export default NewPasswordConfirmation