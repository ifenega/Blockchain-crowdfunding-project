import React from 'react'
import ProgressDoughnut from './ProgressDoughnut';
import CampaignTimer from './CampaignTimer';
import { AppDispatch } from '../../../../store/store';
import { useDispatch } from 'react-redux';
import { campaignActions } from '../../../../store/slices/campaignSlice';

type Props = {
  data: CampaignItemData;
  key: number
}

const CampaignCard = (props: Props) => {


  // <---------- Utility class --------->
  const dispatch: AppDispatch = useDispatch()

  // <---------- useSelectors --------->
  // <---------- HOOKS ------------>
  // <---------- useStates + variables ---------->
  // <---------- Functions ---------->


  return (
    <div className='p-2 rounded-xl border b
    order-gray/100 flex flex-col gap-4 w-full md:max-w-[361px]'>

      <div className='w-full'>
        <div className='relative mb-2'>
          <img src={props.data.img} alt='' className='w-full max- h-[153px] rounded object-cover' />

          <div className='right-[8px] top-[8px] absolute'>
            <CampaignTimer deadlineISOString={props.data.deadline} />
          </div>
        </div>

        <h3 className='text-gray/800 font-medium mb-2'>{props.data.title}</h3>
        <p className='text-gray/700 text-sm tracking-[-0.21px] overflow-hidden truncate break-keep'>{props.data.short_description}</p>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-2 items-start'>
          <div>
            <p className='text-sm text-gray/500 pb-0.5'>Target 🎯</p>
            <h6 className='text-sm font-medium text-gray/700'>{props.data.target_amount}</h6>
          </div>
          <div>
            <p className='text-sm text-gray/500 pb-0.5'>Raised 🔥</p>
            <h6 className='text-sm font-medium text-gray/700'>{props.data.amount_raised}</h6>
          </div>
        </div>



        <ProgressDoughnut data={props.data} />

      </div>
      <button
        type='button'
        disabled={false}
        className='rounded-[99px] p-2 bg-[rgba(127,86,217,0.08)] text-[#7F56D9] text-sm font-medium w-full flex items-center justify-center'
        onClick={() => {
          dispatch(campaignActions.setModalFeatures({
            title: "Campaign details",
            size: "full",
            modal_type: "campaign"
          }))
          dispatch(campaignActions.setCampaignData(props.data))

        }}
      >View campaign</button>

    </div>
  )
}

export default CampaignCard