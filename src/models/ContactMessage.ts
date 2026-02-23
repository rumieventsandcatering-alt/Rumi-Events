import mongoose, { Schema, Document } from 'mongoose';

export interface IContactMessage extends Document {
    mobile: string;
    message: string;
    createdAt: Date;
}

const ContactMessageSchema: Schema = new Schema({
    mobile: {
        type: String,
        required: [true, 'Please provide a mobile number.'],
        maxlength: [15, 'Mobile number cannot be more than 15 characters.'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message.'],
        maxlength: [1000, 'Message cannot be more than 1000 characters.'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);
