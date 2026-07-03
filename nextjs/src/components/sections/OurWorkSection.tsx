"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";

type WorkItem = {
  title: string;
  category: string;
  image: string;
  metric: string;
  summary: string;
};

const workItems: WorkItem[] = [
  {
    title: "Dynamic E-Commerce Platform",
    category: "Branding & Web Design",
    image: "/wp-content/uploads/2024/11/project-1-2.webp",
    metric: "38% uplift",
    summary: "A sharper storefront built for faster discovery, stronger conversion, and easier scale.",
  },
  {
    title: "Dynamic Digital Campaign",
    category: "Digital Marketing",
    image: "/wp-content/uploads/2024/11/project-3-2.webp",
    metric: "3.1x reach",
    summary: "Cross-channel campaign systems designed to keep creative momentum moving every week.",
  },
  {
    title: "Interactive Website Redesign",
    category: "Experience Design",
    image: "/wp-content/uploads/2024/11/project-6-2.webp",
    metric: "2x engagement",
    summary: "A more immersive web presence with stronger hierarchy, motion, and conversion cues.",
  },
];

export default function OurWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-18% 0px" });

  return (
    <section ref={sectionRef} className="brandexa-work-section" aria-label="Our work">
      <div className="brandexa-work-shell">
        <motion.div
          className="brandexa-work-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="brandexa-kicker">
            <Sparkles aria-hidden="true" />
            <span>OUR WORK</span>
          </div>
          <h2>Selected projects shaped for growth, clarity, and motion.</h2>
          <p>
            A quick look at the kinds of digital systems we build for brands that want stronger
            positioning and better performance.
          </p>
        </motion.div>

        <div className="brandexa-work-grid">
          {workItems.map((item, index) => {
            const featured = index === 0;
            return (
              <motion.article
                key={item.title}
                className={`brandexa-work-card ${featured ? "is-featured" : ""}`}
                initial={{ opacity: 0, y: 34, scale: 0.98 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
                transition={{ delay: 0.12 + index * 0.12, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, rotateX: 4, rotateY: featured ? -4 : 4 }}
              >
                <div className="brandexa-work-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="brandexa-work-body">
                  <div className="brandexa-work-topline">
                    <span>{item.category}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="brandexa-work-metric">{item.metric}</div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
