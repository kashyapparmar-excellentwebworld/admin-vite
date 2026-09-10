import type { TableHeaderProps } from "@/lib/types";
import { useTranslation } from "react-i18next";

function TableHeader<T>({
    columns,
    sortColumn,
    sortOrder,
    onSort,
}: TableHeaderProps<T>) {
    const { t } = useTranslation();
    return (
        <thead className="bg-slate-100 border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <tr>
                {columns.map((col) => {
                    const isSorted = sortColumn === col.key;
                    return (
                        <th
                            key={String(col.key)}
                            className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 ${col.sortable ? "cursor-pointer select-none hover:text-slate-900 dark:hover:text-white" : ""
                                }`}
                            onClick={() => col.sortable && onSort(col.key)}
                        >
                            <div className="flex items-center gap-1.5">
                                <span>{t(col.label)}</span>
                                {col.sortable && (
                                    <span className="text-slate-400">
                                        {isSorted ? (
                                            sortOrder === "asc" ? "▲" : "▼"
                                        ) : (
                                            <span className="opacity-40">↕</span>
                                        )}
                                    </span>
                                )}
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default TableHeader;