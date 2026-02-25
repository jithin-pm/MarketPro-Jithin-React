import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    MagnifyingGlass, User, Heart, ShoppingCartSimple,
    SquaresFour, CaretDown, List, X, Truck, Tag
} from '@phosphor-icons/react'

const navItems = [
    {
        label: 'Home',
        to: '/',
        submenu: [
            { label: 'Home One', to: '/' },
            { label: 'Home Two', to: '/' },
        ],
    },
    {
        label: 'Shop',
        submenu: [
            { label: 'Shop', to: '/shop' },
            { label: 'Shop Details', to: '#' },
        ],
    },
    {
        label: 'Pages',
        badge: { text: 'New', color: 'bg-[#FF9F43]' },
        submenu: [
            { label: 'Cart', to: '/cart' },
            { label: 'Wishlist', to: '#' },
            { label: 'Checkout', to: '#' },
            { label: 'Become Seller', to: '#' },
            { label: 'Account', to: '#' },
        ],
    },
    {
        label: 'Vendors',
        badge: { text: 'New', color: 'bg-[#7367F0]' },
        submenu: [
            { label: 'Vendor List', to: '#' },
            { label: 'Vendor Store', to: '#' },
        ],
    },
    {
        label: 'Blog',
        submenu: [
            { label: 'Blog', to: '#' },
            { label: 'Blog Details', to: '#' },
        ],
    },
    { label: 'Contact Us', to: '#' },
]

const categories = [
    { name: 'Vegetables', img: '/images/icon/category-1.png' },
    { name: 'Milk & Cake', img: '/images/icon/category-2.png' },
    { name: 'Grocery', img: '/images/icon/category-3.png' },
    { name: 'Beauty', img: '/images/icon/category-4.png' },
    { name: 'Wines & Drinks', img: '/images/icon/category-5.png' },
    { name: 'Snacks', img: '/images/icon/category-6.png' },
    { name: 'Juice', img: '/images/icon/category-7.png' },
    { name: 'Fruits', img: '/images/icon/category-8.png' },
    { name: 'Tea & Coffee', img: '/images/icon/category-9.png' },
]

