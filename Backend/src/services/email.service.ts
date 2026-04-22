import nodemailer from 'nodemailer';
import { logger } from '../config/logger';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

interface EmailOptions { to: string; subject: string; html: string; }

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    await transporter.sendMail({
      from: `"Cultural Connect India" <${process.env.EMAIL_FROM}>`,
      ...options,
    });
    logger.info(`Email sent → ${options.to}: ${options.subject}`);
  } catch (error) {
    logger.error('Email send failed:', error);
    // Non-fatal — never crash a request over email
  }
};

export const sendWelcomeEmail = (name: string, email: string) =>
  sendEmail({
    to: email,
    subject: 'Welcome to Cultural Connect India 🪔',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#f97316,#ea580c);padding:32px;border-radius:12px 12px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:26px;">Cultural Connect India</h1>
          <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;">Connecting India's Culture & Heritage</p>
        </div>
        <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
          <h2 style="color:#111827;">Namaste, ${name}! 🙏</h2>
          <p style="color:#4b5563;line-height:1.7;">
            Thank you for joining Cultural Connect India — a platform dedicated to celebrating
            and preserving India's incredible cultural heritage.
          </p>
          <p style="color:#4b5563;line-height:1.7;">Start exploring:</p>
          <ul style="color:#4b5563;line-height:2.2;">
            <li>🎪 Upcoming festivals &amp; cultural events</li>
            <li>🛍️ Authentic products from verified artisans</li>
            <li>📸 Share your cultural experiences in the community</li>
            <li>🗺️ Discover heritage across all Indian states</li>
          </ul>
          <a href="${process.env.CLIENT_URL}/explore"
             style="display:inline-block;background:#f97316;color:#fff;padding:13px 30px;border-radius:50px;text-decoration:none;font-weight:600;margin-top:16px;">
            Start Exploring →
          </a>
          <p style="color:#9ca3af;font-size:12px;margin-top:36px;">
            © 2026 Cultural Connect India · New Delhi, India
          </p>
        </div>
      </div>`,
  });

export const sendOrderConfirmationEmail = (
  name: string,
  email: string,
  orderId: string,
  totalAmount: number
) =>
  sendEmail({
    to: email,
    subject: `Order Confirmed #${orderId.slice(-8).toUpperCase()} 🎉`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#f97316,#ea580c);padding:32px;border-radius:12px 12px 0 0;">
          <h1 style="color:#fff;margin:0;">Order Confirmed! 🎊</h1>
        </div>
        <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;">
          <p style="color:#111827;font-size:16px;">Hi ${name},</p>
          <p style="color:#4b5563;line-height:1.7;">
            Your order has been placed successfully. Our artisans are carefully preparing your
            authentic Indian products.
          </p>
          <div style="background:#fff7ed;padding:18px;border-radius:10px;border-left:4px solid #f97316;margin:20px 0;">
            <p style="margin:0;color:#111827;"><strong>Order ID:</strong> #${orderId.slice(-8).toUpperCase()}</p>
            <p style="margin:10px 0 0;color:#111827;"><strong>Total:</strong> ₹${totalAmount.toLocaleString('en-IN')}</p>
          </div>
          <a href="${process.env.CLIENT_URL}/orders/${orderId}"
             style="display:inline-block;background:#f97316;color:#fff;padding:13px 30px;border-radius:50px;text-decoration:none;font-weight:600;margin-top:8px;">
            Track Your Order →
          </a>
          <p style="color:#9ca3af;font-size:12px;margin-top:36px;">
            © 2026 Cultural Connect India · New Delhi, India
          </p>
        </div>
      </div>`,
  });