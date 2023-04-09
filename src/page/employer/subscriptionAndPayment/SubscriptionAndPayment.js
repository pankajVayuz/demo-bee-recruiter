import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import SubscriptionAndPaymentC from './SubscriptionAndPaymentC'

const SubscriptionAndPayment = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className=' flex '>
        <Sidebar></Sidebar>
        <SubscriptionAndPaymentC></SubscriptionAndPaymentC>
    </div>
    </>
  )
}

export default SubscriptionAndPayment