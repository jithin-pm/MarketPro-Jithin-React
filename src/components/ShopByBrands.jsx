import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import 'swiper/css'
import 'swiper/css/navigation'

const brands = [
    { id: 1, img: '/images/thumbs/brand-img1.png', name: 'Organic Passion' },
    { id: 2, img: '/images/thumbs/brand-img2.png', name: 'Organic Fresh' },
    { id: 3, img: '/images/thumbs/brand-img3.png', name: 'Organic Quality' },
    { id: 4, img: '/images/thumbs/brand-img4.png', name: 'The Organic Shop' },
    { id: 5, img: '/images/thumbs/brand-img5.png', name: 'Organic Healthy' },
    { id: 6, img: '/images/thumbs/brand-img6.png', name: 'Passion Organic' },
    { id: 7, img: '/images/thumbs/brand-img7.png', name: 'Best Organic' },
    { id: 8, img: '/images/thumbs/brand-img8.png', name: 'Organic Premium' },
]

function ShopByBrands() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-[32px] font-bold text-gray-950 font-['Quicksand']">
                        Shop by Brands
                    </h2>
                    <div className="flex items-center gap-4">
                        <Link to="/shop" className="text-gray-600 hover:text-[#1c799b] font-medium text-[16px]">
                            View All Deals
                        </Link>
                        <div className="flex gap-2">
                            <button className="brand-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1c799b] hover:text-white transition-colors text-gray-900 cursor-pointer">
                                <CaretLeft size={20} />
                            </button>
                            <button className="brand-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1c799b] hover:text-white transition-colors text-gray-900 cursor-pointer">
                                <CaretRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Brand Logos Carousel */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{ prevEl: '.brand-prev', nextEl: '.brand-next' }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={24}
                    slidesPerView={2}
                    className="overflow-visible! w-full"
                    breakpoints={{
                        480: { slidesPerView: 3 },
                        640: { slidesPerView: 4 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 6 },
                        1280: { slidesPerView: 7 },
                    }}
                >
                    {[...brands, ...brands].map((brand, idx) => (
                        <SwiperSlide key={`${brand.id}-${idx}`}>
                            <Link to="/shop" className="block group">
                                <div className="flex items-center justify-center py-4 px-2">
                                    <img
                                        src={brand.img}
                                        alt={brand.name}
                                        className="w-[140px] h-[140px] object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default ShopByBrands
