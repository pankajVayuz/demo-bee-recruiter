import CandidateRoles from "../page/employer/candidateRoles/CandidateRoles";

import EmployerForgotPasswordScreen1 from "../page/employer/forgotPasswordScreen/EmployerForgotPasswordStep1";
import EmployerForgotPasswordScreen2 from "../page/employer/forgotPasswordScreen/EmployerForgotPasswordStep2";
import JobGuideline from "../page/employer/jobGuidelines/JobGuideline";
import MyJobs from "../page/employer/myJob/MyJobs";

import EmployerSignInScreen from "../page/employer/signIn/EmployerSignInScreen";

import CreateNewPassword from "../page/jobSeeker/createNewPassword/CreateNewPassword";
import ForgotPasswordPage from "../page/jobSeeker/forgotPasswordPage/ForgotPasswordPage";
import HomePage from "../page/jobSeeker/homePage/HomePage";
import VerifyNumber from "../page/jobSeeker/verifyNumber/VerifyNumber";
import JobDescriptionNavbar from "../page/employer/navbar/JobDescriptionNavbar";
import JobManagementNavbar from "../page/employer/navbar/JobManagementNavbar";
import EmployerVerifyNumberScreen from "../page/employer/signUp/EmployerVerifyNumberScreen";
import PostJobDescription from "../page/employer/postJobDescription/PostJobDescription";

import SignUpScreenEmployer from "../page/employer/signUp/SignUpScreenEmployer";

import SignInPage from "../page/jobSeeker/signIn/SignInPage";
import SignUpPage from "../page/jobSeeker/signUp/SignUpPage";
import Index from "../page/employer/previewJob/Index";
import ReportScreen from "../page/employer/reportScreen/Index";
import ReportApplicationManagement from "../page/employer/reportApplicationManagement/Index";
import AccountNavbar from "../page/employer/navbar/AccountNavbar";
import AccountProfileInformation from "../page/employer/accountProfileInformation/Index";
import EditProfileInfo from "../page/employer/editProfileInfo/EditProfileInfo";
import ChangeTheme from "../page/employer/changeTheme/ChangeTheme";
import ChangePhoneNumber from "../page/employer/changePhoneNumber/ChangePhoneNumber";
import ChangePassword from "../page/employer/changePassword/ChangePassword";
import ProfileInfo from "../page/employer/profileInfo/ProfileInfo";
import EmployerForgotOtpVerifyScreen from "../page/employer/forgotPasswordScreen/EmployerForgotOtpVerifyScreen";
import LanguagePreference from "../page/employer/languagePreference/LanguagePreference";
import SyncData from "../page/employer/syncData/SyncData";
import ChangePhoneNumberVerification from "../page/employer/changePhoneNumber/ChangePhoneNumberVerification";
import SubscriptionAndPayment from "../page/employer/subscriptionAndPayment/SubscriptionAndPayment";
import PurchaseHistory from "../page/employer/purchaseHistory/PurchaseHistory";
import { employerCreateNewPassword } from "../actions/employer/employer";
import EmployerCreateNewPassword from "../page/employer/createNewPassword/EmployerCreateNewPassword";
import Dashboard from "../page/employer/dashboard/Dashboard";
export const routes = [
  {
    path: "/signup",
    element: SignUpPage,
  },
  {
    path: "/signin",
    element: SignInPage,
  },
  {
    path: "/signin/verify",
    element: VerifyNumber,
  },
  {
    path: "/signin/newpassword",
    element: CreateNewPassword,
  },
  {
    path: "/signin/forgot",
    element: ForgotPasswordPage,
  },
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/",
    element: SignUpScreenEmployer,
  },
  {
    path: "employer/verify",
    element: EmployerVerifyNumberScreen,
  },
  {
    path: "employer/signin",
    element: EmployerSignInScreen,
  },
  {
    path: "employer/forgotpassword",
    element: EmployerForgotPasswordScreen1,
  },
  {
    path: "employer/forgot2",
    element: EmployerForgotPasswordScreen2,
  },
  {
    path: "employer/newpassword",
    element: EmployerCreateNewPassword,
  },
  {
    path: "employer/navbar",
    element: JobManagementNavbar,
  },
  {
    path: "employer/myjob",
    element: MyJobs,
  },
  {
    path: "employer/myjob/description",
    element: PostJobDescription,
  },
  {
    path: "employer/job/candidateroles",
    element: CandidateRoles,
  },
  {
    path: "employer/job/guideline",
    element: JobGuideline,
  },
  {
    path: "employer/job/navbar",
    element: JobDescriptionNavbar,
  },
  {
    path: "employer/job/preview",
    element: Index,
  },
  {
    path: "employer/job/report",
    element: ReportScreen,
  },
  {
    path: "employer/job/application",
    element: ReportApplicationManagement,
  },
  {
    path: "employer/jobapplication/navbar",
    element: AccountNavbar,
  },
  {
    path: "employer/job/account",
    element: AccountProfileInformation,
  },
  {
    path: "employer/editprofile",
    element: EditProfileInfo,
  },
  {
    path: "employer/changetheme",
    element: ChangeTheme,
  },
  {
    path: "employer/changenumber",
    element: ChangePhoneNumber,
  },
  {
    path: "employer/changepassword",
    element: ChangePassword,
  },
  {
    path: "employer/profileinfo",
    element: ProfileInfo,
  },
  {
    path: "employer/forgot/verify",
    element: EmployerForgotOtpVerifyScreen,
  },
  {
    path: "employer/languagepreference",
    element: LanguagePreference,
  },
  {
    path: "employer/syncdata",
    element: SyncData,
  },
  {
    path: "employer/changenumber/verify",
    element: ChangePhoneNumberVerification,
  },
  {
    path: "employer/subscriptionandpayment",
    element: SubscriptionAndPayment,
  },
  {
    path: "employer/purchasehistory",
    element: PurchaseHistory,
  },
  {
    path:"employer/dashboard",
    element:Dashboard
  }
];
