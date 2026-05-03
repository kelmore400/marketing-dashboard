import { campaigns } from "@/data/campaigns";

export function getDashboardData() {
    const totalVisitors = campaigns.reduce((acc, c) => acc + c.clicks, 0);
    const totalRevenue = campaigns.reduce(
        (acc, c) => acc + c.conversions * 25,
        0
    ); // умовно: 25€ за конверсію
    const totalConversions = campaigns.reduce(
        (acc, c) => acc + c.conversions,
        0
    );
    const totalAdSpend = campaigns.reduce((acc, c) => acc + c.cost, 0);

    const roi = ((totalRevenue - totalAdSpend) / totalAdSpend) * 100;

    return {
        totalVisitors,
        totalRevenue,
        totalConversions,
        totalAdSpend,
        roi: roi.toFixed(1),
        campaigns,
    };
}
