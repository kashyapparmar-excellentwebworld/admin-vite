import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="text-muted-foreground">Welcome to your app.</p>
      <Button>Action Button</Button>
    </div>
  )
}