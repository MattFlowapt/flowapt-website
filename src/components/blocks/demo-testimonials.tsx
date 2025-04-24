"use client";

import { AnimatedTestimonials } from "./animated-testimonials"

export function AnimatedTestimonialsBasic() {
  return (
    <AnimatedTestimonials
      title="Loved by customers"
      subtitle="See what real customers have to say about their WhatsApp Commerce experience."
      badgeText="Real customer feedback"
      testimonials={[
        {
          id: 1,
          name: "Maria",
          role: "Customer",
          company: "African Oils & Vinegar",
          content:
            "The WhatsApp shopping experience was incredible! I could ask questions about oils and get personalized recommendations instantly.",
          rating: 5,
          avatar: "/africanoilslogo.png",
        },
        {
          id: 2,
          name: "Sofia",
          role: "Customer",
          company: "Italian Deli Online",
          content:
            "This is the coolest chat bot everrrrr, can you teach me \"I am that girl\" in italian 🤔",
          rating: 5,
          avatar: "/ido.png",
        },
        {
          id: 3,
          name: "Emma",
          role: "Customer",
          company: "Caught Online",
          content:
            "24/7 support through WhatsApp is a game-changer. Quick answers even at 10pm - this is exactly what retail needs!",
          rating: 5,
          avatar: "/caughtonlinelogo.png",
        },
      ]}
    />
  );
} 