'use client'

import { Feature } from '../types'

export default function Features() {
    const features: Feature[] = [
        {
            title: "High Germination Rate",
            description: "Our seeds have a 95%+ germination rate ensuring maximum yield.",
            icon: "🌱"
        },
        {
            title: "Disease Resistant",
            description: "Specially bred to resist common agricultural diseases.",
            icon: "🛡️"
        },
        {
            title: "Climate Adapted",
            description: "Varieties adapted to different climatic conditions.",
            icon: "🌍"
        },
        {
            title: "Expert Support",
            description: "24/7 agricultural expert support for our customers.",
            icon: "👨‍🌾"
        }
    ]

    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose GulshanSeed?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-surface">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                            <p className="text-secondary">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}