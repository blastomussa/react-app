import { useState } from 'react';
import '../assets/index.css'
import Form from '../components/form';
import logo from '../assets/logo.png';

const Login = () => {
    return (
       <div className='h-screen flex justify-center items-center bg-slate-100'>
            
            <div className='flex flex-col content-center h-auto w-1/3 rounded-lg bg-white shadow-sm border-2 border-slate-200'>
                <h3 className='p-2 text-xl font-bold text-center'>Sign in</h3>
                <h5 className='p-2 texr-lg text-center'>to continue to Soap Recipe App</h5>
                <Form />
                <img className="m-2 flex " src={logo}/>

            </div>
       </div>
    )
}
export default Login;