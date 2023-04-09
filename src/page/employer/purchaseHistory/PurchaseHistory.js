import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import PurchaseHistoryC from '../purchaseHistory/PurchaseHistoryC'

const PurchaseHistory = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className=' flex '>
        <Sidebar></Sidebar>
        <PurchaseHistoryC></PurchaseHistoryC>
    </div>
    </>
  )
}

export default PurchaseHistory