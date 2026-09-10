import { useTranslation } from "react-i18next";
import { DataTable } from "@/components/table";
import type { ColumnType, ProductType } from "@/lib/types";
import { ALLOWED_FILE_TYPES, products } from "@/lib/constants";
import { Card, UploadFile } from "@/components";

const columns: ColumnType<ProductType>[] = [
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
        <div className="p-4 flex flex-col gap-4" >
            <Card className="flex flex-col gap-3" >
                <h1 className="text-2xl font-bold dark:text-white">{t("product_management.title")}</h1>
                <UploadFile
                    title={t("common.upload_title")}
                    allowFileType={ALLOWED_FILE_TYPES}
                />
            </Card>
            <Card className="flex flex-col gap-3" >
                <p className="text-xl font-bold dark:text-white">{t("product_management.table_title")}</p>
                <DataTable columns={columns} data={products} initialPageSize={5} />
            </Card>
        </div>
    )
}

export default ProductManagement
