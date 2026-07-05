'use client';

import { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import FadeInUpLetter from '@/components/ui/fade-in-up-letter';
import Earth from '@/components/ui/globe';

const sparkles = Array.from({ length: 96 }, (_, index) => ({
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 74}%`,
  size: 1 + (index % 3),
  delay: (index % 16) * 0.12,
  duration: 1.6 + (index % 6) * 0.18,
}));

const panelHeadline = "Let's create digital experiences that grow your brand.";

export default function ContactUs1() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 900));
    event.currentTarget.reset();
    setIsSubmitted(true);
    setIsSubmitting(false);

    window.setTimeout(() => setIsSubmitted(false), 3500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex overflow-visible bg-[#16080d] px-3 py-4 md:h-[calc(100dvh-144px)] md:overflow-hidden md:px-6 md:py-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(191,247,71,0.14),transparent_32%),radial-gradient(circle_at_86%_82%,rgba(191,247,71,0.10),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto grid w-full max-w-[1360px] gap-6 overflow-hidden rounded-[22px] border border-white/12 bg-[#141211] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.38)] md:h-full md:grid-cols-[1fr_0.96fr] md:gap-8 md:rounded-[28px] md:p-6 lg:p-7"
        style={{ width: 'min(1360px, calc(100vw - clamp(24px, 8vw, 160px)))' }}
      >
        <div className="relative min-w-0">
          <div className="relative mb-7 overflow-hidden pb-2 text-center md:text-left">
            <div className="pointer-events-none absolute inset-x-0 -top-8 h-36">
              {sparkles.map((sparkle, index) => (
                <motion.span
                  key={index}
                  className="absolute rounded-full bg-[#bff747] shadow-[0_0_10px_rgba(191,247,71,0.95)]"
                  style={{
                    left: sparkle.left,
                    top: sparkle.top,
                    width: sparkle.size,
                    height: sparkle.size,
                  }}
                  initial={{ opacity: 0.25, scale: 0.7 }}
                  animate={{ opacity: [0.25, 1, 0.3], scale: [0.7, 1.55, 0.9] }}
                  transition={{
                    duration: sparkle.duration,
                    delay: sparkle.delay,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            <h1 className="relative z-10 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Contact <span className="text-[#bff747] italic">Us</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-base font-semibold text-white/85">Name</span>
                <input
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="h-[52px] w-full rounded-md border border-white/12 bg-white/[0.055] px-4 text-base text-white outline-none transition placeholder:text-white/45 focus:border-[#bff747] focus:ring-4 focus:ring-[#bff747]/20 md:h-[46px]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-base font-semibold text-white/85">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-[52px] w-full rounded-md border border-white/12 bg-white/[0.055] px-4 text-base text-white outline-none transition placeholder:text-white/45 focus:border-[#bff747] focus:ring-4 focus:ring-[#bff747]/20 md:h-[46px]"
                />
              </label>
            </div>

            <label className="block w-full">
              <span className="mb-2 block text-base font-semibold text-white/85">Message</span>
              <textarea
                name="message"
                required
                placeholder="Enter your message"
                className="block h-[170px] w-full min-w-full resize-none rounded-md border border-white/12 bg-white/[0.055] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/45 focus:border-[#bff747] focus:ring-4 focus:ring-[#bff747]/20 md:h-[22dvh] md:max-h-[190px] md:min-h-[130px]"
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              disabled={isSubmitting}
              className="flex h-[52px] w-full items-center justify-center rounded-full bg-gradient-to-b from-[#bff747] to-[#83c91f] text-base font-semibold text-black shadow-[0_2px_0_rgba(255,255,255,0.34)_inset] transition hover:from-[#d4ff6b] hover:to-[#8ddc22] disabled:cursor-not-allowed disabled:opacity-70 md:h-[46px]"
              style={{ borderRadius: 9999 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </div>

        <motion.article
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[430px] overflow-hidden rounded-[24px] border border-[#bff747]/35 bg-gradient-to-b from-[#bff747] to-[#17210c] p-8 md:min-h-0 md:p-9"
        >
          <FadeInUpLetter
            text={panelHeadline}
            animate={isInView}
            delay={0.2}
            stagger={0.028}
            duration={0.58}
            className="relative z-20 max-w-[650px] font-bold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.55rem, 3.65vw, 3.85rem)', lineHeight: 1 }}
          />
          <div className="absolute -right-24 -bottom-36 z-10 flex h-full w-full max-w-[430px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-32 md:-bottom-44 md:max-w-[560px]">
            <Earth
              scale={1.1}
              baseColor={[0.75, 0.97, 0.28]}
              markerColor={[0, 0, 0]}
              glowColor={[0.75, 0.97, 0.28]}
            />
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
