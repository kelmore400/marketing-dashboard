interface StatCardProps {
    title: string;
    value: string | number;
}

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-gray-500 text-sm">{title}</p>
            <h2 className="text-2xl font-semibold mt-2">{value}</h2>
        </div>
    );
}
