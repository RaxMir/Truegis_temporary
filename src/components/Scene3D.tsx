/**
 * 3D-сцена с запасной картинкой:
 *  - слабый телефон, «уменьшить движение» или нет WebGL — только картинка того же кадра (poster);
 *  - иначе картинка видна, пока грузится 3D-чанк, потом её сменяет живая сцена;
 *  - вне экрана сцена не рисуется (frameloop = never) — не греет телефон и не тратит батарею.
 */
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Scenes = {
  truegis: lazy(() => import("../three/Scenes").then((m) => ({ default: m.TrueGisScene }))),
  shifo24: lazy(() => import("../three/Scenes").then((m) => ({ default: m.ShifoScene }))),
};

function canRun3D(): boolean {
  if (typeof window === "undefined") return false;
  if (new URLSearchParams(window.location.search).has("no3d")) return false;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
  const ua = navigator.userAgent || "";
  const tgClass = ua.match(/Telegram-Android\/[^(]*\([^)]*;\s*(LOW|AVERAGE|HIGH)\s*\)/i)?.[1]?.toUpperCase();
  if (tgClass && tgClass !== "HIGH") return false;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  if (typeof memory === "number" && memory <= 2) return false;
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function Scene3D({ scene, poster, alt, className = "" }: { scene: keyof typeof Scenes; poster: string; alt: string; className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [enabled] = useState(canRun3D);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || !enabled) return;
    const io = new IntersectionObserver(([e]) => {
      setVisible(e.isIntersecting);
      if (e.isIntersecting) setMounted(true); // 3D грузим, только когда блок рядом с экраном
    }, { rootMargin: "200px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  useEffect(() => {
    if (!mounted) return;
    const id = window.setTimeout(() => setReady(true), 400); // дать сцене отрисовать первый кадр под картинкой
    return () => window.clearTimeout(id);
  }, [mounted]);

  const Scene = Scenes[scene];
  return (
    <div ref={box} className={`scene3d ${className}`}>
      <img className={`scene3d__poster ${ready ? "is-hidden" : ""}`} src={poster} alt={alt} draggable={false} />
      {enabled && mounted && (
        <div className={`scene3d__canvas ${ready ? "is-ready" : ""}`}>
          <Suspense fallback={null}>
            <Scene frameloop={visible ? "always" : "never"} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
