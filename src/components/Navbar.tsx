'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when changing route
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isHome = pathname === '/';
    const isDarkBackground = isHome && !scrolled;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src={isDarkBackground ? "/rumiwhitelogo.png" : "/rumiblacklogo.png"}
                        width={80}
                        height={30}
                        alt="Rumi Events Logo"

                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`relative font-medium text-sm transition-colors ${isDarkBackground
                                        ? 'text-white hover:text-stone-200'
                                        : isActive ? 'text-primary-700' : 'text-stone-800 hover:text-primary-600'
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${isDarkBackground ? 'bg-white' : 'bg-primary-600'}`}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}

                    <Link
                        href="/contact"
                        className={`ml-4 px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${isDarkBackground ? 'bg-white text-primary-900 hover:bg-stone-100' : 'bg-primary-700 text-white hover:bg-primary-800'
                            }`}
                    >
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden p-2 ${isDarkBackground ? 'text-white' : 'text-primary-900'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-lg border-b border-primary-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`text-lg font-medium py-2 border-b border-stone-100 ${pathname === link.path ? 'text-primary-600' : 'text-stone-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-4 w-full text-center px-6 py-3 rounded-full bg-primary-700 text-white font-medium hover:bg-primary-800 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
