import React from 'react';
import { Link, useNavigate} from 'react-router';
import logoimg from '../../assets/photo/logo.png';
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    const links = <>
        <Link to="/"><span className='font-bold mx-2 px-2 rounded hover:bg-sky-300'>Home</span></Link>
        <Link to="/apps"><span className='font-bold mx-2 px-2 rounded hover:bg-sky-300'>Apps</span></Link>
        <Link to="/installation"><span className='font-bold mx-2 px-2 rounded hover:bg-sky-300'>Installation</span></Link>
    </>

    const goHome = useNavigate();
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a onClick={()=>goHome(`/`)} className="btn btn-ghost text-xl"><span><img className='h-10 object-cover' src={logoimg}/></span>HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/fuad875?tab=repositories' target='blank' className="btn btn-primary"><FaGithub size={15} />Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;