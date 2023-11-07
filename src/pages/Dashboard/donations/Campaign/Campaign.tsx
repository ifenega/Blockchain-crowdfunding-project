import React from 'react'
import CampaignCard from './components/CampaignCard'


type Props = {
    campaignData: CampaignItemData[]
}
const Campaign = (props:Props) => {

    
    return (
        <div className='pt-6 flex flex-wrap gap-3'>
            {
                props.campaignData.map((item, index) => (
                    <CampaignCard key={index} data={item} />
                ))
            }
        </div>
    )
}

export default Campaign