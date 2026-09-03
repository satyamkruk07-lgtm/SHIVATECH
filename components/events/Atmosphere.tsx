export default function Atmosphere() {
  return (
    <>
      {/* Background Starfield / Distant City Lights (in 3D space, very far away) */}
      <div 
        className="absolute inset-[-100%] w-[300%] h-[300%] bg-cover bg-center opacity-40 mix-blend-screen pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/hero/buildings-back.png')",
          transform: 'translateZ(-50000px) scale(25)',
        }}
      />
    </>
  );
}

export function AtmosphereOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {/* Deep fog layer (Screen space) - reduced opacity so buildings pop */}
      <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-to-t from-[#02040a] via-[#050914]/50 to-transparent opacity-70" />

      {/* Foreground subtle grain/noise */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#02040a_100%)] opacity-80" />
    </div>
  );
}
