"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Hand, PieChart, Star } from "lucide-react";

export default function ProductsDropdown({ onItemClick }) {
  const starRatings = [1, 2, 3, 4, 5];

  return (
    <div className="group w-full max-w-5xl pt-2 overflow-hidden font-poppins rounded-2xl border border-[#e8ddd4] bg-gradient-to-br from-[#ffffff] via-[#fffaf6] to-[#fff4ed] shadow-[0_30px_70px_-40px_rgba(20,24,34,0.45)] transition-shadow duration-300 hover:shadow-[0_36px_80px_-44px_rgba(20,24,34,0.5)]">
      <div className="grid items-stretch md:grid-cols-[52%_48%]">
        <div className="relative overflow-hidden p-6 lg:p-8">
          <div className="pointer-events-none absolute -left-12 top-20 h-28 w-28 rounded-full bg-[#ffe0d3] opacity-55 blur-2xl"></div>
          <div className="pointer-events-none absolute -right-10 bottom-8 h-32 w-32 rounded-full bg-[#e6deff] opacity-60 blur-2xl"></div>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d9cbf4] bg-[#f6f1ff] px-3 py-1 text-[#332771]">
              <CheckCircle2 size={16} className="text-[#FF5225]" />
              Free Download
            </span>
            <span className="inline-flex items-center gap-1 text-[#FF5225]">
              {starRatings.map((item) => {
                if (item === 5) {
                  return (
                    <span key={item} className="relative inline-flex">
                      <Star
                        size={16}
                        fill="#d9d9d9"
                        color="#d9d9d9"
                        className="block"
                      />
                      <Star
                        size={16}
                        fill="currentColor"
                        color="currentColor"
                        className="absolute left-0 top-0 block"
                        style={{ clipPath: "inset(0 50% 0 0)" }}
                      />
                    </span>
                  );
                }

                return <Star key={item} size={16} fill="currentColor" />;
              })}
              <span className="text-[#5e547e]">(4.4/5) 77K+ reviews</span>
            </span>
          </div>

          <div className="relative mb-4">
            <div className="mb-2 flex items-center gap-1">
              <div className="relative h-14 w-12 shrink-0">
                <Image
                  src="/images/yourhour/yourhour-logo.svg"
                  alt="YourHour icon"
                  loading="lazy"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-4xl text-[#21ABE1] font-bold lg:text-5xl">
                YourHour
              </h4>
            </div>

            <p className="mt-4 text-xl font-bold text-[#332771] sm:text-2xl">
              Cure Phone Addiction & Beat Procrastination.
            </p>
          </div>

          <p className="max-w-xl text-base font-medium leading-relaxed text-[#4f4f5f]">
            Join millions of users regaining control of their time. Track usage,
            set challenge timers, and get personalized reports to boost
            productivity.
          </p>

          <div className="mt-7 space-y-1.5 text-base text-[#3f4c63] font-medium">
            <div className="group/feature flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all hover:bg-[#f8f4ff]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#efe3da] bg-white text-[#332771]">
                <PieChart size={17} />
              </span>
              <span className="transition-transform group-hover/feature:translate-x-0.5">
                Smart Usage Tracking Dashboard
              </span>
            </div>
            <div className="group/feature flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all hover:bg-[#f8f4ff]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#efe3da] bg-white text-[#FF5225]">
                <Hand size={17} />
              </span>
              <span className="transition-transform group-hover/feature:translate-x-0.5">
                "Mindful Pause" Interventions
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.mindefy.phoneaddiction.mobilepe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
              className="group/cta inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-black px-3 py-3 text-sm font-semibold text-black opacity-85 transition-all hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:opacity-95"
            >
              Get free for
              <Image
                src="/images/android-icon.svg"
                alt="Android"
                loading="lazy"
                width={20}
                height={20}
                className="shrink-0 brightness-0 transition-[filter] group-hover/cta:invert"
              />
            </a>

            <a
              href="https://apps.apple.com/in/app/yourhour-screen-time-control/id6784166547"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
              className="group/cta inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-black px-3 py-3 text-sm font-semibold text-black opacity-85 transition-all hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:opacity-95"
            >
              Get free for
              <Image
                src="/images/ios-icon.svg"
                alt="iOS"
                loading="lazy"
                width={20}
                height={20}
                className="transition-[filter] group-hover/cta:invert"
              />
            </a>

            <Link
              href="/yourhour-screentime-app"
              onClick={onItemClick}
              className="group/cta inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-black bg-black px-3 py-3 text-sm font-semibold text-white opacity-85 transition-all hover:-translate-y-1 hover:opacity-95"
            >
              View Features
              <ArrowRight
                size={16}
                className="transition-transform group-hover/cta:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-[#eadfd7] bg-[#ffff] md:border-t-0 md:border-l">
          <div className="relative mx-auto min-h-70 w-full max-w-115 md:h-full">
            <Image
              src="/images/yourhour/yourhour-mockup.webp"
              alt="YourHour app mockup"
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02] lg:p-8"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
