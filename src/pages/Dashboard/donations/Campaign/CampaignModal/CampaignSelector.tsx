import React, { useState } from 'react'
import CampaignDetails from './CampaignDetails'
import { AppDispatch } from '../../../../../store/store'
import { useDispatch } from 'react-redux'
import { campaignActions } from '../../../../../store/slices/campaignSlice'
import MakePayment from '../../DonationsModal/MakePayment'
import Donate from '../../DonationsModal/Donate'


const CampaignSelector = () => {

  // <---------- Utility class --------->
  const dispatch: AppDispatch = useDispatch()
  // <---------- useSelectors --------->
  // <---------- HOOKS ------------>
  // <---------- useStates + variables ---------->

  const initialState = {
    campaignDetails: true,
    donate: false,
    makePayment: false
  }
  const [values, setValues] = useState({ ...initialState })
  // <---------- Functions ---------->

  const handleClose = () => {
    dispatch(campaignActions.closeCampaignModal())
  }

  const showCampaignDetails = () => {
    dispatch(campaignActions.setModalFeatures({
      title: "Campaign details",
      size: "full"
    }))
    setValues({
      campaignDetails: true,
      donate: false,
      makePayment: false
    })

  }

  const showDonate = () => {
    dispatch(campaignActions.setModalFeatures({
      title: "Donate",
      size: "mid"
    }))
    setValues({
      campaignDetails: false,
      donate: true,
      makePayment: false
    })

  }

  const showMakePayment = () => {
    dispatch(campaignActions.setModalFeatures({
      title: "Make Payment",
      size: "mid"
    }))
    setValues({
      campaignDetails: false,
      donate: false,
      makePayment: true
    })

  }


  const showDefaultConnectors = () => (
    <>
      {
        values.campaignDetails &&
        <CampaignDetails
          handleClose={handleClose}
          handleDonate={showDonate}
        />
      }
      {
        values.donate &&
        <Donate
          handleClose={handleClose}
          back={showCampaignDetails}
          handlePayment={showMakePayment}
        />
      }

      {
        values.makePayment &&
        <MakePayment
          handleClose={handleClose}
          back={showDonate}
        />
      }
    </>
  )

  return (
    <div>
      {showDefaultConnectors()}
    </div>
  )
}

export default CampaignSelector