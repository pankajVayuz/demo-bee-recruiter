import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import SyncDataC from '../syncData/SyncDataC'

const SyncData = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className=' flex '>
    <Sidebar></Sidebar>
    <SyncDataC></SyncDataC>
    </div>
    </>
  )
}

export default SyncData