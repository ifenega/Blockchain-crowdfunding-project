import React, { Children } from 'react'
import ToastContainer from '../../components/UI/CustomToast';
// import { Outlet } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
}
const AuthBody = (props: Props) => {
  return (
    <div
      className='custom-gradient w-full h-full flex items-center justify-center py-[189px]'
    >
      <div className='rounded-[32px] bg-[32px] py-2 sm:py-6 px-4 sm:px-8 bg-white min-h-[200px] mx-4 sm:mx-0 w-full sm:w-[460px] relative'>
        <div className='absolute top-0 left-0 w-full px-4 sm:px-8 pt-[32px]'>
          <ToastContainer />
        </div>

        {props.children}
      </div>
    </div>
  )
}

export default AuthBody