const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve files from 'public' directory
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bll.taoufik@gmail.com',
        pass: process.env.MDP_EMAIL
    }
});

app.post('/send_email', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Received data:', { name, email, message });

    const mailOptions = {
        from: email,
        to: 'bll.taoufik@gmail.com',
        subject: 'Nouveau message de contact',
        text: `Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
            res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
        } else {
            console.log('E-mail envoyé :', info.response);
            res.send('Message envoyé avec succès.');
        }
    });
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
