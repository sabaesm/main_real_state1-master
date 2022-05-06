import axios from 'axios'
export default function api(route = null){
  const api = axios.create({
      baseURL:'https://real.iran.liara.run/real/'
  });
  api.interceptors.request.use (
      response=>response,
     error=> {
         if(error.response.status ===401){
             alert('401')
             return Promise.reject();
             
         }
        else if(error.response.status ===404){
            alert('404')

            return Promise.reject();
        }
        else if(error.response.status ===500){
            alert('500')

            return Promise.reject();
        }
         return Promise.reject(error);


  } )
  return api
}
