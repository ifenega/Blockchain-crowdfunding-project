import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import CustomInput from '../../../../components/InputFields/CustomInput';
import FormError from '../../../../components/InputFields/FormError';
import TextButton from '../../../../components/Buttons/TextButton';
import Button from '../../../../components/Buttons/Button';
import { CustomToast } from '../../../../util/util';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
    // <---------- Utility class --------->
    const navigate = useNavigate()
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const [loading, setLoading] = useState(false)
    const initialData = {
        email: '',

    }
    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        setLoading(true)
        CustomToast('success', `An email with reset instructions has been sent to ${values.email} `)
        setTimeout(() => {
            navigate('/reset-password/new')
        }, 2000);

    }

    return (
        <div className=''>
            <Formik
                initialValues={initialData}
                onSubmit={onSubmit}
                validationSchema={validation}
            >
                {({ errors, values, setFieldValue, isValid, dirty }) => (
                    <Form>

                        <div className='mb-14'>
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


                        </div>

                        <div className='flex flex-col gap-6 items-center mb-[30px] '>
                            <Button
                                text={'Send reset code'}
                                type='submit'
                                disabled={!(isValid) || loading}
                                status={loading}
                                size='full'

                            />

                            <p className='text-gray/500 text-xs sm:text-sm sm:leading-5 '>Don’t want to proceed?<span className='ml-2'><TextButton text={'Return to login'} action={() => { navigate('/signin') }} /></span></p>
                        </div>

                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default ResetPasswordForm

const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),


})