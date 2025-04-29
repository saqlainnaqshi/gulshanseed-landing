'use client'

import { Product } from '../types'

export default function Products() {
    const products: Product[] = [
        {
            id: '1',
            name: 'Premium Wheat Seeds',
            category: 'Grains',
            price: 12.99,
            image: '/images/wheat-seeds.jpg'
        },
        {
            id: '2',
            name: 'Hybrid Tomato Seeds',
            category: 'Vegetables',
            price: 8.99,
            image: '/images/tomato-seeds.jpg'
        },
        {
            id: '3',
            name: 'Organic Basil Seeds',
            category: 'Herbs',
            price: 6.99,
            image: '/images/basil-seeds.jpg'
        },
        {
            id: '4',
            name: 'Sunflower Seeds',
            category: 'Flowers',
            price: 5.99,
            image: '/images/sunflower-seeds.jpg'
        }
    ]

    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-surface rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="h-48 bg-gray-200 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-sm text-secondary">{product.category}</span>
                                <h3 className="text-xl font-semibold mt-2 text-primary">{product.name}</h3>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                                    <button className="bg-accent text-onAccent px-4 py-2 rounded-md hover:bg-accentDark transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-onAccent transition">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    )
}