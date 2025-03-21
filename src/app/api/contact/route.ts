// app/api/contact/route.ts (App Router)
import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();
    
    // Basic server-side validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        name,
        email,
        phone,
        message
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!, // You'll need this for server-side
      }
    );

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('EmailJS error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}