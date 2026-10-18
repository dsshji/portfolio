import './Hero.css';
import { ROLE, LOCATIONS } from '@/data/about';

/* ═══════════════════════════════════════════════════════════════
   HERO — PLACEHOLDER  (brief §5.6)

   ⚠️  This is a deliberate stand-in. The owner is building the real
   3D cutaway-tiger head themselves and will drop it in here.

   What is intentionally NOT implemented yet (deferred by the owner):
     · the R3F <Canvas> + placeholder/GLTF meshes
     · cursor tracking with the CURIOSITY lerp        (heroConfig.CURIOSITY)
     · the idle state machine + blink                 (heroConfig.IDLE/BLINK)
     · the world-space clipping-plane cut             (brief §5.3)
     · projected DOM callouts over interior parts     (brief §5.5)

   What is ALREADY in place so the swap is turnkey:
     · the .stage / .stage-caption / .hint / .markers shell (Hero.css)
     · the interior component registry as data   (hero/heroComponents.ts)
     · every tuning constant                      (hero/heroConfig.ts)

   TODO (owner): replace this component's <div class="stage-placeholder">
   with an R3F <Canvas>. Load the model via drei's useGLTF(MODEL_PATH),
   lazy + Suspense; keep the placeholder as the fallback. Map each
   HERO_COMPONENTS entry's `modelNode` to a node in tiger.glb. Guard for
   WebGL failure — if it can't run, this placeholder (or nothing) shows
   and the page still works (brief §9: hero is progressive enhancement).
   ═══════════════════════════════════════════════════════════════ */

export default function HeroPlaceholder() {
  return (
    // aria-hidden: the hero is decorative. Its content (role/locations) is
    // ALSO available as real text below and on /about, so screen-reader
    // users lose nothing (brief §9). It must never trap focus.
    <div className="stage" id="stage">
      <div className="markers" id="markers" aria-hidden="true">
        {/* Populated at runtime by the real hero: one marker + callout per
            HERO_COMPONENTS entry, positioned by 3D→screen projection. */}
      </div>

      <div className="stage-placeholder" aria-hidden="true">
        <div>
          <div className="ph-title">3D tiger head — placeholder</div>
          <p className="ph-note">
            Cutaway hero goes here. Cursor-tracking, the clipping-plane cut, and
            projected interior callouts land when the model is wired in.
          </p>
        </div>
      </div>

      {/* Caption is REAL text (not aria-hidden) — it carries the role line. */}
      <div className="stage-caption">
        <span className="role">{ROLE}</span>
        <span className="mono">{LOCATIONS}</span>
      </div>

      <span className="hint mono" aria-hidden="true">
        move right to look inside →
      </span>
    </div>
  );
}
