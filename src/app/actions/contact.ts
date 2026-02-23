'use server';

import { z } from 'zod';
import dbConnect from '@/lib/mongoose';
import ContactMessage from '@/models/ContactMessage';
import { sendEmailNotification } from '@/lib/nodemailer';


const contactSchema = z.object({
    mobile: z.string().min(10, { message: 'Enter a valid mobile number.' }).max(15),
    message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }).max(1000),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    try {
        const mobile = formData.get('mobile') as string;
        const message = formData.get('message') as string;

        const validatedData = contactSchema.safeParse({ mobile, message });

        if (!validatedData.success) {
            return {
                success: false,
                error: validatedData.error.issues[0].message,
            };
        }

        await dbConnect();

        const newMessage = await ContactMessage.create({
            mobile: validatedData.data.mobile,
            message: validatedData.data.message,
        });

        // Send email to business owner
        await sendEmailNotification({
            mobile: newMessage.mobile,
            message: newMessage.message,
            date: newMessage.createdAt,
        });

        return {
            success: true,
            message: 'Thank you for reaching out! We will get back to you soon.',
        };
    } catch (error) {
        console.error('Contact form submission error:', error);
        return {
            success: false,
            error: 'An unexpected error occurred. Please try again later or call us at +91 9539241400.',
        };
    }
}
