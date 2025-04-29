'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Close menu when clicking on a link
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
                    <Link href="/products" className="hover:text-accent transition">Products</Link>
                    <Link href="/about" className="hover:text-accent transition">About</Link>
                    <Link href="/contact" className="hover:text-accent transition">Contact</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <button className="hidden md:block bg-accent text-onAccent px-4 py-2 rounded-md hover:bg-accentDark transition">
                        Shop Now
                    </button>

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
                    <motion.div
                        className="md:hidden fixed inset-0 bg-primary/95 backdrop-blur-sm pt-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="flex flex-col items-center space-y-8 py-8">
                            <Link href="/" className="text-2xl hover:text-accent transition" onClick={closeMenu}>Home</Link>
                            <Link href="/products" className="text-2xl hover:text-accent transition" onClick={closeMenu}>Products</Link>
                            <Link href="/about" className="text-2xl hover:text-accent transition" onClick={closeMenu}>About</Link>
                            <Link href="/contact" className="text-2xl hover:text-accent transition" onClick={closeMenu}>Contact</Link>

                            <button className="bg-accent text-onAccent px-6 py-3 rounded-md hover:bg-accentDark transition text-xl">
                                Shop Now
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    )
}