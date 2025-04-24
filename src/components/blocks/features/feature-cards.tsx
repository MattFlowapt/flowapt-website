import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

// Local implementation of the cn utility function
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Conversational AI",
      description:
        "Natural, human-like interactions that understand customer intent and provide personalized responses.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless Integration",
      description:
        "Connect your WhatsApp Business account with your existing store in minutes, no technical expertise required.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Performance-based Pricing",
      description:
        "Pay only for successful conversions, with transparent pricing and no hidden fees.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "24/7 Availability",
      description: "Never miss a customer inquiry, even outside business hours, with automated responses.",
      icon: <IconCloud />,
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Automatically re-engage shoppers and recover 30%+ of abandoned carts through WhatsApp messages.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Real-time Insights",
      description:
        "Track customer interactions, analyze trends, and improve your conversational strategy.",
      icon: <IconHelp />,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 max-w-5xl mx-auto">
        {features.slice(0, 6).map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-4 md:py-6 relative group/feature",
        index < 3 && "border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-3 relative z-10 px-6 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-gradient-to-b from-[#94609a] to-[#ee3a5b] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6">
        {description}
      </p>
    </div>
  );
}; 