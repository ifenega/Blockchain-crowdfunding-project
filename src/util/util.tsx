import sampleImg from '../assets/dashboard/campaign/sampleImg3.png'



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

export const copyTextToClipboard = async (props: any) => {
    if ("clipboard" in navigator) {
        return await navigator.clipboard.writeText(props);
    } else {
        return document.execCommand("copy", true, props);
    }
};


export const categories: Category[] = ["General", "Accident", "Arts & culture", "Heritage", "Wildlife", "Childcare", "Democracy", "Education", "Environment", "Health", "Justice", "Mental Health", "Other"]

export const campaign_data: CampaignItemData[] = [
    {
        img: sampleImg,
        title: "Mohbal Imole",
        short_description: "This is campaign is to raise funds for the nigeria artiste popularly know by his stage name, Mohbad killll",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas velit vehicula urna luctus, quis bibendum velit porttitor. Nam in urna vitae nunc laoreet viverra. Quisque ex nisl, feugiat pharetra vehicula sit amet, venenatis id ex. Vivamus interdum condimentum tellus, sit amet gravida quam imperdiet quis. In id felis tellus. Nulla id consectetur risus. In hac habitasse platea dictumst. Integer leo urna, convallis vel pharetra sit amet, faucibus vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo purus.",
        target_amount: 10000,
        amount_raised: 2004,
        currency: "USDT",
        created_at: "",
        deadline: "2023-11-08T15:30:45.123Z",
        wallet_address: "",
        contact_details: {
            campaign_creator: "Olorunnegan Ifeoluwa",
            campaign_beneficiary: "Ilerioluwa Mohbad",
            contact: "+2349080916718"
        },
        category: ['Accident', "General"]
    },
    {
        img: sampleImg,
        title: 'James Will',
        short_description: 'This campaign is to raise funds for the Nigeria artist popularly known by his stage name, Mohbad.',
        description: 'Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo', // Your long description here
        target_amount: 10000,
        amount_raised: 20000,
        currency: 'USDT',
        created_at: new Date().toISOString(),
        deadline: '2023-11-06T15:30:45.123Z',
        wallet_address: 'your_wallet_address',
        contact_details: {
            campaign_creator: 'Temi Frank',
            campaign_beneficiary: 'Punch Tell',
            contact: '+2349080916718',
        },
        category: ['Democracy', "General"]
    },
    {
        img: sampleImg,
        title: 'Johnson Will',
        short_description: 'This is a campaign to raise funds for the Nigeria artist popularly known by his stage name, James Will.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo',
        target_amount: 8000,
        amount_raised: 3500,
        currency: 'BTC',
        created_at: '',
        deadline: '2023-11-10T12:45:30.567Z',
        wallet_address: '',
        contact_details: {
            campaign_creator: 'Temi Frank',
            campaign_beneficiary: 'Punch Tell',
            contact: '+2349080916718',
        },
        category: ['Childcare', "General"]
    },
    {
        img: sampleImg,
        title: 'Campaign 4',
        short_description: 'Short description for Campaign 4',
        description: 'Long description for Campaign 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo',
        target_amount: 15000,
        amount_raised: 6000,
        currency: 'USDT',
        created_at: '',
        deadline: '2023-11-15T11:20:15.321Z',
        wallet_address: '',
        contact_details: {
            campaign_creator: 'Creator 4',
            campaign_beneficiary: 'Beneficiary 4',
            contact: '+1234567890',
        },
        category: ['Justice', "General"]
    },
    {
        img: sampleImg,
        title: "Mohbal Imole",
        short_description: "This is campaign is to raise funds for the nigeria artiste popularly know by his stage name, Mohbad killll",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas velit vehicula urna luctus, quis bibendum velit porttitor. Nam in urna vitae nunc laoreet viverra. Quisque ex nisl, feugiat pharetra vehicula sit amet, venenatis id ex. Vivamus interdum condimentum tellus, sit amet gravida quam imperdiet quis. In id felis tellus. Nulla id consectetur risus. In hac habitasse platea dictumst. Integer leo urna, convallis vel pharetra sit amet, faucibus vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo purus.",
        target_amount: 10000,
        amount_raised: 2004,
        currency: "USDT",
        created_at: "",
        deadline: "2023-11-08T15:30:45.123Z",
        wallet_address: "",
        contact_details: {
            campaign_creator: "Olorunnegan Ifeoluwa",
            campaign_beneficiary: "Ilerioluwa Mohbad",
            contact: "+2349080916718"
        },
        category: ['Accident', "General"]
    },
    {
        img: sampleImg,
        title: 'James Will',
        short_description: 'This campaign is to raise funds for the Nigeria artist popularly known by his stage name, Mohbad.',
        description: 'Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo', // Your long description here
        target_amount: 10000,
        amount_raised: 20000,
        currency: 'USDT',
        created_at: new Date().toISOString(),
        deadline: '2023-11-06T15:30:45.123Z',
        wallet_address: 'your_wallet_address',
        contact_details: {
            campaign_creator: 'Temi Frank',
            campaign_beneficiary: 'Punch Tell',
            contact: '+2349080916718',
        },
        category: ['Democracy', "General"]
    },
    {
        img: sampleImg,
        title: 'James Will',
        short_description: 'This is a campaign to raise funds for the Nigeria artist popularly known by his stage name, James Will.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo',
        target_amount: 8000,
        amount_raised: 3500,
        currency: 'BTC',
        created_at: '',
        deadline: '2023-11-10T12:45:30.567Z',
        wallet_address: '',
        contact_details: {
            campaign_creator: 'Temi Frank',
            campaign_beneficiary: 'Punch Tell',
            contact: '+2349080916718',
        },
        category: ['Childcare', "General"]
    },
    {
        img: sampleImg,
        title: 'Campaign 4',
        short_description: 'Short description for Campaign 4',
        description: 'Long description for Campaign 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo Lorem ipsum dolor sit amet, vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo',
        target_amount: 15000,
        amount_raised: 6000,
        currency: 'USDT',
        created_at: '',
        deadline: '2023-11-15T11:20:15.321Z',
        wallet_address: '',
        contact_details: {
            campaign_creator: 'Creator 4',
            campaign_beneficiary: 'Beneficiary 4',
            contact: '+1234567890',
        },
        category: ['Justice', "General"]
    },
]

export const getInitials = (inputString: string) => {
    // Split the input string into words
    const words = inputString.split(' ');

    // Get the first letter of the first two words and convert them to uppercase
    const initials = words[0][0].toUpperCase() + words[1][0].toUpperCase();
    return initials;

}