import React, { useRef,useState, useEffect, createContext } from "react";
import {useNavigate,Link,useParams} from 'react-router-dom'
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NameComponent.css'    



// https://regexr.com/
//Start with one alphabet lower/upper followed by 3 to 23 alphabets/digits/-/_
const USER_REGEX=/^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;

//Minimum one lower case/oneupper/one digit/one spl symbol 8 to 24 characters
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;

// const userdata = createContext();
// const pwddata = createContext();

//type rafc to generate
export const NameComponent = (props) => {

    const name = props.namedata;
    const setName=props.setnamedata;
    const userFocus =props.userfocusdata;
    const setUserFocus =props.setuserfocusdata;
    const errMsg=props.errmsgdata;
    const setErrMsg=props.seterrmsgdata;
    const success=props.successdata; 
    const setSuccess=props.setsuccessdata;
    //allows us to focus on user input when the component loads
    const userRef=useRef()
    //to focus on error so that we can announce it using screenreader
    const errorRef=useRef();
  //STATE VARIABLES
  //USER


     //    to access history


     //===================================================================================================================
//    const navigate=useNavigate();

    
    
     
     useEffect(
        
        ()=>{
            //sets focus on user input
            //dependancy array is empty
            userRef.current.focus();
            console.log("FIRST USEEFFECT HOOK: Focus set on user input")
        },[]
     )
     //validates username input.Depedency array has user state varibale
     useEffect(
        ()=>{
            console.log("name : "+name);

        },[name]
     )
         //validates PASSWORD input and checks if its same as matchpassword
         //.Dependency array has pwd,matchpwd state varibale

    
  //to clear  error messages is user makes changes in any of the state variable sin dependency array.      

   
  return ((success)?<>
    <section>
        <h1>Success!</h1>
        <p>
        {/* {navigate('/login')} */}
          
        </p>
    </section>
  </>
  :(


    <div>
        


       <p ref={errorRef} className={errMsg?"errmsg":"offscreen" }  aria-live="assertive">{errMsg}</p>

       <form>
        {/* USERNAME */}
        <label htmlFor="name">
            name: 


           
        </label>
        <input
             type="text"
             id="username"
             ref={userRef}
             autoComplete="off"
             onChange={(e)=>setName(e.target.value)}
             required
            //  aria-invalid={validName?"false":"true"}
            //  aria-describedby="uidnote"
            //  onFocus={()=>setUserFocus(true)}
            //  onBlur={()=>setUserFocus(false)}
        />

        {/* PASSWORD */}
       
                        {/* CONFIRM PASSWORD */}
                        
                        
                        {/* SIGN UP BUTTON */}
                        <br/>





                </form>
                




    </div>
    
  ))
}
