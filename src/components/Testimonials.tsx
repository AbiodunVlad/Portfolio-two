"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "From design to deployment, Abiodun crafts business websites that perfectly capture brands while optimizing usability. His technical and management skills are top-notch, and his experience elevates the digital presence of businesses.",
      author: "Adetola Asa",
      role: "E-PHIS Consulting",
    },
    {
      quote:
        "Working with Abiodun was a game-changer for us with the management and maintenance of our website. He transformed our complex process into an intuitive and flawless one. His attention to detail and user-centered approach set him apart. He comes highly recommend!",
      author: "Ning Jeng",
      role: "Product Manager",
    },
  ];

  return (
    <section className="py-24 border-t border-card-border/40 bg-dark-bg/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-muted"
          >
            Here is what professionals and clients say about working with me.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-card-border bg-dark-card p-8 relative overflow-hidden group"
            >
              {/* Quote Icon background element */}
              <div className="absolute right-6 top-6 text-card-border/30 group-hover:text-accent/15 transition-colors duration-300">
                <Quote className="h-12 w-12 rotate-180" />
              </div>

              <div className="relative">
                <p className="text-base md:text-lg leading-relaxed text-cream/90 italic font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-card-border/50 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base font-bold text-accent">
                    {item.author}
                  </h4>
                  <p className="text-xs text-muted font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
