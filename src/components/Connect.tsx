"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { useAnimate } from "framer-motion";

import { Button, buttonVariants } from "./ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "./ui/highlighter";

// Mock for DIcons since we don't have access to that exact package
const DIcons = {
  Designali: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 12l4 4 4-4M12 8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Mail: (props: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  WhatsApp: (props: React.ComponentProps<"svg">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.463 3.488C18.217 1.24 15.231 0.001 12.05 0C5.495 0 0.16 5.334 0.157 11.892C0.156 13.988 0.716 16.013 1.791 17.784L0.057 24L6.427 22.305C8.126 23.29 10.033 23.806 11.971 23.807H11.976C18.53 23.807 23.866 18.472 23.869 11.913C23.871 8.745 22.709 5.737 20.463 3.488ZM12.05 21.787H12.046C10.287 21.786 8.56 21.294 7.064 20.36L6.696 20.141L2.902 21.134L3.917 17.442L3.675 17.059C2.648 15.511 2.108 13.727 2.109 11.892C2.112 6.446 6.606 1.951 12.055 1.951C14.712 1.952 17.206 2.992 19.072 4.86C20.938 6.728 21.976 9.225 21.975 11.911C21.972 17.358 17.477 21.787 12.05 21.787ZM17.5 14.407C17.20 14.258 15.723 13.534 15.446 13.434C15.168 13.335 14.968 13.285 14.768 13.585C14.567 13.884 14.002 14.559 13.826 14.758C13.65 14.959 13.476 14.984 13.175 14.834C12.874 14.685 11.888 14.352 10.714 13.303C9.79 12.476 9.156 11.453 8.982 11.154C8.806 10.854 8.964 10.689 9.114 10.539C9.25 10.404 9.416 10.185 9.567 10.01C9.717 9.835 9.768 9.71 9.867 9.511C9.966 9.31 9.916 9.136 9.842 8.986C9.767 8.837 9.137 7.359 8.887 6.759C8.642 6.177 8.395 6.251 8.208 6.241C8.032 6.232 7.831 6.231 7.631 6.231C7.431 6.231 7.103 6.305 6.826 6.605C6.548 6.905 5.774 7.628 5.774 9.106C5.774 10.585 6.851 12.014 7.002 12.214C7.152 12.414 9.133 15.47 12.177 16.763C12.886 17.064 13.437 17.24 13.868 17.374C14.59 17.599 15.246 17.567 15.764 17.49C16.342 17.404 17.551 16.764 17.801 16.065C18.052 15.364 18.052 14.783 17.977 14.658C17.901 14.533 17.701 14.458 17.4 14.309"
      />
    </svg>
  ),
};

// Simple link component to replace Next.js Link
const Link = ({ href, className, children, target }: { href: string; className?: string; children: React.ReactNode; target?: string }) => (
  <a href={href} className={className} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
    {children}
  </a>
);

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);
  
  return (
    <section id="features" className="relative mx-auto py-20 max-w-5xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#555555"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <img 
                      src="/logo.png" 
                      alt="flowapt logo" 
                      className="absolute left-1/2 top-1/2 h-16 w-auto -translate-x-1/2 -translate-y-1/2"
                    />
                    <div
                      id="next-js"
                      className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Product Inquiries
                    </div>
                    <div
                      id="react-js"
                      className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Abandoned Carts
                    </div>
                    <div
                      id="typescript"
                      className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Customer Support
                    </div>
                    <div
                      id="javascript"
                      className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Order Updates
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-white/50"
                        stroke="white"
                        strokeWidth="0.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-start">
                      <h3 className="mt-6 pb-1 font-bold ">
                        <span className="text-2xl md:text-4xl">
                          Any questions?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-400">
                      We'll get back to you (always same day)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link href={"#"} target="_blank">
                        <Button className="bg-white text-black hover:bg-white/90 border-none" variant="outline">Book a call</Button>
                      </Link>
                      <Link
                        href="mailto:info@flowapt.com"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <DIcons.Mail strokeWidth={1} className="h-5 w-5" />
                        </span>
                      </Link>
                      <Link
                        href="https://wa.me/1234567890"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <DIcons.WhatsApp
                            strokeWidth={1}
                            className="h-4 w-4"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
} 