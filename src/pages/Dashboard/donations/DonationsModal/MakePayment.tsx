import React, { useState } from 'react'
import BorderButton from '../../../../components/Buttons/BorderButton'
import Button from '../../../../components/Buttons/Button'
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import CustomSelect from '../../../../components/InputFields/CustomSelect';
import FormError from '../../../../components/InputFields/FormError';
import CustomAmount from '../../../../components/InputFields/CustomAmount';
import QrComponent from '../../../../components/UI/QrComponent';
import { copyTextToClipboard } from '../../../../util/util';


type Props = {
    back: () => void
    handleClose: () => void
}

const MakePayment = (props: Props) => {

    const [copy, setCopy] = useState(false)

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
                <p className='text-gray/800 '>Send donation</p>
            </div>

            <div>
                <div className='mb-4'>
                    <p className='mb-2 text-sm text-gray/500 text-center '>We greatly appreciate all donations, be rest assured that it will be put to good use.</p>
                    <p className='mb-2 text-sm text-gray/500 text-center '>Payment expires in  <span className='text-[#CF4E4E] font-medium'>00:29:46</span></p>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col gap-4'>
                <div className='w-fit h-fit p-4'>
                    <QrComponent value={'34rwsfsdf'} />
                </div>

                <button className={`border ${copy ? " border-green-500 bg-green-200 " : " border-[#E0E6E9] "}  rounded-lg px-4 py-2.5 bg-white flex gap-3 justify-between w-full`}>
                    <p className={`${copy ? "text-green-600 " : " text-gray/800 " } font-medium  max-w-[300px] truncate`}>0x03fc4ca83e35221bec.....908v</p>
                    <button
                        type='button'
                        className=''
                        onClick={() => {
                            copyTextToClipboard('test-feature')
                            setCopy(true)
                            setTimeout(() => {
                                setCopy(false)
                            }, 2000);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z" stroke={copy ? "rgb(34 197 94 / 1)" : "#1D2939"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                </button>

            </div>


        </div>
    )
}

export default MakePayment