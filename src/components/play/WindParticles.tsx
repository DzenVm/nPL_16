"use client";

import { useEffect, useRef } from "react";
import styles from "./WindParticles.module.css";

type Particle = {
  x: number;
  y: number;
  speed: number;
  size: number;
  wobble: number;
  wobbleSpeed: number;
  hue: "amber" | "tide";
};

const COLORS = {
  amber: "rgba(240, 178, 95, 0.65)",
  tide: "rgba(126, 205, 198, 0.5)",
};

export function WindParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const count = 46;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 18 + Math.random() * 34,
      size: 1 + Math.random() * 2.2,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.6 + Math.random() * 0.8,
      hue: Math.random() > 0.7 ? "tide" : "amber",
    }));

    if (reduceMotion) {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.fillStyle = COLORS[p.hue];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      return () => window.removeEventListener("resize", resize);
    }

    let raf = 0;
    let last = performance.now();

    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.speed * dt;
        p.wobble += p.wobbleSpeed * dt;
        const y = p.y + Math.sin(p.wobble) * 6;
        if (p.x > width + 10) {
          p.x = -10;
          p.y = Math.random() * height;
        }
        ctx!.fillStyle = COLORS[p.hue];
        ctx!.beginPath();
        ctx!.arc(p.x, y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
