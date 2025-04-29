'use client'

import { Testimonial } from '../types'

export default function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            id: '1',
            name: 'Rajesh Kumar',
            role: 'Farm Owner, Punjab',
            content: 'GulshanSeed products have increased my yield by 30% compared to other brands. Highly recommended!',
            rating: 5
        },
        {
            id: '2',
            name: 'Priya Sharma',
            role: 'Agricultural Engineer',
            content: 'The quality and germination rate of these seeds is exceptional. My clients are always satisfied.',
            rating: 4
        },
        {
            id: '3',
            name: 'Amit Patel',
            role: 'Organic Farmer',
            content: 'Been using GulshanSeed for 5 years now. Consistent quality and excellent customer support.',
            rating: 5
        }
    ]

    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-6 rounded-lg shadow-md bg-surface">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-secondary mb-6">{testimonial.content}</p>
                            <div>
                                <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                                <p className="text-sm text-secondary">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}