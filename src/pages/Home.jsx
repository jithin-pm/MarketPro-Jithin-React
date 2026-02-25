import Banner from '../components/Banner'
import FeatureSection from '../components/FeatureSection'
import PromotionalBanner from '../components/PromotionalBanner'
import FlashSales from '../components/FlashSales'
import RecommendedProducts from '../components/RecommendedProducts'
import BestSellers from '../components/BestSellers'
import Newsletter from '../components/Newsletter'
import HotDeals from '../components/HotDeals'
import ShopByBrands from '../components/ShopByBrands'

const Home = () => {
    return (
        <>
            <Banner  />
            <FeatureSection />
            <PromotionalBanner />
            <FlashSales />
            <RecommendedProducts />
            <HotDeals />
            <ShopByBrands/>
            <BestSellers />
            <Newsletter />
        </>
    )
}

export default Home
