"use client";
import Image from "next/image";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";

export default function SpectorCaseStudy() {
  return (
    <div className="m-auto bg-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-16 lg:gap-24 pt-16">
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <div className="flex flex-col gap-1 items-center justify-center max-w-4xl lg:max-w-6xl mx-auto mt-8 px-4">
            <p className="text-[#333333] text-4xl font-normal">Case Study</p>
            <div className="m-auto relative aspect-[3/1] w-[20rem] overflow-hidden">
              <Image
                src="/images/sp-logo.png"
                alt="Spector Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.6)_0%,_rgba(255,87,34,0.60)_52.4%,_rgba(254,254,254,0.6)_100%)]">
            <div className="relative aspect-[2/1] w-full overflow-hidden">
              <Image
                src="/images/sp-1.webp"
                alt="spector Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-20 justify-center">
          <div className="flex flex-col items-center justify-center gap-3 w-[43.5rem] mx-auto">
            <p className="text-[#FF5225] text-sm lg:text-base font-bold tracking-wider uppercase">
              Introduction
            </p>
            <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
              About this project
            </span>
            <span className="text-sm lg:text-base font-normal text-[#000000] text-center">
              Spector.ai is a leader in 360o Asset Health Platform and solutions
              based on AI and AI Agents. Our platform and solutions help you
              capture more value while maximizing your asset performance and
              integrity and achieving sustainability goals.
            </span>
          </div>

          <div className="flex items-center justify-between gap-20">
            <div className="w-[71.5rem] flex flex-col items-start justify-center gap-5">
              <p className="text-[#FF5722] text-2xl font-medium uppercase">
                Overview
              </p>
              <span className="text-base font-normal text-[#333333]">
                Spector.ai is a pioneering company at the forefront of AI-driven
                asset management solutions. Their mission is to revolutionize
                the way organizations approach asset health, performance, and
                integrity. By harnessing the power of cutting-edge artificial
                intelligence and machine learning technologies, they offer a
                comprehensive 360° Asset Health Platform that empowers
                businesses to maximize the value of their assets while achieving
                sustainability goals.
              </span>
              <span className="text-base font-normal text-[#333333]">
                With a deep understanding of the complexities involved in asset
                management, Spector.ai has developed advanced AI agents capable
                of analyzing vast amounts of data from multiple sources. These
                intelligent agents provide actionable insights, enabling
                proactive maintenance strategies, optimized resource allocation,
                and informed decision-making throughout the asset lifecycle. Our
                solutions are designed to streamline operations, reduce
                downtime, and minimize operational risks, ultimately leading to
                increased profitability and a competitive edge in the market.
              </span>
            </div>

            <div className="relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/sp-2.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-20">
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-[#FF5722] text-2xl font-medium uppercase">
                Features
              </p>
              <span className="text-4xl font-normal text-[#333333] text-center">
                Actionable Insights by AI and Generative AI Asset <br />
                Health Platform
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-15">
              <div className="flex items-center justify-center gap-20">
                <div className="w-[30rem] flex flex-col items-center justify-center gap-5">
                  <div className="flex items-center justify-center bg-[#DDEFFD] aspect-[1/1] w-[7rem] border-8 border-[#F0F8FE] rounded-[1.75rem]">
                    <div className="relative aspect-[2/1] w-full overflow-hidden">
                      <Image
                        src="/images/sp-icon-1.svg"
                        alt="image"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-xl font-semibold text-[#101828] text-center">
                      Data <br /> Contextualization
                    </h3>
                    <p className="text-base font-normal text-[#475467] text-center">
                      Pre-built connectors that integrate data from diverse
                      sources, creating a comprehensive Asset Health Knowledge
                      Graph.
                    </p>
                  </div>
                </div>
                <div className="w-[30rem] flex flex-col items-center justify-center gap-5">
                  <div className="flex items-center justify-center bg-[#DDEFFD] aspect-[1/1] w-[7rem] border-8 border-[#F0F8FE] rounded-[1.75rem]">
                    <div className="relative aspect-[2/1] w-full overflow-hidden">
                      <Image
                        src="/images/sp-icon-2.svg"
                        alt="image"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-xl font-semibold text-[#101828] text-center">
                      Foundation Model <br /> for Industrial Assets
                    </h3>
                    <p className="text-base font-normal text-[#475467] text-center">
                      Foundation Model that is is trained on public, manufacture
                      and industry data that allows clients to create highly
                      accurate models with minimal effort and time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-20">
                <div className="w-[30rem] flex flex-col items-center justify-center gap-5">
                  <div className="flex items-center justify-center bg-[#DDEFFD] aspect-[1/1] w-[7rem] border-8 border-[#F0F8FE] rounded-[1.75rem]">
                    <div className="relative aspect-[2/1] w-full overflow-hidden">
                      <Image
                        src="/images/sp-icon-4.svg"
                        alt="image"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-xl font-semibold text-[#101828] text-center">
                      AI Agents specialized
                      <br /> in Asset Health
                    </h3>
                    <p className="text-base font-normal text-[#475467] text-center">
                      Multi-modal AI Agents that are integrated with live asset
                      health data systems to provide just-in-time assistance on
                      asset health issues.
                    </p>
                  </div>
                </div>
                <div className="w-[30rem] flex flex-col items-center justify-center gap-5">
                  <div className="flex items-center justify-center bg-[#DDEFFD] aspect-[1/1] w-[7rem] border-8 border-[#F0F8FE] rounded-[1.75rem]">
                    <div className="relative aspect-[2/1] w-full overflow-hidden">
                      <Image
                        src="/images/sp-icon-3.svg"
                        alt="image"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-xl font-semibold text-[#101828] text-center">
                      Integrates with your <br /> CMMS/EAM Platforms
                    </h3>
                    <p className="text-base font-normal text-[#475467] text-center">
                      Open APIs that allow Spector.ai services to be invoked and
                      managed from within your existing CMMS workflows (such as
                      SAP, IBM Maximo, esri)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-20">
          <div className="relative aspect-[2/1] w-full overflow-hidden">
            <div className="mt-[6rem] ml-[10rem] w-fit flex flex-col items-start justify-center gap-5">
              <p className="text-[#FF5722] text-2xl font-medium uppercase tracking-wide">
                PREPARATION
              </p>
              <h2 className="text-4xl font-normal text-[#000000] uppercase">
                DESIGN PROCESS
              </h2>
            </div>
            <Image
              src="/images/sp-3.webp"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 m-auto flex flex-col items-center justify-center gap-18">
          <div className="w-full flex flex-col items-center justify-center gap-7">
            <p className="text-[#FF5722] text-4xl font-medium uppercase">
              ICONS
            </p>

            <div className="relative aspect-[3/1] w-full overflow-hidden">
              <Image
                src="/images/sp-4.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-7">
            <p className="text-[#FF5722] text-4xl font-medium uppercase">
              PRODUCT ILLUSTRATIONS
            </p>

            <div className="w-full flex items-center justify-center gap-[11.5rem]">
              <div className="relative aspect-[1/1] w-[12.5rem] overflow-hidden">
                <Image
                  src="/images/PI-1.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[12.5rem] overflow-hidden">
                <Image
                  src="/images/PI-2.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[12.5rem] overflow-hidden">
                <Image
                  src="/images/PI-3.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-7">
            <p className="text-[#FF5722] text-4xl font-medium uppercase">
              PROCESS ILLUSTRATIONS
            </p>

            <div className="w-full flex items-center justify-center gap-[2.4rem]">
              <div className="relative aspect-[1/1] w-[14.7rem] overflow-hidden">
                <Image
                  src="/images/PI-4.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[14.7rem] overflow-hidden">
                <Image
                  src="/images/PI-5.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[14.7rem] overflow-hidden">
                <Image
                  src="/images/PI-6.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[14.7rem] overflow-hidden">
                <Image
                  src="/images/PI-7.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-7">
            <p className="text-[#FF5722] text-4xl font-medium uppercase">
              APPLICATION INTERFACE
            </p>

            <div className="w-full flex items-center justify-center gap-[5rem]">
              <div className="relative aspect-[1/1] w-[15rem] overflow-hidden">
                <Image
                  src="/images/AI-1.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[15rem] overflow-hidden">
                <Image
                  src="/images/AI-2.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[15rem] overflow-hidden">
                <Image
                  src="/images/AI-3.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-7">
            <p className="text-[#FF5722] text-4xl font-medium uppercase">
              DATA VISUALIZATION
            </p>

            <div className="w-full flex items-center justify-center gap-[4.3rem]">
              <div className="relative aspect-[1/1] w-[17rem] overflow-hidden">
                <Image
                  src="/images/DV-1.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[17rem] overflow-hidden">
                <Image
                  src="/images/DV-2.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[1/1] w-[17rem] overflow-hidden">
                <Image
                  src="/images/DV-3.png"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-[5rem] pb-[5rem] flex flex-col items-center justify-center gap-12 bg-[#EDF0FE]">
          <p className="text-[#FF5722] text-4xl font-medium uppercase">
            WEBSITE DESIGN
          </p>

          <div className="w-[90rem] flex flex-col items-center justify-center gap-10">
            <div className="w-full flex items-start justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-7">
                <span className="text-[#333333] text-2xl font-normal">
                  Home Page
                </span>
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sp-home.webp"
                    alt="image"
                    width={560}
                    height={2327}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-7">
                <span className="text-[#333333] text-2xl font-normal">
                  Platform
                </span>
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sp-platform.webp"
                    alt="image"
                    width={560}
                    height={1455}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex items-start justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-7">
                <span className="text-[#333333] text-2xl font-normal">
                  Solutions
                </span>
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sp-predictive.webp"
                    alt="image"
                    width={560}
                    height={1380}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-7">
                <span className="text-[#333333] text-2xl font-normal">
                  Solutions
                </span>
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sp-visual.webp"
                    alt="image"
                    width={560}
                    height={1602}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
}
