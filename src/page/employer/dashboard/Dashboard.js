import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EMPLOYER_IN_DASHBOARD } from '../../../constant/employerConstant';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { userInfo, loading, error, success } = useSelector(
        (state) => state.employerAuth
      );
      const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        if (userInfo?.token) {
          dispatch({ type: EMPLOYER_IN_DASHBOARD });
        }
      }, [dispatch]);

      useEffect(() => {
        if (userInfo?.isDashboardOpen) {
          navigate("/employer/dashboard")
        }
      }, [userInfo?.isDashboardOpen]);


      useEffect(() => {
        if (success) {
          toast(success,{type:"success"})
        }
      }, [userInfo?.isDashboardOpen]);


  return (
    <div className='bg-indigo-500 flex justify-center items-center'>
    <ToastContainer />
     <h1 className='text-center'>Dashboard</h1> </div>
  )
}

export default Dashboard