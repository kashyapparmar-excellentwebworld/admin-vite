import type { Product, User } from "./types";

export const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password"];
export const validCreds = {
    email: "user@example.com"
}

export const users: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", status: "Active" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", status: "Active" },
    { id: 6, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Inactive" },
    { id: 7, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", status: "Active" },
    { id: 8, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 9, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Inactive" },
    { id: 10, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", status: "Active" },
    { id: 11, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 12, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Inactive" },
    { id: 13, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", status: "Active" },
    { id: 14, name: "Charlie Brown", email: "charlie@example.com", role: "Editor", status: "Active" },
    { id: 15, name: "Charlie Brown", email: "charlie@test.com", role: "Editor", status: "Active" },
];

export const products: Product[] = [
    {
        id: 1,
        name: "Iphone",
        category: "Phone",
        price: 150000,
        brand: "Apple"
    },
    {
        id: 2,
        name: "S24 ultra",
        category: "Phone",
        price: 135000,
        brand: "Samsungs"
    },
    {
        id: 3,
        name: "Ideapad Gaming 3",
        category: "Laptop",
        price: 70000,
        brand: "Lenovo"
    },
    {
        id: 4,
        name: "Mac book pro",
        category: "Laptop",
        price: 150000,
        brand: "Apple"
    },
    {
        id: 5,
        name: "Nirvana Ion",
        category: "Wireless buds",
        price: 1500,
        brand: "boat lifestyle"
    }
];