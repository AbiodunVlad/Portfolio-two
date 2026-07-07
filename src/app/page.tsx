"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom components
import CursorDot from "@/components/CursorDot";
import Navigation from "@/components/Navigation";
import ProjectCard, { Project } from "@/components/ProjectCard";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const projectsData: Project[] = [
  {
    title: "Under 40 CEOs",
    description:
      "A digital media and networking platform celebrating and empowering the next generation of business leaders across Africa.",
    image: "/images/u4c.png",
    link: "https://under40ceos.com/",
    tags: ["Web Development", "WordPress"],
    ctaText: "Visit",
  },
  {
    title: "Broadview Capital",
    description:
      "A modern real estate investment capital and equity management firm website showcasing portfolios and investment opportunities.",
    image: "/images/broadviewcapital.png",
    link: "https://www.broadviewcapital.com/",
    tags: ["Frontend", "React JS"],
    ctaText: "Visit",
  },
  {
    title: "Taro Agric",
    description:
      "An agricultural technology startup platform matching smallholder farmers with crop resources, matching markets, and logistics.",
    image: "/images/taroAgric.png",
    link: "https://www.taroagric.com/",
    tags: ["Web Platform", "Next.js"],
    ctaText: "Visit",
  },
  {
    title: "mHealth Utility",
    description:
      "A healthcare utility mobile app designed to help users track symptoms, coordinate care, and access resources in real-time.",
    image: "/images/mHealthApp.jpg",
    link: "https://expo.dev/artifacts/eas/dSGiMxZUVJi9LjAgb69GDf.apk",
    tags: ["Mobile App", "React Native"],
    ctaText: "Download APK",
  },
  {
    title: "oneRedBox Logistics",
    description:
      "E-commerce delivery and logistics hub matching drivers with dispatch orders and warehousing automation.",
    image: "/images/oneRedBox.png",
    link: "https://www.oneredbox.ng/",
    tags: ["Web Platform", "Next.js"],
    ctaText: "Visit",
  },
  {
    title: "Harbor Church LA",
    description:
      "A contemporary church community website presenting media hubs, sermon streams, and calendar management.",
    image: "/images/harbourchurch.png",
    link: "https://www.harborchurchla.com/",
    tags: ["Web Design", "Webflow"],
    ctaText: "Visit",
  },
  {
    title: "iKarely Health Assistant",
    description:
      "Interactive healthcare portal mockup and patient dashboard design solving telemedicine interface complexity.",
    image: "/images/iKarely1.png",
    link: "https://www.behance.net/gallery/201537165/iKarely-Health",
    tags: ["UX/UI Design", "Figma"],
    ctaText: "View Case Study",
  },
  {
    title: "Zimo Clan",
    description:
      "A design and creative content agency showcase portfolio built to present high-fidelity branding assets.",
    image: "/images/zimo.png",
    link: "https://www.zimoclan.com/",
    tags: ["Web Platform", "React JS"],
    ctaText: "Visit",
  },
  {
    title: "Peniwyse",
    description:
      "A financial technology landing page and accounting dashboard helping users automate business tracking.",
    image: "/images/peniwyse.png",
    link: "https://peniwyse-landing-page.vercel.app/",
    tags: ["Fintech", "Next.js"],
    ctaText: "Visit",
  },
];

