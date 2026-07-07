"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const serviceId = "service_t9o2qmt";
    // const templateId = "template_ilhd5lr";
    const templateId = "template_c3kk7wt";
    // const publicKey = "RKZcexxzKS4a5uCut";
    const publicKey = "S3V0yi-3JvU942X34";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Abiodun Omonijo",
      message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage(error?.text || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-card-border bg-dark-card p-6 md:p-8">
      <form ref={formRef} onSubmit={sendMessage} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-card-border bg-dark-bg px-4 py-3.5 text-cream placeholder-faint focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-card-border bg-dark-bg px-4 py-3.5 text-cream placeholder-faint focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-card-border bg-dark-bg px-4 py-3.5 text-cream placeholder-faint focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
          />
        </div>

        {/* Dynamic Status Display */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 text-sm"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>Thank you! Your message has been sent successfully.</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 rounded-xl bg-rose-500/10 border border-rose-500/20 p-4 text-rose-400 text-sm"
            >
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent-hover text-dark-bg font-semibold px-6 py-4 uppercase tracking-wider text-xs transition-colors duration-300 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
