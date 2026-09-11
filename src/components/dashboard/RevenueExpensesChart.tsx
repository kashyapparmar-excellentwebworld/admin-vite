import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
    { month: "Jan", revenue: 4000, expenses: 2400 },
    { month: "Feb", revenue: 3000, expenses: 1398 },
    { month: "Mar", revenue: 2000, expenses: 9800 },
    { month: "Apr", revenue: 2780, expenses: 3908 },
    { month: "May", revenue: 1890, expenses: 4800 },
    { month: "Jun", revenue: 2390, expenses: 3800 },
]

const chartConfig = {
    revenue: { label: "Revenue", color: "#2563eb" },
    expenses: { label: "Expenses", color: "#60a5fa" },
} satisfies ChartConfig

function RevenueExpensesChart() {
    const { t } = useTranslation();
    return (
        <Card className="border-white! border" >
            <CardHeader className="dark:text-white" >
                <CardTitle>{t("dashboard.revenue_analysis")}</CardTitle>
                <CardDescription>Monthly Revenue vs Expenses</CardDescription>
            </CardHeader>
            <CardContent >
                <ChartContainer config={chartConfig} className="min-h-50 w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                        <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default RevenueExpensesChart;