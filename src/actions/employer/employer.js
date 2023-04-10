import { async } from "q";
import {
  EMPLOYER_LOADING,
  EMPLOYER_LOGIN_ERROR,
  EMPLOYER_LOGIN_SUCCESS,
  EMPLOYER_FORGOTPASSWORD_OTP_SEND_ERROR,
  EMPLOYER_FORGOTPASSWORD_OTP_SEND_SUCCESS,
  EMPLOYER_SIGNUP_REQUEST,
  EMPLOYER_SIGNUP_REQUEST_SUCCESS,
  EMPLOYER_SIGNUP_REQUEST_FAIL,
  EMPLOYER_VERIFY_NUMBER_OTP_REQUEST,
  EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_SUCCESS,
  EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_FAIL,
  EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST,
  EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_SUCCESS,
  EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_FAIL,
  EMPLOYER_RESET_PASSWORD_REQUEST,
  EMPLOYER_RESET_PASSWORD_REQUEST_SUCCESS,
  EMPLOYER_RESET_PASSWORD_REQUEST_FAIL,
  EMPLOYER_RESEND_OTP_REQUEST,
  EMPLOYER_RESEND_OTP_REQUEST_SUCCESS,
  EMPLOYER_RESEND_OTP_REQUEST_FAIL,
  EMPLOYER_FORGOT_RESEND_OTP_REQUEST_SUCCESS,
  EMPLOYER_FORGOT_RESEND_OTP_REQUEST_FAIL,
  EMPLOYER_FORGOT_RESEND_OTP_REQUEST,
} from "../../constant/employerConstant";
import { apiService } from "../../services/apiService";
import { resolver } from "../../services/network";
import authHeader, { signupAuthHeader } from "../../services/authHeader";

const employerSignin = (body) => async (dispatch) => {
  dispatch({ type: EMPLOYER_LOADING });
  const resolveData = await resolver(
    `
    ${apiService.employerSignin}`,
    "post",
    body
  );
  if (resolveData?.data && resolveData?.data?.status == "200") {
    localStorage.setItem("employer", JSON.stringify(resolveData?.data?.data));
    dispatch({
      type: EMPLOYER_LOGIN_SUCCESS,
      payload: resolveData?.data?.data,
    });
  } else if (resolveData?.error.response?.data?.errorCode == "401") {
    dispatch({
      type: EMPLOYER_LOGIN_ERROR,
      payload: resolveData?.error?.response?.data?.errorMessage,
    });
  
  } else {
    dispatch({
      type: EMPLOYER_LOGIN_ERROR,
      payload: resolveData?.error?.response?.statusText,
    });
  }
};

const employerForgotPasswordAction = (body) => async (dispatch) => {
  dispatch({ type: EMPLOYER_LOADING });
  const resolveData = await resolver(
    `${apiService.employerForgotPassword}`,
    "post",
    body
  );
  if (resolveData?.data && resolveData?.data?.status == "200") {
    localStorage.setItem("employer", JSON.stringify({ ...resolveData?.data?.data, body: body }));
    dispatch({
      type: EMPLOYER_FORGOTPASSWORD_OTP_SEND_SUCCESS,
      payload: { ...resolveData?.data?.data, body: body },
    });
  } else if (resolveData?.error.response?.data?.errorCode == "401") {
    dispatch({
      type: EMPLOYER_FORGOTPASSWORD_OTP_SEND_ERROR,
      payload: resolveData?.error?.response?.data?.errorMessage,
    });
  } else {
    dispatch({
      type: EMPLOYER_FORGOTPASSWORD_OTP_SEND_ERROR,
      payload: resolveData?.error?.response?.data?.errors,
    });
  }
};

const employerSignup = (body) => async (dispatch) => {
  dispatch({ type: EMPLOYER_SIGNUP_REQUEST });
  const resolveData = await resolver(
    `${apiService.employerSignup}`,
    "post",
    body
  );
  if (resolveData?.data && resolveData?.data?.status == "201") {
    localStorage.setItem(
      "employer",
      JSON.stringify({...resolveData?.data?.data,body:body})
    );
    dispatch({
      type: EMPLOYER_SIGNUP_REQUEST_SUCCESS,
      payload:{...resolveData?.data?.data,body:body}
    });
  } else if (resolveData?.error.response?.data?.errorCode == "422") {
    console.log("error code...",resolveData?.error.response?.data)
    dispatch({
      type: EMPLOYER_SIGNUP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.data?.errorMessage,
    });
  } else {
    dispatch({
      type: EMPLOYER_SIGNUP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.data?.email[0],
    });
  }
};

