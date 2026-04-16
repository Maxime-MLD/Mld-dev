import { useState } from "react";

export const GradientBlurBg = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen w-full bg-main-bg relative overflow-hidden">
      {/* LA GRILLE (Seule, sans lueur de couleur) */}
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e0ff 1px, transparent 1px),
            linear-gradient(to bottom, #e2e0ff 1px, transparent 1px)
          `,
          backgroundSize: "96px 64px",

          /* On garde l'estompage : net au centre, s'efface sur les bords */
          maskImage:
            "radial-gradient(circle 1000px at center, transparent 20%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 1000px at center, transparent 20%, black 100%)",
        }}
      />

      {/* Ton Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default GradientBlurBg;
