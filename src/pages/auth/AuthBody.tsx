import React, { Children } from 'react'
import ToastContainer from '../../components/UI/CustomToast';
// import { Outlet } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
}
const AuthBody = (props: Props) => {
  return (
    <div
      className='custom-gradient w-full h-[100dvh] flex items-center justify-center py-[189px] '
    >
      <div className='rounded-[32px]  py-2 sm:py-6 px-4 sm:px-8 bg-white  mx-4 sm:mx-0 w-full sm:w-[460px] relative '>
        <div className='max-h-[646px] overflow-y-scroll relative min-h-[200px] scroll-m-0'>
          <div className='absolute top-0 left-0 w-full  pt-[32px]'>
            <ToastContainer />
          </div>

          {props.children}
        </div>

      </div>
    </div>
  )
}

export default AuthBody