'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Utensils, Music, Heart, Gift, Camera as PhotoIcon, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

const services = [
    {
        title: 'Event Planning & Coordination',
        category: 'Full Service',
        description: 'We handle everything from venue selection to vendor management, ensuring your day goes perfectly according to plan.',
        icon: <Compass className="text-primary-600" size={32} />,
        features: ['Venue scouting & booking', 'Vendor coordination', 'Budget management', 'Day-of timeline creation', 'On-site execution'],
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
    },
    {
        title: 'Catering & Menu Design',
        category: 'Culinary Magic',
        description: 'Delight your guests with exquisite local Kerala cuisine or exotic international flavors crafted by our top catering partners.',
        icon: <Utensils className="text-primary-600" size={32} />,
        features: ['Custom menu creation', 'Tasting sessions', 'Dietary accommodation', 'Premium serveware setup', 'Professional serving staff'],
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Decor & Floral Design',
        category: 'Aesthetic Beauty',
        description: 'Transform any venue into a luxury experience. We specialize in contemporary elegance, modern minimalism, and traditional grandeur.',
        icon: <Sparkles className="text-primary-600" size={32} />,
        features: ['Thematic conceptualization', 'Premium floral arrangements', 'Custom stage setups', 'Luxury lighting', 'Table centerpieces'],
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Photography & Videography',
        category: 'Capturing Moments',
        description: 'Freeze your beautiful moments in time with our team of cinematic videographers and candid photographers.',
        icon: <PhotoIcon className="text-primary-600" size={32} />,
        features: ['Pre-wedding shoots', 'Candid photography', 'Cinematic video highlights', 'Drone coverage', 'Premium albumns'],
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop'
    },
    {
        title: 'Bridal & Mom Showers',
        category: 'Intimate Affairs',
        description: 'Bespoke setups for private events. We craft gorgeous photo-ready backdrops perfect for making the bride or mom-to-be feel special.',
        icon: <Heart className="text-primary-600" size={32} />,
        features: ['Themed decor setup', 'Custom backdrops', 'Interactive games setup', 'Dessert table styling', 'Return gift arrangements'],
        image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function Services() {
    return (
        <div className="bg-stone-50 min-h-screen pt-12 pb-24">
            {/* Header */}
            <section className="container mx-auto px-4 max-w-7xl mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Expert Services for <span className='text-accent'>Flawless Events</span></h1>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        From comprehensive planning to individual specialized services, Rumi Events provides tailored solutions for your unique occasion in Calicut.
                    </p>
                </motion.div>
            </section>

            {/* Services List */}
            <section className="container mx-auto px-4 max-w-6xl space-y-24">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-10% 0px' }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Image Side */}
                            <div className="lg:w-1/2 w-full">
                                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm text-primary-700">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-1/2 w-full space-y-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-medium text-sm">
                                    {service.category}
                                </span>
                                <h2 className="text-3xl font-bold text-stone-900 hidden md:block">{service.title}</h2>
                                <h2 className="text-3xl font-bold text-stone-900 mb-4 block md:hidden">{service.title}</h2>
                                <p className="text-stone-600 text-lg leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="pt-4 space-y-3">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-stone-700">
                                            <CheckCircle2 size={20} className="text-primary-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6">
                                    <Link
                                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                                        className="inline-flex items-center px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-full shadow-md transition-all hover:-translate-y-0.5"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 max-w-7xl mt-32">
                <div className="bg-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Planning?</h2>
                        <p className="text-primary-200 text-lg">
                            Contact us today for a free consultation and personalized quote based on your specific requirements.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-primary-900 font-bold rounded-full shadow-lg hover:bg-primary-50 hover:scale-105 transition-all"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
