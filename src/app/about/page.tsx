'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Eye, Target, Award } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const employees = [
    {
        id: 1,
        name: "Rishad",
        image: "/rishad.jpg",
        role: "Manager"
    }, {
        id: 2,
        name: "Ajsal",
        image: "/ajsal.jpg",
        role: "Employee"
    }, {
        id: 3,
        name: "Mibhaj",
        image: "/mibhaj.jpg",
        role: "Asst. Manager"
    }
]

export default function About() {
    return (
        <div className="bg-stone-50 min-h-screen pt-12 pb-24">
            {/* Header */}
            <section className="container mx-auto px-4 max-w-7xl mb-24 mt-8">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Our <span className='text-accent'>Story</span></h1>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Founded in the heart of Calicut, Rumi Events started with a simple belief: luxury and elegance shouldn't be reserved only for the extravagant budgets.
                    </p>
                </motion.div>
            </section>

            {/* Main Content Split */}
            <section className="container mx-auto px-4 max-w-7xl mb-24">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Story"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="md:w-1/2 space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-stone-900 mb-4">Crafting Memories Since <span className='text-accent'>2022</span></h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                Rumi began its journey in 2023 in Omassery, Kerala, as a small live juice making company with a simple vision — to bring freshness, quality, and heartfelt service to every customer. What started as a humble setup soon became known for its dedication, creativity, and commitment to delivering memorable experiences.

With pure hard work, passion, and the trust of our customers, Rumi gradually expanded beyond live juice services into the world of event management. <br />Today, we proudly handle large-scale events, including complete wedding planning, catering, designing, and decoration. Every milestone we’ve achieved has come through perseverance, learning, and overcoming countless challenges along the way.

Our growth story is built on resilience and the belief that every event deserves personal attention and flawless execution. From intimate gatherings to grand celebrations, we focus on creating moments that feel special, elegant, and stress-free for our clients.

As we continue to grow, Rumi is now expanding its services across North Kerala, bringing our signature blend of creativity, reliability, and premium service at budget-friendly pricing to more communities.

At Rumi, every event is not just a project — it’s a celebration we take pride in crafting.
                            </p>
                            
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                                <Target className="text-primary-600 mb-4" size={32} />
                                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                                <p className="text-sm text-stone-600">To make dream events accessible locally by bringing top-tier professional planning to all budgets.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                                <Eye className="text-primary-600 mb-4" size={32} />
                                <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                                <p className="text-sm text-stone-600">To be Kerala's most trusted name for creating aesthetically stunning and unforgettable events.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-primary-900 py-24 text-stone-200">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-16"
                    >
                        Our Core Values
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Elegance', icon: <Award size={32} />, desc: 'A focus on premium aesthetics.' },
                            { title: 'Transparency', icon: <Users size={32} />, desc: 'Honest pricing, no hidden costs.' },
                            { title: 'Dedication', icon: <Target size={32} />, desc: 'Committed to flawless execution.' },
                            { title: 'Innovation', icon: <Eye size={32} />, desc: 'Modern designs and fresh ideas.' }
                        ].map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10"
                            >
                                <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center text-primary-300 mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                <p className="text-sm text-primary-200">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 max-w-7xl mt-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-stone-900 mb-4">Meet The Team</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        The passionate planners, designers, and coordinators behind your dream events.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {employees.map((member) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-primary-100 transition-colors">
                                <Image
                                    src={member.image}
                                    alt="Team Member"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900">{member.name}</h3>
                            <p className="text-primary-600 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
