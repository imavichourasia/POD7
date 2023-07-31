import React,{useEffect,useState,useRef,useContext} from 'react'
import  {useAuth}  from './useAuth'
import {Link,useNavigate,useLocation} from 'react-router-dom'

import EmployeeService from './EmployeeService'


import './LoginComponent.css'

// import {Mainpage} from "POD7/Mainpage";


export const LoginComponent = () => {
    const navigate=useNavigate()
    // const {setAuth}=useAuth();
 
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    //REFRENCES
    const userRef=useRef();
    const errorRef=useRef();
    //STATE VARIABLES
    const [user,setUser]=useState('')
    
    const [pwd,setPwd]=useState('')
    
    const  [errorMessage,setErrorMessage]=useState('');
    const [success,setSuccess]=useState(false);
    
  

     useEffect(()=>{
        setErrorMessage('')
     },[user,pwd])
     
     //EVENT HANDLER FOR SIGNin BUTTON 
       const handleSignin=(e)=>{
        e.preventDefault();
        // const userRegnData={user,pwd}
        const logindata={"email":user,"password":pwd}
        console.log(user,pwd)
        console.log('User data populated using state variable :'+logindata)
        EmployeeService.login(logindata).
        then((response=>{
        //  console.log('Response token from user login  API POST  :'+JSON.stringify(response))
        if(response.data.statusCode==100){
          console.log("wrong")
          alert("Invalid")
        }else{
        console.log(response)
        navigate('/Mainpage')

        }
       
        console.log("setting auth context variable with uname ,pasword and token")
        // setSuccess(true)  
                    

        })).
    catch(error=>{
        console.log(error);
         if(!error?.response){
            setErrorMessage('Server not found')
            

         }
        else{
            setErrorMessage('Login Failed')
        }
        
        })
  }

  return ((success)?

  <>
  <section>
      
      { navigate(from,{replace:true})}
      

  </section>
</>
:(

<div id="background" className="input-box">
    <section className='heading'>
<div className='container'>
        <p ref={errorRef} className={errorMessage?"errmsg":"offscreen"}
        aria-live="assertive">{errorMessage}</p>
        <h3 style={{color:'white'}}>Login</h3>

        <form >
            {/* USERNAME */}
          <label htmlFor="username">Username:</label>
          <input
             type="text"
             id="username"
             ref={userRef}
             autoComplete="off"
             onChange={(e)=>setUser(e.target.value)}
             value={user}
             required
             />
             {/* PASSWORD */}
             <label htmlFor="password">Password:</label>
          <input
             type="password"
             id="password"
             onChange={(e)=>setPwd(e.target.value)}
             value={pwd}
             required
             />
             <br/>
             <br/>
             {/* SIGN IN BUTTON */}
             <button onClick={(e)=>{handleSignin(e)}}>Sign in</button>
            </form>
            <div className='signintext'>
            {/* <SearchPage userdata={user}/> */}
            <p>
                        Not registered?<br />
                        
                        <span className="line">
                            <a style={{ fontSize:'200'}}href="/">Signup</a>
                        </span>
                    </p>
                    
                    </div>
                    </div>

    </section>
    </div>)
  )
}
