 import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ ENV VARIABLES (with fallback)
const FROM_EMAIL = process.env.EMAIL_FROM || "SAFE HOME <onboarding@resend.dev>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const COMPANY_NAME = process.env.COMPANY_NAME || "SAFE HOME OF MARYLAND LLC";


// 🔥 ADMIN EMAIL (You receive inquiry)
export const sendAdminEmail = async ({ name, email, phone, message }) => {
  try {
    if (!ADMIN_EMAIL) {
      throw new Error("ADMIN_EMAIL not defined in env");
    }

    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Inquiry - ${COMPANY_NAME}`,

      html: `
        <h2>📩 New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>

        <hr/>
        <p>${COMPANY_NAME}</p>
      `
    });

    return response;

  } catch (error) {
    console.error("❌ Admin Email Error:", error.message);
  }
};



// 🔥 USER AUTO REPLY
export const sendUserEmail = async ({ name, email }) => {
  try {
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `We Received Your Request - ${COMPANY_NAME}`,

      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting <strong>${COMPANY_NAME}</strong>.</p>

        <p>We have received your inquiry and our team will get back to you shortly.</p>

        <br/>

        <p>Best regards,<br/>${COMPANY_NAME}</p>
      `
    });

    return response;

  } catch (error) {
    console.error("❌ User Email Error:", error.message);
  }
};