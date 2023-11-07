export { }

declare global {

    type ToastType = 'error' | 'success' | 'info';

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
    }

    interface CampaignSliceProps {
        currentCampaignData: CampaignItemData | null;
        showModal: boolean;
        modal:{
            size: "full" | "mid";
            title:string
        };
    }

}