import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import ProductCard from './ProductCard'

const tabs = ['All', 'Grocery', 'Fruits', 'Juices', 'Vegetables', 'Snacks', 'Organic Foods']

const products = [
    { img: '/images/thumbs/product-img7.png', title: 'C-500 Antioxidant Protect Dietary Supplement' },
    { img: '/images/thumbs/product-img8.png', title: "Marcel's Modern Pantry Almond Unsweetened", badge: 'Sale 50%', badgeColor: 'bg-[#E53E3E]' },
    { img: '/images/thumbs/product-img9.png', title: 'O Organics Milk, Whole, Vitamin D', badge: 'Sale 50%', badgeColor: 'bg-[#E53E3E]' },
    { img: '/images/thumbs/product-img10.png', title: 'Whole Grains and Seeds Organic Bread', badge: 'Best Sale', badgeColor: 'bg-[#3B82F6]' },
    { img: '/images/thumbs/product-img11.png', title: 'Lucerne Yogurt, Lowfat, Strawberry' },
    { img: '/images/thumbs/product-img12.png', title: 'Nature Valley Whole Grain Oats and Honey Protein', badge: 'Sale 50%', badgeColor: 'bg-[#E53E3E]' },
    { img: '/images/thumbs/product-img8.png', title: "Marcel's Modern Pantry Almond Unsweetened", badge: 'Sale 50%', badgeColor: 'bg-[#E53E3E]' },
    { img: '/images/thumbs/product-img14.png', title: 'C-500 Antioxidant Protect Dietary Supplement', badge: 'Sale 50%', badgeColor: 'bg-[#E53E3E]' },
    { img: '/images/thumbs/product-img15.png', title: 'C-500 Antioxidant Protect Dietary Supplement', badge: 'New', badgeColor: 'bg-[#F59E0B]' },
    { img: '/images/thumbs/product-img16.png', title: 'Good & Gather Farmed Atlantic Salmon', badge: 'Sale 50%', badgeColor: 'bg-[#E53E3E]' },
    { img: '/images/thumbs/product-img17.png', title: 'Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp', badge: 'Sale 50%', badgeColor: 'bg-[#E53E3E]' },
    { img: '/images/thumbs/product-img15.png', title: 'Tropicana 100% Juice, Orange, No Pulp', badge: 'New', badgeColor: 'bg-[#F59E0B]' },
]

const RecommendedProducts = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section className="pt-16 overflow-hidden">
            <div className=" mx-auto px-4">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-4 mb-13">
                    <h5 className="text-3xl font-bold text-heading font-['Quicksand'] text-gray-950 ">Recommended for you</h5>
                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg border transition ${activeTab === idx
                                    ? 'border-main-600 bg-main-600 text-white'
                                    : 'border-gray-100 text-gray-700 hover:border-main-600 hover:text-main-600'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.03 }}
                            viewport={{ once: true }}
                        >
                            <ProductCard
                                image={product.img}
                                title={product.title}
                                badge={product.badge}
                                badgeColor={product.badgeColor}
                                variant="grid"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Offer Banners */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    {/* Left Banner */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden bg-cover bg-center p-8 min-h-[280px] lg:min-h-[340px] flex flex-col justify-center"
                        style={{ backgroundImage: "url('/images/bg/offer-bg-img1.png')" }}
                    >
                        <div className="max-w-[70%] sm:max-w-[60%] relative z-10 ml-auto flex flex-col">
                            <div className="bg-white rounded-full p-4 shadow-sm w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] flex items-center justify-center mb-2">
                                <img src="/images/thumbs/offer-logo.png" alt="Logo" className="w-[45px] lg:w-[60px]" />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-950 font-['Quicksand'] mb-4 leading-tight">
                                $5 off your first order
                            </h4>
                            <p className="text-gray-950 font-semibold mb-8 text-sm lg:text-base">
                                Delivery by 6:15am <span className="text-[#2DA831] ml-2">Expire Aug 5</span>
                            </p>
                            <Link to="/shop" className="bg-[#2abc79] text-white px-6 lg:px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-[#009407] transition-all duration-300 w-fit">
                                Shop Now <ArrowRight size={20} weight="bold" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Banner */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden bg-cover bg-center p-8 min-h-[280px] lg:min-h-[340px] flex flex-col justify-center"
                        style={{ backgroundImage: "url('/images/bg/offer-bg-img2.png')" }}
                    >
                        <div className="max-w-[70%] sm:max-w-[60%] relative z-10">
                            <div className="bg-white rounded-full p-4 shadow-sm w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] flex items-center justify-center mb-2">
                                <img src="/images/thumbs/offer-logo.png" alt="Logo" className="w-[45px] lg:w-[60px]" />
                            </div>
                            <h4 className="text-3xl  font-bold text-gray-950 font-['Quicksand'] mb-4 leading-tight">
                                $5 off your first order
                            </h4>
                            <p className="text-gray-950 font-semibold mb-8 text-sm lg:text-base">
                                Delivery by 6:15am <span className="text-[#2DA831] ml-2">Expire Aug 5</span>
                            </p>
                            <Link to="/shop" className="bg-white text-gray-950 px-6 lg:px-8 py-3  rounded-full font-semibold inline-flex items-center gap-2 hover:bg-[#1c799b] hover:text-white transition-all duration-300  w-fit">
                                Shop Now <ArrowRight size={20} weight="bold" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default RecommendedProducts
