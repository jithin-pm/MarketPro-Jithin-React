import { Link } from 'react-router-dom'
import { Trash, Minus, Plus, ArrowRight, ArrowLeft } from '@phosphor-icons/react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const initialItems = [
    { id: 1, img: '/images/thumbs/product-img7.png', title: 'C-500 Antioxidant Protect Dietary Supplement', price: 14.99, qty: 1 },
    { id: 2, img: '/images/thumbs/product-img8.png', title: "Marcel's Modern Pantry Almond Unsweetened", price: 14.99, qty: 2 },
    { id: 3, img: '/images/thumbs/product-img9.png', title: 'O Organics Milk, Whole, Vitamin D', price: 14.99, qty: 1 },
]

const Cart = () => {
    const [items, setItems] = useState(initialItems)

    const updateQty = (id, delta) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ))
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
    const shipping = 5.00
    const total = subtotal + shipping

    return (
        <section className="py-10">
            <div className="max-w-[1320px] mx-auto px-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link to="/" className="text-gray-500 hover:text-main-600">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-heading font-medium">Shopping Cart</span>
                </div>

                <h1 className="text-3xl font-bold text-heading mb-8">Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-heading mb-4">Your cart is empty</h3>
                        <p className="text-gray-500 mb-6">Looks like you haven&apos;t added any products yet.</p>
                        <Link to="/shop" className="inline-flex items-center gap-2 bg-main-600 text-white px-8 py-3 rounded-full font-medium hover:bg-main-800 transition">
                            <ArrowLeft size={16} /> Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                {/* Table Header */}
                                <div className="hidden md:grid grid-cols-12 gap-4 bg-neutral-50 px-6 py-3 text-sm font-semibold text-heading">
                                    <div className="col-span-5">Product</div>
                                    <div className="col-span-2 text-center">Price</div>
                                    <div className="col-span-3 text-center">Quantity</div>
                                    <div className="col-span-2 text-right">Total</div>
                                </div>

                                {/* Items */}
                                {items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 border-b border-gray-100 last:border-b-0"
                                    >
                                        <div className="md:col-span-5 flex items-center gap-4">
                                            <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-danger-600 transition shrink-0">
                                                <Trash size={18} />
                                            </button>
                                            <img src={item.img} alt="" className="w-16 h-16 object-contain shrink-0" />
                                            <Link to="/product/1" className="text-heading font-medium text-sm hover:text-main-600 transition text-line-2">{item.title}</Link>
                                        </div>
                                        <div className="md:col-span-2 text-center text-heading font-semibold text-sm">${item.price.toFixed(2)}</div>
                                        <div className="md:col-span-3 flex justify-center">
                                            <div className="flex items-center border border-gray-200 rounded-lg">
                                                <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-10 h-8 flex items-center justify-center text-heading font-semibold text-sm border-x border-gray-200">{item.qty}</span>
                                                <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2 text-right text-heading font-bold text-sm">${(item.price * item.qty).toFixed(2)}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-between mt-6">
                                <Link to="/shop" className="flex items-center gap-2 text-gray-600 hover:text-main-600 text-sm font-medium transition">
                                    <ArrowLeft size={16} /> Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Cart Summary */}
                        <div>
                            <div className="border border-gray-100 rounded-2xl p-6">
                                <h5 className="text-lg font-bold text-heading mb-6">Cart Summary</h5>
                                <div className="space-y-3 pb-4 border-b border-gray-100">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Subtotal</span>
                                        <span className="text-heading font-semibold">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Shipping</span>
                                        <span className="text-heading font-semibold">${shipping.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-4 mb-6">
                                    <span className="text-heading font-bold text-lg">Total</span>
                                    <span className="text-heading font-bold text-lg">${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-main-600 text-white py-3.5 rounded-full font-medium hover:bg-main-800 transition flex items-center justify-center gap-2">
                                    Proceed to Checkout <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Cart
