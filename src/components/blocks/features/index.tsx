import React from "react";
import { FeaturesSectionWithHoverEffects } from "./feature-section-with-hover-effects";

function FeaturesSectionWithHoverEffectsDemo() {
  return (
    <div id="features" className="w-full py-20">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">
            <span className="bg-gradient-to-r from-[#94609a] to-[#ee3a5b] text-transparent bg-clip-text">
              Agentic AI, built for eCom
            </span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">Effortless automation meets human-like intelligence</p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}

export { FeaturesSectionWithHoverEffectsDemo }; 