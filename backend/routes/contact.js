import express from 'express';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// @desc    Submit a new contact request
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, service, budget, message } = req.body;

        if (!name || !email || !phone || !service || !budget || !message) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            service,
            budget,
            message,
        });

        // -----------------------------------------------------
        // EMAIL NOTIFICATION USING NODEMAILER
        // -----------------------------------------------------
        try {
            // Configure the email transport using SMTP (Default: Gmail)
            // You will need to add EMAIL_USER and EMAIL_PASS to your .env file
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER || 'your_email@gmail.com', // Your Gmail address
                    pass: process.env.EMAIL_PASS || 'your_app_password',    // Your Gmail App Password
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER || 'your_email@gmail.com',
                to: process.env.RECEIVER_EMAIL || 'enquiry.skyhubmarketing@gmail.com', // Where you want to receive leads
                subject: `🚀 New Lead Alert: ${name} (${service})`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                        <h2 style="color: #154198; text-align: center;">New Lead Received!</h2>
                        <p style="font-size: 16px; color: #333;">You have a new contact form submission from your SkyHub website.</p>
                        <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                        <ul style="list-style: none; padding: 0; font-size: 15px; color: #555;">
                            <li style="margin-bottom: 10px;"><strong>👤 Name:</strong> ${name}</li>
                            <li style="margin-bottom: 10px;"><strong>📧 Email:</strong> ${email}</li>
                            <li style="margin-bottom: 10px;"><strong>📞 Phone:</strong> ${phone}</li>
                            <li style="margin-bottom: 10px;"><strong>🎯 Service:</strong> ${service}</li>
                            <li style="margin-bottom: 10px;"><strong>💸 Budget:</strong> ${budget}</li>
                        </ul>
                        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4ACFFA; border-radius: 5px; margin-top: 20px;">
                            <strong>💬 Message:</strong><br />
                            <p style="white-space: pre-wrap; margin-top: 5px;">${message}</p>
                        </div>
                        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 30px;">This is an automated notification from your SkyHub Marketing backend.</p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('Lead notification email sent successfully!');
        } catch (emailError) {
            console.error('Failed to send email notification:', emailError);
            // We don't return an error to the user because the lead was still saved in the database!
        }

        res.status(201).json({
            success: true,
            data: contact,
            message: 'Your request has been submitted successfully!',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
    }
});

// @desc    Get all contact submissions (for admin)
// @route   GET /api/contact
// @access  Public (Should be protected in production!)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: contacts.length, data: contacts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

export default router;
