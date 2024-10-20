import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const hoverLinkStyle = () =>
        "relative hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-t hover:from-indigo-500 hover:via-purple-500 hover:to-transparent font-semibold shadow-lg text-gray-400";

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
        }
        setIsMobileMenuOpen(false); // Close the mobile menu after clicking
    };

    const navLinks = (
        <>
            <li><NavLink onClick={() => handleScrollToSection('home')} className={hoverLinkStyle}>Home</NavLink></li>
            <li><NavLink onClick={() => handleScrollToSection('about')} className={hoverLinkStyle}>About</NavLink></li>
            <li><NavLink onClick={() => handleScrollToSection('project')} className={hoverLinkStyle}>Projects</NavLink></li>
            <li><NavLink onClick={() => handleScrollToSection('contact')} className={hoverLinkStyle}>Contact</NavLink></li>
        </>
    );

    return (
        <header className="font-roboto sticky top-0 bg-neutral-950 text-white z-50 shadow-xl">
            <nav className="container mx-auto flex items-center justify-between p-4">
                {/* Logo and Brand Name */}
                <Link to="/" className="flex items-center space-x-3">
                    <img className="w-14 h-14 rounded-full border-2 border-indigo-500" src="/az1.jpg" alt="Logo" />
                    <span className="text-lg lg:text-xl text-gray-400 font-bold">Nayamul Azim Sarker</span>
                </Link>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
                    {navLinks}
                </ul>
            </nav>

            {/* Mobile Navigation (Dropdown) */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="menu menu-compact bg-white dark:bg-gray-800 text-black dark:text-white mt-2 p-4 shadow-lg rounded-lg space-y-4">
                    {navLinks}
                </ul>
            </div>
        </header>
    );
};

export default Header;
