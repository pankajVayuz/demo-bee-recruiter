// let IPAddress = "https://torsa.herokuapp.com/";
let IPAddress = "http://manojnegi-001-site1.ctempurl.com/public/api/";

export const apiService = {
  employerSignin: IPAddress + "signin",
  employerForgotPassword:IPAddress + "forgot-password",
  employerSignup:IPAddress + "signup",
  employerSignupVerifyNumber: IPAddress + "verify-mobile-number",
  employerForgotPasswordVerifyNumber: IPAddress + "verifyPasswordResetOTP",
  employerCreateNewPassword:IPAddress + "reset-password",
  employerVerifyOtpResend: IPAddress + "resend_otp",
  employerForgotOtpResend: IPAddress + "resend_otp",
};
