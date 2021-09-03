import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    let [expandMobileMenu, setExpandMobileMenu] = useState(false);

    return (
        <div className="w-full bg-white text-gray-700 shadow-md absolute top-0 z-40">
            <div className="h-16 flex-none flex justify-between items-center shadow-sm">
                <div className="pl-4 text-lg flex items-center">
                    <div>
                        <img className="w-10 h-10" src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg" />
                    </div>
                    <div className="text-xl font-extralight">
                        Index NFL
                    </div>
                </div>
                <div id="mobile-header-options" className="pr-4 md:hidden" onClick={() => setExpandMobileMenu(!expandMobileMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div id="desktop-header-options" className="pr-4 hidden md:flex">
                    <div className="mx-3">
                        <Link to="/Passing">Passing</Link>
                    </div>
                    <div className="mx-3">
                        <Link to="/Rushing">Rushing</Link>
                    </div>
                    <div className="mx-3">
                        <Link to="/Receiving">Receiving</Link>
                    </div>
                    <div className="mx-3">
                        <Link to="/DownAndDistance">Down & Distance</Link>
                    </div>
                </div>
            </div>
            <div id="mobile-dropdown-menu" className={`${expandMobileMenu ? "max-h-screen mb-2" : "max-h-0 mb-0"} mr-8 text-sm uppercase overflow-hidden flex flex-col items-end transition-maxHeight duration-300`}>
                <div className="mt-2 font-bold">
                    <Link to="/Passing">Leaderboards</Link>
                </div>
                <div className="mr-6 mt-2" onClick={() => setExpandMobileMenu(false)}>
                    <Link to="/Passing">Passing</Link>
                </div>
                <div className="mr-6 mt-2" onClick={() => setExpandMobileMenu(false)}>
                    <Link to="/Rushing">Rushing</Link>
                </div>
                <div className="mr-6 mt-2" onClick={() => setExpandMobileMenu(false)}>
                    <Link to="/Receiving">Receiving</Link>
                </div>
                <div className="mt-2 font-bold" onClick={() => setExpandMobileMenu(false)}>
                    <Link to="/DownAndDistance">Down & Distance</Link>
                </div>
            </div>
        </div>
    )
}
