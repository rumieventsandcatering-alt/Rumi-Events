import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-stone-300 py-12 md:py-16 mt-auto">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex items-center">
                                <span className="text-3xl  font-extrabold tracking-tighter text-white italic">
                                    Rumi
                                </span>
                                <div className="flex flex-col ml-2 justify-center mt-1">
                                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] leading-none text-accent">Events</span>
                                    <span className="text-[8px] uppercase tracking-wider leading-none mt-0.5 text-stone-400">Colour Your Moments</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-sm text-primary-200 mt-4 leading-relaxed">
                            Premium event management services in Calicut, Kerala. We specialize in bringing luxury and elegance to your events within a budget.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <a href="https://www.instagram.com/rumi_events_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="p-2 bg-white/5 rounded-full hover:bg-primary-600 transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-600 transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-600 transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold text-lg border-b border-primary-700 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-2 mt-4">
                            <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-sm hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/gallery" className="text-sm hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold text-lg border-b border-primary-700 pb-2 inline-block">Contact Info</h4>
                        <ul className="space-y-4 mt-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                                <span className="text-sm">Calicut, Kozhikode, Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary-400 flex-shrink-0" size={18} />
                                <span className="text-sm">+91 9539241400</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary-400 flex-shrink-0" size={18} />
                                <span className="text-sm">contact@rumievents.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold text-lg border-b border-primary-700 pb-2 inline-block">Newsletter</h4>
                        <p className="text-sm mt-4 text-primary-200">
                            Subscribe to get tips on event planning and exclusive offers.
                        </p>
                        <form className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/10 px-4 py-2 text-sm rounded-l-md outline-none focus:ring-1 ring-primary-500 text-white placeholder:text-stone-400 border border-white/10"
                            />
                            <button
                                type="button"
                                className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-r-md text-white text-sm font-medium transition-colors border border-primary-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-primary-400">
                        &copy; {new Date().getFullYear()} Rumi Events. All rights reserved.
                    </p>
                    <Link href="https://www.instagram.com/we.unlocked/?utm_source=ig_web_button_share_sheet" target="_blank" className="text-xs text-primary-400 hover:text-white transition-colors">Design & Developed by UnLocked.in</Link>
                    <div className="text-xs text-primary-400 flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
