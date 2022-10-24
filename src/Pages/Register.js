import React , {useState} from 'react';

import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';


function Register() {
   const [ userData , setData] = useState({
    name:"",
    email: '',
    userName: "",
    password:"",
    confirmPassword:""
   })

   const [error , setError] = useState({
       nameError : null,
      emailError : null,
      userNameError : null,
      passError : null,
      conPassError : null
   })

   
    // function isValidEmail(email) {
    //   return /\S+@\S+\.\S+/.test(email);
    // }

    const changeData =(event)=>{
      // console.log(event.target.value);
      if(event.target.name === "name"){
        setData({
            ...userData,
            name: event.target.value
        })
        setError({
            ...error,
            nameError: event.target.value.length === 0 ? "This Field is Required" : event.target.value.length < 3 ? "please insert valid name" : null
        })
        console.log(event.target.value)
      }
    ////////////////////////////////////////////////////////////
       else if(event.target.name === "email"){
            setData({
                ...userData,
                email: event.target.value,
            })
            // if (!isValidEmail(event.target.value)) {
            //   setError('Email is invalid');
            // } else {
            //   setError(null);
            // }
            setError({
                ...error,
                emailError: event.target.value.length === 0 ? " Required" : (event.target.value.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? null :' not valid'  
            })
            console.log(event.target.value)
        } 
        ///////////////////////////////////////////////////
        else if(event.target.name === "userName"){
            setData({
                ...userData,
                userName: event.target.value
            })
            setError({
                ...error,
                userNameError: event.target.value.length === 0 ? " Required" 
                : (event.target.value.match( /^[A-Za-z]*$/)) ? null :' not valid '
            })
            console.log(event.target.value)
        }
        /////////////////////////////////////////////    
        else if(event.target.name === "password"){
          setData({
              ...userData,
              password: event.target.value,
          })
          setError({
               ...error,
              passError: event.target.value.length === 0 ? 
              "required": (event.target.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) ?
               null :' is less than 8 characters'
            })
          console.log(event.target.value)
      }
      ////////////////////////////////////
      else if(event.target.name === "conPassword"){
        setData({
            ...userData,
            confirmPassword: event.target.value,
        })
        setError({
            ...error,
            conPassError: event.target.value.length === 0 ? " Required" : (event.target.value === userData.password) ? null :' invalid not match'
        })
        console.log(event.target.value)
      }
    }
    const history = useHistory()
    const submitData = (event) => {
        // e.preventDefault()
        if(!error.nameError && !error.emailError && !error.passError){
            event.preventDefault()
            history.push("/home")
        }
    }
  return (
    <Form style={{width:"60%" , margin:"auto"}} onSubmit={(event) => submitData(event)}>

        <h2 className='text-center fw-bold' style={{color: "black"}}>Register</h2>
        <Form.Group className="mb-3" controlId="formGroupName">
            <input style={{width:"85%",height: "40px",marginLeft:"27px"}} type="text" name='name' 
            value={userData.name} placeholder="Enter ur Name"
                onChange={(event)=>changeData(event)} />
                {error && <p style={{color: 'red'}}>{error.nameError}</p>}  
      </Form.Group>    
          {/*//////////////////////////////////  */}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <input style={{width:"85%",height: "40px",marginLeft:"27px"}} type="email" name='email' 
        value={userData.email} placeholder="Enter email"
         onChange={(event)=>changeData(event)} />
           {error && <p style={{color: 'red'}}>{error.emailError}</p>}  
      </Form.Group>
      {/* /////////////////////////////////////////////////// */}
      <Form.Group className="mb-3" controlId="formGroupUserName">
            <input style={{width:"85%",height: "40px",marginLeft:"27px"}} type="text" name='userName' 
            value={userData.userName} placeholder="Enter ur user Name"
                onChange={(event)=>changeData(event)} />
                {error && <p style={{color: 'red'}}>{error.userNameError}</p>}  
      </Form.Group>  
      {/* //////////////////////////////////////////////// */}
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <input style={{width:"85%",height: "40px",marginLeft:"27px"}}
         type="password" name='password' placeholder="Password"
         onChange={(event)=>changeData(event)} value={userData.password} />
         {error && <p style={{color: 'red'}}>{error.passError}</p>}
      </Form.Group>
      {/* /////////////////////////////////////////////////// */}
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <input style={{width:"85%",height: "40px",marginLeft:"27px"}}
         type="password" name='conPassword' placeholder="Confirm Password"
         onChange={(event)=>changeData(event)} value={userData.confirmPassword} />

         {error && <p style={{color: 'red'}}>{error.conPassError}</p>}
      </Form.Group>
      <button type="submit" disabled={error.emailError || error.passError} className="btn btn-secondary mx-auto my-3 mt-3 d-block " >Register</button>
    </Form>
  );
}

export default Register;