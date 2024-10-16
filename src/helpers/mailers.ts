import User from '@/models/User';
import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'


export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        // TODO: configure mail for usage

        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType == "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 }) // expires in 60min
        }
        else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, { forgetPasswordToken: hashedToken, forgetPasswordTokenExpiry: Date.now() + 3600000 }) // expires in 60min
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        let transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "616dad4985bdc9",
                pass: "47d48917d85ff7"
            }
        });

        const mailOptions = {
            from: 'anujverma3553@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN} / verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"} or copy and paste the link below in your browser.
            <br> ${process.env.DOMAIN}/verifyemail?tokens=${hashedToken}
            </p>`,
        }

        const mailResponse = await transport.sendMail(mailOptions)
        return mailResponse
    }
    catch (error: any) {
        throw new Error(error.message)
    }
}