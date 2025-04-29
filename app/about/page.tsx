'use client'

import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export default function AboutPage() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-background to-surface/50">
                <div className="container max-w-6xl mx-auto px-6 py-16 md:py-24">
                    {/* Hero Section */}
                    <motion.section
                        className="mb-20 text-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 pb-1 relative inline-block"
                            variants={itemVariants}
                            style={{
                                color: 'transparent',
                                backgroundImage: 'linear-gradient(to right, var(--accent), var(--accentDark))',
                                backgroundSize: '200% 200%',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                lineHeight: '1.2'
                            }}
                        >
                            Cultivating Growth, Nurturing Success
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12"
                            variants={itemVariants}
                        >
                            Our journey in agriculture spans decades, rooted in a passion for quality and innovation
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 mb-12"></div>
                        </motion.div>
                    </motion.section>

                    {/* Content Sections */}
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Our Story */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-surface p-8 rounded-2xl shadow-lg border border-surface-200"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-primary flex items-center">
                                <span className="w-4 h-4 bg-accent rounded-full mr-3"></span>
                                Our Story
                            </h2>
                            <p className="mb-4 text-onSurface">
                                Founded in 1985, GulshanSeed began as a small family operation with a vision to revolutionize agricultural practices in our region. What started as a modest seed distribution business has blossomed into a trusted industry leader.
                            </p>
                            <p className="text-onSurface">
                                Through decades of dedication, we&apos;ve cultivated relationships with farmers across the country, providing them with premium seeds and expert guidance to maximize their yields.
                            </p>
                        </motion.section>

                        {/* Our Mission */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-surface p-8 rounded-2xl shadow-lg border border-surface-200"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-primary flex items-center">
                                <span className="w-4 h-4 bg-accent rounded-full mr-3"></span>
                                Our Mission
                            </h2>
                            <p className="mb-4 text-onSurface">
                                We exist to empower farmers with the highest quality seeds, innovative agricultural solutions, and sustainable practices that ensure long-term success for both their farms and our planet.
                            </p>
                            <p className="text-onSurface">
                                Our commitment extends beyond products - we&apos;re dedicated to educating and supporting the agricultural community through every season.
                            </p>
                        </motion.section>
                    </div>

                    {/* Values Section */}
                    <motion.section
                        className="mt-24"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-12 text-center text-primary"
                            variants={itemVariants}
                        >
                            Core Values
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Quality First",
                                    description: "We meticulously select and test every seed variety to ensure superior germination rates and crop performance.",
                                    icon: "🌱"
                                },
                                {
                                    title: "Farmer Focused",
                                    description: "Our solutions are designed with real farm challenges in mind, developed through continuous dialogue with growers.",
                                    icon: "👨‍🌾"
                                },
                                {
                                    title: "Sustainable Growth",
                                    description: "We champion practices that protect our soil, water, and ecosystems for future generations.",
                                    icon: "🌍"
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-surface p-6 rounded-xl shadow-md border border-surface-200 hover:shadow-lg transition-all"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                                    <p className="text-onSurface">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Team CTA */}
                    <motion.section
                        className="mt-24 bg-gradient-to-r from-accent/10 to-accentDark/10 p-12 rounded-3xl text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-primary">Join Our Growing Community</h2>
                        <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                            Whether you&apos;re a small family farm or a large agricultural enterprise, we have solutions tailored to your needs.
                        </p>
                        <button className="bg-accent text-onAccent px-8 py-4 rounded-full text-lg font-medium hover:bg-accentDark transition-all shadow-lg hover:shadow-xl">
                            Connect With Our Team
                        </button>
                    </motion.section>
                </div>
            </div>
        </>
    )
}