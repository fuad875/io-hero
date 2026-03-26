import React from 'react';
import heroIcon from '../../assets/photo/hero.png'
import { Link, useLoaderData, useNavigate } from 'react-router';

const Banner = () => {
    const appsData = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            <div className="grid grid-cols-1  items-center justify-items-center text-center mt-2">
                <div className="">
                    <h1>We Build</h1>
                    <h1>Productive Apps</h1>
                    <p>At Hero.IO, we craft innovative apps designed to make everyday life simplier,
                        smarter and more exciting. our goal is to turn your ideas into digital experiences that truly make an impact. </p>
                    <div>
                        <button className='btn m-2 rounded-2xl'>Google Play</button>
                        <button className='btn m-2 rounded-2xl'>App Store</button>
                    </div>
                </div>
                <div className="mt-2"> <img src={heroIcon} alt="heroIcon" /> </div>
            </div>



            <div className='bg-primary'>
                <h1 className='text-center text-bold text-2xl text-white p-4'>Trusted By Millions, Built For You</h1>
                <div className='flex justify-center items-center gap-10 text-white p-6'>
                    <div>
                        <p className='text-xs'>Total Downloads</p>
                        <h1 className='font-bold text-3xl'>29.6M</h1>
                        <p className='text-xs'>21% More Than Last Month</p>
                    </div>
                    <div>
                        <p className='text-xs'>Total Reviews</p>
                        <h1 className='font-bold text-3xl'>906K</h1>
                        <p className='text-xs'>46% More Than Last Month</p>
                    </div>
                    <div>
                        <p className='text-xs'>Active Apps</p>
                        <h1 className='font-bold text-3xl'>132+</h1>
                        <p className='text-xs'>31 More Will Launch</p>
                    </div>
                </div>
            </div>


            <div>
                <h1 className='font-bold text-3xl text-center'>Trending Apps</h1>
                <p className='text-center '>Explore All the Apps on the market Developed By Apps</p>
                <div onClick={()=>navigate(`/apps`)} className='grid grid-cols-1 md:grid-cols-4 mt-3  items-center justify-items-center '>
                    {
                       [...appsData].sort((a,b)=>b.ratingAvg - a.ratingAvg).slice(0,8).map((appData) => (
                            <div key={appData.id} className="card bg-base-100 w-60 p-4  shadow-sm">
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

                        ))
                    }

                   
                </div>

            </div>


        </div>


    );
};

export default Banner;