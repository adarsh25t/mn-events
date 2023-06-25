const nodemailer = require('nodemailer');

exports.sendEmail = (filePath,obj) => {

    // Create a transporter object with your email configuration
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., 'Gmail', 'Hotmail'
        auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
        },
    });
    
    // Create a message object
    const message = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: `${obj.name} send Eamil`,
        text: ` Name: ${obj.name},Phone:  ${obj.phone} `,
        attachments: [
        {
            filename: 'receipt.pdf',
            path: `./uploads/${filePath}.pdf`,
        },
        ],
    };
    
    // Send the email
    transporter.sendMail(message, (error, info) => {
        if (error) {
        console.log('Error occurred while sending email:', error.message);
        } else {
        console.log('Email sent successfully:', info.response);
        }
    });
}