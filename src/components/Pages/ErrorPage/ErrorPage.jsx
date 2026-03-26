import React from 'react';
import appErrorpage from '../../../assets/photo/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigateHome = useNavigate()
    return (

        <div className="relative w-full h-screen flex flex-col items-center justify-center">

            <img
                src={appErrorpage}
                alt="No app found"
                className="max-w-xs md:max-w-md lg:max-w-lg object-contain"
            />

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">

                <button onClick={() => navigateHome(`/`)} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                    Home
                </button>

            </div>

        </div>


    );
};

export default ErrorPage;