import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'

export default function Home() {
    return (
        <div className="flex-grow">
            <HeroSection />
            <Features />
            <Products />
            <Testimonials />
        </div>
    )
}