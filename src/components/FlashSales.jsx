import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { ArrowRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'

const flashProducts = [
    { img: '/images/thumbs/product-img26.png', title: 'Taylor Farms Broccoli Florets Vegetables', sold: 18, total: 35 },
    { img: '/images/thumbs/product-img27.png', title: 'Taylor Farms Broccoli Florets Vegetables', sold: 18, total: 35 },
    { img: '/images/thumbs/product-img28.png', title: 'Taylor Farms Broccoli Florets Vegetables', sold: 18, total: 35 },
    { img: '/images/thumbs/product-img29.png', title: 'Taylor Farms Broccoli Florets Vegetables', sold: 18, total: 35 },
    { img: '/images/thumbs/product-img30.png', title: 'Taylor Farms Broccoli Florets Vegetables', sold: 18, total: 35 },
    { img: '/images/thumbs/product-img13.png', title: 'Taylor Farms Broccoli Florets Vegetables', sold: 18, total: 35 },
    { img: '/images/thumbs/product-img3.png', title: 'Taylor Farms Broccoli Florets Vegetables', sold: 18, total: 35 },
]

const useCountdown = (daysAhead = 30) => {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    useEffect(() => {
        const target = new Date()
        target.setDate(target.getDate() + daysAhead)
        const interval = setInterval(() => {
            const diff = target - new Date()
            if (diff <= 0) { clearInterval(interval); return }
            setTime({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff / 3600000) % 24),
                minutes: Math.floor((diff / 60000) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [daysAhead])
    return time
}

const FlashSales = () => {
    const countdown1 = useCountdown(15)
    const countdown2 = useCountdown(20)

    return (
        <>
            {/* Product Slider */}
            <section className="pt-12 ">
                <div className="mx-auto px-4">
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                        <h5 className="text-3xl font-bold text-heading font-['Quicksand'] text-gray-950 pb-5 ">Flash Sales Today</h5>
                        <div className="flex items-center gap-4">
                            <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-main-600 hover:underline">View All Deals</Link>
                            <div className="flex gap-2">
                                <button className="flash-prev w-9 h-9 flex items-center justify-center rounded-full border border-gray-100 hover:border-main-600 hover:bg-main-600 hover:text-white transition text-lg">
                                    <CaretLeft size={16} />
                                </button>
                                <button className="flash-next w-9 h-9 flex items-center justify-center rounded-full border border-gray-100 hover:border-main-600 hover:bg-main-600 hover:text-white transition text-lg">
                                    <CaretRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{ prevEl: '.flash-prev', nextEl: '.flash-next' }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={24}
                        slidesPerView={1}
                        className="overflow-visible! w-full"
                        breakpoints={{
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                            1536: { slidesPerView: 6 },
                        }}
                    >
                        {flashProducts.map((product, idx) => (
                            <SwiperSlide key={idx} className="h-auto! flex">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                    className="w-full flex"
                                >
                                    <ProductCard
                                        image={product.img}
                                        title={product.title}
                                        sold={product.sold}
                                        totalStock={product.total}
                                        variant="slider"
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Flash Sale Cards */}
            <section className="pt-16 overflow-hidden">
                <div className=" mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        {/* Card 1 */}
                        <div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden relative flex items-center gap-4 pr-14 justify-end min-h-[280px]"
                        >
                            <img src="/images/bg/flash-sale-bg1.png" alt="" className="absolute inset-0 w-full h-full object-cover -z-[1]" />
                            <div className="py-8 font-['Quicksand']">
                                <h6 className="text-3xl font-bold text-heading mb-2 text-gray-950">X-Connect Smart Television</h6>
                                <p className="text-gray-500 mb-3 text-md font-semibold">Time remaining until the end of the offer.</p>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        { val: countdown1.days, label: 'D' },
                                        { val: countdown1.hours, label: 'H' },
                                        { val: countdown1.minutes, label: 'M' },
                                        { val: countdown1.seconds, label: 'S' },
                                    ].map((t, i) => (
                                        <span key={i} className="py-2 px-3 text-heading text-sm font-medium shadow rounded bg-white">
                                            {String(t.val).padStart(2, '0')} {t.label}
                                        </span>
                                    ))}
                                </div>
                                <Link to="/shop" className="mt-6 inline-flex items-center gap-2 bg-[#1c799b] hover:bg-[#005878] text-white px-5 py-3 rounded-full text-md font-medium hover:bg-main-800 transition">
                                    Shop Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden relative flex items-center justify-between gap-4 pl-12 min-h-[220px]"
                        >
                            <img src="/images/bg/flash-sale-bg2.png" alt="" className="absolute inset-0 w-full h-full object-cover  -z-[1]" />
                            <div className="py-8 font-['Quicksand'] ">
                                <h6 className="text-3xl font-bold text-heading mb-2 text-gray-950">Vegetables Combo Box</h6>
                                <p className="text-heading mb-3 text-md font-semibold">Time remaining until the end of the offer.</p>
                                <div className="flex gap-2 flex-wrap">
                                    {[
                                        { val: countdown2.days, label: 'D' },
                                        { val: countdown2.hours, label: 'H' },
                                        { val: countdown2.minutes, label: 'M' },
                                        { val: countdown2.seconds, label: 'S' },
                                    ].map((t, i) => (
                                        <span key={i} className="py-2 px-3 text-sm font-medium shadow rounded bg-[#1c799b] text-white">
                                            {String(t.val).padStart(2, '0')} {t.label}
                                        </span>
                                    ))}
                                </div>
                                <Link to="/shop" className="mt-6 inline-flex items-center gap-2 bg-[#2abc79] hover:bg-[#008b4a] text-white px-5 py-3 rounded-full text-md font-medium transition">
                                    Shop Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlashSales
