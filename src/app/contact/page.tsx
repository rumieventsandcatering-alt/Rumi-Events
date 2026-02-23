'use client';

import { useState, useTransition } from 'react';
import { useForm as useRHForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

const contactSchema = z.object({
    mobile: z.string().min(10, { message: 'Enter a valid mobile number.' }).max(15, { message: 'Mobile number cannot be more than 15 characters.' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isPending, startTransition] = useTransition();
    const [submitState, setSubmitState] = useState<{ success?: boolean; message?: string } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useRHForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        setSubmitState(null);
        startTransition(async () => {
            const formData = new FormData();
            formData.append('mobile', data.mobile);
            formData.append('message', data.message);

            const result = await submitContactForm(null, formData);

            if (result.success) {
                setSubmitState({ success: true, message: result.message });
                reset();
            } else {
                setSubmitState({ success: false, message: result.error });
            }
        });
    };

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
                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Let's Connect</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Start Planning Your Dream Event</h1>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Reach out to our expert team for a free consultation. Whether it's a grand wedding or a delicate baby shower, we map every intimate detail in Calicut.
                    </p>
                </motion.div>
            </section>

            {/* Main Container */}
            <section className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100">

                    {/* Info Side */}
                    

                    {/* Form Side */}
                    <div className="lg:w-[60%] p-10 md:p-14">
                        <h3 className="text-2xl font-bold text-stone-900 mb-8">Send Us a Message</h3>

                        <AnimatePresence>
                            {submitState && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    className={`p-4 rounded-xl flex items-start gap-3 ${submitState.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                                        }`}
                                >
                                    {submitState.success ? <CheckCircle size={20} className="mt-0.5 shrink-0" /> : <AlertCircle size={20} className="mt-0.5 shrink-0" />}
                                    <p className="text-sm font-medium">{submitState.message}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="mobile" className="text-sm font-medium text-stone-700 block">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="mobile"
                                    type="tel"
                                    placeholder="+91 Your Mobile Number"
                                    {...register('mobile')}
                                    className={`w-full px-4 py-3 rounded-xl border bg-stone-50 outline-none focus:ring-2 focus:bg-white transition-all ${errors.mobile ? 'border-red-400 focus:ring-red-200' : 'border-stone-200 focus:ring-primary-200 focus:border-primary-500'
                                        }`}
                                />
                                {errors.mobile && (
                                    <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-stone-700 block">
                                    Event Details (Message) <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Tell us about your event type, date, location, and guest count..."
                                    rows={5}
                                    {...register('message')}
                                    className={`w-full px-4 py-3 rounded-xl border bg-stone-50 outline-none focus:ring-2 focus:bg-white transition-all resize-y ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-stone-200 focus:ring-primary-200 focus:border-primary-500'
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full flex items-center justify-center gap-2 py-4 bg-primary-700 hover:bg-primary-800 disabled:bg-primary-400 text-white font-medium rounded-xl shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending Request...
                                    </>
                                ) : (
                                    'Send Enquiry'
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="lg:w-[40%] bg-primary-900 p-10 md:p-14 text-white relative overflow-hidden">
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <p className="text-primary-200 leading-relaxed mb-10">
                                    We generally respond within 24 hours. Let us know how we can help make your upcoming event absolutely perfect.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-primary-400 mt-1" size={24} />
                                        <div className="space-y-1">
                                            <p className="font-medium text-stone-100">Our Office</p>
                                            <p className="text-sm text-primary-200 leading-relaxed max-w-xs">
                                                Omassery<br />
                                                Calicut, Kerala, India<br />
                                                673582
                                            </p>
                                            <p>Soon In Kalpetta,Wayanad</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="text-primary-400" size={24} />
                                        <div className="space-y-1">
                                            <p className="font-medium text-stone-100">Phone</p>
                                            <p className="text-sm text-primary-200">+91 9539241400</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Mail className="text-primary-400" size={24} />
                                        <div className="space-y-1">
                                            <p className="font-medium text-stone-100">Email</p>
                                            <p className="text-sm text-primary-200">contact@rumievents.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQs Section */}
            <section className="container mx-auto px-4 max-w-4xl mt-32">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-stone-600">Got questions? We've got answers.</p>
                </div>

                <div className="space-y-4">
                    {[
                        { q: 'What is the starting price for an event in Calicut?', a: 'Pricing is tailored to each unique event. We specialize in working within moderate budgets while maximizing luxury. Contact us for a precise quote.' },
                        { q: 'Do you offer services outside Calicut?', a: 'Yes, we handle events mostly within Kerala but can accommodate further travel depending on the scope and size of the event.' },
                        { q: 'How early should we book Rumi Events?', a: 'For weddings and large events, we recommend booking 3 to 6 months in advance. For intimate showers and smaller setups, 3-4 weeks is sufficient.' },
                    ].map((faq, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                            <h4 className="flex items-center gap-3 font-semibold text-stone-900 mb-2">
                                <span className="shrink-0 w-6 h-6 rounded bg-primary-100 text-primary-600 flex items-center justify-center text-xs">Q</span>
                                {faq.q}
                            </h4>
                            <p className="text-stone-600 text-sm leading-relaxed pl-9">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
