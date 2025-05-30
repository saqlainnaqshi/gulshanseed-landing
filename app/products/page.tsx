'use client'

import { useState } from 'react'
import { FiFilter, FiSearch } from 'react-icons/fi'
import ProductCard from '@/components/ProductCard'

type Product = {
    id: number
    name: string
    category: string
    price: number
    image: string
    rating: number
    description: string
}

const products: Product[] = [
    {
        id: 1,
        name: 'Premium Wheat Seeds',
        category: 'Grains',
        price: 24.99,
        image: '/images/wheat-seeds.jpg',
        rating: 4.8,
        description: 'High-yield wheat seeds with 98% germination rate'
    },
    {
        id: 2,
        name: 'Organic Tomato Seeds',
        category: 'Vegetables',
        price: 12.99,
        image: '/images/tomato-seeds.jpg',
        rating: 4.5,
        description: 'Non-GMO tomato seeds for home gardens'
    },
    {
        id: 3,
        name: 'Hybrid Corn Seeds',
        category: 'Grains',
        price: 29.99,
        image: '/images/corn-seeds.jpg',
        rating: 4.7,
        description: 'Drought-resistant corn variety'
    },
    {
        id: 4,
        name: 'Basil Herb Seeds',
        category: 'Herbs',
        price: 8.99,
        image: '/images/basil-seeds.jpg',
        rating: 4.3,
        description: 'Aromatic basil for culinary use'
    },
    {
        id: 5,
        name: 'Sunflower Seeds',
        category: 'Flowers',
        price: 7.99,
        image: '/images/sunflower-seeds.jpg',
        rating: 4.6,
        description: 'Giant sunflower variety, grows up to 12ft'
    },
    {
        id: 6,
        name: 'Organic Carrot Seeds',
        category: 'Vegetables',
        price: 9.99,
        image: '/images/carrot-seeds.jpg',
        rating: 4.4,
        description: 'Sweet and crunchy carrot variety'
    }
]

const categories = [...new Set(products.map(product => product.category))]

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('All')
    const [showFilters, setShowFilters] = useState(false)

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-surface/50">
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <section className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentDark">
                        Our Premium Seed Collection
                    </h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        High-quality seeds for farmers and home gardeners
                    </p>
                </section>

                {/* Filters */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 pr-4 py-2 w-full rounded-lg border border-surface-300 focus:ring-2 focus:ring-accent focus:border-transparent transition"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Mobile Filter Button */}
                        <button
                            className="md:hidden flex items-center gap-2 px-4 py-2 bg-surface rounded-lg shadow-sm border border-surface-200"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <FiFilter />
                            Filters
                        </button>
                    </div>

                    {/* Category Filters - Desktop */}
                    <div className="hidden md:flex justify-center gap-4 mb-6">
                        <button
                            className={`px-4 py-2 rounded-full ${selectedCategory === 'All' ? 'bg-accent text-onAccent' : 'bg-surface text-onSurface hover:bg-surface-100'}`}
                            onClick={() => setSelectedCategory('All')}
                        >
                            All Products
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-accent text-onAccent' : 'bg-surface text-onSurface hover:bg-surface-100'}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Category Filters - Mobile */}
                    {showFilters && (
                        <div className="md:hidden grid grid-cols-2 gap-2 mb-6">
                            <button
                                className={`px-4 py-2 rounded-full ${selectedCategory === 'All' ? 'bg-accent text-onAccent' : 'bg-surface text-onSurface'}`}
                                onClick={() => {
                                    setSelectedCategory('All')
                                    setShowFilters(false)
                                }}
                            >
                                All
                            </button>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-accent text-onAccent' : 'bg-surface text-onSurface'}`}
                                    onClick={() => {
                                        setSelectedCategory(category)
                                        setShowFilters(false)
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-5xl mb-4">🌱</div>
                        <h3 className="text-2xl font-medium text-onSurface mb-2">No products found</h3>
                        <p className="text-secondary">Try adjusting your search or filter criteria</p>
                    </div>
                )}

                {/* CTA Section */}
                <section className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Can't find what you're looking for?</h2>
                    <p className="text-secondary mb-6 max-w-2xl mx-auto">
                        We source special seed varieties upon request. Contact our team for custom orders.
                    </p>
                    <button className="bg-accent text-onAccent px-6 py-3 rounded-lg hover:bg-accentDark transition-all shadow-md hover:shadow-lg">
                        Contact Our Experts
                    </button>
                </section>
            </div>
        </div>
    )
}