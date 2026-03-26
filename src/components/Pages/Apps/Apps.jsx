import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Link } from 'react-router';
import appError from '../../../assets/photo/App-Error.png';

const Apps = () => {
    const appsData = useLoaderData();
    const [search, setSearch] = useState('');

    
        const navigateBack = useNavigate()
    

    const searchApps = appsData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>Our All Applications</h1>
            <p className='text-center '>Explore All the Apps on the market Developed By Apps.We code for millions</p>
            <div className='mx-15 flex justify-between items-center' >
                <h1 className='font-bold'>({searchApps.length})Apps Found</h1>
                <input placeholder='Search apps...' value={search} onChange={(e) => setSearch(e.target.value)} ></input>
            </div>
            {
                searchApps.length === 0
                    ?
                    (
                        <div className="relative w-full h-screen flex flex-col items-center justify-center">

                            <img
                                src={appError}
                                alt="No app found"
                                className="max-w-xs md:max-w-md lg:max-w-lg object-contain"
                            />

                            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                         
                                <button onClick={()=>navigateBack(-1)} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                                    Home
                                </button>
                       
                            </div>

                        </div>

                    )
                    :

                    (
                        <div className='grid grid-cols-1 md:grid-cols-4 mt-3  items-center justify-items-center '>
                            {
                                [...searchApps].sort((a, b) => b.ratingAvg - a.ratingAvg).map((appData) => (

                                    <Link to={`/apps/${appData.id}`}>
                                        <div className="card bg-base-100 w-60 p-4  shadow-sm">
                                            <figure>
                                                <img className='object-cover rounded hover:scale-100 transition-all hover:-rotate-3'
                                                    src={appData.image}
                                                    alt="app" />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {appData.title}

                                                </h2>

                                                <div className=" flex justify-between ">
                                                    <div className="badge badge-outline">{appData.downloads}</div>
                                                    <div className="badge badge-outline">{appData.ratingAvg}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                ))
                            }
                        </div>
                    )
            }


        </div>
    );
};

export default Apps;