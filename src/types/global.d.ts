export { }

declare global {

    type ToastType = 'error' | 'success' | 'info';
    type Category =
        | 'General'
        | 'Accident'
        | 'Arts & culture'
        | 'Heritage'
        | 'Wildlife'
        | 'Childcare'
        | 'Democracy'
        | 'Education'
        | 'Environment'
        | 'Health'
        | 'Justice'
        | 'Mental Health'
        | 'Other';
    interface CampaignItemData {
        img: any;
        title: string;
        short_description: string;
        description: string;
        target_amount: number;
        amount_raised: number;
        currency: string;
        created_at: string;
        deadline: string;
        wallet_address: string;
        contact_details: {
            campaign_creator: string;
            campaign_beneficiary: string;
            contact: string;
        }
        category: Category[]
    }


    interface CampaignSliceProps {
        currentCampaignData: CampaignItemData | null;
        showModal: boolean;
        modal: {
            size: "full" | "mid";
            title: string
            modal_type: "campaign" | "account_settings" | "create_campaign" | ""
        };
        mobileMenu: boolean,

    }

}