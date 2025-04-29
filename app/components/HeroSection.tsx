'use client'

import { useTheme } from '../context/ThemeContext'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const heroSlides = [
    {
        title: "Premium Quality Seeds for Your Farm",
        description: "GulshanSeed provides the highest quality agricultural seeds to help farmers achieve maximum yield.",
        lightImage: "/images/hero-dark.jpg",
        darkImage: "/images/hero-dark.jpg",
        ctaPrimary: "Browse Products",
        ctaSecondary: "Learn More"
    },
    {
        title: "Innovative Farming Solutions",
        description: "Discover our cutting-edge agricultural technologies designed to boost your productivity.",
        lightImage: "/images/innovation-dark.jpg",
        darkImage: "/images/innovation-dark.jpg",
        ctaPrimary: "View Innovations",
        ctaSecondary: "Our Technology"
    },
    {
        title: "Sustainable Agriculture",
        description: "Join us in cultivating a greener future with eco-friendly farming practices.",
        lightImage: "/images/sustainable-dark.jpg",
        darkImage: "/images/sustainable-dark.jpg",
        ctaPrimary: "Sustainable Options",
        ctaSecondary: "Our Mission"
    }
]

export default function HeroSection() {
    const { theme } = useTheme()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(1)
    const [imageLoaded, setImageLoaded] = useState(false)

    const goToSlide = useCallback((index: number) => {
        setDirection(index > currentSlide ? 1 : -1)
        setCurrentSlide(index)
        setImageLoaded(false)
    }, [currentSlide])

    // Auto-rotate slides every 7 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToSlide((currentSlide + 1) % heroSlides.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [currentSlide, goToSlide])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className={`hero-section bg-gradient-to-r ${theme === 'light' ? 'from-green-50 to-blue-50' : 'from-gray-800 to-gray-900'} py-16 md:py-24 overflow-hidden`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center relative">
                    {/* Content */}
                    <div className="md:w-1/2 mb-12 md:mb-0 z-10 md:pr-8">
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={`content-${currentSlide}`}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6"
                            >
                                <motion.h1
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentDark leading-tight"
                                >
                                    {heroSlides[currentSlide].title}
                                </motion.h1>

                                <motion.p
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.1 }}
                                    className="text-lg md:text-xl text-secondary"
                                >
                                    {heroSlides[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap gap-4 pt-2"
                                >
                                    <button
                                        className="bg-accent text-onAccent px-6 py-3 rounded-lg hover:bg-accentDark transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                                        aria-label={heroSlides[currentSlide].ctaPrimary}
                                    >
                                        {heroSlides[currentSlide].ctaPrimary}
                                    </button>
                                    <button
                                        className="border-2 border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-onAccent transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                                        aria-label={heroSlides[currentSlide].ctaSecondary}
                                    >
                                        {heroSlides[currentSlide].ctaSecondary}
                                    </button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Image Carousel */}
                    <div className="md:w-1/2 flex justify-center relative h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full">
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={`image-${currentSlide}`}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="relative w-full h-full">
                                    {!imageLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
                                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                                        </div>
                                    )}
                                    <Image
                                        src={theme === 'light' ? heroSlides[currentSlide].lightImage : heroSlides[currentSlide].darkImage}
                                        alt={heroSlides[currentSlide].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={`object-cover rounded-xl shadow-xl transition-opacity ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        priority={currentSlide === 0}
                                        onLoad={() => setImageLoaded(true)}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Centered Slide Indicators */}
                <div className="flex justify-center mt-8 md:mt-12 space-x-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-accent w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={currentSlide === index ? 'true' : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}