import React, { useState } from 'react';
import './header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className='header'>
            <img alt="" loading="lazy" className="top-left-img desktop-img" src="/images/header/header-top-left.svg" />
            <img alt="" loading="lazy" className="top-left-img mobile-img" src="/images/header/header-top-left-res.svg" />
            <img alt="" loading="lazy" className="top-right-img desktop-img" src="/images/header/header-top-right.svg" />
            <img alt="" loading="lazy" className="top-right-img mobile-img" src="/images/header/header-top-right-res.svg" />
            <div>
                <div className='header-content'>
                    <img src='/images/header/logo.webp' alt='' className="logo" height='80%' />
                    <div className="hamburger" onClick={toggleMenu}>
                        <svg width="30" height="30" viewBox="0 0 100 80" fill="#9BA885">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                    </div>

                    <nav className={`nav nav${menuOpen ? '-open' : '-close'}`}>
                        <ul>
                            <li>Vision</li>
                            <li>Airdrop</li>
                            <li>Leaderboard</li>
                            <li>Devs</li>
                            <li>Bridge</li>
                            <li>
                                <svg fill="#9BA885" width="30px" height="30px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" stroke="#9BA885">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M16.417 9.57a7.917 7.917 0 1 1-8.144-7.908 1.758 1.758 0 0 1 .451 0 7.913 7.913 0 0 1 7.693 7.907zM5.85 15.838q.254.107.515.193a11.772 11.772 0 0 1-1.572-5.92h-3.08a6.816 6.816 0 0 0 4.137 5.727zM2.226 6.922a6.727 6.727 0 0 0-.511 2.082h3.078a11.83 11.83 0 0 1 1.55-5.89q-.249.083-.493.186a6.834 6.834 0 0 0-3.624 3.622zm8.87 2.082a14.405 14.405 0 0 0-.261-2.31 9.847 9.847 0 0 0-.713-2.26c-.447-.952-1.009-1.573-1.497-1.667a8.468 8.468 0 0 0-.253 0c-.488.094-1.05.715-1.497 1.668a9.847 9.847 0 0 0-.712 2.26 14.404 14.404 0 0 0-.261 2.309zm-.974 5.676a9.844 9.844 0 0 0 .713-2.26 14.413 14.413 0 0 0 .26-2.309H5.903a14.412 14.412 0 0 0 .261 2.31 9.844 9.844 0 0 0 .712 2.259c.487 1.036 1.109 1.68 1.624 1.68s1.137-.644 1.623-1.68zm4.652-2.462a6.737 6.737 0 0 0 .513-2.107h-3.082a11.77 11.77 0 0 1-1.572 5.922q.261-.086.517-.194a6.834 6.834 0 0 0 3.624-3.621zM11.15 3.3a6.82 6.82 0 0 0-.496-.187 11.828 11.828 0 0 1 1.55 5.89h3.081A6.815 6.815 0 0 0 11.15 3.3z" />
                                    </g>
                                </svg>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header-line-section'><div className='header-line'></div></div>
            </div>
        </header>
    );
}

export default Header;
