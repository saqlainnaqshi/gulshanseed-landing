import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-onPrimary py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">GulshanSeed</h3>
                        <p className="mb-4">Providing quality seeds for farmers since 1985.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/gulshan.seed/" className="hover:text-accent">Instagram</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li><Link href="/#product" className="hover:text-accent">Vegetable Seeds</Link></li>
                            <li><Link href="/#product" className="hover:text-accent">Fruit Seeds</Link></li>
                            <li><Link href="/#product" className="hover:text-accent">Flower Seeds</Link></li>
                            <li><Link href="/#product" className="hover:text-accent">Herb Seeds</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
                            {/* <li><Link href="#" className="hover:text-accent">Our Team</Link></li>
                            <li><Link href="#" className="hover:text-accent">Careers</Link></li>
                            <li><Link href="#" className="hover:text-accent">Blog</Link></li> */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <address className="not-italic">
                            <p>Ganderpora, Sakidaffar, 190002</p>
                            <p>Srinagar, J&K, India</p>
                            <p>Phone: 0194-2421140</p>
                            <p>Email: gulshanseed@gmail.com</p>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; {currentYear} GulshanSeed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}