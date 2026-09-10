import { Card, RevenueExpensesChart, UserGrowthChart } from "@/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="p-4 flex flex-col gap-2">
      <Card className="flex flex-col gap-8">
        <h1 className="text-xl font-bold dark:text-white">{t("common.dashboard")}</h1>
        <div className="flex justify-evenly" >
          <div className="flex flex-col items-start justify-end border-4 border-gray-200 rounded-lg p-4 w-50 h-30" >
            <p className="text-start text-2xl font-bold w-full" >2500</p>
            <p>Total Revemue</p>
          </div>
          <div className="border-4 border-gray-200 rounded-lg p-8 w-50 h-30" >

          </div>
          <div className="border-4 border-gray-200 rounded-lg p-8 w-50 h-30" >

          </div>
          <div className="border-4 border-gray-200 rounded-lg p-8 w-50 h-30" >

          </div>
        </div>
        {/* </Card>
      <Card className="flex flex-col gap-8 p-8"> */}
        <div className="flex justify-between gap-8 " >
          <RevenueExpensesChart />
          <UserGrowthChart />
        </div>
      </Card >
    </div>
  )
}