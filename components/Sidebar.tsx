export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4">
            <h2 className="text-xl mb-6">Dashboard</h2>
            <ul>
                <li className="mb-2 hover:text-blue-400 cursor-pointer">Overview</li>
                <li className="mb-2 hover:text-blue-400 cursor-pointer">Campaigns</li>
            </ul>
        </div>
    );
}