import React from 'react'

type Props = {
    data: CampaignItemData;
}
const ProgressDoughnut = (props: Props) => {

    const percentage = (props.data.amount_raised / props.data.target_amount) * 100
    const shade = 4 + percentage
    const conicGradient = `conic-gradient(
        #7F56D9 ${percentage}%, #F2F4F7 ${shade}%
      )`;
    return (
        <div className="bg-[#F2F4F7]  rounded-full w-[80px] h-[80px] relative"
            style={{
                background: conicGradient,
            }}
        >
            <div className='w-[72px] h-[72px] absolute top-[3.5px] left-[3.5px] bg-white rounded-full flex items-center justify-center flex-col'>
                <p className='text-gray/800'>{percentage}%</p>
                <p className='text-gray/400 text-sm'>raised</p>
            </div>
        </div>
    )
}

export default ProgressDoughnut