import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { ShoppingCartSimple, CaretDoubleDown, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
    {
        subtitle: 'Save Up To 50% Off On Your First Order',
        title: 'Daily Grocery Order and Get',
        highlight: 'Express',
        titleEnd: 'Delivery',
        price: '$60.99',
        img: '/images/thumbs/banner-img3.png',
    },
    {
        subtitle: 'Save Up To 50% Off On Your First Order',
        title: 'Daily Grocery Order and Get',
        highlight: 'Express',
        titleEnd: 'Delivery',
        price: '$60.99',
        img: '/images/thumbs/banner-img1.png',
    },
]

const Banner = () => {
    return (
        <section className="relative pt-0 pb-0 h-[85vh] m-5">
            {/* Full-width Background */}
            <div
                className="absolute inset-x-0 top-0 h-full w-full -z-20 px-5 bg-[#E9FFFF] rounded-4xl"
            ></div>

            {/* Content Swiper */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.banner-prev',
                    nextEl: '.banner-next',
                }}
                loop
                className="banner-swiper"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-y-8 lg:gap-y-0 lg:gap-x-12 py-12 md:py-24 min-h-0 md:min-h-[85vh] lg:min-h-[600px]">
                            <motion.div
                                className="max-w-[650px] w-full"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="font-semibold text-main-600 uppercase tracking-wider mb-3 text-green-400 block text-sm md:text-base">
                                    {slide.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-['Quicksand'] lg:text-[52px] font-bold text-heading leading-tight text-gray-950 mb-8">
                                    {slide.title} <span className="text-[#007E8F]">{slide.highlight}</span> {slide.titleEnd}
                                </h2>
                                <div className="flex items-center gap-6 flex-wrap">
                                    <Link to="/shop" className="inline-flex items-center gap-2 bg-[#1c799b] hover:bg-[#004f6b]  text-white px-8 py-3 rounded-full font-semibold  transition ">
                                        Explore Shop <ShoppingCartSimple size={20} weight="bold" />
                                    </Link>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-heading italic text-md">Starting at</span>
                                        <span className="text-red-600 font-semibold text-2xl">{slide.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <img src={slide.img} alt="Banner" className="w-[320px] sm:w-[320px] md:w-full h-auto object-contain max-h-[300px] sm:max-h-[380px] md:max-h-[450px] mx-auto" />
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="mx-auto absolute inset-0 z-30">
                    <div className="relative h-full w-full">
                        <button aria-label="Previous slide" className="banner-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-[44px] sm:w-[52px] h-[44px] sm:h-[52px] rounded-full bg-white shadow-md flex items-center justify-center text-heading hover:bg-[#007E8F] hover:text-white transition pointer-events-auto border border-gray-100">
                            <CaretLeft size={20} weight="bold" />
                        </button>
                        <button aria-label="Next slide" className="banner-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-[44px] sm:w-[52px] h-[44px] sm:h-[52px] rounded-full bg-white shadow-md flex items-center justify-center text-heading hover:bg-[#007E8F] hover:text-white transition pointer-events-auto border border-gray-100">
                            <CaretRight size={20} weight="bold" />
                        </button>
                    </div>
                </div>
            </Swiper>

            {/* Wavy bottom shape */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-10">
                <svg className="relative block w-full h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                </svg>
            </div>

            {/* Scroll Button */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[30px] md:bottom-[35px] z-20">
                <a
                    href="#featureSection"
                    className="w-[60px] h-[60px] md:w-[68px] md:h-[68px] bg-[#007E8F] rounded-full border-4 md:border-[6px] border-white flex items-center justify-center text-white hover:bg-[#006a78] transition shadow-md"
                >
                    <motion.div className='pt-2'
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <CaretDoubleDown size={24} weight="bold" />
                    </motion.div>
                </a>
            </div>
        </section>
    )
}

export default Banner
