import { useTranslation } from "react-i18next";

interface TableSearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

function TableSearch({
    value,
    onChange,
    placeholder,
}: TableSearchProps) {
    const { t } = useTranslation();
    return (
        <div className="relative w-full max-w-xs">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || (t("product_management.search") + "...")}
                className="w-full px-3 py-2 pr-8 text-sm placeholder:capitalize border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />
            {value && (
                <button
                    onClick={() => onChange("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                    ✕
                </button>
            )}
        </div>
    );
}

export default TableSearch;