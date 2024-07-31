const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    try {
        const { name, email, message } = JSON.parse(event.body);

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: email,
            to: 'your-email@example.com',
            subject: `Message from ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email' })
        };
    }
};
