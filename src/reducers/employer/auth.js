import {
  EMPLOYER_ERROR_RESET,
  EMPLOYER_FORGOTPASSWORD_OTP_SEND_ERROR,
  EMPLOYER_FORGOTPASSWORD_OTP_SEND_SUCCESS,
  EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST,
  EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_FAIL,
  EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_SUCCESS,
  EMPLOYER_FORGOT_RESEND_OTP_REQUEST,
  EMPLOYER_FORGOT_RESEND_OTP_REQUEST_FAIL,
  EMPLOYER_FORGOT_RESEND_OTP_REQUEST_SUCCESS,
  EMPLOYER_IN_DASHBOARD,
  EMPLOYER_LOADING,
  EMPLOYER_LOGIN_ERROR,
  EMPLOYER_LOGIN_SUCCESS,
  EMPLOYER_RESEND_OTP_REQUEST,
  EMPLOYER_RESEND_OTP_REQUEST_FAIL,
  EMPLOYER_RESEND_OTP_REQUEST_SUCCESS,
  EMPLOYER_RESET_PASSWORD_REQUEST,
  EMPLOYER_RESET_PASSWORD_REQUEST_FAIL,
  EMPLOYER_RESET_PASSWORD_REQUEST_SUCCESS,
  EMPLOYER_SIGNUP_REQUEST,
  EMPLOYER_SIGNUP_REQUEST_FAIL,
  EMPLOYER_SIGNUP_REQUEST_SUCCESS,
  EMPLOYER_VERIFY_NUMBER_OTP_REQUEST,
  EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_FAIL,
  EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_SUCCESS,
} from "../../constant/employerConstant";

const employer = JSON.parse(localStorage.getItem("employer"));

const initalState = {
  error: null,
  success: null,
  loading:false,
  userInfo: {
    otp: null,
    phone:employer?.body?.user_contact || null,
    email:employer?.data?.email|| null,
    resendOtp:false,
    signupOtpSend:false,
    token: employer?.token || null,
    isDashboardOpen:employer?.isDashboardOpen ||false,
    isPhoneVerified:employer?.data?.is_contact_verified
    || false,
  },
  
};

const reducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EMPLOYER_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        success:null
      };

    case EMPLOYER_LOGIN_SUCCESS:
     
      return {
        ...state,
        loading: false,
        success:"Login successfully...",
        userInfo:{
          ...state.userInfo,
          token:payload.token,
          phone:payload.data.user_contact,
          email:payload.data.email,
          isPhoneVerified:payload.data.is_contact_verified
        },
        
        error: null,
        
      };

      case EMPLOYER_IN_DASHBOARD:
        return{
        ...state,
        userInfo:{
          ...state.userInfo,
          isDashboardOpen:true,
        },

        }
    case EMPLOYER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case EMPLOYER_FORGOTPASSWORD_OTP_SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success:payload.message,
        userInfo:{
          ...state.userInfo,
          otp:payload.otp,
          email:payload?.body.email,
          phone:payload?.body.user_contact
        }
       
      };
    case EMPLOYER_FORGOTPASSWORD_OTP_SEND_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success:null
      };

    case EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success:payload.message
        
      };
    case EMPLOYER_FORGOT_PASSWORD_VERIFY_NUMBER_OTP_REQUEST_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case EMPLOYER_RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EMPLOYER_RESET_PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success:payload.message,
       
      };
    case EMPLOYER_RESET_PASSWORD_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
      
      case EMPLOYER_SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case EMPLOYER_SIGNUP_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          success:" OTP send on registered Mobile Number",
          userInfo: {
            ...state.userInfo,
            token: payload.token,
            otp: payload.otp,
            phone: payload.body.user_contact,
            signupOtpSend:true
            
          },
        };
      case EMPLOYER_SIGNUP_REQUEST_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
      case EMPLOYER_VERIFY_NUMBER_OTP_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          success:payload.message,
          userInfo:{
            ...state.userInfo,
            isPhoneVerified:true,
            isDashboardOpen:true
          }
         
        };
      case EMPLOYER_VERIFY_NUMBER_OTP_REQUEST_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
        case EMPLOYER_ERROR_RESET:
          return{
            ...state,
            error:null
          }

          case EMPLOYER_RESEND_OTP_REQUEST:
            return{
              ...state,
              loading:true,
              error:null
            }
            case EMPLOYER_RESEND_OTP_REQUEST_SUCCESS:
              return{
                ...state,
                loading:false,
                error:null,
                success:payload.message,
                userInfo:{
                  ...state.userInfo,
                  otp:payload.otp,
                  resendOtp:true
                }
              }
              case EMPLOYER_RESEND_OTP_REQUEST_FAIL:
                return{
                  ...state,
                  loading:false,
                  error:payload
                }

                case EMPLOYER_FORGOT_RESEND_OTP_REQUEST:
                  return{
                    ...state,
                    loading:true,
                    error:null
                  }
                  case EMPLOYER_FORGOT_RESEND_OTP_REQUEST_SUCCESS:
                    return{
                      ...state,
                      loading:false,
                      error:null,
                      success:payload.message,
                      userInfo:{
                        ...state.userInfo,
                        otp:payload.otp,
                        resendOtp:true
                      }
                    }
                    case EMPLOYER_FORGOT_RESEND_OTP_REQUEST_FAIL:
                      return{
                        ...state,
                        loading:false,
                        error:payload
                      }
     

    default:
      return state;
  }
};

export default reducer;
