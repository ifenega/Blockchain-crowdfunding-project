import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import LoadingSpinner from '../../../../../components/UI/LoadingSpinner';
import FormError from '../../../../../components/InputFields/FormError';
import CustomInput from '../../../../../components/InputFields/CustomInput';
import CustomLabel from '../../../../../components/InputFields/CustomLabel';
import CustomSelect from '../../../../../components/InputFields/CustomSelect';
import COUNTRYDATA from '../../../../../assets/dashboard/general/country-list.json'
import { getInitials } from '../../../../../util/util';


const Profile = () => {

    // <---------- Utility class --------->
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const [loading, setLoading] = useState<boolean>(false)

    const optionCountries: any = [];

    COUNTRYDATA.map((item) => {
        optionCountries.push({ label: item.name, value: item.name });
    });

    const initialData = {
        first_name: "",
        last_name: "",
        country: "",
        channel: "",
        wallet_address: "",

    }

    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        console.log(values)
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
                                className='text-white bg-[#7F56D9] border border-[#7F56D9] rounded-lg py-1.5 px-4 font-medium text-sm w-fit min-w-[104px] flex items-center justify-center disabled:bg-[#EDEDF4] disabled:text-[#C8CCCF] '
                            >{loading ? <LoadingSpinner /> : "Save changes"}</button>
                        </div>

                        <div className='rounded-2xl p-4 sm:p-6 md:p-8 border border-gray/200 custom-select'>

                            <p className='text-gray/700 text-lg sm:text-xl md:text-2xl sm:mb-4 md:mb-6 font-bold'>Profile details</p>

                            <div>
                                <div className='mb-4 sm:mb-6'>
                                    <div className={`rounded-full p-6 sm:p-[33px] flex items-center justify-center custom-gradient  border border-white w-fit h-fit  `}>
                                        <p className='text-white text-2xl sm:text-5xl uppercase'>{getInitials("Olorunnegan Ifeoluwa")}</p>
                                    </div>
                                </div>


                                <div className='max-w-[460px] w-full'>

                                    <div className='flex flex-col sm:flex-row gap-3 items-center mb-4'>
                                        <div className='w-full'>
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

                                        <div className='w-full'>
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


                                    <div className='w-full mb-4'>
                                        <CustomLabel name='Country' value_name='Country' />
                                        <Field
                                            name="Country"
                                            component={CustomSelect}
                                            options={optionCountries}
                                            placeholder="Select Country"
                                            onChange={(item: any) => {
                                                setFieldValue("Country", item.value);
                                            }}
                                        />
                                        <FormError value_name='currency' />
                                    </div>

                                    <div className='w-full mb-4'>
                                        <CustomLabel name='Wallet Channel' value_name='channel' />
                                        <Field
                                            name="channel"
                                            component={CustomSelect}
                                            options={optionCountries}
                                            placeholder="Select"
                                            onChange={(item: any) => {
                                                setFieldValue("channel", item.value);
                                            }}
                                        />
                                        <FormError value_name='channel' />
                                    </div>

                                    <div className='w-full'>
                                        <CustomLabel
                                            name='Wallet address'
                                            value_name='wallet_address'
                                        />
                                        <Field
                                            loading={false}
                                            type='text'
                                            name="wallet_address"
                                            component={CustomInput}
                                            placeholder={"d2e3dadsd3-23e32ffdwd-sds232ewd-fm3fffafds"}


                                        />
                                        <FormError value_name='wallet_address' />
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

export default Profile

const validation = Yup.object({


});