import { Link } from 'react-router-dom'
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const footerLinks = {
    information: [
        { label: 'Become a Vendor', to: '/shop' },
        { label: 'Affiliate Program', to: '/shop' },
        { label: 'Privacy Policy', to: '/shop' },
        { label: 'Our Suppliers', to: '/shop' },
        { label: 'Extended Plan', to: '/shop' },
        { label: 'Community', to: '/shop' },
    ],
    customerSupport: [
        { label: 'Help Center', to: '/shop' },
        { label: 'Contact Us', to: '#' },
        { label: 'Report Abuse', to: '/shop' },
        { label: 'Submit and Dispute', to: '/shop' },
        { label: 'Policies & Rules', to: '/shop' },
        { label: 'Online Shopping', to: '/shop' },
    ],
    myAccount: [
        { label: 'My Account', to: '/shop' },
        { label: 'Order History', to: '/shop' },
        { label: 'Shopping Cart' },
        { label: 'Compare', to: '/shop' },
        { label: 'Help Ticket', to: '/shop' },
        { label: 'Wishlist', to: '/cart' },
    ],
    dailyGroceries: [
        { label: 'Dairy & Eggs', to: '/shop' },
        { label: 'Meat & Seafood', to: '/shop' },
        { label: 'Breakfast Food', to: '/shop' },
        { label: 'Household Supplies', to: '/shop' },
        { label: 'Bread & Bakery', to: '/shop' },
        { label: 'Pantry Staples', to: '/shop' },
    ],
}

const socials = [
    { icon: FacebookLogo, link: 'https://www.facebook.com/' },
    { icon: TwitterLogo, link: 'https://www.twitter.com/' },
    { icon: InstagramLogo, link: 'https://www.linkedin.com/' },
    { icon: LinkedinLogo, link: 'https://www.pinterest.com/' },
]

const Footer = () => {
    return (
        <>
            <footer className="py-20 bg-white">
                <div className=" mx-auto px-4">
                    <div className="flex flex-wrap gap-y-10">
                        {/* Brand */}
                        <motion.div
                            className="w-full lg:w-1/5 pr-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Link to="/" className="block mb-4">
                                <img src="/images/logo/logo.png" alt="MarketPro" className="h-10" />
                            </Link>
                            <p className="text-heading mb-6 text-sm">We&apos;re Grocery Shop, an innovative team of food suppliers.</p>
                            <div className="flex flex-col gap-2">
                                <p className="text-heading font-medium text-sm">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                                <a href="mailto:support@example.com" className="text-heading font-medium text-sm hover:text-main-600 transition">support@example.com</a>
                                <a href="tel:+(406)555-0120" className="text-heading font-medium text-sm hover:text-main-600 transition">+ (406) 555-0120</a>
                            </div>
                        </motion.div>

                        {/* Link Columns */}
                        {[
                            { title: 'Information', links: footerLinks.information },
                            { title: 'Customer Support', links: footerLinks.customerSupport },
                            { title: 'My Account', links: footerLinks.myAccount },
                            { title: 'Daily Groceries', links: footerLinks.dailyGroceries },
                        ].map((col, idx) => (
                            <motion.div
                                key={idx}
                                className="w-1/2 sm:w-1/3 lg:w-[15%] pr-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: (idx + 1) * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h6 className="text-heading font-bold text-base mb-4">{col.title}</h6>
                                <ul className="space-y-3">
                                    {col.links.map((link, li) => (
                                        <li key={li}>
                                            <Link to={link.to} className="text-heading text-sm hover:text-main-600 transition">{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                        {/* App Downloads */}
                        <motion.div
                            className="w-full sm:w-1/2 lg:w-1/5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h6 className="text-heading font-bold text-base mb-2">Shop on The Go</h6>
                            <p className="mb-4 text-sm">MarketPro App is available. Get it now</p>
                            <div className="flex items-start gap-3 my-6">
                                <div className="bg-white rounded-lg p-1 shadow-lg shrink-0">
                                    <img src="/images/thumbs/qr-code.png" alt="QR Code" className="w-20" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a href="https://www.apple.com/app-store" className="py-3 px-5 flex items-center justify-center gap-2 font-medium text-heading text-sm hover:bg-main-600 hover:text-white shadow rounded-md transition">
                                        Apple Store
                                    </a>
                                    <a href="https://play.google.com/store" className="py-3 px-5 flex items-center justify-center gap-2 font-medium text-heading text-sm hover:bg-main-600 hover:text-white shadow rounded-md transition">
                                        <img src="/images/icon/google-play.svg" alt="" className="w-4" />
                                        Google Play
                                    </a>
                                </div>
                            </div>
                            <div className="mt-4">
                                <img src="/images/thumbs/method.png" alt="Payment Methods" className="max-w-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </footer>

            {/* Bottom Footer */}
            <div className="py-4">
                <div className="max-w-[1320px] mx-auto px-4">
                    <div className="flex items-center justify-between flex-wrap gap-4 py-4 border-t border-neutral-50">
                        <p className="text-heading font-medium text-sm">
                            Copyright &copy; <span className="text-success-600 font-semibold">2025</span> Ui-drops All Rights Reserved
                        </p>
                        <div className="flex items-center gap-3">
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-white shadow-sm text-main-600 text-lg rounded-full hover:bg-main-600 hover:text-white transition"
                                >
                                    <social.icon size={20} weight="fill" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
