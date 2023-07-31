import React, { useRef,useState, useEffect, createContext } from "react";
import {useNavigate,Link,useParams} from 'react-router-dom'
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ConfirmPasswordComponent.css'



//Minimum one lower case/oneupper/one digit/one spl symbol 8 to 24 characters
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;



//type rafc to generate
export const ConfirmPasswordComponent = (props) => {

  
  const matchPwd=props.matchpwddata;
  const pwd=props.pwddata;
  const setMatchPwd=props.setmatchpwddata;
  const validMatch=props.validmatchdata;
  const setValidmatch=props.setvalidmatchdata;
  const matchFocus=props.matchfocusdata;
  const setMatchFocus=props.setmatchfocusdata;
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
            // console.log("THIRD USEFFECTHOOK:result of REGEX test on pwd : "+result)
            console.log("password : "+pwd);
            // setValidPwd(result)
            // console.log("validPwd state variable gets value of regex test result : "+result)
            // check if password and confirm password matches
            const matchresult=pwd===matchPwd;
            setValidmatch(matchresult)
            console.log("validmatch state variable gets equality test result : "+matchresult)
        },[pwd,matchPwd]
     )
  //to clear  error messages is user makes changes in any of the state variable sin dependency array.      
   useEffect(() => {
    setErrMsg('');
     
   }, [pwd,matchPwd])
   
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
                                {/* CONFIRM PASSWORD */}

                       

                                <label htmlFor="confirm_pwd">

Confirm Password:

<FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />

<FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />

</label>

<input

type="password"

id="confirm_pwd"

onChange={(e) => setMatchPwd(e.target.value)}

value={matchPwd}

required

aria-invalid={validMatch ? "false" : "true"}

aria-describedby="confirmnote"

onFocus={() => setMatchFocus(true)}

onBlur={() => setMatchFocus(false)}

/>

<p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>

<FontAwesomeIcon icon={faInfoCircle} />

Must match the first password input field.

</p>







                </form>
                




           
                </div>  
                    </div>
    
  ))
}

