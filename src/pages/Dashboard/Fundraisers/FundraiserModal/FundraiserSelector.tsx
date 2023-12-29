import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../store/store'
import { campaignActions } from '../../../../store/slices/campaignSlice'
import CreateCampaign from './CreateCampaign'



const FundraiserCampign = () => {

  // <---------- Utility class --------->
  const dispatch: AppDispatch = useDispatch()
  // <---------- useSelectors --------->
  // <---------- HOOKS ------------>
  // <---------- useStates + variables ---------->

  const initialState = {
    createCampaign: true,

  }
  const [values, setValues] = useState({ ...initialState })
  // <---------- Functions ---------->

  const handleClose = () => {
    dispatch(campaignActions.closeCampaignModal())
  }

  const showCreateCampaign = () => {
    dispatch(campaignActions.setModalFeatures({
      title: "Create a campaign",
      size: "mid",
      modal_type: "create_campaign"
    }))
    setValues({
      createCampaign: true,

    })

  }

 


  const showDefaultConnectors = () => (
    <>
      {
        values.createCampaign &&
        <CreateCampaign
          handleClose={handleClose}

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

export default FundraiserCampign