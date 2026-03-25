import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const Apps = () => {
    const appsData = useLoaderData()
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>Our All Applications</h1>
            <p className='text-center '>Explore All the Apps on the market Developed By Apps.We code for millions</p>
            <div className='mx-15 flex justify-between items-center' >
                <h1 className='font-bold'>({appsData.length})Apps Found</h1>
                <form>
                    <input className='border  rounded' name='search' placeholder='search'></input>
                </form>
            </div>
            <div  className='grid grid-cols-4 mt-3  items-center justify-items-center '>
                {
                    [...appsData].sort((a, b) => b.ratingAvg - a.ratingAvg).map((appData) => (

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

        </div>
            );
};

 export default Apps;