// 'use client'

// import { useTheme } from '../context/ThemeContext'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useEffect, useState } from 'react'

// export default function ThemeToggle() {
//     const { theme, toggleTheme } = useTheme()
//     const [isHovered, setIsHovered] = useState(false)
//     const [hasMounted, setHasMounted] = useState(false)

//     useEffect(() => {
//         setHasMounted(true)
//     }, [])

//     // Constellation data for stars
//     const stars = [
//         { id: 1, x: 15, y: 30, size: 1, delay: 0.1 },
//         { id: 2, x: 25, y: 15, size: 1.2, delay: 0.3 },
//         { id: 3, x: 40, y: 25, size: 0.8, delay: 0.5 },
//         { id: 4, x: 60, y: 35, size: 1.1, delay: 0.2 },
//         { id: 5, x: 75, y: 20, size: 0.9, delay: 0.4 },
//     ]

//     // Cloud data
//     const clouds = [
//         { id: 1, x: 20, y: 15, size: 12, speed: 1 },
//         { id: 2, x: 50, y: 10, size: 15, speed: 0.8 },
//         { id: 3, x: 70, y: 20, size: 10, speed: 1.2 },
//     ]

//     if (!hasMounted) {
//         return (
//             <div className="w-16 h-8 rounded-full bg-gray-200 animate-pulse"></div>
//         )
//     }

//     return (
//         <motion.button
//             onClick={toggleTheme}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//             className="relative w-16 h-8 rounded-full focus:outline-none overflow-hidden"
//             style={{
//                 backgroundColor: theme === 'dark' ? '#1e293b' : '#fbbf24',
//             }}
//             aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//             initial={false}
//             animate={{
//                 transition: { duration: 0.5 }
//             }}
//         >
//             {/* Background elements */}
//             <AnimatePresence>
//                 {theme === 'dark' && (
//                     <>
//                         {/* Stars */}
//                         {stars.map((star) => (
//                             <motion.div
//                                 key={`star-${star.id}`}
//                                 className="absolute bg-white rounded-full"
//                                 style={{
//                                     width: `${star.size * 2}px`,
//                                     height: `${star.size * 2}px`,
//                                     left: `${star.x}%`,
//                                     top: `${star.y}%`,
//                                 }}
//                                 initial={{ opacity: 0, scale: 0.5 }}
//                                 animate={{
//                                     opacity: [0.3, 1, 0.3],
//                                     scale: [0.8, 1.2, 0.8],
//                                 }}
//                                 transition={{
//                                     duration: 2,
//                                     delay: star.delay,
//                                     repeat: Infinity,
//                                     ease: "easeInOut",
//                                 }}
//                             />
//                         ))}

//                         {/* Moon */}
//                         <motion.div
//                             className="absolute bg-gray-200 rounded-full"
//                             style={{
//                                 width: '16px',
//                                 height: '16px',
//                                 right: '10px',
//                                 top: '6px',
//                             }}
//                             initial={{ x: 30, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             exit={{ x: 30, opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-gray-300"></div>
//                             <div className="absolute bottom-2 right-1 w-3 h-3 rounded-full bg-gray-300"></div>
//                         </motion.div>
//                     </>
//                 )}

//                 {theme === 'light' && (
//                     <>
//                         {/* Sun rays */}
//                         <motion.div
//                             className="absolute bg-yellow-300 rounded-full"
//                             style={{
//                                 width: '18px',
//                                 height: '18px',
//                                 left: '10px',
//                                 top: '5px',
//                             }}
//                             initial={{ x: -30, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             exit={{ x: -30, opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             {[...Array(8)].map((_, i) => (
//                                 <motion.div
//                                     key={`ray-${i}`}
//                                     className="absolute bg-yellow-300"
//                                     style={{
//                                         width: '6px',
//                                         height: '2px',
//                                         left: '50%',
//                                         top: '50%',
//                                         transformOrigin: 'left center',
//                                     }}
//                                     initial={{ rotate: i * 45, scaleX: 0 }}
//                                     animate={{
//                                         rotate: i * 45,
//                                         scaleX: isHovered ? 1.5 : 1,
//                                     }}
//                                     transition={{
//                                         scaleX: { duration: 0.3 },
//                                     }}
//                                 />
//                             ))}
//                         </motion.div>

//                         {/* Clouds */}
//                         {clouds.map((cloud) => (
//                             <motion.div
//                                 key={`cloud-${cloud.id}`}
//                                 className="absolute bg-white rounded-full"
//                                 style={{
//                                     width: `${cloud.size}px`,
//                                     height: `${cloud.size / 2}px`,
//                                     left: `${cloud.x}%`,
//                                     top: `${cloud.y}%`,
//                                 }}
//                                 initial={{ x: isHovered ? 0 : -5 }}
//                                 animate={{
//                                     x: [null, isHovered ? 5 : -5],
//                                 }}
//                                 transition={{
//                                     duration: 3 + cloud.speed,
//                                     repeat: Infinity,
//                                     repeatType: 'reverse',
//                                     ease: "easeInOut",
//                                 }}
//                             />
//                         ))}
//                     </>
//                 )}
//             </AnimatePresence>

//             {/* Toggle handle */}

//         </motion.button>
//     )
// }

'use client'

import { useTheme } from '../context/ThemeContext'
import { WiDaySunny } from 'react-icons/wi'
import { FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full focus:outline-none transition-colors"
            style={{
                backgroundColor: theme === 'dark' ? '#1e293b' : '#fbbf24',
                color: theme === 'dark' ? '#fbbf24' : '#1e293b',
            }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'dark' ? <FaMoon size={20} /> : <WiDaySunny size={24} />}
        </button>
    )
}