import React from 'react';
import heroIcon from '../../assets/photo/hero.png'

const Banner = () => {
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
                 <h1 className='text-center'>Trusted By Millions, Built For You</h1>
                <div>

                </div>
             </div>      
        </div>
        

    );
};

export default Banner;