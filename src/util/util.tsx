



export const customDropDownStyles = {
    control: (provided: any, state: {
        menuIsOpen: any;
        hasValue: any;
        selectProps: any; isFocused: any, isDisabled: any
    }) => ({
        ...provided,
        boxShadow: 'none !important',
        '*': {
            boxShadow: 'none !important',
        },
        borderRadius: "8px",
        padding: '10px 16px',
        background: state.isDisabled ? '#F2F4F7' : "transparent",
        border: state.isFocused ? '1px solid #7F56D9' : '1px solid #D0D5DD',
        color: "#292D32",
        outline: state.isFocused ? "red" : "red",
        '&:focus': {
            border: state.isFocused ? '1px solid #7F56D9' : (state.menuIsOpen && state.hasValue && state.selectProps.error ? "" : '1px solid #D0D5DD'),
        },
    }),
    menu: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: 'white', // set the background color here
        borderRadius: "12px",
        padding: "8px"
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        color: "#292D32",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        color: "#292D32",
        paddingRight: '10px',
        '& .separator': {
            display: 'none',
        },
    }),
    option: (provided: any, state: { isSelected: any; }) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#F9F9FA' : '#FFFFFF',
        color: '#121212',
        '&:hover': {
            backgroundColor: 'rgb(229 231 235 / 1)',
        },
    }),
    separator: (provided: any, state: any) => ({
        ...provided,
        display: 'none',
    }),
    clearIndicator: (provided: any, state: any) => ({
        ...provided,
        display: 'none',
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#1D2939',
    }),
}


export const CustomToast = (type: ToastType, message: string, title?: string) => {
    const event = new CustomEvent('show-toast', {
        detail: {
            message: message,
            type: type,
            title: title,
        },
    });

    window.dispatchEvent(event);
};

export const profileImg = (name: string) => {
    const name_split = name.split(' ')
    return `https://eu.ui-avatars.com/api/?background=random&color=fff&name=${name_split[0]}+${name_split[1]}`

}