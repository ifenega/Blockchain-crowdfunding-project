import React from 'react'
import CampaignSelector from '../../pages/Dashboard/Campaign/CampaignModal/CampaignSelector'
import { useSelector } from 'react-redux';
import AccountSettingsModal from '../../pages/Dashboard/Settings/Home/component/AccountSettings/AccountSettingsModal';
import FundraiserCampign from '../../pages/Dashboard/Fundraisers/FundraiserModal/FundraiserSelector';

const ModalSelector = () => {

    // <---------- useSelectors --------->
    const campaignDetails = useSelector(
        (state: { campaign: CampaignSliceProps }) => state.campaign
    );

    return (
        <div>

            {campaignDetails.modal.modal_type === "campaign" && <CampaignSelector />}
            {campaignDetails.modal.modal_type === "account_settings" && <AccountSettingsModal />}
            {campaignDetails.modal.modal_type === "create_campaign" && <FundraiserCampign />}
        </div>
    )
}

export default ModalSelector