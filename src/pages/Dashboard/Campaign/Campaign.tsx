import React from 'react'
import CampaignCard from './components/CampaignCard'


type Props = {
    campaignData: CampaignItemData[]
}
const Campaign = (props: Props) => {


    return (
        <div className='pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:flex 2xl:flex-wrap gap-3'>
            {
                props.campaignData.map((item, index) => (
                    <CampaignCard key={index} data={item} />
                ))
            }
        </div>
    )
}

export default Campaign