import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, email, country, interest, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // 🔒 Configuración del transporte SMTP de Gmail (Google Workspace)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER, // ej: amaidana@kiusys.com
        pass: process.env.MAIL_PASS, // contraseña de aplicación
      },
    });

    // 📧 Envío del correo
    await transporter.sendMail({
      from: `"KIU Hub Contact" <${process.env.MAIL_USER}>`,
      to: ["amaidana@kiusys.com"], // podes agregar más destinatarios , "commercial@kiusys.com"
      subject: "✈️ New contact from KIU Hub (AWS Vegas)",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #222;">
          <h2 style="color: #5A2BC8;">New Lead from AWS Las Vegas</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country || "N/A"}</p>
          <p><strong>Interest:</strong> ${interest || "N/A"}</p>
          <p><strong>Message:</strong><br>${message || "No message provided"}</p>
          <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;" />
          <p style="font-size:13px; color:#666;">Message sent automatically from KIU Hub interactive card.</p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully to amaidana@kiusys.com");
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("❌ Email send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
