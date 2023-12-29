import React from 'react'
import BorderButton from '../../../../components/Buttons/BorderButton'
import Button from '../../../../components/Buttons/Button'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import CustomSelect from '../../../../components/InputFields/CustomSelect';
import FormError from '../../../../components/InputFields/FormError';
import CustomAmount from '../../../../components/InputFields/CustomAmount';
import CustomInput from '../../../../components/InputFields/CustomInput';
import CustomCalender from '../../../../components/InputFields/CustomCalender';


type Props = {

    handleClose: () => void

}

const CreateCampaign = (props: Props) => {

    const initialData = {
        campaign_name: "",
        campaign_description: "",
        campaign_beneficiary: "",
        beneficiary_contact: "",
        campaign_category: "",
        campaign_end_date: "",
        campaign_image: null,
        target_raise: 0,
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
                                <CustomLabel name='Campaign name' value_name='campaign_name' />
                                <Field
                                    loading={false}
                                    type='text'
                                    name="campaign_name"
                                    component={CustomInput}
                                    placeholder={"Enter a campaign name"}
                                    onChange={(option: any) => {
                                        setFieldValue("campaign_name", values.campaign_name);
                                    }}

                                />

                                <FormError value_name='campaign_name' />
                            </div>

                            <div className='w-full'>
                                <CustomLabel name='Campaign description' value_name='campaign_description' />
                                <Field
                                    loading={false}
                                    type='textarea'
                                    as='textarea'
                                    row="2"
                                    name="campaign_description"
                                    className={`border ${touched.campaign_description && errors.campaign_description ?
                                        "border-[#CF4E4E]" : "border-[#E0E6E9]"
                                        } outline-none focus:border-[#AFD1E3] rounded-lg px-4 py-2.5 bg-white disabled:bg-[#E5EAEC] w-full`}
                                    placeholder={"Enter details about your campign"}
                                    onChange={(option: any) => {
                                        setFieldValue("campaign_description", values.campaign_description);
                                    }}

                                />

                                <FormError value_name='campaign_description' />
                            </div>

                            <div className='w-full'>
                                <CustomLabel name='Target raise' value_name='target_raise' />
                                <Field
                                    name="target_raise"
                                    component={CustomAmount}
                                    setTouched={setTouched}
                                    setFieldValue={setFieldValue}
                                    placeholder="0"
                                    value={values.target_raise}
                                />
                                <FormError value_name='target_raise' />
                            </div>

                            <div className='w-full'>
                                <CustomLabel name='Campaign beneficiary' value_name='campaign_beneficiary' />
                                <Field
                                    loading={false}
                                    type='text'
                                    name="campaign_beneficiary"
                                    component={CustomInput}
                                    placeholder={""}
                                    onChange={(option: any) => {
                                        setFieldValue("campaign_beneficiary", values.campaign_beneficiary);
                                    }}

                                />

                                <FormError value_name='campaign_beneficiary' />
                            </div>

                            <div className='flex gap-4 items-center'>
                                <div className='w-full'>
                                    <CustomLabel name='Campaign category' value_name='campaign_category' />
                                    <Field
                                        name="campaign_category"
                                        component={CustomSelect}
                                        options={currencyOption}
                                        placeholder="Select"
                                        onChange={(item: any) => {
                                            setFieldValue("campaign_category", item.value);
                                        }}
                                    />
                                    <FormError value_name='campaign_category' />
                                </div>

                                {/* <div className='w-full'>
                                    <CustomLabel name='Campaign end date' value_name='campaign_end_date' />
                                    <Field
                                        loading={false}
                                        type='text'
                                        name="campaign_end_date"
                                        component={CustomCalender}
                                        value={values.campaign_end_date === null ? "" : values.campaign_end_date}
                                        onChange={(date: any) => {
                                            if (date.date !== null) {
                                                setFieldValue('campaign_end_date', date.date);
                                                setTouched({ campaign_end_date: true });
                                            }

                                        }}

                                    />

                                    <FormError value_name='campaign_end_date' />
                                </div> */}
                            </div>







                            {/* <Field
                                    name="currency"
                                    component={CustomSelect}
                                    options={currencyOption}
                                    placeholder="Select"
                                    onChange={(item: any) => {
                                        setFieldValue("rule", item.value);
                                    }}
                                /> */}


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

                                }}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default CreateCampaign






const validation = Yup.object({


});