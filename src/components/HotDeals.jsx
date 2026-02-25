import React, { useEffect } from 'react';
import { CaretLeft, CaretRight, ShoppingCart, Star } from '@phosphor-icons/react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const hotDealsProducts = [
    {
        id: 1,
        image: '/images/thumbs/product-img15.png', // Assuming product images exist or can be fallback loaded
        title: 'Taylor Farms Broccoli Florets Vegetables',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
    {
        id: 2,
        image: '/images/thumbs/product-img9.png',
        title: 'Taylor Farms Broccoli Florets Vegetables',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
    {
        id: 3,
        image: '/images/thumbs/product-img14.png',
        title: 'Taylor Farms Broccoli Florets Vegetables',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
    {
        id: 4,
        image: '/images/thumbs/product-img15.png', // Assuming product images exist or can be fallback loaded
        title: 'Taylor Farms Broccoli Florets Vegetables',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
    {
        id: 5,
        image: '/images/thumbs/product-img15.png', // Assuming product images exist or can be fallback loaded
        title: 'Taylor Farms Broccoli Florets Vegetables',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
    {
        id: 6,
        image: '/images/thumbs/product-img8.png', // Assuming product images exist or can be fallback loaded
        title: 'Lucerne Yogurt, Lowfat, Strawberry',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
    {
        id: 7,
        image: '/images/thumbs/product-img17.png', // Assuming product images exist or can be fallback loaded
        title: 'Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
    {
        id: 8,
        image: '/images/thumbs/product-img9.png', // Assuming product images exist or can be fallback loaded
        title: 'Tropicana 100% Juice, Orange, No Pulp',
        price: '$14.99',
        originalPrice: '$28.99',
        rating: '4.8',
        reviews: '17k',
        sold: 18,
        totalStock: 35
    },
];

const miniProductColumns = [
    {
        title: "Featured Products",
        products: [
            { id: 1, image: "/images/thumbs/short-product-img1.png", title: "Taylor Farms Broccoli", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 2, image: "/images/thumbs/short-product-img2.png", title: "Almond Nuts Fresh", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 3, image: "/images/thumbs/short-product-img3.png", title: "Fresh Kale Organic", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 4, image: "/images/thumbs/short-product-img4.png", title: "Avocado Premium", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 13, image: "/images/thumbs/short-product-img5.png", title: "Green Apple Organic", price: "$1200.00", originalPrice: "$1500.00", rating: "4.7", reviews: "12k" },
            { id: 14, image: "/images/thumbs/short-product-img6.png", title: "Fresh Spinach Bunch", price: "$800.00", originalPrice: "$1100.00", rating: "4.9", reviews: "9k" },
            { id: 15, image: "/images/thumbs/short-product-img7.png", title: "Organic Celery Stalk", price: "$950.00", originalPrice: "$1300.00", rating: "4.6", reviews: "14k" },
            { id: 16, image: "/images/thumbs/short-product-img8.png", title: "Wild Mushroom Mix", price: "$1800.00", originalPrice: "$2200.00", rating: "4.8", reviews: "8k" },
        ]
    },
    {
        title: "Top Selling Products",
        products: [
            { id: 5, image: "/images/thumbs/short-product-img5.png", title: "Carrots Fresh", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 6, image: "/images/thumbs/short-product-img6.png", title: "Fresh Juice Mix", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 7, image: "/images/thumbs/short-product-img7.png", title: "Orange Fresh", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 8, image: "/images/thumbs/short-product-img8.png", title: "Raw Shrimp Large", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 17, image: "/images/thumbs/short-product-img1.png", title: "Blueberry Pack", price: "$900.00", originalPrice: "$1200.00", rating: "4.9", reviews: "21k" },
            { id: 18, image: "/images/thumbs/short-product-img2.png", title: "Cashew Nuts Raw", price: "$2100.00", originalPrice: "$2500.00", rating: "4.7", reviews: "15k" },
            { id: 19, image: "/images/thumbs/short-product-img3.png", title: "Cherry Tomatoes", price: "$650.00", originalPrice: "$900.00", rating: "4.8", reviews: "11k" },
            { id: 20, image: "/images/thumbs/short-product-img4.png", title: "Dragon Fruit Fresh", price: "$1900.00", originalPrice: "$2400.00", rating: "4.6", reviews: "7k" },
        ]
    },
    {
        title: "On-sale Products",
        products: [
            { id: 9, image: "/images/thumbs/short-product-img9.png", title: "Blackberry Fresh", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 10, image: "/images/thumbs/short-product-img1.png", title: "Avocado Green", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 11, image: "/images/thumbs/short-product-img2.png", title: "Orange Slice", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 12, image: "/images/thumbs/short-product-img3.png", title: "Avocado Premium", price: "$1500.00", originalPrice: "$1500.00", rating: "4.8", reviews: "17k" },
            { id: 21, image: "/images/thumbs/short-product-img4.png", title: "Mango Alphonso", price: "$1100.00", originalPrice: "$1400.00", rating: "4.9", reviews: "19k" },
            { id: 22, image: "/images/thumbs/short-product-img5.png", title: "Pineapple Chunks", price: "$750.00", originalPrice: "$1000.00", rating: "4.7", reviews: "13k" },
            { id: 23, image: "/images/thumbs/short-product-img6.png", title: "Strawberry Pack", price: "$1300.00", originalPrice: "$1600.00", rating: "4.8", reviews: "16k" },
            { id: 24, image: "/images/thumbs/short-product-img7.png", title: "Grapes Red Seedless", price: "$850.00", originalPrice: "$1100.00", rating: "4.6", reviews: "10k" },
        ]
    }
];

function HotDeals() {
    useEffect(() => {
        const sliders = Array.from(document.querySelectorAll('.mini-product-slide'));
        const intervals = [];
        const listeners = [];

        sliders.forEach((slider) => {
            slider.style.animation = 'none';

            // Make a working pages array and append a cloned first page for seamless forward loop
            let pages = Array.from(slider.children);
            if (pages.length === 0) return;

            const firstClone = pages[0].cloneNode(true);
            slider.appendChild(firstClone);
            pages = Array.from(slider.children);
            const pageCount = pages.length; // includes clone

            // Ensure slider and page widths map to percentages
            slider.style.width = `${pageCount * 100}%`;
            pages.forEach((p) => {
                p.style.width = `${100 / pageCount}%`;
                p.style.flexShrink = '0';
            });

            let idx = 0;
            let transitioning = false;

            const goTo = (newIdx) => {
                transitioning = true;
                slider.style.transition = 'transform 600ms ease';
                slider.style.transform = `translateX(-${newIdx * (100 / pageCount)}%)`;
            };

            const step = () => {
                idx += 1;
                goTo(idx);
            };

            // When we reach the cloned slide (last index), jump to real first instantly after transition
            const onTransitionEnd = () => {
                transitioning = false;
                if (idx === pageCount - 1) {
                    // snap back to real first slide without transition
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                    idx = 0;
                    // force reflow then re-enable transition for next steps
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    slider.offsetHeight;
                }
            };

            slider.addEventListener('transitionend', onTransitionEnd);

            let iv = setInterval(step, 3000);
            intervals.push(iv);

            const onMouseEnter = () => { if (iv) { clearInterval(iv); iv = null; } };
            const onMouseLeave = () => { if (!iv) { iv = setInterval(step, 3000); /* replace last interval reference */ intervals.push(iv); } };
            slider.addEventListener('mouseenter', onMouseEnter);
            slider.addEventListener('mouseleave', onMouseLeave);
            listeners.push({ slider, onMouseEnter, onMouseLeave, onTransitionEnd });
        });

        return () => {
            intervals.forEach(clearInterval);
            listeners.forEach(({ slider, onMouseEnter, onMouseLeave, onTransitionEnd }) => {
                slider.removeEventListener('mouseenter', onMouseEnter);
                slider.removeEventListener('mouseleave', onMouseLeave);
                slider.removeEventListener('transitionend', onTransitionEnd);
            });
        };
    }, []);

    return (
        <section className="py-12 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[32px] font-bold text-gray-950 font-['Quicksand'] relative z-20">Hot Deals Todays</h2>
                    <div className="flex items-center gap-4 relative z-20">
                        <Link to="/shop" className="text-gray-600 hover:text-[#1c799b] font-medium text-[16px]">
                            View All Deals
                        </Link>
                        <div className="flex gap-2">
                            <button className="hot-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1c799b] hover:text-white transition-colors text-gray-900 cursor-pointer z-20">
                                <CaretLeft size={20} />
                            </button>
                            <button className="hot-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1c799b] hover:text-white transition-colors text-gray-900 cursor-pointer z-20">
                                <CaretRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row relative lg:gap-4 xl:gap-8 items-stretch">
                    {/* Left Blue Banner */}
                    <div className="w-full lg:w-[460px] xl:w-[520px] shrink-0 bg-[#1c799b] rounded-[24px] p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center z-20 shadow-lg mb-6 lg:mb-0 h-[510px]">
                        <div className="z-10 flex flex-col items-start relative">
                            <span className="bg-[#ffc107] text-gray-900 text-sm font-semibold px-4 py-1.5 rounded-md mb-6 inline-block ">
                                Medical equipment
                            </span>
                            <h3 className="text-white text-[32px] font-bold mb-2 font-['Quicksand'] leading-tight">
                                Deals of the day
                            </h3>
                            <p className="text-[#00d6a4] text-md font-medium mb-8">
                                Save up to 50% off on your first order
                            </p>

                            {/* Timer */}
                            <div className="flex items-center gap-2 mb-10 text-white font-semibold text-sm">
                                <div className="bg-white text-gray-900 rounded-[8px] w-[58px] h-[40px] flex items-center justify-center shadow-sm">
                                    623 D
                                </div>
                                <span className="font-bold text-lg">:</span>
                                <div className="bg-white text-gray-900 rounded-[8px] w-[58px] h-[40px] flex items-center justify-center shadow-sm">
                                    18 H
                                </div>
                                <span className="font-bold text-lg">:</span>
                                <div className="bg-white text-gray-900 rounded-[8px] w-[58px] h-[40px] flex items-center justify-center shadow-sm">
                                    5 M
                                </div>
                                <span className="font-bold text-lg">:</span>
                                <div className="bg-white text-gray-900 rounded-[8px] w-[58px] h-[40px] flex items-center justify-center shadow-sm">
                                    10 S
                                </div>
                            </div>

                            <Link to="/shop" className="bg-white text-[#1c799b] hover:bg-[#1c799b] hover:text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors  z-10">
                                Explore Shop <ShoppingCart size={20} weight="regular" />
                            </Link>
                        </div>

                        {/* Basket Image */}
                        <img
                            src="/images/thumbs/basket-img.png"
                            alt="Basket full of vegetables"
                            className="absolute bottom-[-20px] right-[-20px] w-auto h-[260px] object-contain z-0 pointer-events-none"
                        />
                    </div>

                    {/* Right Product Cards loop - Swiper */}
                    <div className="flex-1 w-full z-0 relative flex items-center min-w-0 lg:-ml-12 lg:pl-12 xl:-ml-16 xl:pl-16 overflow-hidden">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{ prevEl: '.hot-prev', nextEl: '.hot-next' }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            spaceBetween={24}
                            slidesPerView={1}
                            className="overflow-visible! w-full"
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                                1536: { slidesPerView: 4 },
                            }}
                        >
                            {hotDealsProducts.map((product) => (
                                <SwiperSlide key={product.id} className="h-auto! flex">
                                    <ProductCard
                                        variant="slider"
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        originalPrice={product.originalPrice}
                                        rating={product.rating}
                                        reviews={product.reviews}
                                        sold={product.sold}
                                        totalStock={product.totalStock}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


            </div>

            {/* super discount banner */}
            <div className="container mx-auto px-4 mt-8">
                <div className="bg-[#f0f9fb] border border-dashed border-[#8bcbdc] rounded-lg py-5 px-8 flex items-center justify-center ">
                    <div className='flex w-full max-w-[1280px] flex-col md:flex-row items-center justify-between sm:gap-10 gap-20' >
                        <p className="text-[#1c799b] text-[21px] font-['Quicksand'] w-full md:w-1/3 text-center md:text-left">
                            Super discount for your <span className="font-bold text-[#1c799b] underline decoration-2 underline-offset-4 decoration-[#1c799b]">first purchase</span>
                        </p>
                        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                            <button className="bg-[#1c799b] hover:bg-[#145a74] text-white font-medium text-[15px] py-3 px-6 rounded-full flex items-center gap-2 transition-colors">
                                FREE25BAC
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[#1c799b] text-[15px] font-medium text-center md:text-right w-full md:w-1/3">
                            Use discount code to get <span className="font-bold text-[#3c4253]">20%</span> discount for any item
                        </p>
                    </div>
                </div>
            </div>

            {/* 4 Column Product Section */}
            <div className="container mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {/* 3 Normal Columns */}
                    {miniProductColumns.map((column, index) => (
                        <div key={index} className="bg-white border border-gray-100 hover:border-[#1c799b] rounded-xl p-5">

                            <div className='px-4 py-5 bg-[#e3f4fa] rounded-2xl mb-5' >
                                <h3 className="text-[23px] font-bold text-gray-900 font-['Quicksand'] mb-2">
                                    {column.title}
                                </h3>
                                <div className='flex items-center ' >
                                    <div className="w-15 h-[2px]  bg-[#1c799b] rounded-full "></div>
                                    <div className="w-28 h-[2px]  bg-white rounded-full "></div>
                                </div>

                            </div>


                            <div className="overflow-hidden relative">
                                <div className="mini-product-slide flex">
                                    {/* Group products into pages of 4 */}
                                    {(() => {
                                        const pages = [];
                                        for (let i = 0; i < column.products.length; i += 4) {
                                            pages.push(column.products.slice(i, i + 4));
                                        }
                                        return pages.map((page, pageIdx) => (
                                            <div key={pageIdx} className="flex-shrink-0 w-full space-y-10">
                                                {page.map((product) => (
                                                    <div key={`${product.id}-${pageIdx}`} className="flex font-['Quicksand'] items-center gap-4 group cursor-pointer">
                                                        <div className="w-[80px] h-[80px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                                                            <img
                                                                src={product.image}
                                                                alt={product.title}
                                                                className="w-full h-full object-contain group-hover:scale-105 transition"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-1 mb-1">
                                                                <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
                                                                <Star size={12} weight="fill" className="text-amber-500" />
                                                                <span className="text-xs text-gray-500">({product.reviews})</span>
                                                            </div>
                                                            <p className="text-xl font-semibold text-gray-800 truncate group-hover:text-[#1c799b] transition">
                                                                {product.title}
                                                            </p>
                                                            <div className="flex items-center gap-2 mt-0.5">
                                                                <span className="text-md font-semibold text-gray-900">{product.price}</span>
                                                                <span className="text-md font-semibold text-gray-400 line-through">{product.originalPrice}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ));
                                    })()}
                                </div>
                            </div>

                        </div>
                    ))}

                    {/* Deals of the week Column */}
                    <div className="bg-white border hover:border-[#1c799b] font-['Quicksand'] border-gray-100 rounded-xl p-6 flex flex-col">

                        <h3 className="text-[20px] font-bold text-gray-900 font-['Quicksand'] mb-2">
                            Deals of the week
                        </h3>
                        <div className="w-10 h-[3px] bg-[#1c799b] rounded-full mb-5"></div>



                        {/* Timer */}
                        <div className="flex gap-2 mb-4">
                            {["627 D", "16 H", "25 M", "24 S"].map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className="bg-[#1c799b] text-white text-xs px-3 py-2 rounded-md font-semibold">
                                        {item}
                                    </div>
                                    {i < 3 && <span className="text-[#1c799b] font-bold self-center">:</span>}
                                </React.Fragment>
                            ))}
                        </div>

                        <p className="text-sm font-semibold text-gray-400 mb-4">
                            Don't miss this opportunity at a special price.
                        </p>

                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/thumbs/short-product-img9.png"
                                alt="Deal Product"
                                className="h-[140px] object-contain"
                            />
                        </div>

                        <div className="flex items-center gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} weight="fill" className="text-amber-500" />)}
                            <span className="text-xs text-gray-500 ml-1">(3)</span>
                        </div>

                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-red-500 font-bold text-lg">$60.99</span>
                            <span className="text-gray-400 line-through text-sm">$79.99</span>
                        </div>

                        <p className="text-lg font-semibold text-gray-800 mb-1">
                            Perfectly Packed Meat Combos for Delicious and Flavorful Meals Every...
                        </p>

                        <p className="text-xs text-[#1c799b] mb-3">This product is about to run out</p>

                        {/* Progress bar */}
                        <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden mb-2">
                            <div className="h-full bg-[#1c799b] rounded-full" style={{ width: '65%' }}></div>
                        </div>

                        <p className="text-xs text-gray-600 mb-4">available only: <span className="font-bold text-gray-900">$60.99</span></p>

                        <button className="mt-auto bg-[#2abc79] hover:bg-[#008b4a] text-white py-3 rounded-full transition flex items-center justify-center gap-2 font-medium">
                            Add To Cart <ShoppingCart size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HotDeals;
