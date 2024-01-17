import React from 'react'
import LogoText from '../LogoText'
import UserProfileCard from './UserProfileCard'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { campaignActions } from '../../../store/slices/campaignSlice';

const Header = () => {

    const dispatch: AppDispatch = useDispatch()

    const menuOpen = useSelector((state: any) => state.campaign.mobileMenu);

    const handleSidebarMenu = () => {
        dispatch(campaignActions.setMobileSideBarMenu(!menuOpen));
    };

    return (
        <div className='w-full px-4 lg:pl-12 lg:pr-[96px] py-3 border-b border-[#E2E8F0] bg-[#F1F5F9] flex justify-between  h-fit'>
            <div className='hidden lg:flex'>
                <LogoText />
            </div>

            <div className='flex lg:hidden'>
                <button
                    type="button"
                    onClick={handleSidebarMenu}
                    className=" flex items-center justify-center flex-col  border-0 transition-all delay-100 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] w-5 z-20 p-0 cursor-pointer"
                >
                    <div
                        className={`${menuOpen && 'translate-y-[7px] rotate-45 '
                            } bg-[#0A2E65]  rounded-[1px] h-0.5 w-full transition-all delay-100 ease-[cubic-bezier(0.455,0.03,0.515,0.955)]`}
                    ></div>
                    <div
                        className={`${menuOpen && 'opacity-0 '
                            } bg-[#0A2E65]  rounded-[1px] h-0.5 w-full transition-all delay-100 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] mt-[5px]`}
                    ></div>
                    <div
                        className={`${menuOpen && 'translate-y-[-7px] -rotate-45 '
                            } bg-[#0A2E65]  rounded-[1px] h-0.5 w-full transition-all delay-100 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] mt-[5px]`}
                    ></div>
                </button>
            </div>

            <UserProfileCard />
        </div>
    )
}

export default Header