"use client";
import React from 'react'
import Image from 'next/image'

import {
    IconDashboard,
    IconUser,
    IconSettings,
    IconBell,
    IconChartBar,
    IconFileText,
    IconLogout,
} from "@tabler/icons-react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const menuItems = [
    { label: "Dashboard", icon: IconDashboard },
    { label: "Profile", icon: IconUser },
    { label: "Analytics", icon: IconChartBar },
    { label: "Notifications", icon: IconBell },
    { label: "Reports", icon: IconFileText },
    { label: "Settings", icon: IconSettings },
];
export default function page() {
    const [isOpen, setIsOpen] = useState(true);
    return (

        <motion.div
            initial={false}
            animate={{
                width: isOpen ? "200px" : "60px"
            }}
            transition={{
                duration: 0.3,
                // ease: "easeInOut"
            }}
            className={`h-screen bg-neutral-200 border border-neutral-400 shadow-2xl transition-all duration-300 relative flex flex-col justify-between`}>
            <button onClick={() => setIsOpen(!isOpen)} className='absolute flex justify-center items-center border border-neutral-400 top-20 right-[-5px] w-[20px] h-[20px] bg-neutral-200 rounded-full'>
                {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
            </button>
            <div>
                <div className='p-2 bg-cyan-700 flex gap-5 items-center'>
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    {isOpen && <motion.span
                        initial={false}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold text-white"
                    >
                        Avi
                    </motion.span>}
                </div>
                {menuItems.map((item) => (
                    <div key={item.label} className='flex gap-5 items-center px-4 py-2 hover:bg-neutral-300 cursor-pointer'>
                        <item.icon />
                        {isOpen && (
                            <motion.span
                                initial={{
                                    opacity: 1,
                                    y: 0
                                }}
                                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                                exit={{ opacity: 0 }}
                            // transition={{ delay:  }}
                            // transition={{ delay: 5 }}
                            >
                                {item.label}
                            </motion.span>
                        )}
                    </div>
                ))}
            </div>
            <div key="Logout" className={`flex gap-5 items-center px-4 py-2 bg-cyan-700 cursor-pointer mb-2  ${isOpen ? "mr-2 ml-2" : "mr-0 ml-0"}`}>
                <IconLogout />
                {isOpen && <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-white"
                >
                    Logout
                </motion.span>}
            </div>
        </motion.div >
    )
}
