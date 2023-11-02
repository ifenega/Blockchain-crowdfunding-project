import React from 'react'
import CampaignCard from './CampaignCard'
import sampleImg from '../../../../assets/dashboard/campaign/sampleImg.png'
const Campaign = () => {

    const campaign_data = [
        {
            img: sampleImg,
            title: "Mohbal Imole",
            short_description: "This is campaign is to raise funds for the nigeria artiste popularly know by his stage name, Mohbad killll",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas velit vehicula urna luctus, quis bibendum velit porttitor. Nam in urna vitae nunc laoreet viverra. Quisque ex nisl, feugiat pharetra vehicula sit amet, venenatis id ex. Vivamus interdum condimentum tellus, sit amet gravida quam imperdiet quis. In id felis tellus. Nulla id consectetur risus. In hac habitasse platea dictumst. Integer leo urna, convallis vel pharetra sit amet, faucibus vitae velit. Vivamus eget massa lobortis, accumsan leo in, suscipit nisl.Aenean vitae dui quis est gravida tristique.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus non urna vel est sagittis scelerisque.Mauris blandit risus in lacus fringilla ultricies.Phasellus quis ligula gravida, venenatis lacus ut, vestibulum ligula.Nam tincidunt ligula eget mauris iaculis dignissim.Integer eu eros lectus.Aenean finibus orci ut metus viverra, at consequat magna faucibus.Vivamus condimentum lectus sed enim tempus, eget scelerisque dui imperdiet.Maecenas imperdiet massa eu nunc cursus convallis ut quis quam.Nam eget commodo purus.",
            target_amount: 10000,
            amount_raised: 2004,
            currency: "USDT",
            created_at:"",
            deadline:"",
            wallet_address:"",
            contact_details: {
                campaign_creator: "Olorunnegan Ifeoluwa",
                campaign_beneficiary: "Ilerioluwa Mohbad",
                contact: "+2349080916718"
            }
        },
    ]
    return (
        <div className='pt-6'>
           {
            campaign_data.map((item, index)=> (
                <CampaignCard key={index} data={item} />
            ))
           }
        </div>
    )
}

export default Campaign