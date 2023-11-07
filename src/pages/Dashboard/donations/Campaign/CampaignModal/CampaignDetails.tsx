import React from 'react'
import Button from '../../../../../components/Buttons/Button'
import BorderButton from '../../../../../components/Buttons/BorderButton'
import { useSelector } from 'react-redux';
import CampaignTimer, { updateRemainingTime } from '../components/CampaignTimer';
import ProgressDoughnut from '../components/ProgressDoughnut';
import profile from '../../../../../assets/dashboard/campaign/profile.svg'
import phone from '../../../../../assets/dashboard/campaign/phone.svg'

type Props = {
    handleClose: () => void;
    handleDonate: () => void
}
const CampaignDetails = (props: Props) => {

    // <---------- useSelectors --------->
    const campaignDetails = useSelector(
        (state: { campaign: CampaignSliceProps }) => state.campaign.currentCampaignData
    );

    return (
        <div>
            <Details />

            <div className='flex justify-end mt-4 sm:mt-6 gap-2 items-center'>
                <BorderButton
                    text={"Close"}
                    type='button'
                    disabled={false}
                    size='fit'
                    action={props.handleClose}
                />
               {updateRemainingTime(campaignDetails?.deadline).status !== 'Ended' && <Button
                    text={'Donate'}
                    type='button'
                    disabled={false}
                    size='fit'
                    action={props.handleDonate}
                />}
            </div>
        </div>
    )
}

export default CampaignDetails


const Details = () => {

    // <---------- Utility class --------->

    // <---------- useSelectors --------->
    const campaignDetails = useSelector(
        (state: { campaign: CampaignSliceProps }) => state.campaign.currentCampaignData
    );
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->

    const contactData = [
        {
            icon: profile,
            title: "Campaign creator",
            data: campaignDetails?.contact_details.campaign_creator,
        },
        {
            icon: profile,
            title: "Campaign beneficiary",
            data: campaignDetails?.contact_details.campaign_beneficiary,
        },
        {
            icon: phone,
            title: "Beneficiary contact",
            data: campaignDetails?.contact_details.contact,
        },
    ]
    // <---------- Functions ---------->
    return (
        <div className='max-h-[calc(100vh-134px)] md:h-[600px] 2xl:h-full overflow-scroll'>
            <div className='relative mb-2'>
                <img src={campaignDetails?.img} className='w-full max- h-[215px] rounded object-cover' alt='' />

                <div className='right-[8px] top-[8px] absolute'>
                    <CampaignTimer deadlineISOString={campaignDetails?.deadline} />
                </div>
            </div>

            <div>
                <div className='mb-4 sm:mb-5'>
                    <h3 className='mb-4 sm:mb-5 font-medium text-gray/800 sm:text-lg md:text-xl'>{campaignDetails?.title}</h3>
                    <p className='text-sm md:text-base text-gray/800   '>{campaignDetails?.description}</p>
                </div>

                <div className='mb-4 sm:mb-5'>
                    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-start md:items-center'>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-start'>
                            <div>
                                <p className='text-sm text-gray/500 pb-0.5'>Target 🎯</p>
                                <h6 className='text-sm font-medium text-gray/700'>{campaignDetails?.target_amount}</h6>
                            </div>
                            <div>
                                <p className='text-sm text-gray/500 pb-0.5'>Raised 🔥</p>
                                <h6 className='text-sm font-medium text-gray/700'>{campaignDetails?.amount_raised}</h6>
                            </div>
                        </div>



                        {campaignDetails && <ProgressDoughnut data={campaignDetails} />}

                    </div>
                </div>

                <div className='flex justify-between flex-wrap gap-x-2'>
                    {
                        contactData.map((item, index) => (
                            <div key={index} className='grid gap-2 grid-cols-[48px_auto]'>
                                <div className='w-12 h-12 rounded-full bg-gray/100 flex items-center justify-center'>
                                    <img src={item.icon} alt='' className='w-6 h-6' />
                                </div>

                                <div className='flex items-start flex-col gap-0.5'>
                                    <p className='text-sm text-gray/500'>{item.title}</p>
                                    <p className='font-medium text-gray/600'>{item.data}</p>

                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}