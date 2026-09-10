import React from "react";

interface TableCellProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: number;
}

function TableCell({ children, className = "", colSpan }: TableCellProps) {
    return (
        <td
            colSpan={colSpan}
            className={`px-4 py-3 text-sm text-black dark:text-white ${className}`}
        >
            {children}
        </td>
    );
}

export default TableCell;