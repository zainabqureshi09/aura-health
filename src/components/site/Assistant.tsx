import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User, Loader2, RefreshCcw } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type Message = {
  id: string;
  who: "user" | "ai";
  text: string;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    who: "ai",
    text: "Hello! I'm your Hassan Medical AI assistant. How can I help you today?",
    timestamp: new Date(),
  },
];

const medicalResponses: Record<string, string> = {
  default: "I'm sorry, I don't have specific information on that. Would you like me to connect you with one of our licensed pharmacists?",
  greet: "Hello! How can I assist you with your healthcare needs today?",
  fever: "For a mild fever, Panadol (Paracetamol) is generally recommended. Please ensure you follow the dosage instructions. If the fever persists above 102°F, please consult a doctor.",
  cough: "For a dry cough, you might consider a cough suppressant. If it's a productive cough, an expectorant would be better. We have several options in our 'Medicines' section.",
  delivery: "We offer same-day delivery across Lahore and other major cities. Orders placed before 6 PM are usually delivered within 45 minutes.",
  prescription: "You can upload your prescription in the 'Upload Rx' section below. Our pharmacist will review it and call you shortly.",
};

export function Assistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      who: "user",
      text: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      let responseText = medicalResponses.default;
      const lowerInput = userMsg.text.toLowerCase();

      if (lowerInput.includes("hi") || lowerInput.includes("hello")) responseText = medicalResponses.greet;
      else if (lowerInput.includes("fever") || lowerInput.includes("pain")) responseText = medicalResponses.fever;
      else if (lowerInput.includes("cough")) responseText = medicalResponses.cough;
      else if (lowerInput.includes("delivery") || lowerInput.includes("time")) responseText = medicalResponses.delivery;
      else if (lowerInput.includes("upload") || lowerInput.includes("prescription")) responseText = medicalResponses.prescription;

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        who: "ai",
        text: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setIsTyping(false);
  };

  return (
    <section id="assistant" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" /> AI Healthcare Assistant
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-blue leading-[1.1] mb-6">
            A pharmacist <span className="text-gradient">in your pocket</span>.
          </h2>
          <p className="text-lg text-brand-muted max-w-lg leading-relaxed mb-8">
            Describe a symptom, search for a medicine, or get dosage guidance. Our AI assistant is
            trained on verified medical data and supervised by licensed pharmacists.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Smart symptom checker",
              "Instant medicine search",
              "Dosage & interaction alerts",
              "Refill reminders",
            ].map((t) => (
              <li key={t} className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-brand-green glow-green transition-transform group-hover:scale-150" />
                <span className="text-brand-blue font-semibold">{t}</span>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={resetChat}
            className="flex items-center gap-2 text-xs font-bold text-brand-blue/60 hover:text-brand-blue transition-colors uppercase tracking-widest"
          >
            <RefreshCcw className="w-3 h-3" />
            Reset Consultation
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-strong rounded-[2.5rem] overflow-hidden shadow-elegant border border-brand-blue/5"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-blue/5 bg-white/50 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 grid place-items-center rounded-2xl bg-gradient-primary shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-green border-2 border-white rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-base font-bold text-brand-blue">Hassan Medical AI</p>
                <p className="text-[10px] font-bold text-brand-green uppercase tracking-wider">
                  Always Active
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-green shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="h-[450px] overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar"
          >
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex gap-4 ${m.who === "user" ? "justify-end" : ""}`}
                >
                  {m.who === "ai" && (
                    <div className="w-8 h-8 shrink-0 grid place-items-center rounded-xl bg-brand-blue/5 border border-brand-blue/5">
                      <Bot className="w-4 h-4 text-brand-blue" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm font-medium ${
                      m.who === "user"
                        ? "bg-gradient-primary text-white rounded-tr-sm"
                        : "bg-white text-brand-blue border border-brand-blue/5 rounded-tl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.who === "user" && (
                    <div className="w-8 h-8 shrink-0 grid place-items-center rounded-xl bg-brand-blue/5 border border-brand-blue/5">
                      <User className="w-4 h-4 text-brand-blue" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 shrink-0 grid place-items-center rounded-xl bg-brand-blue/5">
                  <Bot className="w-4 h-4 text-brand-blue" />
                </div>
                <div className="bg-white px-5 py-3.5 rounded-2xl rounded-tl-sm border border-brand-blue/5 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-brand-green animate-spin" />
                  <span className="text-xs font-bold text-brand-green uppercase tracking-widest">
                    AI is thinking...
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/50 border-t border-brand-blue/5">
            <div className="relative flex items-center gap-3 glass-strong rounded-2xl px-5 py-4 border border-brand-blue/5 shadow-inner group focus-within:border-brand-green/30 transition-all">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-transparent outline-none text-sm font-semibold placeholder:text-brand-muted text-brand-blue"
                placeholder="Ask about a medicine or symptom…"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-primary text-white shadow-lg hover:scale-110 hover:glow-green transition-all duration-300 disabled:opacity-50 disabled:scale-100 disabled:hover:glow-none"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-center font-bold text-brand-muted uppercase tracking-[0.1em]">
              AI advice is not a replacement for professional medical diagnosis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

