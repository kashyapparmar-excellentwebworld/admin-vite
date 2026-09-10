import { useTranslation } from "react-i18next";
import { DataTable } from "@/components/table";
import type { Column, User } from "@/lib/types";
import { users } from "@/lib/constants";
import { Card } from "@/components";

const columns: Column<User>[] = [
    { key: "id", label: "user_management.table_head.id", sortable: true },
    { key: "name", label: "user_management.table_head.name", sortable: true },
    { key: "email", label: "user_management.table_head.email", sortable: true },
    { key: "role", label: "user_management.table_head.role", sortable: false },
    {
        key: "status",
        label: "user_management.table_head.status",
        sortable: true,
        render: (row: any) => (
            <span>{row.status}</span>
        )
    },
];

const UserComponent = () => {
    const { t } = useTranslation();
    return (
        <div className="p-4" >
            <Card className="flex flex-col gap-3" >
                <h1 className="text-2xl font-bold dark:text-white">{t("user_management.title")}</h1>
                <div>
                    <DataTable
                        columns={columns}
                        data={users}
                        initialPageSize={5}
                    />
                </div>
            </Card>
        </div>
    )
}

export default UserComponent
