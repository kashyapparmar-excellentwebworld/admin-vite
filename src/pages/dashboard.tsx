import { Card, RevenueExpensesChart, UserGrowthChart } from "@/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="p-4 flex flex-col gap-2">
      <Card className="flex flex-col gap-8">
        <h1 className="text-xl font-bold dark:text-white">{t("common.dashboard")}</h1>
      </Card>
      <div className="flex justify-between" >
        <Card className="flex flex-col gap-8 w-fit! bg-green-500! text-white">
          <div className="flex justify-evenly" >
            <div className="flex flex-col items-start justify-end rounded-lg p-4 w-50 h-30" >
              <p className="text-start text-2xl font-bold w-full" >₹250k</p>
              <p>Total Profit</p>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col gap-8 w-fit!  bg-blue-500! text-white">
          <div className="flex justify-evenly" >
            <div className="flex flex-col items-start justify-end rounded-lg p-4 w-50 h-30" >
              <p className="text-start text-2xl font-bold w-full" >₹4M</p>
              <p>Total sales</p>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col gap-8 w-fit!  bg-yellow-500! text-white">
          <div className="flex justify-evenly" >
            <div className="flex flex-col items-start justify-end rounded-lg p-4 w-50 h-30" >
              <p className="text-start text-2xl font-bold w-full" >₹45K</p>
              <p>Ad sense spends</p>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col gap-8 w-fit!  bg-red-500! text-white">
          <div className="flex justify-evenly" >
            <div className="flex flex-col items-start justify-end rounded-lg p-4 w-50 h-30" >
              <p className="text-start text-2xl font-bold w-full" >₹6M</p>
              <p>Total Revenue</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-between gap-8 " >
        <Card className="flex flex-col gap-8 p-8">
          <RevenueExpensesChart />
        </Card >
        <Card className="flex flex-col gap-8 p-8">
          <UserGrowthChart />
        </Card >
      </div>
    </div>
  )
}