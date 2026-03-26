import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
 import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {
    const location = useLocation();
    const appIns = location.state;
    // console.log(appIns); 

    const [installedApps, setInstalledApps] = useState([]);


    useEffect(() => {
        const installed = JSON.parse(localStorage.getItem('apps')) || [];
        if (appIns) {
            const exists = installed.find(app => app.id === appIns.id);
            if (!exists) {
                const updated = [...installed, appIns];
                localStorage.setItem('apps', JSON.stringify(updated));
                setInstalledApps(updated);
                 toast(`${appIns.name} installation started!`);
            } else {
                setInstalledApps(installed);
            }
        }

        else {
            setInstalledApps(installed);
        }
    }, [appIns]);


    const handleUninstall = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem('apps', JSON.stringify(updated));
         toast(`App Uninstalled `);
    }

    const sortByRating = () => {
        const sorted = [...installedApps].sort((a, b) => b.ratingAvg - a.ratingAvg);
        setInstalledApps(sorted);
    };

    const sortBySize = () => {
        const sorted = [...installedApps].sort((a, b) => a.size - b.size);
        setInstalledApps(sorted);
    };

    return (

        <div className=" max-w-5xl mx-auto p-4">

            
            <div className="text-center p-4 mb-5">
                <h1 className="text-3xl font-bold">Your Installed Apps</h1>
                <p className="text-gray-500 text-sm">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

        
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold">
                    {installedApps.length} Apps Found
                </h2>

                <div className="flex gap-2">
                    <button onClick={sortBySize} className="btn btn-sm">
                        Sort By Size
                    </button>
                    <button onClick={sortByRating} className="btn btn-sm">
                        Sort By Rating
                    </button>
                </div>
            </div>

         
            <div className="space-y-3">
                {
                    installedApps.map(app => (
                        <div
                            key={app.id}
                            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
                        >
                       
                            <div className="flex items-center gap-4">
                                <img
                                    src={app.image}
                                    className="w-14 h-14 rounded bg-gray-300"
                                />

                                <div>
                                    <h3 className="font-semibold">{app.title}</h3>

                                    <div className="flex gap-3 text-sm text-gray-500 mt-1">
                                        <span>{app.downloads}</span>
                                        <span> {app.ratingAvg}</span>
                                        <span>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>

                        
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="bg-green-500 text-white px-4 py-1 rounded"
                            >   
                                Uninstall
                            </button>
                            
                        </div>
                    ))
                }


                {
                    installedApps.length === 0 && (
                        <h2 className="text-center text-red-500 mt-10">
                            No Installed Apps
                        </h2>
                    )
                }
            </div>
            <ToastContainer />
        </div>

        
    );

};

export default Installation;