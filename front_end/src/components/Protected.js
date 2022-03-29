import React, {useEffect,useLayoutEffect} from 'react'
import { getAuth } from "firebase/auth";
import Login from './Login.js';
import authinit from './authinit.js';
import {useNavigate, Outlet} from 'react-router-dom'

export default function Protected() {
        const navigate = useNavigate()
        const auth = getAuth(authinit);
        const user = auth.currentUser
        useLayoutEffect(() =>{
            if(user){
                navigate('/dashboard')
            }else{
                navigate('/')
            }
        }, [])
        
    return user ? <Outlet/> : <Login/>;
}
