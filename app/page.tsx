"use client";

import StatCard from "@/components/ui/StatCard";
import { getDashboardData } from "@/lib/getData";
import TrafficLineChart from "@/components/charts/TrafficLineChart";
import SpendBarChart from "@/components/charts/SpendBarChart";
import CampaignTable from "@/components/CampaignTable";
import {useEffect, useState} from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 800);
    }, []);

    if (loading) return <div className="p-6">Loading...</div>;

    const data = getDashboardData();

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Overview</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <StatCard title="Visitors" value={data.totalVisitors}/>
                <StatCard title="Revenue" value={`€${data.totalRevenue}`}/>
                <StatCard title="Conversions" value={data.totalConversions}/>
                <StatCard title="Ad Spend" value={`€${data.totalAdSpend}`}/>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <TrafficLineChart/>
                <SpendBarChart/>
            </div>
            <div className="mt-6">
                <CampaignTable />
            </div>
        </div>
    );
}