// Countdown timer hook
function useCountdown(targetDays = 628, targetHours = 14, targetMins = 50, targetSecs = 43) {
    const [time, setTime] = useState({ d: targetDays, h: targetHours, m: targetMins, s: targetSecs })
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => {
                let { d, h, m, s } = prev
                if (s > 0) return { d, h, m, s: s - 1 }
                if (m > 0) return { d, h, m: m - 1, s: 59 }
                if (h > 0) return { d, h: h - 1, m: 59, s: 59 }
                if (d > 0) return { d: d - 1, h: 23, m: 59, s: 59 }
                return prev
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return time
}

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState(null)
    const [sticky, setSticky] = useState(false)
    const categoryRef = useRef(null)
    const time = useCountdown()

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 100)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (categoryRef.current && !categoryRef.current.contains(e.target)) {
                setCategoryOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const pad = (n) => String(n).padStart(2, '0')

    return (
        <>
            {/* ===== Search Overlay ===== */}
            {searchOpen && (
                <div className="fixed inset-0 bg-black/80 z-[999] flex items-start justify-center pt-[20vh]">
                    <div className="w-full max-w-2xl px-4">
                        <button onClick={() => setSearchOpen(false)} className="absolute top-4 right-4 w-12 h-12 rounded-full border border-gray-100 text-white text-2xl flex items-center justify-center hover:bg-white hover:text-gray-800 transition">
                            <X size={24} />
                        </button>
                        <div className="relative">
                            <input type="text" className="w-full py-4 px-6 text-xl rounded-full pr-16 outline-none" placeholder="Search for a product or brand" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-main-600 rounded-full flex items-center justify-center text-white">
                                <MagnifyingGlass size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== Mobile Menu Sidebar ===== */}
            <div className={`fixed inset-0 z-[998] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
                <div className={`absolute left-0 top-0 h-full w-[300px] bg-white overflow-y-auto transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-5">
                        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 text-gray-600 text-2xl">
                            <X size={24} />
                        </button>
                        <Link to="/" className="block mb-6">
                            <img src="/images/logo/logo.png" alt="Logo" className="h-10" />
                        </Link>
                        <nav>
                            {navItems.map((item, idx) => (
                                <div key={idx} className="border-b border-gray-100">
                                    {item.submenu ? (
                                        <>
                                            <button
                                                onClick={() => setOpenSubmenu(openSubmenu === idx ? null : idx)}
                                                className="w-full flex items-center justify-between py-3 text-heading font-medium text-[15px]"
                                            >
                                                <span className="flex items-center gap-2">
                                                    {item.label}
                                                    {item.badge && (
                                                        <span className={`${item.badge.color} text-white text-xs px-2 py-0.5 rounded`}>{item.badge.text}</span>
                                                    )}
                                                </span>
                                                <CaretDown size={14} className={`transition-transform ${openSubmenu === idx ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${openSubmenu === idx ? 'max-h-96' : 'max-h-0'}`}>
                                                {item.submenu.map((sub, si) => (
                                                    <Link key={si} to={sub.to} onClick={() => setMobileMenuOpen(false)} className="block py-2 pl-4 text-sm text-gray-600 hover:text-main-600 hover:bg-gray-50">
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link to={item.to} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-heading font-medium text-[15px]">
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* ===== TOP ANNOUNCEMENT BAR ===== */}
            <div className="bg-[#007E8F]  text-white text-[13px] py-2 px-4">
                <div className="mx-auto flex items-center justify-between gap-4 flex-wrap">
                    {/* Left: Sale countdown */}
                    <div className="flex items-center justify-center gap-2 font-medium ">
                        <span className='text-[16px]'>Until the end of the sale:</span>
                        <span className="flex items-center gap-1">
                            <span className="font-bold text-[16px]">{time.d}</span> Days
                            <span className="font-bold text-[16px] ml-1">{pad(time.h)}</span> Hours
                            <span className="font-bold text-[16px] ml-1">{pad(time.m)}</span> Minutes
                            <span className="font-bold text-[16px] ml-1">{pad(time.s)}</span> Sec.
                        </span>
                    </div>

                    {/* Center: Free offer + track */}
                    <div className="hidden lg:flex items-center gap-6 text-[14px]">
                        <span className="flex items-center gap-1.5 font-medium">
                            Buy one get one free on <a href="#" className="text-yellow-400 font-bold hover:underline ml-1">first order</a>
                        </span>
                        <span className="text-white/20">|</span>
                        <a href="#" className="flex items-center gap-1.5 hover:text-yellow-400 transition font-medium">
                            <Truck size={16} />
                            Track Your Order
                        </a>
                    </div>

                    {/* Right: Links */}
                    <div className="hidden sm:flex items-center gap-5 text-[15px]">
                        <a href="#" className="hover:text-yellow-400 transition">Order Tracking</a>
                        <a href="#" className="hover:text-yellow-400 transition">About Us</a>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition">
                            Eng <CaretDown size={12} />
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition">
                            USD <CaretDown size={12} />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== HEADER MIDDLE: Logo + Search + Icons ===== */}
            <header className="bg-white border-b border-gray-100">
                <div className=" mx-auto px-4">
                    <nav className="flex items-center justify-between gap-4 py-4">
                        {/* Logo */}
                        <Link to="/" className="shrink-0">
                            <img src="/images/logo/logo.png" alt="MarketPro" className="h-10" />
                        </Link>

                        {/* Search Bar */}
                        <form className="hidden sm:flex items-center flex-1 max-w-[700px] mx-8">
                            <div className="relative group border border-gray-200 border-r-0 rounded-l-lg h-12 flex items-center bg-white px-4">
                                <select className="bg-transparent text-[15px] font-medium text-heading appearance-none cursor-pointer pr-6">
                                    <option>All categories</option>
                                    <option>Grocery</option>
                                    <option>Breakfast & Dairy</option>
                                </select>
                                <CaretDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>
                            <div className="relative flex-1 group">
                                <input
                                    type="text"
                                    className="w-full h-12 pl-4 pr-16 border border-gray-200 border-l-0 rounded-r-lg text-sm placeholder:text-gray-400"
                                    placeholder="Search for products, categories or brands..."
                                />
                                <button type="submit" className="absolute right-0 top-0 w-12 h-12 bg-[#007E8F] hover:bg-[#006a78] rounded-r-lg flex items-center justify-center text-white transition">
                                    <MagnifyingGlass size={20} weight="bold" />
                                </button>
                            </div>
                        </form>

                        {/* Right Icons */}
                        <div className="flex items-center gap-6 shrink-0">
                            <button onClick={() => setSearchOpen(true)} className="lg:hidden flex text-2xl text-gray-700 hover:text-[#007E8F] transition">
                                <MagnifyingGlass size={24} />
                            </button>
                            <Link to="#" className="flex items-center gap-2 group">
                                <User size={26} className="text-gray-700 group-hover:text-[#007E8F] transition" />
                                <span className="text-[15px] font-semibold text-heading hidden lg:block group-hover:text-[#007E8F]">Profile</span>
                            </Link>
                            <Link to="/cart" className="flex items-center gap-2 group">
                                <div className="relative">
                                    <Heart size={26} className="text-gray-700 group-hover:text-[#007E8F] transition" />
                                    <span className="absolute -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#007E8F] text-white text-[10px] font-bold border-2 border-white">2</span>
                                </div>
                                <span className="text-[15px] font-semibold text-heading hidden lg:block group-hover:text-[#007E8F]">Wishlist</span>
                            </Link>
                            <Link to="/cart" className="flex items-center gap-2 group">
                                <div className="relative">
                                    <ShoppingCartSimple size={26} className="text-gray-700 group-hover:text-[#007E8F] transition" />
                                    <span className="absolute -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#007E8F] text-white text-[10px] font-bold border-2 border-white">2</span>
                                </div>
                                <span className="text-[15px] font-semibold text-heading hidden lg:block group-hover:text-[#007E8F]">Cart</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* ===== HEADER NAV BAR ===== */}
            <header className={`bg-white border-b py-2 border-gray-100 z-[100] transition-all duration-300 ${sticky ? 'fixed top-0 left-0 right-0 shadow-xl' : ''}`}>
                <div className="mx-auto px-4">
                    <nav className="flex items-center justify-between gap-4 py-2">
                        <div className="flex items-center gap-4">
                            {/* Category Dropdown */}
                            <div className="relative" ref={categoryRef}>
                                <button
                                    onClick={() => setCategoryOpen(!categoryOpen)}
                                    className="flex items-center gap-3 text-white bg-[#2ABC79] px-5 py-3 rounded-md hover:bg-[#258d28] transition"
                                >
                                    <SquaresFour size={22} weight="bold" />
                                    <span className="font-semibold text-[15px] tracking-tight">Browse Categories</span>
                                    <CaretDown size={14} weight="bold" className={`transition-transform ml-1 ${categoryOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {categoryOpen && (
                                    <div className="absolute top-[calc(100%+8px)] left-0 bg-white border border-gray-100 rounded-md shadow-2xl p-4 w-[420px] z-[110]">
                                        <div className="grid grid-cols-3 gap-1 max-h-[350px] overflow-y-auto">
                                            {categories.map((cat, i) => (
                                                <Link
                                                    key={i}
                                                    to="/shop"
                                                    onClick={() => setCategoryOpen(false)}
                                                    className="py-4 px-2 rounded-lg hover:bg-main-50 flex flex-col items-center text-center border border-transparent hover:border-main-100 transition"
                                                >
                                                    <img src={cat.img} alt={cat.name} className="w-10 h-10 object-contain" />
                                                    <span className="font-semibold text-heading mt-3 text-sm">{cat.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Desktop Nav Menu */}
                            <div className="hidden lg:block">
                                <ul className="flex items-center gap-1">
                                    {navItems.map((item, idx) => (
                                        <li key={idx} className="relative group">
                                            {item.submenu ? (
                                                <>
                                                    <span className="flex items-center gap-1 px-3 py-4 text-heading font-semibold text-[15px] cursor-pointer hover:text-[#007E8F] transition relative">
                                                        {item.badge && (
                                                            <span className={`${item.badge.color} text-white text-[11px] font-bold px-2 py-0.5 rounded absolute -top-2.5 left-1/2 -translate-x-1/2 badge-blink uppercase leading-none z-10 box-content`}>
                                                                {item.badge.text}
                                                            </span>
                                                        )}
                                                        {item.label}
                                                        <CaretDown size={14} className={`transition-transform duration-200 group-hover:rotate-180 opacity-70`} />
                                                    </span>
                                                    <ul className="absolute top-[calc(100%-8px)] left-0 bg-white rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-3 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100/50">
                                                        {item.submenu.map((sub, si) => (
                                                            <li key={si}>
                                                                <Link to={sub.to} className="block px-6 py-2.5 text-[15px] font-medium text-heading hover:bg-[#F3F4F6] hover:text-[#007E8F] transition-all">
                                                                    {sub.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                <Link to={item.to} className="px-3 py-4 text-heading font-semibold text-[15px] hover:text-[#007E8F] transition flex items-center gap-1">
                                                    {item.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Phone */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-3">
                                <div className="w-10 h-10 border border-gray-100 rounded-md flex items-center justify-center text-[#007E8F]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-2.19a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div className="leading-tight">
                                    <span className="block text-heading font-semibold text-[13px]">Need any Help! call Us</span>
                                    <span className="block font-bold text-[#007E8F] hover:underline text-[16px]">+(2) 871 382 023</span>
                                </div>
                            </div>
                            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-gray-800">
                                <List size={30} />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
