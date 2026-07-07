"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  ctaText: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-card-border bg-dark-card p-4 transition-all duration-300 hover:border-accent/40"
    >
      {/* Visual Area */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-dark-bg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Text Info */}
      <div className="flex flex-1 flex-col justify-between pt-5">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-card-border/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted group-hover:text-cream transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-display text-xl font-bold text-cream tracking-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        {/* CTA Link */}
        <div className="mt-6 flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-cream transition-colors"
          >
            {project.ctaText}
          </a>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-dark-bg text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-dark-bg">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
