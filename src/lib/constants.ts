import type { ProductType, User } from "./types";

export const MAX_FILE_SIZE = 10 * 1024 * 1024;
export const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password"];
export const validCreds = {
    email: "user@example.com"
}

export const ALLOWED_FILE_TYPES = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf',
    // Audio
    'audio/mpeg',  // .mp3
    'audio/wav',   // .wav
    'audio/ogg',   // .ogg
    'audio/aac',   // .aac
    // Video
    'video/mp4',   // .mp4
    'video/webm',  // .webm
    'video/ogg',   // .ogv
];

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

export const products: ProductType[] = [
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