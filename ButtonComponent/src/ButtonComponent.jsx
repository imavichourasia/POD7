import React, { useRef,useState, useEffect, createContext } from "react";
import {useNavigate,Link,useParams} from 'react-router-dom'
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmployeeService from './EmployeeService'
import './ButtonComponent.css'





export const ButtonComponent = (props) => {

    //allows us to focus on user input when the component loads
    const userRef=useRef()
    //to focus on error so that we can announce it using screenreader
    const errorRef=useRef()

    
    const user = props.userdata;
    const name = props.namedata;
    const email = props.emaildata;
    const state = props.statedata;
    const pwd = props.pwddata;
    const validName=props.validnamedata;
    const validPwd=props.validpwddata;
    const validMatch=props.validmatchdata;
    const errMsg=props.errmsgdata;
    const setErrMsg=props.seterrmsgdata;
    const success=props.successdata; 
    const setSuccess=props.setsuccessdata;


     //    to access history


     //===================================================================================================================
//    const navigate=useNavigate();

    // EVENT HANDLER FOR SIGNUP BUTTON 
    const saveUserRegistration=(e)=>{
        e.preventDefault();
        const userRegnData={user,pwd,name,state,email}
        const regdata={"username":user,"password":pwd , "name":name , "place":state, "email":email}
        console.log('User data populated using state variable :'+JSON.stringify(regdata))

         //===================================================================================================================
        EmployeeService.saveRegistration(regdata).
        then((response=>{
            //console.log('Response from user regn API POST access token :'+response.accessToken)
            console.log('Response from user regn API POST data: '+JSON.stringify(response));
            const roles = response?.data?.User?.roles;
            console.log("Roles :"+roles)

        //STATE VARIABLE SUCCESS ASSIGNED TRUE SINCE REGISTRATION IS SUCCESS.
           setSuccess(true)
           
            console.log("setting Success state variable to true...")
        })).
    catch(error=>{
        console.log(error);
         if(!error?.response){
            setErrMsg('No Server response')
         }
        else if(error.response?.status===409){
            setErrMsg('Username Taken')
        }
        else{
            setErrMsg('Regsistration Failed')
        }
        })
  }
    
     
     
  return ((success)?<>
    <section>
        <h1>Success!</h1>
        <p>
        {/* {navigate('/login')} */}
          
        </p>
    </section>
  </>
  :(


    <div id="background" className="background">

                <h2 style={{color:'maroon'}} className="text-left" ></h2>
                
      <div>


       <p ref={errorRef} className={errMsg?"errmsg":"offscreen" }  aria-live="assertive">{errMsg}</p>
{/* ===================================================================================================================== */}
       {/* disabled={!validName || !validPwd || !validMatch ? true : false}  */}

        <button className="btn" onClick={(e)=>saveUserRegistration(e)}>Sign Up</button>
                
      </div>





           
    
    </div>
    
  ))
}

