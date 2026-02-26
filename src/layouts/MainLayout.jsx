import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Preloader from '../components/Preloader'

const MainLayout = () => {
    return (
        <>
            <Preloader />   
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default MainLayout