const toolsList = [
  "HTML",
  "CSS",
  "JS",
  "REACT JS",
  "NEXT JS",
  "REACT NATIVE",
  "FIREBASE",
  "AWS",
  "WEBFLOW",
  "GATSBY",
  "WORDPRESS",
  "FIGMA",
];

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <CursorDot />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="top"
          className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16"
        >
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

          {/* Radial gradient background mask */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(219, 91, 61, 0.08) 0%, transparent 60%)",
            }}
          />

          <div className="mx-auto max-w-5xl px-6 relative z-10 text-center flex flex-col items-center">
            {/* Availability Badge */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-8 select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </motion.span>

            {/* Display Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cream text-balance leading-none max-w-4xl"
            >
              Transforming Ideas Into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e67e22]">
                Scalable Digital Products
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-muted text-balance font-medium leading-relaxed"
            >
              Hi, I&apos;m{" "}
              <span className="text-cream font-semibold">Abiodun Omonijo</span>.
              I&apos;m a visionary developer and strategist specializing in Web
              &amp; Mobile products. Currently bridging innovation and execution
              as Head of Product at The Founders&apos; Hub.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-hover text-dark-bg font-bold px-6 py-3.5 text-sm uppercase tracking-wider transition-colors duration-300"
              >
                Selected Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-card-border bg-dark-card hover:border-accent hover:text-accent font-bold px-6 py-3.5 text-sm uppercase tracking-wider transition-all duration-300"
              >
                Let&apos;s Connect
              </a>
            </motion.div>

            {/* Scroll Down */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
            >
              <a
                href="#projects"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border/50 text-muted hover:text-accent hover:border-accent transition-all duration-300 animate-bounce"
                aria-label="Scroll down to projects"
              >
                <ArrowDown className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section
          id="projects"
          className="py-24 border-t border-card-border/40 bg-dark-bg relative"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
              >
                Selected Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-base text-muted"
              >
                A showcase of products built where visual aesthetics, clean UX,
                and stable engineering meet.
              </motion.p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services & Core Capabilities */}
        <Services />

        {/* About Me Section */}
        <section
          id="about"
          className="py-24 border-t border-card-border/40 bg-dark-bg/50"
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              {/* Profile Image column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4 flex justify-center lg:sticky lg:top-28"
              >
                <div className="relative aspect-square w-64 md:w-72 lg:w-full max-w-[320px] rounded-3xl overflow-hidden border border-card-border p-2 bg-dark-card shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/profile2.jpg"
                      alt="Abiodun Omonijo profile picture"
                      fill
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 250px, 320px"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text Description Column */}
              <div className="lg:col-span-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl mb-4">
                    About Me
                  </h2>
                  <div className="h-1 w-12 bg-accent rounded-full mb-6" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4 text-muted text-sm sm:text-base leading-relaxed"
                >
                  <p>
                    👋 Hi there! I&apos;m a multifaceted developer with a
                    passion for creating dynamic and user-friendly digital
                    experiences. With a strong foundation in both code and
                    no-code development, I thrive on bringing innovative ideas
                    to life on the web and mobile platforms.
                  </p>
                  <p>
                    My journey in development has equipped me with the skills of
                    programming languages and frameworks needed to create
                    products, enabling me to tackle complex challenges with ease
                    and efficiency. Whether it&apos;s building a responsive
                    website or a seamless mobile app, I am dedicated to
                    delivering high-quality solutions that meet user needs and
                    exceed expectations.
                  </p>
                  <p>
                    In addition to my development skills, I am deeply committed
                    to the principles of UX/UI design. I believe that a great
                    user experience is at the heart of every successful digital
                    product. By combining aesthetic design with functional
                    elements, I strive to create interfaces that are not only
                    visually appealing but also intuitive and enjoyable to use.
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden space-y-4 pt-4 border-t border-card-border/30 mt-4"
                      >
                        <p>
                          Beyond development and design, I am also passionate
                          about content creation. I understand the power of
                          compelling content in communicating ideas and driving
                          user engagement. Whether it&apos;s writing blog posts,
                          creating tutorials, or designing graphics, I enjoy
                          crafting content that resonates with audiences and
                          adds value to their experience.
                        </p>
                        <p>
                          By integrating content creation into my workflow, I am
                          able to provide a holistic approach to digital
                          development, ensuring that every aspect of a project
                          is cohesive and impactful.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="pt-2"
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent hover:text-cream transition-colors duration-300 cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        <span>Read Less</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>Read More</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section className="py-24 border-t border-card-border/40 bg-dark-bg/20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-bold tracking-tight text-cream"
              >
                Skills &amp; Technologies
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-sm text-muted"
              >
                The programming languages, frameworks, and digital tools I use
                daily.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {toolsList.map((tool) => (
                <div
                  key={tool}
                  className="rounded-xl border border-card-border bg-dark-card/60 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-muted hover:text-accent hover:border-accent hover:bg-dark-card/90 transition-all duration-300 select-none"
                >
                  {tool}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Certifications */}
        <Certifications />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 border-t border-card-border/40 bg-dark-bg relative"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
              >
                Get In Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-base text-muted"
              >
                Have an idea, project, or opportunity you&apos;d like to
                discuss? Let&apos;s build it together.
              </motion.p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
