import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { saveUserRegistration } from './RegisterComponent';

function ButtonComponent() {


  return (

    <div>
    <button  onClick={(e)=>{saveUserRegistration}}>Sign Up</button>
    </div>
  )
}

export default ButtonComponent
