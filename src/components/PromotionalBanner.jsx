import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const promos = [
    { title: 'Everyday Fresh Meat', price: '$60.99', img: '/images/thumbs/promotional-banner-img1.png' },
    { title: 'Daily Fresh Vegetables', price: '$60.99', img: '/images/thumbs/promotional-banner-img2.png' },
    { title: 'Everyday Fresh Milk', price: '$60.99', img: '/images/thumbs/promotional-banner-img3.png' },
    { title: 'Everyday Fresh Fruits', price: '$10.99', img: '/images/thumbs/promotional-banner-img4.png' },
]

const PromotionalBanner = () => {
    return (
        <section className="pt-16">
            <div className=" mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {promos.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl font-['Quicksand'] overflow-hidden z-[1] py-15 ps-10 pe-6 min-h-[250px]"
                        >
                            <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover -z-[1]" />
                            <div  >
                                <h6 className="text-2xl text-gray-950 font-bold text-heading max-w-[180px]">{item.title}</h6>
                                {item.price && (
                                    <div className="flex items-end gap-2 mt-2">
                                        <div className='flex items-center justify-center gap-2' >
                                            <span className="text-heading italic font-semibold text-sm">Starting at</span>
                                            <span className="text-red-500 font-bold text-lg">{item.price}</span>
                                        </div>
                                    </div>
                                )}
                                <Link to="/shop" className="mt-6 inline-flex items-center gap-2 bg-main-600 text-white px-5 py-2.5 rounded-full text-md font-medium bg-[#1c799b] hover:bg-[#004f6b]  transition">
                                    Shop Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PromotionalBanner
