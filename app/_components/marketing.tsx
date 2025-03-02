"use client"

import Link from "next/link";
import { motion } from "framer-motion";

import { Services } from "./services";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/animations/text-animations/SplitText/split-text";
import CircularText from "@/components/animations/text-animations/SplitText/circular-text";

const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Marketing = () => {
    return (
        <div className="min-w-screen min-h-screen overflow-x-visible">
            <div className="max-w-screen max-h-screen text-white">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFromBottom}
                    className="w-full h-screen flex flex-col items-start justify-end p-4 pb-24"
                >
                    {/* <h2 className="text-xl font-thin">let's</h2>
                    <h1 className="text-8xl font-bold">chat</h1> */}

                    <SplitText text="noll2" className="text-8xl font-bold text-center flex-col items-center justify-center" />
                    <SplitText text="solutions" className="text-6xl font-thin" />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFromBottom}
                    className="absolute bottom-10 w-full flex items-center justify-center"
                >
                    <span className="text-xs text-grey-foreground">read more below</span>
                </motion.div>
            </div>
            <div className="flex flex-col">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInFromLeft}
                    className="flex flex-row"
                >
                    <div className="w-[80%] p-16 bg-white text-black rounded-tr-3xl relative overflow-x-hidden flex flex-col gap-y-3">
                        <h1 className="text-8xl overflow-x-visible max-w-screen">what we do</h1>
                        <p>we specialize in web and app development, creating custom digital solutions that drive business growth and your needs. we also offer accounting services to keep your finances on track while you focus on what you do best.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute bg-white size-10 bottom-0">
                            <div className="absolute bg-black rounded-bl-3xl size-10 bottom-0"></div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInFromLeft}
                    className="h-full w-full bg-white py-16 flex flex-col gap-y-24 rounded-b-xl mb-10"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInFromLeft}
                        className="flex justify-start overflow-x-hidden"
                    >
                        <div className="w-[85%] md:w-[60%] p-16 bg-black text-white rounded-r-3xl space-y-6">
                            <h1 className="text-8xl mix-blend-difference overflow-x-visible max-w-screen">services</h1>
                            <Services />
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInFromRight}
                        className="flex justify-end overflow-x-hidden"
                    >
                        <div className="w-[80%] md:w-[70%] p-16 bg-black text-white rounded-l-3xl space-y-6">
                            <h1 className="text-8xl mix-blend-difference overflow-x-visible max-w-screen">get in touch</h1>
                            <div className="flex flex-col sm:flex-row w-full gap-3">
                                <Link href="mailto:daniel.carlsson@noll2.io" className="bg-white text-grey p-3 rounded-lg flex flex-col">
                                    <div className="font-bold">Inquiry</div>
                                    <div className="text-xs">Looking for a smart solution?</div>
                                </Link>
                                <Link href="mailto:daniel.carlsson@noll2.io" className="border border-white p-3 rounded-lg flex flex-col">
                                    <div className="font-bold">Contact us</div>
                                    <div className="text-xs underline">daniel.carlsson@noll2.io</div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInFromBottom}
                        className="flex justify-center"
                    >
                        <div className="w-[90%] p-16 pb-5 flex flex-col gap-y-3 text-left">
                            <h1 className="text-8xl">who we are</h1>
                            <p className="" lang="en">founder and ceo is Daniel Carlsson, a young entrepreneur and double student. he is currently pursuing a master's in management, communication, and IT alongside a bachelor's in digital service development, building on his previous degree in business administration. with a strong foundation in both technology and business, he leads NOLL2 SOLUTIONS in delivering innovative digital solutions and professional services.</p>
                            <p>at NOLL2 SOLUTIONS, we have worked on a wide range of web development projects, from custom wedding websites to AI-powered packing lists, as well as providing professional accounting services, where we've served the role as financial manager.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInFromBottom}
                        className="flex justify-center"
                    >
                        <div className="w-[90%] p-16 pb-5 flex flex-col-reverse sm:flex-row justify-between gap-10">
                            <div className="w-full flex flex-col">
                                <h1 className="text-8xl">noll2</h1>
                                <p>Provided by NOLL2 SOLUTIONS AB. Sweden.</p>
                                <span className="text-xs pt-2">More info and references are coming. This website is currently WIP.</span>
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInFromBottom}
                            >
                                <CircularText
                                    text="NOLL2*SOLUTIONS*SWEDEN*"
                                    className="mix-blend-difference"
                                    onHover="speedUp"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div >
    )
}