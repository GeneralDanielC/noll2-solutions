"use client"

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react"
import { useState } from "react"

export const Services = () => {
    const [tab, setTab] = useState(1);


    return (
        <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col h-full justify-start items-start rounded-lg">
                <div className="border border-white p-3 w-full rounded-lg hover:cursor-default text-left">
                    <div className="flex w-full flex-row items-center justify-between font-bold">
                        <h3 className="text-lg">web development</h3>
                        <div className="flex flex-col items-end">
                            {/* <span></span> */}
                            <span className="text-[8px] text-stone-400">contact us</span>
                        </div>
                    </div>
                    <p className="w-fit overflow-clip text-xs">we build beautiful, fully custom websites and web applications that fit your needs. what you imagine is what we create.</p>
                </div>
            </div>
            <div className="flex flex-col h-full justify-start items-start rounded-lg">
                <div className="bg-white text-grey p-3 w-full rounded-lg hover:cursor-default text-left">
                    <div className="flex w-full flex-row items-center justify-between font-bold">
                        <h3 className="text-lg">wedding website</h3>
                        <div className="flex flex-col items-end">
                            <span>7.000</span>
                            <span className="text-[8px] text-stone-400">SEK. from.</span>
                        </div>
                    </div>
                    <p className="w-fit overflow-clip text-xs">semi-standard wedding websites. includes rsvp, gift registry & admin panel where everything is managed. included in the price are smaller adjustments.</p>
                </div>
            </div>
            <div className="flex flex-row h-full justify-start items-start rounded-lg">
                <div className="border border-white p-3 w-full rounded-lg hover:cursor-default text-left">
                    <div className="flex w-full flex-row items-center justify-between font-bold">
                        <h3 className="text-lg">app development</h3>
                        <div className="flex flex-col items-end">
                            {/* <span></span> */}
                            <span className="text-[8px] text-stone-400">contact us</span>
                        </div>
                    </div>
                    <p className="w-fit overflow-clip text-xs">we build fully custom cross platform applications that take fit your and the user's needs. working with cross plattform frameworks ensures that the device is not being a limitation.</p>
                </div>
            </div>
            <div className="flex flex-col h-full justify-start items-start rounded-lg">
                <div className="bg-white text-grey p-3 w-full rounded-lg hover:cursor-default text-left">
                    <div className="flex w-full flex-row items-center justify-between font-bold">
                        <h3 className="text-lg">accounting</h3>
                        <div className="flex flex-col items-end">
                            <span>400</span>
                            <span className="text-[8px] text-stone-400">SEK per hour.</span>
                        </div>
                    </div>
                    <p className="w-fit overflow-clip text-xs">includes ongoing accounting, payroll, financial statements and annual reports.</p>
                </div>
            </div>
            <span className="text-center text-xs mt-10">all prices exclude VAT.</span>
        </div>
    )
}