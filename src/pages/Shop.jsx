import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'

const products = [
    { img: '/images/thumbs/product-img7.png', title: 'C-500 Antioxidant Protect Dietary Supplement' },
    { img: '/images/thumbs/product-img8.png', title: "Marcel's Modern Pantry Almond Unsweetened", badge: 'Sale 50%' },
    { img: '/images/thumbs/product-img9.png', title: 'O Organics Milk, Whole, Vitamin D', badge: 'Sale 50%' },
    { img: '/images/thumbs/product-img10.png', title: 'Whole Grains and Seeds Organic Bread', badge: 'Best Sale', badgeColor: 'bg-info-600' },
    { img: '/images/thumbs/product-img11.png', title: 'Lucerne Yogurt, Lowfat, Strawberry' },
    { img: '/images/thumbs/product-img12.png', title: 'Nature Valley Whole Grain Oats and Honey Protein', badge: 'Sale 50%' },
    { img: '/images/thumbs/product-img13.png', title: 'C-500 Antioxidant Protect Dietary Supplement' },
    { img: '/images/thumbs/product-img14.png', title: 'C-500 Antioxidant Protect Dietary Supplement', badge: 'Sale 50%' },
    { img: '/images/thumbs/product-img15.png', title: 'C-500 Antioxidant Protect Dietary Supplement', badge: 'New', badgeColor: 'bg-warning-600' },
    { img: '/images/thumbs/product-img16.png', title: 'Good & Gather Farmed Atlantic Salmon', badge: 'Sale 50%' },
    { img: '/images/thumbs/product-img17.png', title: 'Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp', badge: 'Sale 50%' },
    { img: '/images/thumbs/product-img18.png', title: 'Tropicana 100% Juice, Orange, No Pulp', badge: 'New', badgeColor: 'bg-warning-600' },
]

const Shop = () => {
    return (
        <section className="py-10">
            <div className=" mx-auto px-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link to="/" className="text-gray-500 hover:text-main-600">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-heading font-medium">Shop</span>
                </div>

                <h1 className="text-3xl font-bold text-heading mb-8">All Products</h1>

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
                                badgeColor={product.badgeColor || 'bg-danger-600'}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shop
