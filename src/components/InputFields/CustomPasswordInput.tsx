import React, { useState } from 'react';
import eye from '../../assets/components/CustomInputs/eye.svg'
import eyeOff from '../../assets/components/CustomInputs/eye-off.svg'

type CustomPasswordInputProps = {
    field: {
        name: string;
        value: any;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    };
    form: {
        errors: Record<string, string>;
        touched: Record<string, boolean>;
    };
    // Add any other props that your component accepts here
};

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({ field, form, ...props }) => {
    const { name, value } = field;
    const { errors, touched } = form;

    const [show, setShow] = useState(false)

    return (
        <div className='w-full relative'>
            <input
             {...props}
                type={show ? "text" : "password"}
                id={name}
                name={name}
                value={value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={`border ${touched[name] && errors[name] ?
                    "border-[#CF4E4E]" : "border-[#E0E6E9]"
                    } outline-none focus:border-[#AFD1E3] rounded-lg px-4 py-2.5 bg-white disabled:bg-[#E5EAEC] w-full pr-[40px] `}
               
            />

            <button
                className='absolute top-[15px] right-[16px]'
                onClick={() => setShow(prev => !prev)}
            >
                <img src={show ? eye : eyeOff} alt='toggle-show' />
            </button>
        </div>
    );
};

export default CustomPasswordInput;
