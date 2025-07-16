// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

// Email configuration
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('fullName');
    const email = formData.get('email');
    const message = formData.get('message');
    const file = formData.get('file');

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Validate file size if file exists
    if (file && file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "File size must be less than 5MB" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #005EFF; padding-bottom: 10px;">
          New Lead Submission from Mindefy Website
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #005EFF; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        ` : ''}
        
        ${file ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Attachment:</h3>
            <p style="background-color: #e9ecef; padding: 10px; border-radius: 5px;">
              📎 <strong>File:</strong> ${file.name} (${(file.size / 1024).toFixed(2)} KB)
            </p>
          </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
          <p>This email was sent from Mindefy website contact form.</p>
        </div>
      </div>
    `;

    // Prepare attachments
    const attachments = [];
    if (file) {
      const buffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(buffer),
        contentType: file.type,
      });
    }

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.SENDER_EMAIL}>`,
      to: [
        process.env.TO_EMAIL_1,
        process.env.TO_EMAIL_2,
        process.env.TO_EMAIL_3,
      ],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      attachments,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message:
        "🙌 Thanks for your message! We’ll be in touch soon to learn more about what you need. We’re looking forward to working with you!",
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}