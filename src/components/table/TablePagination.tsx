interface TablePaginationProps {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalRecords: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    pageSizeOptions?: number[];
}

function TablePagination({
    currentPage,
    totalPages,
    pageSize,
    totalRecords,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions = [5, 10, 20, 50],
}: TablePaginationProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-3 text-sm text-slate-600 dark:text-slate-400">
            <div>
                Showing {Math.min((currentPage - 1) * pageSize + 1, totalRecords)} to{" "}
                {Math.min(currentPage * pageSize, totalRecords)} of {totalRecords} records
            </div>

            <div className="flex items-center gap-6">
                {/* Rows per page */}
                <div className="flex items-center gap-2">
                    <span>Rows per page:</span>
                    <select
                        value={pageSize}
                        onChange={(e) => onPageSizeChange(Number(e.target.value))}
                        className="px-2 py-1 text-sm border rounded border-slate-300 dark:bg-slate-800 dark:border-slate-700"
                    >
                        {pageSizeOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => onPageChange(currentPage - 1)}
                        className="px-3 py-1 border rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        Prev
                    </button>
                    <span>
                        {currentPage} / {totalPages || 1}
                    </span>
                    <button
                        disabled={currentPage >= totalPages}
                        onClick={() => onPageChange(currentPage + 1)}
                        className="px-3 py-1 border rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TablePagination;