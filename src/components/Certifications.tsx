"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    { name: "Forage Certification", src: "/images/forage.png" },
    { name: "Side Hustle Mentorship", src: "/images/SideHustle.PNG" },
    { name: "Coursera Professional Certificate", src: "/images/Coursera.png" },
    {
      name: "Jobberman Soft Skills Certification",
      src: "/images/Jobberman.PNG",
    },
  ];

  return (
    <section className="py-20 border-t border-card-border/40 bg-dark-bg/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold tracking-tight text-cream"
          >
            Qualifications & Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm text-muted"
          >
            Endorsing my technical competence, product leadership, and
            professional excellence.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:grid-cols-4 lg:gap-x-10 lg:mx-0 lg:max-w-none"
        >
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex justify-center items-center items-center h-auto relative p-4 rounded-2xl border border-card-border bg-dark-card/30 hover:border-accent/30 hover:bg-dark-card/50 transition-all duration-300 group"
            >
              <div className="flex relative w-full h-auto justify-center items-center aspect-[3/1]  opacity-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={cert.src}
                  alt={cert.name}
                  // fill
                  className="object-contain"
                  width={350}
                  height={500}
                  // sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
