"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { trafficData } from "@/data/traffic";

export default function SpendBarChart() {
    return (
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border h-[320px] md:h-[380px]">
        <h2 className="text-lg font-semibold mb-4">Ad Spend</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trafficData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="spend" fill="#10b981" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
