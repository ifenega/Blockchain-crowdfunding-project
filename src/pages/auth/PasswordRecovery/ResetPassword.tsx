import React from 'react'
import AuthBody from '../AuthBody'
import ResetPasswordForm from './components/ResetPasswordForm'
import ResetPasswordHeader from './components/ResetPasswordHeader'


const ResetPassword = () => {
    return (
        <AuthBody>
            <div className='w-full'>
                <ResetPasswordHeader />
                <ResetPasswordForm />
            </div>
        </AuthBody>
    )
}

export default ResetPassword