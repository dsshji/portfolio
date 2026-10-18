/* ═══════════════════════════════════════════════════════════════
   HERO TUNING CONSTANTS — the "personality dials" (brief §5).

   The real R3F head is deferred (the owner is building it), but these
   constants are captured now so the behavior is documented and the
   swap-in is turnkey. When you wire the R3F hero, import from here —
   do NOT hardcode these inline in multiple places (brief §5.1).
   ═══════════════════════════════════════════════════════════════ */

/** The chase/lag factor for the head's lookAt target:
      target.lerp(wanted, CURIOSITY)
    0.06 = "curious". Lower = more languid, higher = twitchier.
    This is THE personality dial (brief §5.1). */
export const CURIOSITY = 0.06;

/** Idle state machine thresholds, in seconds since last mouse move (§5.2). */
export const IDLE = {
  boredAfter: 12, // target drifts off-center, head/ears tilt down
  asleepAfter: 40, // head lowers further, eye glow dims, float slows
  wakeBoost: 0.16, // faster lerp for ~0.5s on wake, then settle back to CURIOSITY
  wakeBoostDuration: 0.5,
};

/** Blink: at a random interval in [min,max]s, scale eyes' Y→0 and back
    over `durationMs` (§5.2). */
export const BLINK = {
  minInterval: 3,
  maxInterval: 7,
  durationMs: 120,
};

/** Idle float — two out-of-phase sine waves so the head is never dead (§5.1). */
export const IDLE_FLOAT = {
  amplitude: 0.05,
  speed: 0.9,
};

/** Cursor → 3D plane scaling (screen -1..1 mapped onto a plane in front). */
export const TRACK_SCALE = { x: 3.4, y: 2.2, planeZ: 4 };

/** Render/perf guards (brief §8). */
export const PERF = {
  maxPixelRatio: 2, // cap devicePixelRatio
  pauseWhenOffscreen: true, // IntersectionObserver pauses the loop
};

/** Path the owner drops the model at; loaded lazily via drei useGLTF. */
export const MODEL_PATH = '/models/tiger.glb';
