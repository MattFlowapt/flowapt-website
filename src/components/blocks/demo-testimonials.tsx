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
            "The WhatsApp shopping experience was incredible. I could ask questions about different oils and get personalized recommendations instantly. It felt like having a personal shopper in my pocket!",
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
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          id: 3,
          name: "Emma",
          role: "Customer",
          company: "Caught Online",
          content:
            "The 24/7 support through WhatsApp is a game-changer. I had questions about my order at 10pm and got an immediate, helpful response. This conversational shopping experience is exactly what retail needs.",
          rating: 5,
          avatar: "/caughtonlinelogo.png",
        },
      ]}
    />
  );
} 