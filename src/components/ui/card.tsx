const Card = ({ children }: { children: any }) => {
    return (
        <div className='p-4 shadow-2xl rounded-2xl w-full bg-white dark:bg-black' >
            {children}
        </div>
    )
}

export default Card
