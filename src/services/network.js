import axios from "axios";

const resolver = async (promise, request, body,auth) => {
  const resolved = {
    data: null,
    error: null,
  };

 
  
 
  try {
    resolved.data = await axios({
      method: request,
      url: promise,
      data: body,
     
      headers: auth,
    });
  
  } catch (e) {
   

    resolved.error = e;
  }

  return resolved;
};

export { resolver };
