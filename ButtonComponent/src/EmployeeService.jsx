import React from 'react'
import axios from 'axios'
const BASE_URL="http://localhost:52526/api/User"
class EmployeeService{

    
    saveRegistration(userdata){
        return axios.post(BASE_URL+'/registration',userdata)
    }
    login(userdata){
        return axios.get(BASE_URL+'/login',userdata)
    }
}
export default new EmployeeService; 



