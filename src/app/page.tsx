'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Heart, Play, Camera, Quote, Gift, Music } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const testimonials = [
            {
              id: 1,
              name: "Munthasir",
              message: "A huge thank you to the Rumi Events team for making our dream wedding a reality! Their attention to detail in the decor was stunning, blending modern elegance with our traditional roots perfectly. Being based in Omassery, they have a great pulse on the best local resources. They are professional, creative, and truly passionate about what they do.",
              rating: 5,
            },
            {
              id: 2,
              name: "Shamsudheen",
              message: "Rumi Events planned my wedding perfectly. The decor was beyond what we imagined, and their team was so professional throughout the process in Calicut!",
              rating: 5,
            },
            {
              id: 3,
              name: "Basim",
              message: "We hired Rumi Events and Caters for my brother's wedding in Omassery, and they absolutely nailed it. The food was the highlight—our guests are still talking about the authentic flavors and the seamless service. They took the stress out of the entire day, managing everything with such grace and professionalism. Highly recommended for anyone in Calicut looking for a worry-free celebration!",
              rating: 5,
            },
          ]
const clientImages = ["/client1.jpg", "/client2.jpg"];
const videos = ["video4.mp4", "/The beautiful part of love.mp4", "/video5.mp4", "/video3.mp4"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative md:min-h-[100vh] min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary-900 pb-5 -mt-20 md:pt-20 pt-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
            alt="Event Background"
            fill
            className="object-cover opacity-50 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/40 to-primary-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.p variants={fadeIn} className="text-accent font-medium tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-md">
              Colour Your Moments
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Unforgettable Memories, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200 drop-shadow-lg">
                Budgeted Elegance.
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of luxury event management in Calicut. From grand weddings to intimate showers, we map every detail.
            </motion.p>
            <motion.div variants={fadeIn} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-yellow-500 rounded-full text-primary-900 font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group flex items-center justify-center">
                Plan Your Event
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all hover:-translate-y-1 text-center">
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CEO / MD Section */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                {/* Image Placeholder for CEO */}
                <Image
                  src="/ceo.png"
                  alt="CEO of Rumi Events"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-100 rounded-full blur-3xl -z-10 opacity-70"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-6"
            >
              <Quote size={48} className="text-primary-200" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary-900 leading-tight">
                "We don't just plan events, <span className="text-accent">we curate lifelong memories.</span>"
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed font-medium">
                Our vision at Rumi Events is to ensure that luxury is accessible. We believe that a budgeted approach shouldn't compromise the elegance, feel, and grandiosity of your special day.
              </p>
              <div>
                <h4 className="font-bold text-primary-900 text-xl">Mr.MIDLAJ VP</h4>
                <p className="text-accent font-semibold uppercase tracking-wider text-sm">Managing Director, Rumi Events</p>
              </div>

              {/* Hook */}
              <div className="pt-6">
                <Link href="/about" className="inline-flex items-center text-primary-700 font-bold hover:text-accent transition-colors group">
                  Read our full story
                  <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-accent font-semibold uppercase tracking-wider mb-2">Our Expertise</motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">We Craft Masterpieces</motion.h2>
            <motion.p variants={fadeIn} className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Our comprehensive services cover every aspect of your event. Relax and enjoy while our expert team handles the execution.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart size={28} className="text-white" />}
              title="Weddings & Receptions"
              description="Complete wedding planning, from mesmerizing setups to flawless execution."
            />
            <ServiceCard
              icon={<Gift size={28} className="text-white" />}
              title="Bridal & Mom Showers"
              description="Elegant thematic showers designed for picture-perfect memories."
            />
            <ServiceCard
              icon={<Music size={28} className="text-white" />}
              title="Corporate Events"
              description="Professional and pristine corporate setups tailored for your brand."
            />
          </div>

          {/* Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-stone-600 mb-6 text-lg">Every event requires a unique touch. Let's find exactly what you need.</p>
            <Link href="/services" className="inline-block px-8 py-3 bg-primary-900 text-white rounded-full font-medium hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl">
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Teaser Section */}
      <section className="py-24 bg-primary-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-accent font-semibold uppercase tracking-wider mb-2 block">Our Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4">A Glimpse of Magic</h2>
              <p className="text-stone-600 text-lg">Browse through our beautifully curated events designed specifically for our wonderful clients.</p>
            </div>
            {/* Hook */}
            <Link href="/gallery" className="hidden md:inline-flex items-center mt-6 md:mt-0 px-6 py-3 border-2 border-primary-900 text-primary-900 font-bold rounded-full hover:bg-primary-900 hover:text-white transition-all group">
              View Full Gallery
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              "/home/client1.jpg",
              "/home/client2.jpg",
              "/home/client3.jpeg",
              "/home/client4.jpeg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group ${i === 0 || i === 3 ? 'aspect-[4/5]' : 'aspect-square'}`}
              >
                <Image src={img} alt={`Gallery Teaser ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/gallery" className="inline-flex items-center px-6 py-3 border-2 border-primary-900 text-primary-900 font-bold rounded-full hover:bg-primary-900 hover:text-white transition-all group">
              View Full Gallery
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Videos Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider mb-2 block">Live Moments</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experiences In Motion</h2>
            <p className="text-primary-200 max-w-2xl mx-auto text-lg hover:text-white transition-colors">
              Sometimes pictures just aren't enough. Watch how our events come to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden group bg-stone-800 shadow-xl"
              >
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Dark gradient so text implies at the bottom is readable! */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <h4 className="text-xl font-bold text-white mb-1 drop-shadow-md z-10">Cinematic Highlight #{index + 1}</h4>
                  <p className="text-sm text-primary-200 drop-shadow-md">Calicut Kerala</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hook */}
          <div className="mt-16 text-center">
            <p className="font-medium text-lg text-primary-200 mb-6">Ready to create a cinematic memory of your own?</p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-accent text-primary-900 font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              Book Your Date Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Teaser */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop"
                alt="About Rumi Events"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 space-y-6"
            >
              <h3 className="text-accent font-semibold tracking-wide uppercase text-sm">Why Choose Us</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-900 leading-tight">Luxury Doesn't Always Mean Expensive</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                Stationed right in the heart of Calicut, our expert planning allows us to provide top-tier aesthetic setups well within your budget. Let us color your moments beautifully.
              </p>
              <ul className="space-y-4 pt-4">
                {['Premium customized decor', 'Professional on-site management', 'Budget-friendly transparent pricing', 'End-to-end service execution'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 shrink-0 shadow-sm">
                      <Star size={14} fill="currentColor" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Hook */}
              <div className="pt-8">
                <div className="bg-primary-50 border-l-4 border-accent p-6 rounded-r-xl">
                  <p className="text-primary-900 font-semibold mb-2 text-lg">Have a specific design in mind?</p>
                  <Link href="/contact" className="text-primary-600 hover:text-primary-800 font-bold flex items-center group">
                    Let's discuss your vision over coffee
                    <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-50 relative">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-accent font-semibold uppercase tracking-wider mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900">Loved By Our Clients</h2>
          </motion.div>
        

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.id * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-stone-100 shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-center gap-1 mb-6 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 mb-8 italic leading-relaxed text-lg">
                  {item.message}
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full mb-3 flex items-center justify-center text-primary-700 font-bold">
                    C{item.id}
                  </div>
                  <h4 className="font-bold text-primary-900">{item.name}</h4>
                  <p className="text-sm text-stone-500 font-medium">Wedding Client</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-20 border-t border-stone-200 pt-16 flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Be Our Next Success Story</h3>
            <p className="text-stone-600 mb-8 max-w-lg">Don't risk settling for anything less than perfection for your big day.</p>
            <Link href="/contact" className="px-8 py-4 bg-primary-900 text-white font-bold rounded-full shadow-lg hover:bg-primary-800 transition-colors hover:shadow-xl hover:-translate-y-1">
              Check Availability & Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-primary-50 p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>

      <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-12 transition-all duration-500 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary-900 mb-4">{title}</h3>
      <p className="text-stone-600 leading-relaxed text-lg">
        {description}
      </p>
      <div className="mt-8">
        <Link href="/services" className="text-primary-700 font-bold flex items-center group/link">
          Learn more
          <ChevronRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
