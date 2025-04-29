'use client'

import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [isHovered, setIsHovered] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    // Constellation data for stars
    const stars = [
        { id: 1, x: 15, y: 30, size: 1, delay: 0.1 },
        { id: 2, x: 25, y: 15, size: 1.2, delay: 0.3 },
        { id: 3, x: 40, y: 25, size: 0.8, delay: 0.5 },
        { id: 4, x: 60, y: 35, size: 1.1, delay: 0.2 },
        { id: 5, x: 75, y: 20, size: 0.9, delay: 0.4 },
    ]

    // Cloud data
    const clouds = [
        { id: 1, x: 20, y: 15, size: 12, speed: 1 },
        { id: 2, x: 50, y: 10, size: 15, speed: 0.8 },
        { id: 3, x: 70, y: 20, size: 10, speed: 1.2 },
    ]

    if (!hasMounted) {
        return (
            <div className="w-16 h-8 rounded-full bg-gray-200 animate-pulse"></div>
        )
    }

    return (
        <motion.button
            onClick={toggleTheme}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative w-16 h-8 rounded-full focus:outline-none overflow-hidden"
            style={{
                backgroundColor: theme === 'dark' ? '#1e293b' : '#fbbf24',
            }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            initial={false}
            animate={{
                transition: { duration: 0.5 }
            }}
        >
            {/* Background elements */}
            <AnimatePresence>
                {theme === 'dark' && (
                    <>
                        {/* Stars */}
                        {stars.map((star) => (
                            <motion.div
                                key={`star-${star.id}`}
                                className="absolute bg-white rounded-full"
                                style={{
                                    width: `${star.size * 2}px`,
                                    height: `${star.size * 2}px`,
                                    left: `${star.x}%`,
                                    top: `${star.y}%`,
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: star.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}

                        {/* Moon */}
                        <motion.div
                            className="absolute bg-gray-200 rounded-full"
                            style={{
                                width: '16px',
                                height: '16px',
                                right: '10px',
                                top: '6px',
                            }}
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 30, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="absolute bottom-2 right-1 w-3 h-3 rounded-full bg-gray-300"></div>
                        </motion.div>
                    </>
                )}

                {theme === 'light' && (
                    <>
                        {/* Sun rays */}
                        <motion.div
                            className="absolute bg-yellow-300 rounded-full"
                            style={{
                                width: '18px',
                                height: '18px',
                                left: '10px',
                                top: '5px',
                            }}
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -30, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={`ray-${i}`}
                                    className="absolute bg-yellow-300"
                                    style={{
                                        width: '6px',
                                        height: '2px',
                                        left: '50%',
                                        top: '50%',
                                        transformOrigin: 'left center',
                                    }}
                                    initial={{ rotate: i * 45, scaleX: 0 }}
                                    animate={{
                                        rotate: i * 45,
                                        scaleX: isHovered ? 1.5 : 1,
                                    }}
                                    transition={{
                                        scaleX: { duration: 0.3 },
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Clouds */}
                        {clouds.map((cloud) => (
                            <motion.div
                                key={`cloud-${cloud.id}`}
                                className="absolute bg-white rounded-full"
                                style={{
                                    width: `${cloud.size}px`,
                                    height: `${cloud.size / 2}px`,
                                    left: `${cloud.x}%`,
                                    top: `${cloud.y}%`,
                                }}
                                initial={{ x: isHovered ? 0 : -5 }}
                                animate={{
                                    x: [null, isHovered ? 5 : -5],
                                }}
                                transition={{
                                    duration: 3 + cloud.speed,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </>
                )}
            </AnimatePresence>

            {/* Toggle handle */}
            <motion.div
                className="absolute top-1 w-6 h-6 rounded-full shadow-md bg-white flex items-center justify-center"
                layout
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
                animate={{
                    x: theme === 'dark' ? 'calc(100% - 28px)' : '4px',
                }}
            >
                {/* Face expressions */}
                <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                        <motion.div
                            key="moon-face"
                            initial={{ opacity: 0, rotate: -30 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 30 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-600"
                        >
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key="sleeping"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="w-10 h-2 bg-gray-400 rounded"></div>
                                        <motion.div
                                            className="absolute -top-4 left-9 transform -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full"
                                            animate={{
                                                x: ['-50%', '-50%'],
                                                y: [0, -2, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <div className="absolute top-1 left-0.5 w-1 h-0.5 bg-gray-600 rounded-full"></div>
                                            <div className="absolute top-1 right-0.5 w-1 h-0.5 bg-gray-600 rounded-full"></div>
                                            <motion.div
                                                className="absolute top-2 left-1 w-2 h-0.5 bg-gray-600 rounded-full"
                                                animate={{
                                                    width: ['0px', '2px'],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    repeatType: 'reverse',
                                                }}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun-face"
                            initial={{ opacity: 0, rotate: 30 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -30 }}
                            transition={{ duration: 0.3 }}
                            className="text-yellow-500"
                        >
                            {/* Sleeping/waking animation */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key="awake"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full">
                                            <div className="absolute top-1 left-0.5 w-1 h-1 bg-gray-600 rounded-full"></div>
                                            <div className="absolute top-1 right-0.5 w-1 h-1 bg-gray-600 rounded-full"></div>
                                            <motion.div
                                                className="absolute top-2 left-1 w-2 h-0.5 bg-gray-600 rounded-full"
                                                animate={{
                                                    scaleY: [1, 0.8, 1],
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    repeat: Infinity,
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    )
}









// 'use client'

// import { useTheme } from '../context/ThemeContext'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useEffect, useState } from 'react'

// export default function ThemeToggle() {
//     const { theme, toggleTheme } = useTheme()
//     const [hasMounted, setHasMounted] = useState(false)
//     const [isHovered, setIsHovered] = useState(false)

//     useEffect(() => {
//         setHasMounted(true)
//     }, [])

//     // Realistic starfield with constellations
//     const generateStarfield = () => {
//         const stars = []
//         const starCount = 40

//         // Random stars
//         for (let i = 0; i < starCount; i++) {
//             stars.push({
//                 id: i,
//                 x: Math.random() * 100,
//                 y: Math.random() * 100,
//                 size: 0.5 + Math.random() * 1.5,
//                 opacity: 0.3 + Math.random() * 0.7,
//                 twinkleSpeed: 2 + Math.random() * 4
//             })
//         }

//         return stars
//     }

//     const stars = generateStarfield()

//     if (!hasMounted) {
//         return (
//             <div className="w-24 h-12 rounded-full bg-gray-200/30 animate-pulse" />
//         )
//     }

//     return (
//         <motion.button
//             onClick={toggleTheme}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//             className="relative w-24 h-12 rounded-full focus:outline-none overflow-hidden border border-gray-200/20 dark:border-gray-600/30 shadow-lg"
//             style={{
//                 backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
//             }}
//             aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//             initial={false}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: 'spring', stiffness: 400, damping: 20 }}
//         >
//             {/* Light mode - elegant sun */}
//             <AnimatePresence>
//                 {theme === 'light' && (
//                     <motion.div
//                         className="absolute"
//                         style={{
//                             width: '24px',
//                             height: '24px',
//                             left: '16px',
//                             top: '6px',
//                         }}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{
//                             opacity: 1,
//                             scale: 1,
//                             rotate: isHovered ? 180 : 0
//                         }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                         transition={{
//                             opacity: { duration: 0.4 },
//                             rotate: { duration: 8, repeat: Infinity, ease: "linear" }
//                         }}
//                     >
//                         {/* Sun core */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_2px_rgba(251,191,36,0.4)]" />

//                         {/* Sun rays */}
//                         {[...Array(12)].map((_, i) => (
//                             <motion.div
//                                 key={`ray-${i}`}
//                                 className="absolute bg-gradient-to-r from-yellow-400 to-yellow-500"
//                                 style={{
//                                     width: '8px',
//                                     height: '2px',
//                                     left: '50%',
//                                     top: '50%',
//                                     transformOrigin: 'left center',
//                                 }}
//                                 initial={{ rotate: i * 30, scaleX: 0 }}
//                                 animate={{
//                                     rotate: i * 30,
//                                     scaleX: isHovered ? 1.2 : 1,
//                                 }}
//                                 transition={{
//                                     scaleX: { duration: 0.3 },
//                                 }}
//                             />
//                         ))}
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Dark mode - celestial scene */}
//             <AnimatePresence>
//                 {theme === 'dark' && (
//                     <>
//                         {/* Starfield */}
//                         {stars.map((star) => (
//                             <motion.div
//                                 key={`star-${star.id}`}
//                                 className="absolute bg-white rounded-full"
//                                 style={{
//                                     width: `${star.size}px`,
//                                     height: `${star.size}px`,
//                                     left: `${star.x}%`,
//                                     top: `${star.y}%`,
//                                     opacity: star.opacity
//                                 }}
//                                 initial={{ scale: 0.5 }}
//                                 animate={{
//                                     scale: [0.8, 1.2, 0.8],
//                                     opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5]
//                                 }}
//                                 transition={{
//                                     duration: star.twinkleSpeed,
//                                     repeat: Infinity,
//                                     ease: "easeInOut",
//                                 }}
//                             />
//                         ))}

//                         {/* Moon with realistic craters */}
//                         <motion.div
//                             className="absolute"
//                             style={{
//                                 width: '20px',
//                                 height: '20px',
//                                 right: '16px',
//                                 top: '6px',
//                             }}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{
//                                 opacity: 1,
//                                 x: 0,
//                                 rotate: isHovered ? -15 : 0
//                             }}
//                             exit={{ opacity: 0, x: 20 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]" />

//                             {/* Moon craters */}
//                             <div className="absolute top-2 left-3 w-3 h-3 rounded-full bg-gray-300/70 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
//                             <div className="absolute bottom-3 right-2 w-4 h-4 rounded-full bg-gray-300/50 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
//                             <div className="absolute top-4 left-2 w-2 h-2 rounded-full bg-gray-300/60 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>

//             {/* Beautiful toggle handle */}
//             <motion.div
//                 className="absolute top-1 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm"
//                 style={{
//                     backgroundColor: theme === 'dark' ? 'rgba(248, 250, 252, 0.9)' : 'rgba(255, 255, 255, 0.9)',
//                     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
//                 }}
//                 layout
//                 transition={{
//                     type: "spring",
//                     stiffness: 500,
//                     damping: 30,
//                 }}
//                 animate={{
//                     x: theme === 'dark' ? 'calc(100% - 44px)' : '6px',
//                 }}
//                 whileHover={{ scale: 1.05 }}
//             >
//                 {/* Sun/Moon indicator */}
//                 <AnimatePresence mode="wait">
//                     {theme === 'dark' ? (
//                         <motion.div
//                             key="moon-indicator"
//                             className="relative w-6 h-6"
//                             initial={{ opacity: 0, x: -5 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 5 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="absolute inset-0 bg-gray-300 rounded-full" />
//                             <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-gray-400" />
//                             <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-gray-400" />
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             key="sun-indicator"
//                             className="relative w-6 h-6"
//                             initial={{ opacity: 0, x: 5 }}
//                             animate={{
//                                 opacity: 1,
//                                 x: 0,
//                                 rotate: isHovered ? 360 : 0
//                             }}
//                             exit={{ opacity: 0, x: -5 }}
//                             transition={{
//                                 opacity: { duration: 0.3 },
//                                 rotate: { duration: 10, repeat: Infinity, ease: "linear" }
//                             }}
//                         >
//                             <div className="absolute inset-0 bg-yellow-400 rounded-full" />
//                             {[...Array(6)].map((_, i) => (
//                                 <div
//                                     key={`indicator-ray-${i}`}
//                                     className="absolute bg-yellow-400"
//                                     style={{
//                                         width: '4px',
//                                         height: '1px',
//                                         left: '50%',
//                                         top: '50%',
//                                         transform: `rotate(${i * 60}deg) translateX(6px)`,
//                                         transformOrigin: 'left center'
//                                     }}
//                                 />
//                             ))}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.div>

//             {/* Subtle glow effect */}
//             <motion.div
//                 className="absolute inset-0 rounded-full pointer-events-none"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                     opacity: isHovered ? 0.1 : 0,
//                     boxShadow: theme === 'dark'
//                         ? '0 0 15px 3px rgba(147, 197, 253, 0.3)'
//                         : '0 0 15px 3px rgba(251, 191, 36, 0.3)'
//                 }}
//                 transition={{ duration: 0.3 }}
//             />
//         </motion.button>
//     )
// }