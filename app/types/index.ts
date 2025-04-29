export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
}