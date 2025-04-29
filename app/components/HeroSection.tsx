'use client'

import { useTheme } from '../context/ThemeContext'
import Image from 'next/image'

export default function HeroSection() {
    const { theme } = useTheme()

    return (
        <section className={`hero-section bg-gradient-to-r ${theme === 'light' ? 'from-green-100 to-blue-100' : 'from-gray-800 to-gray-900'} py-20`}>
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Premium Quality Seeds for Your Farm
                    </h1>
                    <p className="text-lg mb-8 text-secondary">
                        GulshanSeed provides the highest quality agricultural seeds to help farmers achieve maximum yield.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-accent text-onAccent px-6 py-3 rounded-md hover:bg-accentDark transition">
                            Browse Products
                        </button>
                        <button className="border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-onAccent transition">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={theme === 'light' ? "/images/hero-light.jpg" : "/images/hero-dark.png"}
                        alt="Farm seeds"
                        width={500}
                        height={400}
                        className="max-w-md w-36 h-36 rounded-full"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}