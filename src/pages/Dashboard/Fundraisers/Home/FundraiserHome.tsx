import React, { useState } from 'react'
import Layout from '../../../../components/Functional/Layout'
import Header from '../../../../components/UI/Header'
import Campaign from '../../Campaign/Campaign'
import Button from '../../../../components/Buttons/Button'
import Category from './components/Category'
import { CustomToast, campaign_data } from '../../../../util/util'
import { AppDispatch } from '../../../../store/store'
import { useDispatch } from 'react-redux'
import { campaignActions } from '../../../../store/slices/campaignSlice'

const FundraiserHome = () => {

    // <---------- Utility class --------->
    const dispatch: AppDispatch = useDispatch()

    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->


    const [searchValue, setSearchValue] = useState("")
    const [currentCategory, setCurrentCategory] = useState("Active")

    // <---------- Functions ---------->
    const filteredCampaigns = campaign_data.filter((campaign) => {
        // Check if the campaign's title or description contains the searchValue (case-insensitive)
        const isSearchMatch = campaign.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            campaign.description.toLowerCase().includes(searchValue.toLowerCase());

        // Check if the campaign is active (deadline is in the future) or inactive (deadline is in the past)
        const currentDate = new Date();
        const campaignDeadline = new Date(campaign.deadline);

        // If "Inactive" category is selected, show campaigns with past deadlines
        const isInactiveCategory = currentCategory === "Ended";
        const isCampaignActive = isInactiveCategory ? currentDate > campaignDeadline : currentDate <= campaignDeadline;

        return isCampaignActive && isSearchMatch;
    });




    const selectCategory = (category: string) => {
        setCurrentCategory(category)
    }

    return (
        <Layout title='Fundraisers'>
            <Header title='Fundraisers' />

            <div className='flex items-center justify-between'>
                <input
                    type='text'
                    className={`border border-[#E0E6E9] outline-none focus:border-primary/600 rounded-lg px-4 py-2.5 bg-white disabled:bg-[#E5EAEC] w-[320px]`}
                    placeholder='Search for a fundraiser by name'
                    value={searchValue}
                    onChange={(e: any) => {
                        setSearchValue(e.target.value)
                    }}
                />

                <Button
                    size='fit'
                    text={"New campaign"}
                    type='button'
                    action={() => {
                        dispatch(campaignActions.setShowModal({
                            title: "Create a campaign",
                            size: "mid",
                            modal_type: "create_campaign"
                          }))
                    }}
                />
            </div>

            <div className='mt-6 '>
                <Category selectCategory={selectCategory} currentCategory={currentCategory} />
            </div>

            <Campaign campaignData={filteredCampaigns} />

        </Layout>
    )
}

export default FundraiserHome