"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { trafficData } from "@/data/traffic";

export default function TrafficLineChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border h-[380px]">
            <h2 className="text-lg font-semibold mb-4">Traffic Overview</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trafficData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
