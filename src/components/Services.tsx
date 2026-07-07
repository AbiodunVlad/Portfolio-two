"use client";

import { Code2, Smartphone, Zap, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const servicesList = [
    {
      title: "Web Development",
      description:
        "Website development is an ever-evolving field driven by technological advancements. Whether crafting a personal blog, an e-commerce platform, a corporate site, or a web application, the process demands meticulous planning, keen attention to detail, and continual maintenance to ensure a successful and impactful online presence.",
      icon: Code2,
    },
    {
      title: "Mobile Development",
      description:
        "Mobile development is a dynamic and fast-paced field that demands a deep understanding of your target audience, strategic planning, proficient coding, and ongoing enhancements. To create successful apps, it's essential to continuously adapt and innovate to meet user needs and maintain a competitive edge in the market.",
      icon: Smartphone,
    },
    {
      title: "No-Code Development",
      description:
        "No-code development is a revolutionary movement that enables individuals to create software applications without writing a single line of code. Through intuitive visual interfaces, drag-and-drop features, and pre-built components, anyone can bring their ideas to life quickly and efficiently, democratizing technology.",
      icon: Zap,
    },
    {
      title: "UX/UI Design",
      description:
        "UX and UI design are pivotal in crafting digital products that are visually appealing and user-centric. Achieving a seamless and engaging user experience requires close collaboration between UI and UX designers, developers, and stakeholders, ensuring that both aesthetic and functional aspects are met.",
      icon: Palette,
    },
  ];

  return (
    <section id="services" className="py-24 border-t border-card-border/40 bg-dark-bg/30 relative">
      {/* Visual background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
          >
            Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-muted"
          >
            Tailored digital solutions to turn concepts into high-quality, functional products.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-card-border bg-dark-card p-6 md:p-8 hover:border-accent/40 transition-all duration-300"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark-bg transition-colors duration-300 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-cream tracking-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
