const Loader = ({ className }: { className?: string }) => {
    return (
        <div className={`flex-1 flex items-center justify-center min-h-60 ${className}`}>
            <div className="w-8 h-8 rounded-full border-4 border-black/20 border-t-black/70 animate-spin" />
        </div>
    );
};

export default Loader;
