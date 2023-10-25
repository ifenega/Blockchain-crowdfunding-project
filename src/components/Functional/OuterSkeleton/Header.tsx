import React from 'react'
import LogoText from '../LogoText'
import UserProfileCard from './UserProfileCard'

const Header = () => {
    return (
        <div className='w-full pl-12 pr-[96px] py-3 border-b border-[#E2E8F0] bg-[#F1F5F9] flex justify-between  h-fit'>
            <LogoText />

            <UserProfileCard />
        </div>
    )
}

export default Header