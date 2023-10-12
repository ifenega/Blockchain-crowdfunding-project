import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import CustomInput from '../../../../components/InputFields/CustomInput';
import FormError from '../../../../components/InputFields/FormError';
import TextButton from '../../../../components/Buttons/TextButton';
import Button from '../../../../components/Buttons/Button';
import CustomPasswordInput from '../../../../components/InputFields/CustomPasswordInput';
import { CustomToast } from '../../../../util/util';
import { useNavigate } from 'react-router-dom';


const SigninForm = () => {

    // <---------- Utility class --------->
    const navigate = useNavigate()
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const initialData = {
        email: '',
        password: '',
    }
    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        CustomToast('success', 'Check toast if it is working')
    }

    return (
        <div className='mt-6'>
            <Formik
                initialValues={initialData}
                onSubmit={onSubmit}
                validationSchema={validation}
            >
                {({ errors, values, setFieldValue, isValid, dirty }) => (
                    <Form>

                        <div className='mb-10'>
                            <div className='mb-4'>
                                <CustomLabel
                                    name='Email'
                                    value_name='email'
                                />
                                <Field
                                    loading={false}
                                    type='email'
                                    name="email"
                                    component={CustomInput}
                                    placeholder={"Enter email address"}
                                    onChange={(option: any) => {

                                    }}

                                />
                                <FormError value_name='email' />
                            </div>

                            <div className='mb-4'>
                                <div className='flex gap-2 justify-between items-center '>
                                    <CustomLabel
                                        name='Password'
                                        value_name='password'
                                    />

                                    <div className='mb-1 text-right w-full'>
                                        <TextButton text={'Forgot password?'} action={() => { navigate('/reset-password') }} />
                                    </div>
                                </div>

                                <Field
                                    loading={false}
                                    name="password"
                                    component={CustomPasswordInput}
                                    placeholder={"Enter your password"}
                                    onChange={(option: any) => {

                                    }}

                                />
                                <FormError value_name='password' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 items-center mb-[30px] sm:mb-[70px]'>
                            <Button
                                text={'Sign in'}
                                type='submit'
                                disabled={!(isValid)}
                                size='full'
                                status={false}
                            />

                            <p className='text-gray/500 text-xs sm:text-sm sm:leading-5 '>Don’t have an account?<span className='ml-2'><TextButton text={'Create an account'} action={() => { navigate('/signup') }} /></span></p>
                        </div>

                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default SigninForm

const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),

    password: Yup.string()
        .min(6, "Password must be minimum of 6 characters")
        .required("Required"),

})
