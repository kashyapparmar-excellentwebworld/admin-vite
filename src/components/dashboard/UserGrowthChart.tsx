import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useTranslation } from "react-i18next"

const chartData = [
    { month: "Jan", activeUsers: 1200 },
    { month: "Feb", activeUsers: 1900 },
    { month: "Mar", activeUsers: 3000 },
    { month: "Apr", activeUsers: 2800 },
    { month: "May", activeUsers: 4800 },
    { month: "Jun", activeUsers: 6100 },
]

const chartConfig = {
    activeUsers: { label: "Active Users", color: "#10b981" },
} satisfies ChartConfig

function UserGrowthChart() {
    const { t } = useTranslation();
    return (
        <Card className="border-white! border" >
            <CardHeader className="dark:text-white" >
                <CardTitle>{t("dashboard.active_users_growth")}</CardTitle>
                <CardDescription>{t("dashboard.tota_active_users_month", { month: 6 })}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-50 w-full">
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-activeUsers)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-activeUsers)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis axisLine={false} tickLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                            dataKey="activeUsers"
                            type="natural"
                            fill="url(#fillUsers)"
                            stroke="var(--color-activeUsers)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default UserGrowthChart;