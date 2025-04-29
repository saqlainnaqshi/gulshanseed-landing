import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <HeroSection />
                    <Features />
                    <Products />
                    <Testimonials />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}