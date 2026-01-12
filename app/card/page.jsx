"use client";
import { Geist } from "next/font/google";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { IconX, IconMessage, Icon24Hours, Icon360View, IconSphere, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
const geistSans = Geist({
    subsets: ["latin"],
});

export default function Content() {
    return (
        <div className={`${geistSans.className} h-screen flex items-center justify-center bg-gray-50`}>
            <Card />
        </div>
    );
}

const Card = () => {
    const [open, setOpen] = useState(true);
    return (<>
        <AnimatePresence>
            {open &&
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.98,
                        filter: "blur(10px)",
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                    }}

                    exit={{
                        opacity: 0,
                        scale: 0.98,
                        filter: "blur(10px)",
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className="w-72 min-h-[26rem] h-[28rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col">
                    <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
                    <p className="text-neutral-600 mt-2 text-[10px]">
                        A collection of beautiful UI components, let's get on with it.
                    </p>
                    <button onClick={() => setOpen(false)} className="flex items-center gap-1 mx-auto shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] mt-4 rounded-md px-2 py-1">
                        <Image src="/logo.png" alt="logo" width={50} height={50} className="h-4 w-4" />
                        <span>Aceternity</span>
                        <IconX className="h-3 w-3 text-neutral-400" />
                    </button>

                    <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                filter: "blur(10px)"
                            }}
                            whileHover={{
                                opacity: 1,
                                scale: 1.05,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                // duration: 0.3,
                                // ease: "easeInOut"
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="absolute inset-0 h-full w-full border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200">
                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconMessage className="h-4 w-4 text-neutral-600" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">
                                        Aceternity UI Components
                                    </p>
                                    <p className="text-[8px] text-neutral-400 mt-1">
                                        A collection of beautiful UI components, let's get on with it.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">
                                        24 Hours turnaround
                                    </p>
                                    <p className="text-[8px] text-neutral-400 mt-1">
                                        Super fast delivery speed
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <Icon360View className="h-4 w-4 text-neutral-600" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">
                                        360° Days all around
                                    </p>
                                    <p className="text-[8px] text-neutral-400 mt-1">
                                        Get your product designed in 360°
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconSphere className="h-4 w-4 text-neutral-600" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">
                                        Some other components
                                    </p>
                                    <p className="text-[8px] text-neutral-400 mt-1">
                                        Here goes another component
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2 p-4 ">
                                <div className="h-4 w-4 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconPlus className="h-3 w-3 text-neutral-600" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] mt-1 text-neutral-400">
                                        Create Project
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </motion.div>}
        </AnimatePresence>
    </>

    );
}
