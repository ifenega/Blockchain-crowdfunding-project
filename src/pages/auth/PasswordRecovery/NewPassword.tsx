import React from 'react'
import AuthBody from '../AuthBody'
import NewPasswordForm from './components/NewPasswordForm'
import NewPasswordHeader from './components/NewPasswordHeader'


const NewPassword = () => {
    return (
        <AuthBody>
            <div className='w-full'>
                <NewPasswordHeader />
                <NewPasswordForm />
            </div>
        </AuthBody>
    )
}

export default NewPassword