import { NextRequest } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Log if API key is missing
if (!process.env.RESEND_API_KEY) {
  console.warn('RESEND_API_KEY is not set in environment variables');
}

export async function POST(request: NextRequest) {
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ 
        error: 'Email service not configured', 
        details: 'RESEND_API_KEY is missing in environment variables. Please check your .env file.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    const body = await request.json();
    
    const { name, email, subject, message } = body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // This will be your verified sender
      to: 'khaled.bakry.1999@gmail.com', // Your email address
      subject: `Contact Form: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px;">
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });
    
    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email', 
          details: error.message || 'Unknown error from email service' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Return success response
    return new Response(
      JSON.stringify({ message: 'Email sent successfully', id: data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message || 'Unknown error occurred' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}