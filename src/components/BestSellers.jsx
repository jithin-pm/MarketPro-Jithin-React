import { Link } from 'react-router-dom'
import { ArrowRight, Star, Storefront, ShoppingCart } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const bestProducts = [
    { img: '/images/thumbs/best-sell1.png', title: 'Taylor Farms Broccoli Florets Vegetables', badge: 'Sale 50%' },
    { img: '/images/thumbs/best-sell2.png', title: 'Taylor Farms Broccoli Florets Vegetables' },
    { img: '/images/thumbs/best-sell3.png', title: 'Taylor Farms Broccoli Florets Vegetables', badge: 'Best Sale' },
    { img: '/images/thumbs/best-sell4.png', title: 'Taylor Farms Broccoli Florets Vegetables', badge: 'Sale 50%' },
]

const BestSellers = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const target = new Date()
        target.setDate(target.getDate() + 10)
        const interval = setInterval(() => {
            const diff = target - new Date()
            if (diff <= 0) { clearInterval(interval); return }
            setCountdown({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff / 3600000) % 24),
                minutes: Math.floor((diff / 60000) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="pt-16 pb-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                    <h2 className="text-[32px] text-gray-950 font-[Quicksand] font-bold">Daily Best Sells</h2>
                    <Link to="/shop" className="text-[16px] font-medium text-gray-600 hover:text-[#1c799b] transition-colors flex items-center gap-1">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Products Grid */}
                    <div className="xl:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {bestProducts.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col sm:flex-row gap-5 p-5 border border-gray-100 hover:border-[#1c799b] rounded-2xl transition-all duration-300 group bg-white relative"
                                >
                                    {/* Left: Badge, Image, Countdown */}
                                    {product.badge && (
                                        <span className={`absolute top-4 left-4 z-10 bg-[#E53E3E] px-3 py-2 text-[14px] font-semibold text-white rounded-tl-[12px] rounded-br-[12px] leading-none inline-block`}>
                                            {product.badge}
                                        </span>
                                    )}
                                    <div className="sm:w-1/2 flex flex-col justify-between shrink-0">

                                        <Link to="/product/1" className="mt-6 mb-4 flex-1 flex items-center justify-center">
                                            <img src={product.img} alt={product.title} className="w-[160px] h-[160px] object-contain group-hover:scale-105 transition-transform duration-300" />
                                        </Link>

                                        {/* Countdown */}
                                        <div className="flex items-center gap-1 justify-center text-[10px] sm:text-[11px] font-bold text-[#1c799b] font-['Quicksand'] w-full">
                                            <span className="bg-[#e3f4fa] px-1.5 py-1 rounded whitespace-nowrap">{String(countdown.days).padStart(2, '0')} Days</span>
                                            <span className="text-gray-400">:</span>
                                            <span className="bg-[#e3f4fa] px-1.5 py-1 rounded whitespace-nowrap">{String(countdown.hours).padStart(2, '0')} Hours</span>
                                            <span className="text-gray-400">:</span>
                                            <span className="bg-[#e3f4fa] px-1.5 py-1 rounded whitespace-nowrap">{String(countdown.minutes).padStart(2, '0')} Min</span>
                                            <span className="text-gray-400">:</span>
                                            <span className="bg-[#e3f4fa] px-1.5 py-1 rounded whitespace-nowrap">{String(countdown.seconds).padStart(2, '0')} Sec</span>
                                        </div>
                                    </div>

                                    {/* Right: Details */}
                                    <div className="sm:w-1/2 flex flex-col justify-start">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-gray-400 text-[15px] font-semibold line-through">$28.99</span>
                                            <span className="text-heading text-[18px] font-bold text-gray-900">$14.99 <span className="text-gray-500 font-normal text-sm">/Qty</span></span>
                                        </div>

                                        <div className="flex items-center gap-1 mb-2 font-['Quicksand']">
                                            <span className="text-[13px] font-bold text-gray-700">4.8</span>
                                            <Star size={12} weight="fill" className="text-warning-600" />
                                            <span className="text-[13px] text-gray-500">(17k)</span>
                                        </div>

                                        <h6 className="text-[18px] font-bold text-gray-900 font-['Quicksand'] mb-2 leading-tight">
                                            <Link to="/product/1" className="text-line-2 hover:text-[#1c799b] transition-colors">{product.title}</Link>
                                        </h6>

                                        <div className="flex items-center gap-1.5 mb-3 font-['Quicksand']">
                                            <Storefront size={16} className="text-[#1c799b]" />
                                            <span className="text-gray-500 text-[13px]">By Lucky Supermarket</span>
                                        </div>

                                        <div className="mb-4 font-['Quicksand']">
                                            <span className="text-gray-800 text-[13px] font-semibold block">Sold: 18/35</span>
                                        </div>

                                        <Link className="mt-auto w-full bg-[#e3f4fa] text-[#1c799b] hover:bg-[#1c799b] hover:text-white py-2.5 rounded-full flex items-center justify-center gap-2 text-[15px] font-bold transition-colors">
                                            Add To Cart <ShoppingCart size={18} weight="regular" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Promotional Banner (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden bg-cover bg-left-top p-6 flex flex-col justify-start h-full min-h-[360px]"
                        style={{ backgroundImage: "url('/images/bg/special-snacks.png')" }}
                    >
                        <div className="relative z-10 ml-6 pt-10 flex flex-col items-start transform -translate-y-4">
                            <div className="bg-white rounded-full p-4 shadow-sm w-[90px] h-[90px] flex items-center justify-center mb-6">
                                <img src="/images/thumbs/offer-logo.png" alt="Nature Food Logo" className="w-[60px]" />
                            </div>
                            <h4 className="text-[32px] font-bold text-gray-950 font-['Quicksand'] mb-2 leading-[1.1]">
                                $5 off your first order
                            </h4>
                            <p className="text-gray-950 font-semibold mb-4 flex items-center flex-wrap gap-2 text-[15px]">
                                Delivery by 6:15am <span className="text-[#2DA831]">Expire Aug 5</span>
                            </p>
                            <Link to="/shop" className="bg-[#2abc79] text-white px-8 py-3 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-[#009407] transition-all duration-300 w-fit">
                                Shop Now <ArrowRight size={18} weight="bold" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default BestSellers
