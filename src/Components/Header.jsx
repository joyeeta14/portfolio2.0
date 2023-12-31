// import React from 'react';

const Header = () => {
    const options = <>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
    </>
    return (
        <div className="navbar fixed mb-10 z-10 text-black bg-white border-b-4 border-base-300 drop-shadow-lg">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52">
                    {options}
                </ul>
            </div>
            <a className="ms-10 text-xl">Joyeeta<span className="text-violet-500">SP</span>
            </a>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu  menu-horizontal px-1">
        {options}
            </ul>
        </div>
    </div>
    );
};

export default Header;