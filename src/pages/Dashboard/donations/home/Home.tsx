import React, { useState } from 'react'
import Layout from '../../../../components/Functional/Layout'
import Header from '../../../../components/UI/Header'
import Category from './components/Category'
import Campaign from '../../Campaign/Campaign'
import { campaign_data } from '../../../../util/util'


const Home = () => {

  // <---------- Utility class --------->
  // <---------- useSelectors --------->
  // <---------- HOOKS ------------>
  // <---------- useStates + variables ---------->


  const [searchValue, setSearchValue] = useState("")
  const [currentCategory, setCurrentCategory] = useState<Category>("General")
  // <---------- Functions ---------->

  const filteredCampaigns = campaign_data.filter((campaign) => {
    // Check if the current category matches the selected category or it's "General"
    const isCategoryMatch = campaign.category.includes(currentCategory) || currentCategory === "General";

    // Check if the campaign's title or description contains the searchValue (case-insensitive)
    const isSearchMatch = campaign.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchValue.toLowerCase());

    return isCategoryMatch && isSearchMatch;
  });


  const selectCategory = (category: Category) => {
    setCurrentCategory(category)
  }

  return (
    <Layout title='Donations'>
      <Header title='Donations' />

      <input
        type='text'
        className={`border border-[#E0E6E9] outline-none focus:border-primary/600 rounded-lg px-4 py-2.5 bg-white disabled:bg-[#E5EAEC] w-full md:w-[320px]`}
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