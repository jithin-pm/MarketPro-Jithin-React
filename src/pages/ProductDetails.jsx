import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart, ArrowLeft, Storefront, Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ProductDetails = () => {
    const { id } = useParams()
    const [qty, setQty] = useState(1)
    const [activeImg, setActiveImg] = useState(0)

    const images = [
        '/images/thumbs/product-img7.png',
        '/images/thumbs/product-img8.png',
        '/images/thumbs/product-img9.png',
    ]

    return (
        <section className="py-10">
            <div className="max-w-[1320px] mx-auto px-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link to="/" className="text-gray-500 hover:text-main-600">Home</Link>
                    <span className="text-gray-400">/</span>
                    <Link to="/shop" className="text-gray-500 hover:text-main-600">Shop</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-heading font-medium">Product Details</span>
                </div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Image Section */}
                    <div>
                        <div className="bg-neutral-50 rounded-2xl p-8 flex items-center justify-center mb-4 min-h-[400px]">
                            <img src={images[activeImg]} alt="Product" className="max-h-[350px] object-contain" />
                        </div>
                        <div className="flex gap-3">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImg(idx)}
                                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden flex items-center justify-center p-2 transition ${activeImg === idx ? 'border-main-600' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <img src={img} alt="" className="max-h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-heading mb-4">C-500 Antioxidant Protect Dietary Supplement</h1>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                                {Array(5).fill(null).map((_, i) => (
                                    <Star key={i} size={16} weight="fill" className={i < 4 ? 'text-warning-600' : 'text-gray-300'} />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">(17k Reviews)</span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <Storefront size={18} weight="fill" className="text-main-600" />
                            <span className="text-gray-500 text-sm">By Lucky Supermarket</span>
                        </div>

                        <div className="flex items-end gap-3 mb-6 mt-4">
                            <span className="text-3xl font-bold text-heading">$14.99</span>
                            <span className="text-xl text-gray-400 line-through">$28.99</span>
                            <span className="bg-danger-600 text-white text-xs px-2 py-1 rounded font-medium">Save 48%</span>
                        </div>

                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-heading font-medium">Quantity:</span>
                            <div className="flex items-center border border-gray-200 rounded-lg">
                                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition">
                                    <Minus size={16} />
                                </button>
                                <span className="w-12 h-10 flex items-center justify-center text-heading font-semibold border-x border-gray-200">{qty}</span>
                                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition">
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Link className="flex-1 min-w-[200px] bg-main-600 text-white py-3.5 px-8 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-main-800 transition">
                                <ShoppingCart size={20} /> Add to Cart
                            </Link>
                            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-danger-600 hover:border-danger-600 transition">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Meta */}
                        <div className="mt-8 border-t border-gray-100 pt-6 space-y-2">
                            <p className="text-sm"><span className="text-heading font-medium">SKU:</span> <span className="text-gray-500">FWM15VKT</span></p>
                            <p className="text-sm"><span className="text-heading font-medium">Category:</span> <span className="text-gray-500">Grocery</span></p>
                            <p className="text-sm"><span className="text-heading font-medium">Tags:</span> <span className="text-gray-500">Healthy, Organic, Fresh</span></p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProductDetails
