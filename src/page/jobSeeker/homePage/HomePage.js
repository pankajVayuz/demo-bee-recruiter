import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYER_IN_DASHBOARD } from "../../../constant/employerConstant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, loading, error, success } = useSelector(
    (state) => state.employerAuth
  );
  useEffect(() => {
    if (userInfo?.token && userInfo?.isPhoneVerified) {
      dispatch({ type: EMPLOYER_IN_DASHBOARD });
    }
  }, [dispatch]);

  useEffect(() => {
    if (userInfo?.token && userInfo?.isPhoneVerified && userInfo?.email ) {
      toast(`${userInfo.email} Login Successfully..`, { type: "success" });
    }
  }, [userInfo?.token, userInfo?.isPhoneVerified, userInfo?.email]);

  useEffect(() => {
    if (!userInfo?.token && !userInfo?.email && !userInfo?.phone) {
     navigate("/")
    }
  }, [userInfo?.token , userInfo?.email, userInfo?.phone]);


  return (
    <>
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
