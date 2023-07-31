import React, { useRef,useState, useEffect } from "react";

import {useNavigate,Link,useParams} from 'react-router-dom'

import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EmployeeService from './services/EmployeeService'

import './RegisterComponent.css'
import ButtonComponent from "./ButtonComponent";

// import SignupButton from "SignupButton/SignupButton"
const [user,setUser]=useState('');


const saveUserRegistration=(e)=>{


        e.preventDefault();

        const userRegnData={user,pwd}

        const regdata={"username":user,"password":pwd}

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


// https://regexr.com/

//Start with one alphabet lower/upper followed by 3 to 23 alphabets/digits/-/_

const USER_REGEX=/^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;




//Minimum one lower case/oneupper/one digit/one spl symbol 8 to 24 characters

const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;



//UseContext data to be transfered

// const userdata = createContext();
// const pwddata = createContext();




//type rafc to generate

export const RegisterComponent = () => {

    //allows us to focus on user input when the component loads

    const userRef=useRef()

    //to focus on error so that we can announce it using screenreader

    const errorRef=useRef();

  //STATE VARIABLES

  //USER

    const [user,setUser]=useState('');

    const [validName,setValidName]=useState(false);

    const [userFocus,setUserFocus]=useState(false);

  //PASSWORD

    const [pwd,setPwd]=useState('');

    const [validPwd,setValidPwd]=useState(false);

    const [pwdFocus,setPwdFocus]=useState(false);

  //MATCHPWD

    const [matchPwd,setMatchPwd]=useState('');

    const [validMatch,setValidmatch]=useState(false);

    const [matchFocus,setMatchFocus]=useState(false);

   //ERROR/ SUCCESS MESSAGE

     const [errMsg,setErrMsg]=useState('')

     const [success,setSuccess]=useState(false);




     //    to access history





     //===================================================================================================================

//    const navigate=useNavigate();




    //EVENT HANDLER FOR SIGNUP BUTTON



   

     

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

        ()=>{const result=USER_REGEX.test(user);

            console.log("SECOND USEFFECTHOOK:result of REGEX test on username :"+result)

            console.log("username : "+user);

            setValidName(result)

            console.log("validname state variable gets value of regex test result :"+result)

        },[user]

     )

         //validates PASSWORD input and checks if its same as matchpassword

         //.Dependency array has pwd,matchpwd state varibale




     useEffect(

        ()=>{const result=PWD_REGEX.test(pwd);

            console.log("THIRD USEFFECTHOOK:result of REGEX test on pwd : "+result)

            console.log("password : "+pwd);

            setValidPwd(result)

            console.log("validPwd state variable gets value of regex test result : "+result)

            //check if password and confirm password matches

            const matchresult=pwd===matchPwd;

            setValidmatch(matchresult)

            console.log("validmatch state variable gets equality test result : "+matchresult)

        },[pwd,matchPwd]

     )

  //to clear  error messages is user makes changes in any of the state variable sin dependency array.      

   useEffect(() => {

    setErrMsg('');

     

   }, [user,pwd,matchPwd])

   

  return ((success)?<>

    <section>

        <h1>Success!</h1>

        <p>

        {/* {navigate('/login')} */}

         

        </p>

    </section>

  </>

  :(

    <div id="background" className="">

                <h2 style={{color:'maroon'}} className="text-left" ></h2>

      <section >

       <p ref={errorRef} className={errMsg?"errmsg":"offscreen" }  aria-live="assertive">{errMsg}</p>

       <h3 style={{color:'white'}}>Register User</h3>

       <form>

        {/* USERNAME */}

        <label htmlFor="username">

            Username:

            <span className={validName?"valid":"hide"}>

                <FontAwesomeIcon icon={faCheck}/>

            </span>

            <span className={validName||!user?"hide":"invalid"}>

                <FontAwesomeIcon icon={faTimes}/>




            </span>

        </label>

        <input

             type="text"

             id="username"

             ref={userRef}

             autoComplete="off"

             onChange={(e)=>setUser(e.target.value)}

             required

             aria-invalid={validName?"false":"true"}

             aria-describedby="uidnote"

             onFocus={()=>setUserFocus(true)}

             onBlur={()=>setUserFocus(false)}

        />

        <p id="uidnote" className={userFocus && user && !validName?"instructions":"offscreen"}>

            <FontAwesomeIcon icon={faInfoCircle}/>

            4 to 24 characters.<br/>

            Must begin with a letter.<br/>

            Letters,Numbers,Underscores,Hyphens allowed

        </p>

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

                        {/* SIGN UP BUTTON */}

                        <br/>

                    return(
                        <>
                                {/* <ButtonComponent/> */}
                        {/* <userdata.Provider value={user}>
                            <pwddata.Provider value={pwd}>

                                    <SignupButton/>

                                </pwddata.Provider>
                        </userdata.Provider> */}
                        </>
                    );

                        <ButtonComponent/>

                        {/* <button disabled={!validName || !validPwd || !validMatch ? true : false} onClick={(e)=>saveUserRegistration(e)}>Sign Up</button> */}

                </form>

               

                   <p>

                        Already registered?<br />

                        <span className="line">

                            <a href="/login">Sign In</a>

                        </span>

                    </p>  

           

    </section>

    </div>

   

  ))

}
// export {userdata, pwddata}

export {saveUserRegistration};