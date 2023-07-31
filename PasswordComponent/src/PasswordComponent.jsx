import React, { useRef,useState, useEffect, createContext } from "react";
import {useNavigate,Link,useParams} from 'react-router-dom'
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './PasswordComponent.css'



//Minimum one lower case/oneupper/one digit/one spl symbol 8 to 24 characters
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;



//type rafc to generate
export const PasswordComponent = (props) => {

  
  const pwd=props.pwddata;
  const setPwd=props.setpwddata;
  const validPwd=props.validpwddata;
  const setValidPwd=props.setvalidpwddata;
  const pwdFocus=props.pwdfocusdata;
  const setPwdFocus=props.setpwdfocusdata;
  const errMsg=props.errmsgdata;
  const setErrMsg=props.seterrmsgdata;
  const success=props.successdata; 
  const setSuccess=props.setsuccessdata;
    //allows us to focus on user input when the component loads
    const userRef=useRef()
    //to focus on error so that we can announce it using screenreader
    const errorRef=useRef();
  //STATE VARIABLES

  //PASSWORD





     //    to access history



     
    //  useEffect(
        
    //     ()=>{
    //         //sets focus on user input
    //         //dependancy array is empty
    //         userRef.current.focus();
    //         console.log("FIRST USEEFFECT HOOK: Focus set on user input")
    //     },[]
    //  )
     //validates username input.Depedency array has user state varibale

         //validates PASSWORD input and checks if its same as matchpassword
         //.Dependency array has pwd,matchpwd state varibale

     useEffect(
        ()=>{const result=PWD_REGEX.test(pwd);
            console.log("THIRD USEFFECTHOOK:result of REGEX test on pwd : "+result)
            console.log("password : "+pwd);
            setValidPwd(result)
            console.log("validPwd state variable gets value of regex test result : "+result)
            //check if password and confirm password matches
            // const matchresult=pwd===matchPwd;
            // setValidmatch(matchresult)
            // console.log("validmatch state variable gets equality test result : "+matchresult)
        },[pwd]
     )
  //to clear  error messages is user makes changes in any of the state variable sin dependency array.      
   useEffect(() => {
    setErrMsg('');
     
   }, [pwd])
   
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

                
<div>   

 <p ref={errorRef} className={errMsg?"errmsg":"offscreen" }  aria-live="assertive">{errMsg}</p>

       <form>
        {/* USERNAME */}
        {/* PASSWORD */}
        <label htmlFor="password">
            Password:
            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: 
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span> 
                            <span aria-label="hashtag">#</span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>
                        </p>
                        {/* CONFIRM PASSWORD */}







                </form>
                




           
                </div>  
                    </div>
    
  ))
}

