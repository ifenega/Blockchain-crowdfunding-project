import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import CustomInput from '../../../../components/InputFields/CustomInput';
import FormError from '../../../../components/InputFields/FormError';
import TextButton from '../../../../components/Buttons/TextButton';
import Button from '../../../../components/Buttons/Button';
import CustomPasswordInput from '../../../../components/InputFields/CustomPasswordInput';
import PasswordValidation from '../../../../components/UI/PasswordValidation';
import { useNavigate } from 'react-router-dom';
import checkboxTicked from '../../../../assets/auth/checkboxTicked.svg'
import checkbox from '../../../../assets/auth/checkbox.svg'
import SignupProcessingModal from './SignupProcessingModal';


const SignupForm = () => {

    // <---------- Utility class --------->
    const navigate = useNavigate()
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const [loading, setLoading] = useState(false)
    const initialData = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confiirm_password: '',
        terms: false,
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
                            <div className='flex gap-3 items-center mb-4'>
                                <div className=''>
                                    <CustomLabel
                                        name='First name'
                                        value_name='first_name'
                                    />
                                    <Field
                                        loading={false}
                                        type='text'
                                        name="first_name"
                                        component={CustomInput}
                                        placeholder={"John"}


                                    />
                                    <FormError value_name='first_name' />
                                </div>

                                <div className=''>
                                    <CustomLabel
                                        name='Last name'
                                        value_name='last_name'
                                    />
                                    <Field
                                        loading={false}
                                        type='text'
                                        name="last_name"
                                        component={CustomInput}
                                        placeholder={"Doe"}


                                    />
                                    <FormError value_name='last_name' />
                                </div>
                            </div>

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

                            <div className='mb-2'>
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

                            <div className="w-full">
                                <label
                                    className="flex gap-1"
                                    htmlFor="terms"
                                // onClick={() => setFieldValue("confirm", !values.confirm)}
                                >
                                    <img src={values.terms ? checkboxTicked : checkbox} alt='chechbox' />

                                    <p className="text-sm text-gray/700  ">I accept the <span className='text-primary/500' onClick={() => { }}>privacy</span> & <span className='text-primary/500' onClick={() => { }}>terms of service</span></p>



                                    <Field
                                        type={"checkbox"}
                                        className="hidden"
                                        value={values.terms}
                                        id={"terms"}
                                        name={"terms"}
                                        onChange={() => {
                                            setFieldValue("terms", !values.terms)
                                        }}
                                    />
                                </label>



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

            {loading && <SignupProcessingModal />}

        </div>
    )
}

export default SignupForm


const validation = Yup.object({
    first_name: Yup.string().min(2, "Enter valid name").required("Required"),
    last_name: Yup.string()
        .min(2, "Enter a valid last name")
        .required("Required"),
    email: Yup.string().email("Invalid email address").required("You need to enter an email"),

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

    terms: Yup.bool().oneOf(
        [true],
        " You have to agree to the terms and condition to create an account"
    ),

})