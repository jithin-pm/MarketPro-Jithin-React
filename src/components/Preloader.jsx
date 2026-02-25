import { useState, useEffect } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    if (!loading) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-main-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-lg font-semibold text-heading">Loading...</span>
            </div>
        </div>
    )
}

export default Preloader
