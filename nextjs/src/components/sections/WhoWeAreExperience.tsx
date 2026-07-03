"use client";

import { motion, useInView } from "framer-motion";
import { Handshake, Play, Sparkles, Star, ThumbsUp, Trophy, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type StatCard = {
  value: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const stats: StatCard[] = [
  { value: 35, suffix: "k+", label: "Happy Customer Around The Word", icon: Users },
  { value: 120, suffix: "+", label: "Best Client Support Award Achieved", icon: Trophy },
  { value: 250, suffix: "+", label: "Trusted Best Partners And Sponsers", icon: Handshake },
  { value: 5, suffix: "k+", label: "Active Users Using Our Best Services", icon: ThumbsUp },
];

const headlineWords = ["Experts", "in", "digital", "brand", "innovation"];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function WhoWeAreExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-18% 0px" });

  return (
    <section ref={sectionRef} className="brandexa-who-experience" aria-label="Who we are">
      <div className="brandexa-who-shell">
        <motion.div
          className="brandexa-who-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="brandexa-kicker">
            <Sparkles aria-hidden="true" />
            <span>WHO WE ARE</span>
          </div>
          <motion.h2
            className="brandexa-animated-heading"
            aria-label="Experts in digital brand innovation"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.085, delayChildren: 0.08 } },
            }}
          >
            {headlineWords.map((word) => (
              <motion.span
                className={
                  word === "digital"
                    ? "brandexa-headline-word brandexa-text-accent"
                    : "brandexa-headline-word"
                }
                key={word}
                variants={{
                  hidden: { y: 42, opacity: 0, filter: "blur(12px)", rotateX: -42 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    rotateX: 0,
                    transition: { duration: 0.74, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p>
            We specialize in transforming brands through cutting-edge digital strategies,
            blending creativity with technology to drive growth, enhance engagement, and
            deliver memorable experiences.
          </p>

          <motion.div
            className="brandexa-video-card"
            initial={{ opacity: 0, rotateX: 12, y: 28 }}
            animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : undefined}
            transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/wp-content/uploads/2024/11/experts-rating-video-bg-2.webp" alt="" />
            <a
              className="brandexa-play"
              href="https://www.youtube.com/embed/Y-x0efG1seA"
              aria-label="Play brand story video"
            >
              <Play aria-hidden="true" fill="currentColor" />
            </a>
            <span className="brandexa-depth-chip">Strategy lab</span>
          </motion.div>

          <motion.div
            className="brandexa-review-row"
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.34, duration: 0.65 }}
          >
            <div className="brandexa-stars" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} aria-hidden="true" fill="currentColor" />
              ))}
            </div>
            <strong>
              ( <CountUp value={40} suffix="+ Reviews" active={inView} /> )
            </strong>
          </motion.div>
        </motion.div>

        <div className="brandexa-who-stage" aria-hidden="true">
          <motion.div
            className="brandexa-iso brandexa-iso-cube"
            animate={{ rotateY: [0, 18, 0], rotateX: [0, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="brandexa-iso brandexa-iso-ring"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="brandexa-iso brandexa-iso-bar"
            animate={{ x: [0, 16, 0], rotateZ: [-14, -6, -14] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="brandexa-stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                className="brandexa-stat-card"
                key={stat.label}
                initial={{ opacity: 0, y: 42, rotateX: 12 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
                transition={{ delay: 0.12 + index * 0.11, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, rotateX: 5, rotateY: index % 2 ? -5 : 5, scale: 1.015 }}
              >
                <div className="brandexa-stat-sheen" />
                <Icon className="brandexa-stat-icon" strokeWidth={1.3} />
                <div className="brandexa-stat-number">
                  <CountUp value={stat.value} suffix={stat.suffix} active={inView} />
                </div>
                <p>{stat.label}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
