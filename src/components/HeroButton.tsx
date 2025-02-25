"use client"
import { motion } from "framer-motion";

import React from "react";
export default function AnimatedButton() {
    return (
        <motion.button
            className="group relative flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:cursor-pointer"
            whileHover="hover"
            initial="initial"
            animate="initial"
        >
            <motion.div
                className="absolute inset-0 flex items-center gap-2 px-6"
                initial={{ x: "0%" }}
                variants={{
                    initial: { x: "0%" },
                    hover: { x: "-100%" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <span className="text-lg font-medium">contact</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.8281 16.875H0V13.125H22.8281L12.3281 2.625L15 0L30 15L15 30L12.3281 27.375L22.8281 16.875Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                </div>
            </motion.div>

            <motion.div
                className="flex items-center gap-2"
                initial={{ x: "100%" }}
                variants={{
                    initial: { x: "100%" },
                    hover: { x: "0%" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]">
                    <svg
                        width="36"
                        height="33"
                        viewBox="0 0 36 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 15.6665L3.66671 7.33317V23.9998H18.6667V27.3332H0.333374V0.666504H33.6667V15.6665H30.3334V7.33317L17 15.6665ZM17 12.3332L30.3334 3.99984H3.66671L17 12.3332ZM28.6667 32.3332L26.3334 29.9998L28.9584 27.3332H22V23.9998H28.9584L26.2917 21.3332L28.6667 18.9998L35.3334 25.6665L28.6667 32.3332ZM3.66671 7.33317V25.6665V15.6665V15.7915V3.99984V7.33317Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                </div>
                <span className="text-lg font-medium text-[#FFD700]">keynergy</span>
            </motion.div>
        </motion.button>
    )
}

