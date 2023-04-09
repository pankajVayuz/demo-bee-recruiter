import axios from "axios";

const API_URL = "http://manojnegi-001-site1.ctempurl.com/public/api/";

const signup = async (data) => {
  const response = await axios
        .post(API_URL + "/signup", data);
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const login = async (data) => {
  const response = await axios
        .post(API_URL + "/signin", data);
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};




const authService = {
  signup,
  login,
 
};

export default authService;