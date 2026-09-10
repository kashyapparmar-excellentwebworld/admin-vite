"use client"
import * as yup from "yup";

export const loginSchema = yup.object({
    // fullName: yup
    //     .string()
    //     .required("Full name is required")
    //     .min(3, "Full name must be at least 3 characters"),
    email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
        ),
    // confirmPassword: yup
    //     .string()
    //     .required("Please confirm your password")
    //     .oneOf([yup.ref("password")], "Passwords do not match"),
});

export type loginFormData = yup.InferType<typeof loginSchema>;

export type SortOrder = "asc" | "desc" | null;

export interface ColumnType<T> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    render?: (row: T) => React.ReactNode;
}

export interface TableHeaderProps<T> {
    columns: ColumnType<T>[];
    sortColumn: keyof T | string | null;
    sortOrder: SortOrder;
    onSort: (key: keyof T | string) => void;
}


export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: "Active" | "Inactive";
}

export interface ProductType {
    id: number;
    name: string;
    category: string;
    price: number;
    brand: string;
}


export interface DataTableProps<T> {
    columns: ColumnType<T>[];
    data: T[];
    searchPlaceholder?: string;
    initialPageSize?: number;
    onRowClick?: (row: T) => void;
}