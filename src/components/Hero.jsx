import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    const words = ['Developer', 'Designer', 'Creator', 'Problem Solver'];
    const fullText = words[currentWordIndex];

    useEffect(() => {
        let timeout;
        if (displayText.length < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setDisplayText('');
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [displayText, currentWordIndex]);

    return (
        <section id="home" className='min-h-screen flex items-center pt-16 bg-linear-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>

                    <div className='space-y-6 animate-fade-in'>
                        <div className='inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-sm font-medium'>
                            Welcome to my portfolio
                        </div>
                        
                        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white'>
                            Hi, I'm{' '}
                            <span className='bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
                                Hisui
                            </span>
                        </h1>
                        
                        <div className='flex items-center gap-2 text-2xl md:text-3xl font-semibold'>
                            <span className="text-gray-700 dark:text-gray-300">A</span>
                            <span className='bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent min-w-200px'>
                                {displayText}
                                <span className='animate-pulse'>|</span>
                            </span>
                        </div>

                        <p className="text-lg md:text-xl max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
                            Passionate about creating beautiful, functional, and user-friendly digital experiences. 
                            I transform ideas into reality through clean code and thoughtful design.
                        </p>

                        <div className='flex flex-wrap gap-4 pt-4'>
                            <a
                                href='#projects'
                                className='group px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2'>
                                View Projects
                                <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
                            </a>
                            
                            <a
                                href='#contact'
                                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                                Contact Me
                            </a>
                        </div>

                        <div className='flex gap-4 pt-4'>
                            <a
                                href='https://github.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="p-3 rounded-full transition-all duration-300 hover:scale-110 bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
                                <Github size={24} />
                            </a>
                            <a
                                href='https://linkedin.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="p-3 rounded-full transition-all duration-300 hover:scale-110 bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400">
                                <Linkedin size={24} />
                            </a>
                            <a
                                href='mailto:your@email.com'
                                className="p-3 rounded-full transition-all duration-300 hover:scale-110 bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-purple-400">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div className='hidden md:flex items-center justify-center'>
                        <div className='relative w-full h-96'>

                            <div className="absolute top-0 right-0 w-64 h-40 rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-600/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 animate-float shadow-xl">

  <div className="text-3xl font-bold text-gray-900 dark:text-white">
    0
  </div>

  <div className="text-sm text-gray-600 dark:text-gray-400">
    Projects Completed
  </div>
</div>
<div className="absolute bottom-0 left-0 w-64 h-40 rounded-2xl bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-600/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 animate-float-delayed shadow-xl">

  <div className="text-3xl font-bold text-gray-900 dark:text-white">
    0%
  </div>

  <div className="text-sm text-gray-600 dark:text-gray-400">
    Client Satisfaction
  </div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <div className="grid grid-cols-3 gap-4">
    {[...Array(9)].map((_, i) => (
      <div
        key={i}
        className="w-3 h-3 rounded-full
                   bg-blue-300/50 dark:bg-blue-500/30
                   animate-pulse"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;