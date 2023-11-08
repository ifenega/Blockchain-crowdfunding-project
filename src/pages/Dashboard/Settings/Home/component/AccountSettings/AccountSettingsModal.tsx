import React, { useState } from 'react'
import BorderButton from '../../../../../../components/Buttons/BorderButton'
import Button from '../../../../../../components/Buttons/Button'
import { AppDispatch } from '../../../../../../store/store'
import { useDispatch } from 'react-redux'
import { campaignActions } from '../../../../../../store/slices/campaignSlice'

type Props = {

}

const AccountSettingsModal = (props: Props) => {

    const dispatch: AppDispatch = useDispatch()
    const [copy, setCopy] = useState(false)

    return (
        <div>

            <p className='text-gray/700 text-sm'>
                Once you confirm this changes you'll be automatically logged out of your account.
                <br />
                <br />
                You can then proceed to login into your account with your new password.
            </p>

            <div className='flex justify-end mt-4 sm:mt-6 gap-2 items-center'>

                <BorderButton
                    text={"Cancel"}
                    type='button'
                    disabled={false}
                    size='fit'
                    action={() => {
                        dispatch(campaignActions.closeCampaignModal())
                    }}
                />
                <Button
                    text={'Yes, confirm'}
                    type='button'
                    disabled={false}
                    size='fit'
                    action={() => {

                    }}
                />
            </div>

        </div>
    )
}

export default AccountSettingsModal