import React from 'react';
import appError from '../../../assets/photo/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigateHome = useNavigate()
    return (
        <div>
        <div className=' relative'>
        <div className=' absolute'>
             <h1 >OOps Page not found </h1>
            <button onClick={()=>navigateHome(`/`)} className='btn btn-primary'>Go Home</button>
        </div>
            <img className='w-[1600px] h-[840px] object-cover object-center' src={appError} alt=''/>
          
           
           
        </div>
            
        </div>
        
    );
};

export default ErrorPage;