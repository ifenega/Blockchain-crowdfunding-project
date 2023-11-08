import React, { useState } from 'react'
import Layout from '../../../../components/Functional/Layout'
import Header from '../../../../components/UI/Header'
import Campaign from '../../Campaign/Campaign'
import Button from '../../../../components/Buttons/Button'
import { CustomToast, campaign_data } from '../../../../util/util'
import Profile from './component/Profile'
import Category from './component/Category'
import AccountSettings from './component/AccountSettings/AccountSettings'

const SettingsHome = () => {

    // <---------- Utility class --------->
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->



    const [currentCategory, setCurrentCategory] = useState("Profile")

    // <---------- Functions ---------->





    const selectCategory = (category: string) => {
        setCurrentCategory(category)
    }

    return (
        <Layout title='Profile & Settings'>
            <Header title='Profile & Settings' />



            <div className='mt-6 '>
                <Category selectCategory={selectCategory} currentCategory={currentCategory} />
            </div>

            <div className='mt-4 md:mt-6'>
                {currentCategory === "Profile" && <Profile />}
                {currentCategory === "Settings" && <AccountSettings />}
            </div>

        </Layout>
    )
}

export default SettingsHome