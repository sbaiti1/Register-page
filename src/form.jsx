import React , {useState} from "react"
import {Routes, Route, useNavigate} from 'react-router-dom';

import Home from "./home";
import arrow from './assets/arrow.svg'
import google from './assets/google.svg'
import mac from './assets/mac.svg'
import fb from './assets/fb.svg'
export default function Form(){
   
    const [form ,  setFom] = useState({
        first_name : "" , 
        last_name : "" ,
        email : "" , 
        password : ""
    })

    function handle(e){
        
        setFom(prev=>({
            ...prev , 
            [e.target.name] : e.target.value
        }))
       
    }
    return(
        <div className="form">
            <h1>Create Account</h1>
            <form action="">
                
                <div className="one">
                <input type="text" name="first_name" placeholder="first name" onChange={handle} value={form.name} />
                <input type="text" name="last_name" placeholder="last name" onChange={handle} value={form.name} />
                </div>
                
                <input type="email" name="email" placeholder="email" onChange={handle} value={form.email} />
                <input className="pwd" type="password" name="password" placeholder="password" onChange={handle} value={form.password} />
                <button >Register <img src={arrow} alt="" /> </button>
                 <br />
            </form>
                 <p>or continue with</p>
                <div className="icons">
                    <img src={google} alt="" />
                    <img src={mac} alt="" />
                    <img src={fb} alt="" />
                    
                </div>

                
        </div>
    )
}
