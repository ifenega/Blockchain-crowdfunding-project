import React, { useState } from 'react'
import Layout from '../../../../components/Functional/Layout'
import Header from '../../../../components/UI/Header'
import Category from './components/Category'
import Campaign from '../Campaign/Campaign'
import sampleImg from '../../../../assets/dashboard/campaign/sampleImg3.png'

const Home = () => {

  // <---------- Utility class --------->
  // <---------- useSelectors --------->
  // <---------- HOOKS ------------>
  // <---------- useStates + variables ---------->
  const campaign_data = [
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
      }
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
    },
  ]

  const [searchValue, setSearchValue] = useState("")
  const [currentCategory, setCurrentCategory] = useState("General")
  // <---------- Functions ---------->

  const filteredCampaigns = campaign_data.filter((campaign) => {

    // Check if the campaign's title or description contains the searchValue (case-insensitive)
    const isSearchMatch = campaign.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchValue.toLowerCase());

    return isSearchMatch;
  });

  const selectCategory = (category: string) => {
    setCurrentCategory(category)
  }

  return (
    <Layout title='Donations'>
      <Header title='Donations' />

      <input
        type='text'
        className={`border border-[#E0E6E9] outline-none focus:border-primary/600 rounded-lg px-4 py-2.5 bg-white disabled:bg-[#E5EAEC] w-[320px]`}
        placeholder='Search for a donation by name'
        value={searchValue}
        onChange={(e: any) => {
          setSearchValue(e.target.value)
        }}
      />
      <div className='mt-6 pb-4 border-b border-gray/100'>
        <Category selectCategory={selectCategory} currentCategory={currentCategory} />
      </div>

      <Campaign campaignData={filteredCampaigns} />

    </Layout>
  )
}

export default Home