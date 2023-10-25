import React from 'react'
import { profileImg } from '../../../util/util'
import downIcon from '../../../assets/dashboard/general/down-icon.svg'
const UserProfileCard = () => {

    return (
        <div className='flex items-center gap-2 '>
            <div className=' '>
                <h6 className='text-gray/700 text-sm font-medium '>Ifeoluwa Olurunnegan</h6>
                <p className='text-gray/500 text-xs leading-[18px]'>iphe@gmail.com</p>
            </div>

            <img src={profileImg('Ifeoluwa Olurunnegan')} className='w-10 h-10 rounded-full' alt="" />

            <img src={downIcon} alt='wrrow-doen' />

        </div>
    )
}

export default UserProfileCard