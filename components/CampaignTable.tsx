"use client";

import {useEffect, useState} from "react";
import { campaigns } from "@/data/campaigns";
import Pagination from "@/components/Pagination";

export default function CampaignTable() {
    const [sortField, setSortField] = useState<"clicks" | "cost" | "conversions">("clicks");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    const sorted = [...campaigns].sort((a, b) => {
        const valueA = a[sortField];
        const valueB = b[sortField];
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
    });

    const toggleSort = (field: "clicks" | "cost" | "conversions") => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("desc");
        }
    };

    const [filter, setFilter] = useState("");
    const filtered = sorted.filter((c) =>
        c.name.toLowerCase().includes(filter.toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginated = filtered.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter, sortField, sortOrder]);


    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border mt-6 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4">Campaign Performance</h2>
            <input
                type="text"
                placeholder="Search campaign..."
                className="border p-2 rounded mb-4 w-60"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <table className="w-full min-w-[600px] text-left">
                <thead>
                <tr className="border-b">
                    <th className="py-2">Campaign</th>
                    <th className="py-2 cursor-pointer" onClick={() => toggleSort("clicks")}>
                        Clicks
                    </th>
                    <th className="py-2 cursor-pointer" onClick={() => toggleSort("cost")}>
                        Cost (€)
                    </th>
                    <th className="py-2 cursor-pointer" onClick={() => toggleSort("conversions")}>
                        Conversions
                    </th>
                    <th>CTR (%)</th>
                    <th>CPC (€)</th>
                    <th>CPA (€)</th>
                    <th>ROI (%)</th>
                </tr>
                </thead>

                <tbody>
                {filtered.map((c) => (
                    <tr key={c.id} className="border-b hover:bg-gray-50 transition">
                        <td className="py-2">{c.name}</td>
                        <td className="py-2">{c.clicks}</td>
                        <td className="py-2">{c.cost}</td>
                        <td className="py-2">{c.conversions}</td>
                        <td>{(c.clicks / 10000 * 100).toFixed(2)}</td>
                        <td>{(c.cost / c.clicks).toFixed(2)}</td>
                        <td>{(c.cost / c.conversions).toFixed(2)}</td>
                        <td>{(((c.conversions * 20 - c.cost) / c.cost) * 100).toFixed(1)}</td>
                    </tr>
                ))}
                {filtered.length === 0 && (
                    <tr>
                        <td colSpan={4} className="py-4 text-center text-gray-500">
                            No campaigns found
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalItems={filtered.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
