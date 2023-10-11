import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import FormError from '../../../../components/InputFields/FormError';
import TextButton from '../../../../components/Buttons/TextButton';
import Button from '../../../../components/Buttons/Button';
import CustomPasswordInput from '../../../../components/InputFields/CustomPasswordInput';
import PasswordValidation from '../../../../components/UI/PasswordValidation';
import { useNavigate } from 'react-router-dom';



const NewPasswordForm = () => {

    // <---------- Utility class --------->
    const navigate = useNavigate()
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const [loading, setLoading] = useState(false)
    const initialData = {

        password: '',
        confiirm_password: '',

    }
    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate('/signup/confirmation')
        }, 3000);
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
                                <div className='mb-2'>

                                    <CustomLabel
                                        name='Password'
                                        value_name='password'
                                    />


                                    <Field
                                        loading={false}
                                        name="password"
                                        component={CustomPasswordInput}
                                        placeholder={"Enter your password"}


                                    />
                                    <FormError value_name='password' />
                                </div>

                                <PasswordValidation password={values.password} />
                            </div>

                            <div className=''>
                                <CustomLabel
                                    name='Confirm password'
                                    value_name='confirm_password'
                                />


                                <Field
                                    name="confirm_password"
                                    component={CustomPasswordInput}
                                    placeholder={"Confirm your password"}
                                    onChange={(option: any) => {

                                    }}

                                />
                                <FormError value_name='confirm_password' />
                            </div>

                           
                        </div>

                        <div className='flex flex-col gap-6 items-center mb-[30px] sm:mb-[70px]'>
                            <Button
                                text={'Sign up'}
                                type='submit'
                                disabled={!(isValid) || loading}
                                size='full'
                                status={false}
                            />

                            <p className='text-gray/500 text-xs sm:text-sm sm:leading-5 '>Already have an account?<span className='ml-2'><TextButton text={'Signin'} action={() => { navigate("/signin") }} /></span></p>
                        </div>

                    </Form>
                )}
            </Formik>



        </div>
    )
}

export default NewPasswordForm


const validation = Yup.object({

    password: Yup.string()
        .min(8, "Password must be minimum of 8 characters")
        .required("Required")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.+-])[A-Za-z\d@$!%*?&.+-]{8,}$/, {
            message:
                "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 numeric character, and 1 special character",
        }),

    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Password do not match') // Check if it matches the 'password' field
        .required('You need to confirm your password'),


})