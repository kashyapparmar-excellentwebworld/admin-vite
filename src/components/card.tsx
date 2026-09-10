const Card = ({ children, className }: { children: any, className?: string }) => {
    return (
        <div className={`p-4 shadow-2xl rounded-2xl w-full bg-white dark:bg-black ${className}`} >
            {children}
        </div>
    )
}

export default Card
