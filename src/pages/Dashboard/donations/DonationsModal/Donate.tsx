import React from 'react'
import BorderButton from '../../../../components/Buttons/BorderButton'
import Button from '../../../../components/Buttons/Button'
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import CustomSelect from '../../../../components/InputFields/CustomSelect';
import FormError from '../../../../components/InputFields/FormError';
import CustomAmount from '../../../../components/InputFields/CustomAmount';


type Props = {
    back: () => void
    handleClose: () => void
    handlePayment: () => void
}

const Donate = (props: Props) => {

    return (
        <div>
            <div className='flex items-center gap-2 pb-3 border-b border-gray/200 mb-4 sm:mb-6'>
                <button
                    type='button'
                    onClick={props.back}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 12L4 12M4 12L10 18M4 12L10 6" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <p className='text-gray/800 '>How much do you want to donate?</p>
            </div>

            <DonateDetails handleClose={props.handleClose} handlePayment={props.handlePayment} />


        </div>
    )
}

export default Donate


interface DetailsProps {
    handleClose: () => void
    handlePayment: () => void
}

const DonateDetails = (props: DetailsProps) => {

    // <---------- Utility class --------->
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const initialData = {
        currency: "",
        amount: 0,
    }

    const currencyOption: any = [
        { label: "USDT", value: "USDT" },
        { label: "BUSD", value: "BUSD" },
        { label: "USDC", value: "USDC" },
    ];
    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        console.log(values)
    }

    return (
        <div>
            <p className='mb-4 text-sm text-gray/500 '>We greatly appreciate all donations, be rest assured that it will be put to good use.</p>

            <Formik
                initialValues={initialData}
                onSubmit={onSubmit}
                validationSchema={validation}
            >
                {({ errors, values, setFieldValue, setTouched, isValid, dirty, touched }) => (
                    <Form>
                        <div className='flex gap-4 flex-col custom-select'>
                            <div className='w-full'>
                                <CustomLabel name='Currency' value_name='currency' />
                                <Field
                                    name="currency"
                                    component={CustomSelect}
                                    options={currencyOption}
                                    placeholder="Select"
                                    onChange={(item: any) => {
                                        setFieldValue("rule", item.value);
                                    }}
                                />
                                <FormError value_name='currency' />
                            </div>

                            <div className='w-full'>
                                <CustomLabel name='Donation amount' value_name='amount' />
                                <Field
                                    name="amount"
                                    component={CustomAmount}
                                    setTouched={setTouched}
                                    setFieldValue={setFieldValue}
                                    placeholder="0"
                                    value={values.amount}
                                />
                                <FormError value_name='currency' />
                            </div>



                            {/* //amount */}

                            <div className='flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 20L7 4M7 4L11 8M7 4L3 8M17 4V20M17 20L21 16M17 20L13 16" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>


                            <div className='rounded-lg bg-gray/100 p-4 items-center justify-center flex flex-col gap-0.5'>
                                <p className='text-gray/500 font-medium text-sm'>{values.currency === "" ? '...........' : values.currency}</p>
                                <p className='font-semibold text-gray/800 text-lg'>{values.amount === 0 ? '0.000' : values.amount}</p>
                            </div>



                        </div>

                        <div className='flex justify-end mt-4 sm:mt-6 gap-2 items-center'>
                            <BorderButton
                                text={"Close"}
                                type='button'
                                disabled={false}
                                size='fit'
                                action={props.handleClose}
                            />
                            <Button
                                text={'Confirm'}
                                type='submit'
                                disabled={false}
                                size='fit'
                                action={() => {
                                    props.handlePayment()
                                }}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const validation = Yup.object({


});