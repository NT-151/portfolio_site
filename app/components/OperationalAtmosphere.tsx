"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function OperationalAtmosphere() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [36, -36],
  );
  const lightX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-18, 22],
  );
  const lineOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.38, 0.72, 0.42]);

  return (
    <motion.section
      ref={sectionRef}
      className="studio-reel"
      initial={reduceMotion ? false : { opacity: 0.94 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="studio-reel__grid" aria-hidden="true" />
      <motion.div
        className="studio-reel__light"
        aria-hidden="true"
        style={{ x: lightX }}
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.48, 0.72, 0.5],
                scaleX: [1, 1.045, 1],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="studio-reel__inner">
        <motion.div
          className="studio-reel__copy"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="studio-kicker">
            Operating atmosphere / signal architecture
          </p>
          <h2>Quiet systems, precisely held.</h2>
          <p>
            Direction, evidence, and judgment held in a calm operating field.
          </p>
        </motion.div>

        <motion.div
          className="studio-reel__system"
          aria-hidden="true"
          style={{ y: visualY }}
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 1.35, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="studio-system__label studio-system__label--north">
            active trace
          </div>
          <div className="studio-system__label studio-system__label--south">
            controlled drift
          </div>
          <motion.svg
            viewBox="0 0 720 560"
            preserveAspectRatio="xMidYMid meet"
            className="studio-system__drawing"
          >
            <defs>
              <linearGradient
                id="systemTrace"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(248,248,245,0)" />
                <stop offset="34%" stopColor="rgba(248,248,245,0.24)" />
                <stop offset="66%" stopColor="rgba(226,160,54,0.72)" />
                <stop offset="100%" stopColor="rgba(248,248,245,0.08)" />
              </linearGradient>
              <linearGradient
                id="systemHairline"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(248,248,245,0)" />
                <stop offset="50%" stopColor="rgba(248,248,245,0.18)" />
                <stop offset="100%" stopColor="rgba(248,248,245,0)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M64 428 C182 376 286 344 396 282 C492 228 560 170 662 104"
              fill="none"
              stroke="url(#systemHairline)"
              strokeWidth="1"
              style={{ opacity: lineOpacity }}
            />
            <motion.path
              d="M116 462 C228 388 342 338 450 258 C520 206 578 154 650 76"
              fill="none"
              stroke="url(#systemTrace)"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={
                reduceMotion ? undefined : { pathLength: 1, opacity: 1 }
              }
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: 2.2,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.path
              d="M168 360 C270 328 378 274 528 124"
              fill="none"
              stroke="url(#systemHairline)"
              strokeWidth="1"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={
                reduceMotion ? undefined : { pathLength: 1, opacity: 0.42 }
              }
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: 2,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </motion.section>
  );
}
