import { useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            alert('Thank you for subscribing!')
            setEmail('')
        }
    }

    return (
        <section className="py-16">
            <div className=" mx-auto px-4">
                <div className="py-11 px-6 md:px-20 bg-neutral-100 rounded-xl flex items-center justify-between flex-wrap md:flex-nowrap gap-8">
                    <div className="max-w-[650px]">
                        <h3 className="text-2xl font-['Quicksand'] text-gray-800 md:text-4xl font-bold text-heading mb-6">Stay home & get your daily needs from our shop</h3>
                        <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap sm:flex-nowrap">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white px-5 py-4 rounded shadow-sm text-sm flex-1 placeholder:text-sm outline-none"
                                placeholder="Enter your mail"
                                required
                            />
                            <button type="submit" className="bg-[#2abc79] hover:bg-[#008b4a] text-white py-4 px-8 rounded font-medium text-sm shrink-0 transition">
                                Subscribe now
                            </button>
                        </form>
                        <p className="text-heading text-sm mt-5 font-medium">I agree that my submitted data is being collected and stored.</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/images/thumbs/newsletter-img.png" alt="Newsletter" className="max-h-[380px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
