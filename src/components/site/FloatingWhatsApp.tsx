import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923000000000"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 grid place-items-center rounded-full text-white animate-pulse-glow"
      style={{ background: "var(--whatsapp)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
