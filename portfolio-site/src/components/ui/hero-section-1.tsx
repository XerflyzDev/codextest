"use client";

import * as React from "react";
import { type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Code2,
  Layers3,
  Menu,
  Palette,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { cn } from "@/lib/utils";

const transitionItemVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

const transitionVariants = {
  item: transitionItemVariants,
};

const introVariants: { container: Variants; item: Variants } = {
  container: {
    visible: {
      transition: {
        delayChildren: 1,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2,
      },
    },
  },
};

const skillHighlights = [
  { label: "UI Systems", icon: Palette },
  { label: "Frontend", icon: Code2 },
  { label: "Mobile Ready", icon: Smartphone },
  { label: "Brand Strategy", icon: Briefcase },
  { label: "Motion", icon: Sparkles },
  { label: "Product Thinking", icon: Layers3 },
];

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden bg-background text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 isolate hidden opacity-90 lg:block"
        >
          <div className="absolute left-[-10rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,hsla(288,100%,72%,.16)_0,hsla(288,100%,72%,.04)_45%,transparent_72%)] blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,hsla(270,100%,78%,.16)_0,hsla(270,100%,78%,.05)_48%,transparent_75%)] blur-3xl" />
          <div className="absolute inset-x-0 top-16 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
        </div>

        <section id="about" className="relative">
          <div className="relative pt-24 md:pt-36">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-32 z-0 hidden px-6 lg:block"
            >
              <div className="mx-auto grid max-w-6xl grid-cols-[1.1fr_1fr] items-start">
                <div className="relative">
                  <div className="text-[12rem] font-black leading-[0.78] tracking-[-0.08em] text-black/96">
                    <div>20</div>
                    <div>26</div>
                  </div>
                  <div className="absolute left-[11rem] top-[7.5rem] flex h-28 w-48 -rotate-[42deg] items-center justify-center rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-400 to-purple-200 opacity-90 shadow-[0_25px_50px_rgba(162,89,255,0.35)]">
                    <div className="h-12 w-32 rounded-full border-[18px] border-white/85" />
                  </div>
                </div>
                <div className="pt-10 text-right">
                  <div className="text-[5.6rem] font-semibold leading-[0.9] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_rgba(125,90,190,0.28)]">
                    <div>YOUR</div>
                    <div>YEAR</div>
                    <div>TO</div>
                    <div>RISE</div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatedGroup
              variants={introVariants}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
                alt="Modern creative workspace"
                className="absolute inset-x-0 top-36 hidden h-[42rem] w-full object-cover opacity-8 saturate-0 lg:block"
              />
            </AnimatedGroup>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full bg-[radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="relative z-10 text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#projects"
                    className="group mx-auto flex w-fit items-center gap-4 rounded-full border border-primary/15 bg-white/80 p-1 pl-4 shadow-[0_12px_40px_rgba(155,92,255,0.08)] backdrop-blur-md transition-all duration-300 hover:bg-white"
                  >
                    <span className="text-sm text-foreground">
                      Available for freelance and full-time opportunities
                    </span>
                    <span className="block h-4 w-px bg-border" />

                    <div className="size-6 overflow-hidden rounded-full bg-primary/10 transition-colors duration-500 group-hover:bg-primary/15">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <TextEffect
                    as="h1"
                    per="word"
                    preset="blur"
                    className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-semibold tracking-tight text-[color:oklch(0.2_0.04_300)] md:text-7xl lg:mt-24 xl:text-[5.15rem]"
                  >
                    White-space portfolio design with a bold purple signature.
                  </TextEffect>

                  <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
                    A clean editorial landing page with soft violet glow,
                    oversized type, and premium composition for personal brands,
                    creative studios, and modern founders.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row"
                >
                  <div className="rounded-[14px] bg-gradient-to-r from-fuchsia-300 via-violet-500 to-purple-300 p-[1px] shadow-[0_14px_40px_rgba(157,78,221,0.24)]">
                    <Button asChild size="lg" className="rounded-xl px-6 text-base">
                      <Link href="#contact">
                        <span className="text-nowrap">Book a project call</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-11 rounded-xl px-6 text-primary"
                  >
                    <Link href="#about">
                      <span className="text-nowrap">See how I work</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div
                id="projects"
                className="relative mt-10 overflow-hidden px-2 sm:mt-14 md:mt-20"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-background"
                />
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/10 bg-white/75 p-4 shadow-[0_30px_80px_rgba(158,91,255,0.14)] ring-1 ring-primary/10 backdrop-blur-xl">
                  <img
                    className="relative aspect-[15/8] w-full rounded-[1.4rem] object-cover"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80"
                    alt="Portfolio project preview"
                    width="1800"
                    height="960"
                  />
                  <div className="absolute inset-x-10 bottom-10 hidden rounded-2xl border border-primary/10 bg-white/68 p-6 text-left text-foreground shadow-xl backdrop-blur-md md:block">
                    <p className="text-sm uppercase tracking-[0.24em] text-primary/70">
                      Featured project
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      A cinematic portfolio for a multidisciplinary designer
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                      Strategy, UI design, motion direction, and Next.js
                      development combined into a launch-ready marketing site.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        <section id="services" className="bg-background pb-20 pt-16 md:pb-32">
          <div className="group relative mx-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="#contact"
                className="block text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-75"
              >
                <span>Start your next launch</span>
                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>

            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 transition-all duration-500 group-hover:opacity-50 md:grid-cols-3">
              {skillHighlights.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-primary/10 bg-white/80 px-5 py-4 text-sm text-muted-foreground shadow-[0_10px_30px_rgba(158,91,255,0.08)] backdrop-blur"
                >
                  <Icon className="size-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden pb-24">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(90deg,rgba(98,52,180,0.96)_0%,rgba(159,92,255,0.86)_44%,rgba(236,167,255,0.72)_100%)]"
          />
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative z-10 rounded-[2rem] border border-primary/10 bg-white/82 px-8 py-10 text-center shadow-[0_18px_60px_rgba(158,91,255,0.1)] backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Let&apos;s build a portfolio that opens doors.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
                Share your goals, timeline, and references. I can help shape the
                visual direction and turn it into a polished launch-ready site.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl px-6">
                  <Link href="mailto:hello@patportfolio.dev">hello@patportfolio.dev</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl px-6">
                  <Link href="https://www.linkedin.com" target="_blank">
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative z-10 mt-14 flex flex-col items-center justify-between gap-5 px-2 pb-6 text-sm text-white/92 md:flex-row">
              <p>www.patportfolio.dev</p>
              <p>@patportfolio</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav data-state={menuState && "active"} className="group fixed z-20 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "max-w-5xl rounded-2xl border border-primary/10 bg-white/72 shadow-[0_12px_40px_rgba(158,91,255,0.08)] backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-muted-foreground duration-150 hover:text-foreground"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-[0_18px_50px_rgba(158,91,255,0.12)] group-data-[state=active]:block md:flex-nowrap lg:mb-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-muted-foreground duration-150 hover:text-foreground"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <Link href="#projects">
                    <span>View work</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className={cn(isScrolled && "lg:hidden")}>
                  <Link href="#contact">
                    <span>Hire me</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                >
                  <Link href="#contact">
                    <span>Start a project</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border border-primary/10 bg-white/70 px-3 py-2 shadow-[0_10px_30px_rgba(158,91,255,0.08)] backdrop-blur",
        className
      )}
    >
      <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-700 via-fuchsia-500 to-purple-300 text-sm font-semibold text-white">
        P
      </div>
      <div className="leading-none">
        <p className="text-sm font-semibold tracking-wide">Pat Portfolio</p>
        <p className="text-[11px] text-muted-foreground">Designer and Developer</p>
      </div>
    </div>
  );
};
