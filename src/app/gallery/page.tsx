'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

const galleryItems = [
    { id: 1, type: 'image', category: 'Wedding', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop', colSpan: 'col-span-2 md:col-span-2' },
    { id: 2, type: 'image', category: 'Decor', src: '/stage2.jpg', colSpan: 'col-span-1 md:col-span-1' },
    { id: 3, type: 'video', category: 'Highlights', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-1' },
    { id: 4, type: 'image', category: 'Catering', src: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-2 md:col-span-1' },
    { id: 5, type: 'image', category: 'Venue', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-2' },
    { id: 6, type: 'image', category: 'Bridal Shower', src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-1 md:col-span-1' },
    { id: 7, type: 'image', category: 'Bridal Shower', src: '/Gallery/gallery1.jpeg', colSpan: 'col-span-1 md:col-span-1' },
    { id: 8, type: 'image', category: 'Stage Decor', src: '/Gallery/gallery2.jpeg', colSpan: 'col-span-1 md:col-span-1' },
    { id: 9, type: 'image', category: 'Stage Decor', src: '/Gallery/gallery3.jpeg', colSpan: 'col-span-1 md:col-span-1' },
    { id: 10, type: 'image', category: 'Stage Decor', src: '/Gallery/gallery4.jpeg', colSpan: 'col-span-2 md:col-span-2' },
    { id: 11, type: 'image', category: 'Stage Decor', src: '/Gallery/gallery5.jpeg', colSpan: 'col-span-1 md:col-span-1' },
    { id: 12, type: 'image', category: 'Stage Decor', src: '/Gallery/gallery6.jpeg', colSpan: 'col-span-1 md:col-span-1' },
    { id: 13, type: 'image', category: 'Catering', src: '/Gallery/gallery7.jpeg', colSpan: 'col-span-2 md:col-span-2' },
    { id: 14, type: 'image', category: 'Stage Decor', src: '/Gallery/gallery8.jpeg', colSpan: 'col-span-3 md:col-span-3' },
    
];

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<any>(null);

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
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Our <span className='text-accent'>Portfolio</span></h1>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Take a look at some of the magical moments we've crafted. From dazzling decor to intricate detailing, discover the Rumi Events touch.
                    </p>
                </motion.div>
            </section>

            {/* Gallery Grid */}
            <section className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer group  ${item.colSpan}`}
                            onClick={() => setSelectedItem(item)}
                        >
                            <Image
                                src={item.src}
                                alt={`${item.category} Event`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/10 transition-colors duration-500" />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-stone-900/80 to-transparent">
                                <span className="text-primary-300 text-sm font-medium uppercase tracking-wider">{item.category}</span>
                                {item.type === 'video' && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                        <Play fill="currentColor" size={24} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10"
                            onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] aspect-video rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedItem.type === 'image' ? (
                                <Image
                                    src={selectedItem.src}
                                    alt="Gallery Item Full"
                                    fill
                                    className="object-contain"
                                    unoptimized={true}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-stone-800 text-white">
                                    <Play size={64} className="text-primary-500 mb-4 opacity-50" />
                                    <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-stone-400">Video playback placeholder.</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
