import React, { useState } from 'react';
import { Amount } from 'react-amount';
import { FormikValues, FormikHelpers } from 'formik';

type Props = {
    value: any;
    disabled: boolean; // Add the disabled prop
    setTouched: FormikHelpers<FormikValues>['setTouched'];
    setFieldValue: FormikHelpers<FormikValues>['setFieldValue'];
    name?: string
};

const CustomAmount: React.FC<Props> = ({ value, setTouched, setFieldValue, disabled, name }) => {
    const [amountFocus, setAmountFocus] = useState(false);

    return (
        <div
            className={`px-4 py-2.5 relative border rounded-lg ${amountFocus ? 'focus:border-[#AFD1E3]' : 'border-[#E0E6E9]'
                } ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
            tabIndex={1}
            onFocus={() => {
                setAmountFocus(true);
            }}
            onBlur={() => {
                setAmountFocus(false);
            }}
        >
            <div className="flex gap-0.5 items-center amount-clear group">

                <Amount
                    name={name ?? "amount"}
                    value={value}
                    className="text-[#13201C]  text-sm relative z-0 input-field outline-none focus:outline-none peer flex group items-center border-none w-full peer"
                    onChange={(newValue) => {

                        if (name) {
                            setTouched({ name: true });
                            const { formatted, float } = newValue;
                            setFieldValue(name, float);
                        } else {
                            setTouched({ amount: true });
                            const { formatted, float } = newValue;
                            setFieldValue('amount', float);
                        }

                    }}
                    decimalSeparator="."
                    thousandSeparator=","
                />
            </div>
        </div>
    );
};

export default CustomAmount;