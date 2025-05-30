'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const closeMenu = () => setIsOpen(false)

    // Track scroll position for header shadow
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <header className={`bg-primary text-onPrimary sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
            <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    GulshanSeed
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-accent transition">Home</Link>
                    {/* <Link href="/products" className="hover:text-accent transition">Products</Link> */}
                    <Link href="/about" className="hover:text-accent transition">About</Link>
                    <Link href="/contact" className="hover:text-accent transition">Contact</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    {/* <button className="hidden md:block bg-accent text-onAccent px-4 py-2 rounded-md hover:bg-accentDark transition">
                        Shop Now
                    </button> */}
                    <div className="hidden md:block text-center">
                        <button
                            className="bg-accent text-onAccent px-4 py-2 rounded-md opacity-50 cursor-not-allowed transition"
                            disabled
                        >
                            Shop Now
                        </button>
                        <p className="text-xs text-onPrimary mt-1">Coming Soon</p>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden p-2 rounded-md focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col gap-1">
                            <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay to close menu on outside click */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />

                        {/* Menu itself */}
                        <motion.div
                            className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-primary z-50 backdrop-blur-sm pt-20"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                        >
                            {/* Close icon */}
                            <button
                                className="absolute top-4 right-4 text-3xl font-bold text-onPrimary"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                &times;
                            </button>

                            <nav className="flex flex-col items-center space-y-8 py-8">
                                <Link href="/" className="text-2xl hover:text-accent transition" onClick={closeMenu}>Home</Link>
                                {/* <Link href="/products" className="text-2xl hover:text-accent transition" onClick={closeMenu}>Products</Link> */}
                                <Link href="/about" className="text-2xl hover:text-accent transition" onClick={closeMenu}>About</Link>
                                <Link href="/contact" className="text-2xl hover:text-accent transition" onClick={closeMenu}>Contact</Link>

                                {/* <button className="bg-accent text-onAccent px-6 py-3 rounded-md hover:bg-accentDark transition text-xl">
                                    Shop Now
                                </button> */}
                                <button
                                    className="md:hidden p-2 rounded-md focus:outline-none"
                                    onClick={() => setIsOpen(!isOpen)}
                                    aria-label="Toggle menu"
                                >
                                    <div className="w-6 flex flex-col gap-1">
                                        <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                        <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                        <span className={`h-0.5 bg-current rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                                    </div>
                                </button>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header >
    )
}