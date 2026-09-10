import React from "react";

interface TableRowProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

function TableRow({ children, onClick, className = "" }: TableRowProps) {
    return (
        <tr
            onClick={onClick}
            className={`border-b border-slate-200 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:hover:bg-slate-800/50 ${onClick ? "cursor-pointer" : ""
                } ${className}`}
        >
            {children}
        </tr>
    );
}

export default TableRow;