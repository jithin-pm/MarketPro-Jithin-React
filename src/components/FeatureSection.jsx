import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import 'swiper/css'
import 'swiper/css/navigation'

const features = [
    { name: 'Vegetables', img: '/images/thumbs/feature-img1.png', count: '125+ Products' },
    { name: 'Fish & Meats', img: '/images/thumbs/feature-img2.png', count: '125+ Products' },
    { name: 'Desserts', img: '/images/thumbs/feature-img3.png', count: '125+ Products' },
    { name: 'Drinks & Juice', img: '/images/thumbs/feature-img4.png', count: '125+ Products' },
    { name: 'Animals Food', img: '/images/thumbs/feature-img5.png', count: '125+ Products' },
    { name: 'Fresh Fruits', img: '/images/thumbs/feature-img6.png', count: '125+ Products' },
    { name: 'Yummy Candy', img: '/images/thumbs/feature-img7.png', count: '125+ Products' },
    { name: 'Dairy & Eggs', img: '/images/thumbs/feature-img8.png', count: '125+ Products' },
    { name: 'Snacks', img: '/images/thumbs/feature-img9.png', count: '125+ Products' },
    { name: 'Frozen Foods', img: '/images/thumbs/feature-img10.png', count: '125+ Products' },
]

const FeatureSection = () => {
    return (
        <section id="featureSection" className="gap-8! group/nav relative">
            <div className=" mx-auto px-4">
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: '.feature-prev',
                            nextEl: '.feature-next',
                        }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={4}
                        breakpoints={{
                            480: { slidesPerView: 2, spaceBetween: 5 },
                            640: { slidesPerView: 3, spaceBetween: 8 },
                            768: { slidesPerView: 4, spaceBetween: 10 },
                            1024: { slidesPerView: 5, spaceBetween: 12 },
                            1280: { slidesPerView: 6, spaceBetween: 12 },
                            1536: { slidesPerView: 7, spaceBetween: 12 },
                        }}
                        className="px-1!"
                    >
                        {features.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <motion.div
                                    className="text-center py-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Link className="block group/item">
                                        <div className="w-38 h-38 mx-auto rounded-full bg-[#e8f9e9] flex items-center justify-center overflow-hidden border-2 border-transparent hover:border-main-600 transition">
                                            <img src={item.img} alt={item.name} className="w-26 h-26 object-contain group-hover/item:scale-110 transition-transform" />
                                        </div>
                                        <h6 className="text-xl text-gray-950 font-semibold mt-4 font-['Quicksand'] mb-1 text-heading">{item.name}</h6>
                                        <span className="text-md font-semibold font-['Quicksand'] text-gray-400">{item.count}</span>
                                    </Link>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Left & Right White Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

                    {/* Custom Navigation Icons - Slide in on hover */}
                    <div className="absolute inset-0 pointer-events-none z-20 hidden md:block group/nav">
                        <button className="feature-prev absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-heading hover:bg-[#007E8F] hover:text-white transition-all duration-300 pointer-events-auto border border-gray-100 opacity-0 -translate-x-full group-hover/nav:opacity-100 group-hover/nav:translate-x-4">
                            <CaretLeft size={20} weight="bold" />
                        </button>
                        <button className="feature-next absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-heading hover:bg-[#007E8F] hover:text-white transition-all duration-300 pointer-events-auto border border-gray-100 opacity-0 translate-x-full group-hover/nav:opacity-100 group-hover/nav:-translate-x-4">
                            <CaretRight size={20} weight="bold" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