const signupVerifyNumber = (body) => async (dispatch) => {
  dispatch({ type: EMPLOYER_VERIFY_NUMBER_OTP_REQUEST });
  const resolveData = await resolver(
    ` 
  ${apiService.employerSignupVerifyNumber}
  `,
    "post",
    body,
    authHeader()
  );
  if (resolveData?.data && resolveData?.data?.status == "200") {
   
   
    dispatch({
      type: EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_SUCCESS,
      payload: resolveData?.data?.data,
    });
  } else if (resolveData?.error.response?.data?.errorCode == "401") {
    
    dispatch({
      type: EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.data?.errorMessage,
    });
  } else {
    dispatch({
      type: EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.data?.errors?.verification_code[0],
    });
  }
};

const employerForgotPasswordVerifyNumber = (body) => async (dispatch) => {
  dispatch({ type: EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST });
  const resolveData = await resolver(
    ` 
  ${apiService.employerForgotPasswordVerifyNumber}
  `,
    "post",
    body
  );
  if (resolveData?.data && resolveData?.data?.status == "200") {
    // localStorage.setItem("employer", JSON.stringify(resolveData?.data?.data));
    dispatch({
      type: EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_SUCCESS,
      payload: resolveData?.data?.data,
    });
  } else if (resolveData?.error.response?.data?.errorCode == "422") {
    dispatch({
      type: EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.data?.errorMessage,
    });
  } else {
    dispatch({
      type: EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.data?.errors?.otp[0],
    });
  }
};





const employerCreateNewPassword = (body) => async (dispatch) => {
  dispatch({ type:EMPLOYER_RESET_PASSWORD_REQUEST});
  const resolveData = await resolver(
    ` 
  ${apiService.employerCreateNewPassword}
  `,
    "post",
    body
  );
  if (resolveData?.data && resolveData?.data?.status == "200") {
   
    dispatch({
      type:EMPLOYER_RESET_PASSWORD_REQUEST_SUCCESS,
      payload: resolveData?.data?.data,
    });
  } else if (resolveData?.error.response?.data?.errorCode == "422") {
    
    dispatch({
      type:EMPLOYER_RESET_PASSWORD_REQUEST_FAIL,
      payload: resolveData?.error?.response?.data?.errorMessage,
    });
   
  } else {
    dispatch({
      type: EMPLOYER_RESET_PASSWORD_REQUEST_FAIL,
      payload: resolveData?.error?.response?.statusText,
    });
   
  }
};



const employerVerifyOtpResend = (body) => async (dispatch) => {
  dispatch({ type:EMPLOYER_RESEND_OTP_REQUEST});
  const resolveData = await resolver(
    ` 
  ${apiService.employerVerifyOtpResend}
  `,
    "post",
    body,
    authHeader()
  );
  if (resolveData?.data && resolveData?.data?.status == "200") {
   
    dispatch({
      type:EMPLOYER_RESEND_OTP_REQUEST_SUCCESS,
      payload: resolveData?.data?.data,
    });
  } else {
    dispatch({
      type: EMPLOYER_RESEND_OTP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.statusText,
    });
   
  }
};

const employerForgotOtpResend = (body) => async (dispatch) => {
  dispatch({ type:EMPLOYER_FORGOT_RESEND_OTP_REQUEST});
  const resolveData = await resolver(
    ` 
  ${apiService.employerForgotOtpResend}
  `,
    "post",
    body,
    authHeader()
  );
  if (resolveData?.data && resolveData?.data?.status == "200") {
   
    dispatch({
      type:EMPLOYER_FORGOT_RESEND_OTP_REQUEST_SUCCESS,
      payload: resolveData?.data?.data,
    });
  } else {
    dispatch({
      type: EMPLOYER_FORGOT_RESEND_OTP_REQUEST_FAIL,
      payload: resolveData?.error?.response?.statusText,
    });
   
  }
};



export {
  employerSignin,
  employerForgotPasswordAction,
  employerSignup,
  signupVerifyNumber,
  employerForgotPasswordVerifyNumber,
  employerCreateNewPassword,employerVerifyOtpResend,employerForgotOtpResend
};
