import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md transition-[background-color,border-color] duration-150 ease-out">
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-center items-center h-16'>

                        <div className='hidden md:block'>
                            <div className='ml-10 mr-10 flex items-baseline space-x-8'>
                                {navItems.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                                    ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-900 hover:text-blue-400' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}`}>
                                            {item.name}
                                        </a>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <button 
                            onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); }}
                            className={`p-2 rounded-full transition-colors duration-200
                            ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700' }`}
                            aria-label='Toggle Theme'>
                                {theme === 'dark' ? <Sun size={20}/> : <Moon size={20}/>}
                            </button>

                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className='md:hidden p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700' 
                            aria-label='Toggle menu'>
                                {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className='md:hidden'>
                        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3
                            ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                            {navItems.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                                    ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}`}
                                    onClick={() => setIsMenuOpen(false)}>
                                        {item.name}
                                    </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
    );
};

export default Navbar