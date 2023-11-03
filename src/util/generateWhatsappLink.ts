export function generateWhatsAppLink(phoneNumber: string, message: string) {
  const cleanedPhoneNumber = phoneNumber.replace(/[^\d]+/g, '')
  const whatsappLink = `https://wa.me/${cleanedPhoneNumber}/?text=${encodeURIComponent(
    message,
  )}`

  return whatsappLink
}
