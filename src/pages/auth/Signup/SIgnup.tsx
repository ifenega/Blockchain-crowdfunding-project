import React from 'react'
import SignupHeader from './components/SignupHeader'
import SignupForm from './components/SignupForm'
import AuthBody from '../AuthBody'

const Signup = () => {

    return (
        <AuthBody>
            <div className='w-full'>
                <SignupHeader />
                <SignupForm />

            </div>
        </AuthBody>
    )
}

export default Signup