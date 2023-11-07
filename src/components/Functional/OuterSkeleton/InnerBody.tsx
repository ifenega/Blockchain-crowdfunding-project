import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Modal from '../../UI/Modal'
import ModalSelector from '../../UI/ModalSelector'

const InnerBody = () => {

  

  return (
    <>
      <Header />
      <div className='flex '>
        <Sidebar />
        <div className='w-full py-12 pr-[96px] h-[calc(100vh-65px)] overflow-y-scroll'>
          <Outlet />
        </div>

        <Modal >
          <ModalSelector />
        </Modal>
      </div>

    </>
  )
}

export default InnerBody