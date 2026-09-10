import { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableSearch from "./TableSearch";
import TablePagination from "./TablePagination";
import type { DataTableProps, SortOrder } from "@/lib/types";
import { useTranslation } from "react-i18next";

export function DataTable<T extends Record<string, any>>({
    columns,
    data,
    searchPlaceholder,
    initialPageSize = 10,
    onRowClick,
}: DataTableProps<T>) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState<keyof T | string | null>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(initialPageSize);
    const { t } = useTranslation();

    // 1. Filter logic (Global search)
    const filteredData = useMemo(() => {
        if (!searchTerm.trim()) return data;

        const term = searchTerm.toLowerCase();
        return data.filter((row) =>
            Object.values(row).some((val) =>
                String(val ?? "")
                    .toLowerCase()
                    .includes(term)
            )
        );
    }, [data, searchTerm]);

    // 2. Sorting logic
    const sortedData = useMemo(() => {
        if (!sortColumn || !sortOrder) return filteredData;

        return [...filteredData].sort((a, b) => {
            const valA = a[sortColumn as keyof T];
            const valB = b[sortColumn as keyof T];

            if (valA === valB) return 0;
            if (valA == null) return 1;
            if (valB == null) return -1;

            const res = valA < valB ? -1 : 1;
            return sortOrder === "asc" ? res : -res;
        });
    }, [filteredData, sortColumn, sortOrder]);

    // 3. Pagination logic
    const totalRecords = sortedData.length;
    const totalPages = Math.ceil(totalRecords / pageSize);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, currentPage, pageSize]);

    // Handlers
    const handleSort = (key: keyof T | string) => {
        if (sortColumn === key) {
            if (sortOrder === "asc") setSortOrder("desc");
            else if (sortOrder === "desc") {
                setSortOrder(null);
                setSortColumn(null);
            }
        } else {
            setSortColumn(key);
            setSortOrder("asc");
        }
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setCurrentPage(1); // Reset to first page on search change
    };

    const handlePageSizeChange = (size: number) => {
        setPageSize(size);
        setCurrentPage(1);
    };

    return (
        <div className="w-full space-y-4">
            {/* Search Header */}
            <div className="flex items-center justify-between">
                <TableSearch
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder={searchPlaceholder}
                />
            </div>

            {/* Main Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full text-start border-collapse">
                    <TableHeader
                        columns={columns}
                        sortColumn={sortColumn}
                        sortOrder={sortOrder}
                        onSort={handleSort}
                    />
                    <tbody className="divide-y divide-slate-200 overflow-auto h-57 dark:divide-slate-700">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, index) => (
                                <TableRow
                                    key={row.id || index}
                                    onClick={() => onRowClick && onRowClick(row)}
                                >
                                    {columns?.map((col) => (
                                        <TableCell key={String(col.key)}>
                                            {col.render
                                                ? col.render(row)
                                                : String(row[col.key as keyof T] ?? "")}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="text-center py-8 text-black dark:text-white"
                                >
                                    {t("table.no_record")}
                                </TableCell>
                            </TableRow>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageSize={pageSize}
                totalRecords={totalRecords}
                onPageChange={setCurrentPage}
                onPageSizeChange={handlePageSizeChange}
            />
        </div>
    );
}