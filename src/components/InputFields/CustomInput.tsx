import React, { useState } from 'react';

type CustomInputProps = {
    field: {
        name: string;
        value: any;
        type: 'text' | 'number' | 'email' | 'textarea';
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    };
    form: {
        errors: Record<string, string>;
        touched: Record<string, boolean>;
    };
    // Add any other props that your component accepts here
};

const CustomInput: React.FC<CustomInputProps> = ({ field, form, ...props }) => {
    const { name, value, type } = field;
    const { errors, touched } = form;



    return (
        <div className='w-full'>
            <input
                {...props}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={`border ${touched[name] && errors[name] ?
                    "border-[#CF4E4E]" : "border-[#E0E6E9]"
                    } outline-none focus:border-[#AFD1E3] rounded-lg px-4 py-2.5 bg-white disabled:bg-[#E5EAEC] w-full`}
            />

        </div>
    );
};

export default CustomInput;
