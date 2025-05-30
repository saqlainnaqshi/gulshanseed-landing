'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

const Map = dynamic(
    () => import('@/components/Map'),
    {
        ssr: false,
        loading: () => <div className="h-64 md:h-96 w-full bg-gray-100 rounded-lg animate-pulse" />
    }
)

export default function ContactPage() {
    const mapCenter: L.LatLngTuple = [34.095824932002486, 74.78925523372179];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-background to-surface/50">
                <div className="container max-w-6xl mx-auto px-6 py-16 md:py-24">
                    {/* Hero Section */}
                    <motion.section
                        className="mb-20 md:mb-24 text-center px-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.25,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        {/* Animated decorative elements */}
                        <motion.div
                            className="absolute left-1/4 top-20 w-32 h-32 rounded-full bg-accent/10 blur-3xl -z-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.2 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        />

                        <motion.div
                            className="absolute right-1/4 top-32 w-40 h-40 rounded-full bg-accentDark/10 blur-3xl -z-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.2 }}
                            transition={{ delay: 0.7, duration: 1 }}
                        />

                        {/* Main heading */}
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 pb-1 relative inline-block"
                            initial={{
                                y: 40,
                                opacity: 0,
                                backgroundPosition: '0% 50%'
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                backgroundPosition: '100% 50%'
                            }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                backgroundPosition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse"
                                }
                            }}
                            style={{
                                color: 'transparent',
                                backgroundImage: 'linear-gradient(to right, #3a7d44, #f57c00)',
                                backgroundSize: '200% 200%',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                lineHeight: '1.2'
                            }}
                        >
                            Let&apos;s Grow <span className="whitespace-nowrap">Together</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl text-secondary/90 max-w-3xl mx-auto leading-relaxed"
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        damping: 10,
                                        stiffness: 100,
                                        delay: 0.2
                                    }
                                }
                            }}
                        >
                            Connect with our team for inquiries, partnerships, or to share your farming experiences.
                            Together we can cultivate success.
                        </motion.p>

                        {/* Animated divider */}
                        <motion.div
                            className="mt-12 relative"
                            variants={{
                                hidden: { width: 0 },
                                visible: {
                                    width: "100%",
                                    transition: { duration: 1, ease: "circOut" }
                                }
                            }}
                        >
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                            <motion.div
                                className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                            />
                        </motion.div>

                        {/* Decorative plant elements (optional) */}
                        <motion.div
                            className="absolute left-10 bottom-0 text-green-400 opacity-20"
                            initial={{ y: 20, rotate: -15, opacity: 0 }}
                            animate={{ y: 0, rotate: 0, opacity: 0.2 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 2v20M12 2c3 6 6 9 9 9M12 2c-3 6-6 9-9 9" />
                            </svg>
                        </motion.div>
                    </motion.section>

                    {/* Contact Content */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-surface p-8 rounded-2xl shadow-lg border border-surface-200"
                        >
                            <h2 className="text-2xl font-bold mb-8 text-primary flex items-center">
                                <span className="w-4 h-4 bg-accent rounded-full mr-3"></span>
                                Get In Touch
                            </h2>

                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                                        <FiMail className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-onSurface">Email</h3>
                                        <a href="mailto:contact@gulshanseed.com" className="text-secondary hover:text-accent transition">
                                            gulshanseed@gmail.com
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start">
                                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                                        <FiPhone className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-onSurface">Phone</h3>
                                        <a href="tel:+0194-2421140" className="text-secondary hover:text-accent transition">
                                            0194-2421140
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                                        <FiMapPin className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-onSurface">Address</h3>
                                        <p className="text-secondary">
                                            Ganderpora, Sakidaffar, Srinagar, J&K
                                        </p>
                                        <p className="text-secondary">
                                            190002
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <h3 className="font-medium text-onSurface mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {/* <a href="#" className="bg-surface-200 p-3 rounded-full hover:bg-accent/10 hover:text-accent transition">
                                        <FiTwitter className="text-xl" />
                                    </a>
                                    <a href="#" className="bg-surface-200 p-3 rounded-full hover:bg-accent/10 hover:text-accent transition">
                                        <FiFacebook className="text-xl" />
                                    </a> */}
                                    <a href="https://www.instagram.com/gulshan.seed/#" target="_blank" rel="noopener noreferrer" className="bg-surface-200 p-3 rounded-full hover:bg-accent/10 hover:text-accent transition">
                                        <FiInstagram className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        {/* <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-surface p-8 rounded-2xl shadow-lg border border-surface-200"
                        >
                            <h2 className="text-2xl font-bold mb-8 text-primary flex items-center">
                                <span className="w-4 h-4 bg-accent rounded-full mr-3"></span>
                                Send Us a Message
                            </h2>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-onSurface mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:ring-2 focus:ring-accent focus:border-transparent transition"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-onSurface mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:ring-2 focus:ring-accent focus:border-transparent transition"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-onSurface mb-1">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:ring-2 focus:ring-accent focus:border-transparent transition"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="product">Product Inquiry</option>
                                        <option value="order">Order Support</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-onSurface mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-surface-300 focus:ring-2 focus:ring-accent focus:border-transparent transition"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-full bg-accent text-onAccent px-6 py-3 rounded-lg hover:bg-accentDark transition-all font-medium"
                                >
                                    <FiSend className="mr-2" />
                                    Send Message
                                </button>
                            </form>
                        </motion.div> */}


                        {/* Map Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-surface p-4 rounded-2xl shadow-lg border border-surface-200"
                        >
                            {/* <motion.section
                                className="mt-20 bg-surface rounded-2xl overflow-hidden shadow-lg border border-surface-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, margin: "-100px" }}
                            > */}
                            <div className=" md:h-96 w-full">
                                <Map center={mapCenter} />
                            </div>
                            {/* </motion.section> */}
                        </motion.div>
                    </div>


                </div>
            </div>
        </>
    )
}