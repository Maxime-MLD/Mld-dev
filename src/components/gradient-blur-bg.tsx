import React from "react";

export const GradientBlurBg = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen w-full bg-main-bg relative overflow-hidden">
      {/* LA GRILLE AVEC FONDU VERS LE BAS */}
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e0ff 1px, transparent 1px),
            linear-gradient(to bottom, #e2e0ff 1px, transparent 1px)
          `,
          backgroundSize: "96px 64px",

          /* LE MASQUE : Noir en haut (visible), Transparent en bas (masqué) */
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
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
