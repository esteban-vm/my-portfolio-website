'use server'

import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs'

emailjs.init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
  privateKey: process.env.EMAILJS_PRIVATE_KEY,
})

export async function sendEmail() {
  try {
    const response = await emailjs.send(process.env.EMAILJS_SERVICE_ID!, process.env.EMAILJS_TEMPLATE_ID!)
    return { success: true, ...response }
  } catch (error) {
    if (error instanceof EmailJSResponseStatus) return { success: false, ...error }
    throw error
  }
}
