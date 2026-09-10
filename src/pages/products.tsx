import { useTranslation } from "react-i18next";
import { DataTable } from "@/components/table";
import type { Column, Product } from "@/lib/types";
import { products } from "@/lib/constants";
import { Card } from "@/components";

const columns: Column<Product>[] = [
    { key: "id", label: "product_management.table_head.id", sortable: true },
    { key: "name", label: "product_management.table_head.name", sortable: true },
    { key: "category", label: "product_management.table_head.category", sortable: true },
    { key: "brand", label: "product_management.table_head.brand", sortable: true },
    {
        key: "price",
        label: "product_management.table_head.price",
        sortable: true,
        render: (row: any) => (
            <span>₹{row?.price}</span>
        )
    },
];

const ProductManagement = () => {
    const { t } = useTranslation();
    return (
        <div className="p-4" >
            <Card className="flex flex-col gap-3" >
                <h1 className="text-2xl font-bold dark:text-white">{t("product_management.title")}</h1>
                <div>
                    <DataTable columns={columns} data={products} initialPageSize={5} />
                </div>
            </Card>
        </div>
    )
}

export default ProductManagement
