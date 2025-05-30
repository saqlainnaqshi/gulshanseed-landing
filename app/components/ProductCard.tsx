'use client'

import { FiShoppingCart } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

type ProductCardProps = {
    product: {
        id: number
        name: string
        category: string
        price: number
        image: string
        rating: number
        description: string
    }
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="bg-surface rounded-xl shadow-md overflow-hidden border border-surface-200 hover:shadow-lg transition-all"
            whileHover={{ y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300"
                    style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-primary">{product.name}</h3>
                    <span className="bg-accent/10 text-accent text-sm px-2 py-1 rounded">
                        {product.category}
                    </span>
                </div>

                <p className="text-secondary mb-4 line-clamp-2">{product.description}</p>

                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                        <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <button className="bg-accent text-onAccent p-3 rounded-full hover:bg-accentDark transition-all shadow hover:shadow-md">
                        <FiShoppingCart className="text-xl" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}