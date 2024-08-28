function CustomSkeleton() {
    return (
        <div className="mx-auto bg-white rounded rounded-2xl">
            <div className="p-3 h-">
                <div className="grid grid-cols-4 gap-4 mt-2">
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-12 bg-gray-200 rounded animate-pulse">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomSkeleton;