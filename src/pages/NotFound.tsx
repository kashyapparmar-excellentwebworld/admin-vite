import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col dark:text-white items-center justify-center gap-4 py-20">
            <h1 className="text-4xl font-extrabold">404</h1>
            <p>Page not found.</p>
            <Button>
                <Link to="/">Go Home</Link>
            </Button>
        </div>
    )
}