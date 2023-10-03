import React from 'react'
import SigninHeader from './components/SigninHeader'
import SigninForm from './components/SigninForm'
import AuthBody from '../AuthBody'

const Signin = () => {
    return (
        <AuthBody>
            <div className='w-full'>
                <SigninHeader />
                <SigninForm />

            </div>
        </AuthBody>
    )
}

export default Signin