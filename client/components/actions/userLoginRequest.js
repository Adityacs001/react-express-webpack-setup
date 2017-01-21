import axios from "axios";
function handleResponse(response){
    if(response.status===200)
        return response;
    else{
        let error=new Error(response.statusText);
        error.response=response;
        throw error;
    }
}
export function userLoginRequest(userData){
    return dispatch=>{       
        return axios
        .post('/api/login',userData)
        .then(handleResponse);
    }
}