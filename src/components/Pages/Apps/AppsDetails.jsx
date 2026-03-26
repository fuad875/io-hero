import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
 import { ToastContainer, toast } from 'react-toastify';

const AppsDetails = () => {

    const { id } = useParams();
    const appId = parseInt(id);
    const appData = useLoaderData();
    const  navigateInstallation = useNavigate();

    const appInfo = appData.find(app => app.id === appId);
    // console.log(appInfo);
    return (
    <div className=''>
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={appInfo.image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className=" text-4xl">{appInfo.title}</h2>
                <p>Developed by:<span className='font-bold text-2xl text-amber-500 mx-1'>{appInfo.companyName} </span></p>
                  <div className='flex  items-center gap-6 '>
                    <div>
                        <p className='text-xs'>Downloads</p>
                        <h1 className='font-bold text-3xl'>{appInfo.downloads}</h1>
                        
                    </div>
                    <div>
                        <p className='text-xs'>Avarage Rating</p>
                        <h1 className='font-bold text-3xl'>{appInfo.ratingAvg}</h1>
                       
                    </div>
                    <div>
                        <p className='text-xs'>Total Reviews</p>
                        <h1 className='font-bold text-3xl'>{appInfo.reviews}</h1>
                      
                    </div>
                </div>
                <div className="card-actions">
                    <button  onClick={()=> {
                       
                        navigateInstallation('/installation',{state:appInfo})}}  className="btn btn-accent text-2xl">Install now ( {appInfo.size})</button>
                   
                </div>
                 <ToastContainer />
            </div>
        </div>
          
    </div> 
    );
};

export default AppsDetails;