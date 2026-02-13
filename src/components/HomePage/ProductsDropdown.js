"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Hand, PieChart, Star } from "lucide-react";

export default function ProductsDropdown({ onItemClick }) {
  return (
    <div className="group w-full max-w-[940px] overflow-hidden font-poppins rounded-[18px] border border-[#e8ddd4] bg-gradient-to-br from-[#ffffff] via-[#fffaf6] to-[#fff4ed] shadow-[0_30px_70px_-40px_rgba(20,24,34,0.45)] transition-shadow duration-300 hover:shadow-[0_36px_80px_-44px_rgba(20,24,34,0.5)]">
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
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} size={16} fill="currentColor" />
              ))}
              <span className="text-[#5e547e]">(4.3/5)</span>
            </span>
          </div>

          <div className="relative mb-4">
            <div className="mb-2 flex items-center gap-1">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/images/yourhour/yourhour-logo.svg"
                  alt="YourHour icon"
                  loading="lazy"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-4xl font-bold leading-tight lg:text-5xl">
                <span className="text-[#332771]">Your</span>
                <span className="text-[#21ABE1]">Hour</span>
              </h4>
            </div>

            <p className="mt-2 text-xl font-semibold leading-tight text-[#332771] sm:text-2xl">
              Cure Phone Addiction &<br />
              Beat Procrastination.
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-[#4f4f5f]">
            Join millions of users regaining control of their time. Track usage,
            set challenge timers, and get personalized reports to boost
            productivity.
          </p>

          <div className="mt-7 space-y-3 text-base text-[#3f4c63]">
            <div className="group/feature flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all hover:bg-[#fff7f2]">
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

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.mindefy.phoneaddiction.mobilepe&hl=en_IN&gl=US"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
              className="group/cta inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#332771] via-[#4a3aff] to-[#FF5225] px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_24px_-16px_rgba(74,58,255,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              Get Started Free
            </a>

            <Link
              href="/yourhour-screentime-app"
              onClick={onItemClick}
              className="group/cta inline-flex items-center gap-2 rounded-2xl border border-[#e3d6cd] bg-white px-7 py-3.5 text-base font-bold text-[#332771] transition-all hover:-translate-y-0.5 hover:border-[#FF5225] hover:text-[#FF5225] hover:shadow-[0_10px_22px_-16px_rgba(255,82,37,0.7)]"
            >
              View Features
              <ArrowRight
                size={16}
                className="transition-transform group-hover/cta:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-[#eadfd7] bg-gradient-to-br from-[#fff8f4] via-[#fff4ef] to-[#faf4ff] md:border-t-0 md:border-l">
          <div className="pointer-events-none absolute -top-10 right-8 h-28 w-28 rounded-full bg-[#e1d8ff] opacity-50 blur-2xl"></div>
          <div className="pointer-events-none absolute bottom-6 left-8 h-24 w-24 rounded-full bg-[#ffd8ca] opacity-55 blur-2xl"></div>

          <div className="relative mx-auto min-h-[280px] w-full max-w-[460px] md:h-full">
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
