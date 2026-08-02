'use client';

import { useEffect, useRef } from 'react';

const finePointerQuery = '(pointer: fine)';
const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const element: HTMLDivElement = glow;

    const finePointer = window.matchMedia(finePointerQuery);
    const reducedMotion = window.matchMedia(reducedMotionQuery);
    let enabled = false;
    let frame: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let trailX = 0;
    let trailY = 0;

    function stopAnimation() {
      if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    }

    function resetGlow() {
      stopAnimation();
      element.dataset.active = 'false';
      element.style.removeProperty('--pointer-x');
      element.style.removeProperty('--pointer-y');
      element.style.removeProperty('--pointer-trail-x');
      element.style.removeProperty('--pointer-trail-y');
    }

    function animate() {
      frame = null;
      if (!enabled) return;

      trailX += (targetX - trailX) * 0.12;
      trailY += (targetY - trailY) * 0.12;
      element.style.setProperty('--pointer-x', `${targetX}px`);
      element.style.setProperty('--pointer-y', `${targetY}px`);
      element.style.setProperty('--pointer-trail-x', `${trailX}px`);
      element.style.setProperty('--pointer-trail-y', `${trailY}px`);

      if (Math.abs(targetX - trailX) > 0.1 || Math.abs(targetY - trailY) > 0.1) {
        frame = requestAnimationFrame(animate);
      }
    }

    function scheduleAnimation() {
      if (frame === null) frame = requestAnimationFrame(animate);
    }

    function handlePointerMove(event: PointerEvent) {
      if (!enabled) return;

      targetX = event.clientX;
      targetY = event.clientY;
      if (element.dataset.active !== 'true') {
        trailX = targetX;
        trailY = targetY;
      }
      element.dataset.active = 'true';
      scheduleAnimation();
    }

    function handlePointerLeave() {
      element.dataset.active = 'false';
      stopAnimation();
    }

    function syncPreferences() {
      enabled = finePointer.matches && !reducedMotion.matches;
      element.dataset.enabled = String(enabled);
      if (!enabled) resetGlow();
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    finePointer.addEventListener('change', syncPreferences);
    reducedMotion.addEventListener('change', syncPreferences);
    syncPreferences();

    return () => {
      stopAnimation();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      finePointer.removeEventListener('change', syncPreferences);
      reducedMotion.removeEventListener('change', syncPreferences);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="mouse-glow"
      aria-hidden="true"
      data-pointer-glow
      data-enabled="false"
      data-active="false"
    >
      <span className="mouse-glow__trail" />
      <span className="mouse-glow__halo" />
    </div>
  );
}
