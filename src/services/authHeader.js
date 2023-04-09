export default function authHeader() {
    const employer = JSON.parse(localStorage.getItem("employer"));
  
    if (employer && employer.token) {
      return { Authorization: 'Bearer ' + employer.token };
    //   return { "x-auth-token": user.accessToken };
    } else {
      return {};
    }
  }

  export function signupAuthHeader() {
    const employer = JSON.parse(localStorage.getItem("employer"));
  
    if (employer && employer.token) {
      return { Authorization: 'Bearer ' + employer.token };
    } else {
      return {};
    }
  }

  