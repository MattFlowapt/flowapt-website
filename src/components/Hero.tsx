import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["💬 conversational", "🤖 automated", "🧠 intelligent", "👋 personalised", "🔄 seamless", "🧬 agentic"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full pt-20 pb-20">
      <div className="container mx-auto">
        <div className="flex gap-5 py-12 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Why WhatsApp Commerce? <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="bg-gradient-to-r from-[#94609a] to-[#ee3a5b] text-transparent bg-clip-text">WhatsApp Commerce</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-3 pt-2">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Drive conversions and provide 24/7 personalised support without lifting a finger.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full items-center max-w-sm">
            <Button size="lg" className="gap-4 w-full" variant="outline">
              View free demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 w-full bg-white text-black hover:bg-white/90" variant="outline">
              Connect your store <ShoppingBag className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 