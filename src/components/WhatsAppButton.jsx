import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/911800123456"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-green/30 transition-transform hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
