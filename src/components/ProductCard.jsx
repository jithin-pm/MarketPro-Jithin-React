import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, Star, Storefront } from '@phosphor-icons/react'

const ProductCard = ({
    image,
    title,
    price = '$14.99',
    originalPrice = '$28.99',
    rating = '4.8',
    reviews = '17k',
    badge = null,
    badgeColor = 'bg-danger-600',
    vendor = 'Lucky Supermarket',
    sold = null,
    totalStock = null,
    variant = 'grid', // 'grid' | 'slider'
}) => {
    const progressPercent = sold && totalStock ? (sold / totalStock) * 100 : 0

    if (variant === 'slider') {
        return (
            <div className="bg-white px-5 py-4 border border-gray-100 hover:border-[#1c799b] rounded-2xl relative transition-all duration-200 group w-full mx-auto flex flex-col h-full">
                <Link to="/cart" className="absolute top-4 right-4 z-10 bg-[#e3f4fa] text-[#1c799b] hover:bg-[#1c799b] hover:text-white py-3 px-6 rounded-full flex items-center gap-2 text-sm font-medium transition">
                    Add <ShoppingCart size={16} />
                </Link>
                <Link to="/product/1" className="flex items-center justify-center overflow-hidden py-12">
                    <img src={image} alt={title} className="max-h-[180px] object-contain group-hover:scale-105 transition-transform" />
                </Link>
                <div className="mt-3 pb-2 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-heading text-lg text-gray-950 font-semibold">{price} <span className="text-gray-500 font-normal">/Qty</span></span>
                        <span className="text-gray-400 text-md font-semibold line-through">{originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-gray-600">{rating}</span>
                        <Star size={14} weight="fill" className="text-amber-500" />
                        <span className="text-xs font-bold text-gray-600">({reviews})</span>
                    </div>
                    <h6 className="text-[18px] font-semibold mt-3 mb-5 font-['Quicksand'] text-gray-950">
                        <Link to="/product/1" className="text-line-2 text-heading hover:text-main-600 transition">{title}</Link>
                    </h6>
                    {sold !== null && totalStock !== null && (
                        <div className="mt-auto">
                            <div className="product-progress relative w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
                                <div className="product-progress-bar absolute top-0 left-0 h-full bg-[#ffc107] rounded-full" style={{ width: `${progressPercent}%` }}></div>
                            </div>
                            <span className="text-gray-900 text-sm font-semibold font-['Quicksand'] mt-2 block">Sold: {sold}/{totalStock}</span>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // Grid variant
    return (
        <div className="bg-white h-full p-3 border border-gray-100 hover:border-[#1c799b]  rounded-2xl relative transition-all duration-200 group max-w-[240px] w-full mx-auto">
            <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-400 hover:text-danger-600 transition">
                <Heart size={16} weight="bold" />
            </button>
            <span className={`
  absolute top-4 left-4 z-10 
  ${badgeColor} 
  px-3 py-2 
  text-[14px] font-semibold text-white 
  rounded-tl-[12px] rounded-br-[12px] 
  leading-none inline-block
`}>
                {badge}
            </span>
            <Link to="/product/1" className="flex items-center justify-center overflow-hidden py-12">
                <img src={image} alt={title} className="max-h-[160px] object-contain group-hover:scale-105 transition-transform" />
            </Link>
            <div className="p-1 w-full">
                <h6 className="text-[18px] font-semibold mt-3 mb-2 font-['Quicksand'] text-gray-950">
                    <Link to="/product/1" className="text-line-2 text-heading hover:text-main-600 transition">{title}</Link>
                </h6>
                <div className="flex items-center gap-1">
                    <Storefront size={16} weight="fill" className="text-[#1c799b]" />
                    <span className="text-gray-500 text-xs font-['Quicksand">By {vendor}</span>
                </div>
                <div className="mt-3">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-heading text-lg font-semibold text-gray-950">{price} <span className="text-gray-500 font-normal">/Qty</span></span>
                        <span className=" text-lg text-gray-500 font-semibold line-through">{originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-gray-600">{rating}</span>
                        <Star size={14} weight="fill" className="text-amber-500" />
                        <span className="text-xs font-bold text-gray-600">({reviews})</span>
                    </div>
                    <Link to="/cart" className="mt-5 w-full bg-[#e3f4fa] text-[#1c799b] hover:bg-[#1c799b]  hover:text-white py-2.5 px-5 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition">
                        Add To Cart <ShoppingCart size={16} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
