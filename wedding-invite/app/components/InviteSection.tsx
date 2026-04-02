"use client";

const inviteKeyframes = `
@keyframes fadeInUp {
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes shimmer {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1; }
}
`;

export default function InviteSection() {
  return (
    <section
      id="invite"
      style={{
        background: "linear-gradient(180deg, #0f7b6e 0%, #0a6b5f 50%, #0d7a6d 100%)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px 80px",
      }}
    >
      <style>{inviteKeyframes}</style>

      {/* Subtle golden radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,215,100,0.05) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* ── Scroll Container ── */}
      <div style={{ position: "relative", width: "min(520px, 90vw)" }}>

        {/* Scroll PNG — background removed, only scroll silhouette on teal */}
        <img
          src="/scroll_invite.png"
          alt="Traditional South Indian wedding scroll"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 12px 48px rgba(0,0,0,0.55))",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* ── Invite Text centred inside scroll's inner area ── */}
        <div
          style={{
            position: "absolute",
            top: "12%",
            bottom: "12%",
            left: "20%",
            right: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 2,
            animation: "fadeInUp 1.2s ease both",
          }}
        >
          <p style={{ fontFamily: "'Noto Serif Devanagari','Noto Serif',serif", fontSize: "clamp(0.65rem,1.8vw,0.95rem)", color: "#6b3800", letterSpacing: "0.05em", margin: "0 0 4px", animation: "shimmer 3s ease-in-out infinite" }}>
            ॐ श्री गणेशाय नम
          </p>

          <div style={{ width: "36px", height: "1px", background: "linear-gradient(90deg,transparent,#b8860b,transparent)", margin: "3px auto" }} />

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.42rem,1.3vw,0.65rem)", color: "#5a3800", fontStyle: "italic", margin: "0 0 1px" }}>
            With the heavenly blessings of
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.44rem,1.4vw,0.68rem)", color: "#7a4a00", fontWeight: 600, margin: "0 0 1px" }}>
            Smt. Parvathi Ammal &amp; Shri Krishnan Iyer
          </p>

          <p style={{ color: "#b8860b", fontSize: "clamp(0.5rem,1.5vw,0.75rem)", margin: "1px 0", letterSpacing: "0.35em" }}>——</p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.44rem,1.4vw,0.68rem)", color: "#7a4a00", fontWeight: 600, margin: "0 0 6px" }}>
            Smt. Kamakshi Ammal &amp; Shri Srinivasan Iyer
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.85rem,2.5vw,1.3rem)", fontWeight: 700, color: "#8b5c00", letterSpacing: "0.25em", margin: "0 0 2px", textTransform: "uppercase" }}>
            INVITE
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.42rem,1.3vw,0.65rem)", color: "#5a3800", fontStyle: "italic", margin: "0 0 4px" }}>
            You to join us in the wedding celebrations of
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1rem,3vw,1.6rem)", fontWeight: 700, color: "#7a3f00", lineHeight: 1.1, margin: "0" }}>
            Vishu
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.9rem,2.5vw,1.4rem)", color: "#b8860b", fontStyle: "italic", lineHeight: 1.1, margin: "0" }}>
            &amp;
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1rem,3vw,1.6rem)", fontWeight: 700, color: "#7a3f00", lineHeight: 1.1, margin: "0 0 4px" }}>
            Kavya
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.38rem,1.2vw,0.6rem)", color: "#5a3800", fontStyle: "italic", margin: "0" }}>
            Daughter of
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(0.42rem,1.3vw,0.65rem)", color: "#7a4a00", fontWeight: 600, margin: "0" }}>
            Smt. Parvathi &amp; Shri K. Ramaswamy
          </p>
        </div>
      </div>
    </section>
  );
}
