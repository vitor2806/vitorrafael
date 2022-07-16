import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '3d5eee62efb262',
    pass: '816a564137c984',
  },
});

export default async function sendMail(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, message } = req.body;
  await transport.sendMail({
    from: 'Portfolio <portfolio@team.com>',
    to: 'Vitor Rafael <rqfvitor@gmail.com>',
    replyTo: email,
    subject: 'Novo contato',
    html: `<div><strong>${name}</strong><br><p>${message}</p><small>${email}</small></div>`,
  });
  res.status(201).redirect('/');
}
