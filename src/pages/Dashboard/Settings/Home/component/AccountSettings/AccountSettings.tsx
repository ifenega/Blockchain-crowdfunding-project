import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import LoadingSpinner from '../../../../../../components/UI/LoadingSpinner';
import FormError from '../../../../../../components/InputFields/FormError';
import CustomInput from '../../../../../../components/InputFields/CustomInput';
import CustomLabel from '../../../../../../components/InputFields/CustomLabel';
import CustomSelect from '../../../../../../components/InputFields/CustomSelect';
import COUNTRYDATA from '../../../../../../assets/dashboard/general/country-list.json'
import CustomPasswordInput from '../../../../../../components/InputFields/CustomPasswordInput';
import PasswordValidation from '../../../../../../components/UI/PasswordValidation';
import { AppDispatch } from '../../../../../../store/store';
import { useDispatch } from 'react-redux';
import { campaignActions } from '../../../../../../store/slices/campaignSlice';

const AccountSettings = () => {

    // <---------- Utility class --------->
    const dispatch: AppDispatch = useDispatch()
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const [loading, setLoading] = useState<boolean>(false)

    const optionCountries: any = [];

    COUNTRYDATA.map((item) => {
        optionCountries.push({ label: item.name, value: item.name });
    });

    const initialData = {
        current_password: "",
        new_password: "",
        confirm_password: "",

    }

    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        console.log(values)

        //store data for the password temporarily in redux then pass it to the endpoint inside the modal on confirm
        dispatch(campaignActions.setAccountSettings({
            size: "mid",
            title: "Confirm changes",
            modal_type: "account_settings"
        }))
    }

    return (
        <div>

            <Formik
                initialValues={initialData}
                onSubmit={onSubmit}
                validationSchema={validation}
            >
                {({ errors, values, setFieldValue, setTouched, isValid, dirty, touched }) => (
                    <Form>
                        <div className='flex items-center justify-between gap-4 mb-4'>
                            <p className='text-black '>Manage your Profile</p>

                            <button
                                disabled={!isValid}
                                type='submit'
                                className='text-white bg-[#7F56D9] border border-[#7F56D9] rounded-lg py-1.5 px-4 font-medium text-sm w-fit min-w-[104px] flex items-center justify-center disabled:bg-[#EDEDF4] disabled:text-[#C8CCCF] disabled:border-[#EDEDF4] '
                            >{loading ? <LoadingSpinner /> : "Save changes"}</button>
                        </div>

                        <div className='rounded-2xl p-4 sm:p-6 md:p-8 border border-gray/200 custom-select'>

                            <p className='text-gray/700 text-lg sm:text-xl md:text-2xl sm:mb-4 md:mb-6 font-bold'>Password</p>

                            <div>


                                <div className='max-w-[460px] w-full'>


                                    <div className='mb-4'>


                                        <CustomLabel
                                            name='Current password'
                                            value_name='current_password'
                                        />


                                        <Field
                                            loading={false}
                                            name="current_password"
                                            component={CustomPasswordInput}
                                            placeholder={"Enter your password"}


                                        />
                                        <FormError value_name='current_password' />


                                    </div>

                                    <div className='mb-4'>
                                        <div className='mb-2'>

                                            <CustomLabel
                                                name='New password'
                                                value_name='new_password'
                                            />


                                            <Field
                                                loading={false}
                                                name="new_password"
                                                component={CustomPasswordInput}
                                                placeholder={"Enter your password"}


                                            />
                                            <FormError value_name='new_password' />
                                        </div>

                                        <PasswordValidation password={values.new_password} />
                                    </div>

                                    <div className='mb-4'>
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
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AccountSettings

const validation = Yup.object({

    current_password: Yup.string()
        .min(8, "Password must be minimum of 8 characters")
        .required("Required")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.+-])[A-Za-z\d@$!%*?&.+-]{8,}$/, {
            message:
                "Incorrect password format",
        }),
    new_password: Yup.string()
        .min(8, "Password must be minimum of 8 characters")
        .required("Required")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.+-])[A-Za-z\d@$!%*?&.+-]{8,}$/, {
            message:
                "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 numeric character, and 1 special character",
        }),

    confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password'), undefined], 'Password do not match') // Check if it matches the 'password' field
        .required('You need to confirm your password'),
});