import React, { useRef,useState, useEffect, createContext } from "react";
import {useNavigate,Link,useParams} from 'react-router-dom'
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmployeeService from "./services/EmployeeService";
import './RegisterComponent.css'
// import SignupButton from "SignupButton/SignupButton";
// import ButtonComponent from "./ButtonComponent";
import {UserComponent} from "UserComponent/UserComponent";
import {NameComponent} from "NameComponent/NameComponent";
import {StateComponent} from "StateComponent/StateComponent";
import {EmailComponent} from "EmailComponent/EmailComponent";
import {ButtonComponent } from "ButtonComponent/ButtonComponent";
import {PasswordComponent} from "PasswordComponent/PasswordComponent";
import {ConfirmPasswordComponent} from "ConfirmPasswordComponent/ConfirmPasswordComponent";




// https://regexr.com/
//Start with one alphabet lower/upper followed by 3 to 23 alphabets/digits/-/_
const USER_REGEX=/^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;

//Minimum one lower case/oneupper/one digit/one spl symbol 8 to 24 characters
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;

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
    
    //Name
    
    const [name,setName]=useState('');
    
    //State
    const [state,setState]=useState('');
    
    //Email
    const [email,setEmail]=useState('');
    const [validEmail,setValidEmail]=useState(false);
    
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
   const navigate=useNavigate();

    //EVENT HANDLER FOR SIGNUP BUTTON 
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
    
     
     useEffect(
        
        ()=>{
            //sets focus on user input
            //dependancy array is empty
            // userRef.current.focus();
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
        {navigate('/login')}
          
        </p>
    </section>
  </>
  :(


      
      
      <div className="input-box">
              <h3 style={{color:'Black'}}>Register User</h3>
          <div className="container">
        <section className="heading">

       <p ref={errorRef} className={errMsg?"errmsg":"offscreen" }  aria-live="assertive">{errMsg}</p>
        </section>
        
       <div className="user-name">
        
            <UserComponent userdata={user} setuserdata={setUser} validnamedata={validName} setvalidnamedata={setValidName} userfocusdata={userFocus} setuserfocusdata={setUserFocus} errmsgdata ={errMsg} seterrmsgdata={setErrMsg} successdata={success} setsuccessdata={setSuccess}  />


        
            <NameComponent namedata={name} setnamedata={setName}  userfocusdata={userFocus} setuserfocusdata={setUserFocus} errmsgdata ={errMsg} seterrmsgdata={setErrMsg} successdata={success} setsuccessdata={setSuccess}  />

       </div>
       <div className="state-email">
        
            <StateComponent statedata={state} setstatedata={setState}  userfocusdata={userFocus} setuserfocusdata={setUserFocus} errmsgdata ={errMsg} seterrmsgdata={setErrMsg} successdata={success} setsuccessdata={setSuccess}  />


        
            <EmailComponent emaildata={email} setemaildata={setEmail} validemaildata={validEmail} setvalidemaildata={setValidEmail}  userfocusdata={userFocus} setuserfocusdata={setUserFocus} errmsgdata ={errMsg} seterrmsgdata={setErrMsg} successdata={success} setsuccessdata={setSuccess}  />

       </div>
       <div className="pwd-matchpwd">
        <PasswordComponent pwddata={pwd} setpwddata={setPwd} validpwddata={validPwd} setvalidpwddata={setValidPwd}  pwdfocusdata={pwdFocus} setpwdfocusdata={setPwdFocus} errmsgdata ={errMsg} seterrmsgdata={setErrMsg} successdata={success} setsuccessdata={setSuccess} />

        <ConfirmPasswordComponent pwddata={pwd} matchpwddata={matchPwd} setmatchpwddata={setMatchPwd} validmatchdata={validMatch} setvalidmatchdata={setValidmatch}  matchfocusdata={matchFocus} setmatchfocusdata={setMatchFocus} errmsgdata ={errMsg} seterrmsgdata={setErrMsg} successdata={success} setsuccessdata={setSuccess} />
       </div>
       
       <div className="button">
            <ButtonComponent namedata={name} userdata={user} pwddata={pwd} validnamedata={validName} validpwddata={validPwd}  validmatchdata={validMatch} emaildata={email} statedata={state} userfocusdata={userFocus} setuserfocusdata={setUserFocus} errmsgdata ={errMsg} seterrmsgdata={setErrMsg} successdata={success} setsuccessdata={setSuccess} />

       </div>
        
    <div className="textnew">
       <div className="redirect"> 
            <p className="reg">
                Already registered?
                     
                        <br />  
                        <span className="line">
                            <a style={{color:'red'}} href="/login">Log In</a>
                        </span>
            </p>
            </div>
                
  
        </div>


                </div>
    </div>
    
    
  ))
}
