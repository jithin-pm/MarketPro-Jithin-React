import { useState, useEffect } from 'react'
import { CaretDoubleUp } from '@phosphor-icons/react'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
    const [scrollPercent, setScrollPercent] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setScrollPercent(percent)
            setVisible(scrollTop > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const circumference = 2 * Math.PI * 49
    const offset = circumference - (scrollPercent / 100) * circumference

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full  text-[#1c799b] flex items-center justify-center shadow-lg  hover:text-white transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    fill="none"
                    stroke="rgba(28,121,155,0.15)"
                    strokeWidth="3"
                />
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    fill="none"
                    stroke="#1c799b"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <CaretDoubleUp size={20} weight="bold" className="relative z-10 text-[#1c799b]" />
        </button>
    )
}

export default ScrollToTop
