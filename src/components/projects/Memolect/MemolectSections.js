"use client";

import Image from "next/image";
import HighFidelityScreen from "./HighFidelityScreen";

const fidelityScreen = [
  {
    key: "notebook",
    reverse: false,
    wrapperClassName: "mb-20 lg:mb-32",
    imageSrc: "/images/flashcard-img-7.webp",
    imageAlt: "image",
    imageWrapperClassName:
      "relative z-10 overflow-hidden w-full sm:max-w-86 aspect-9/16",
    contentWrapperClassName: "flex items-center w-full md:w-[30%] px-4",
    wrapText: false,
    paragraphs: [
      {
        text: "The Notebook screen acts as the main launch point of Memolect, providing quick access to the user's chosen subjects. Up to five preferred subjects are displayed here for effortless navigation and focused learning. Each subject comes with a default learning mode, which can be customized according to the user's preference — ensuring a personalized and consistent study experience from the very first interaction.",
        className:
          "text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins",
      },
    ],
    accentClassName:
      "w-[35%] absolute top-1/3 right-0 h-50 bg-[#004C99] z-0 hidden lg:block",
  },
  {
    key: "explore",
    reverse: true,
    wrapperClassName: "mb-20 lg:mb-32",
    imageSrc: "/images/flashcard-img-3.webp",
    imageAlt: "image",
    imageWrapperClassName:
      "relative z-10 overflow-hidden w-full sm:max-w-86 aspect-9/16",
    contentWrapperClassName:
      "flex items-center w-full md:w-[30%] px-4 order-1 lg:order-2",
    wrapText: true,
    paragraphs: [
      {
        text: "The Explore screen enables users to browse and discover new learning content organized by categories such as subject type, sections, or subscriptions. It offers a structured yet flexible way to navigate through flashcards, making it easy to find relevant material.",
        className:
          "text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins mb-6",
      },
      {
        text: "A clean search bar and filter options simplify exploration, while the categorized layout promotes quick decision-making. The bright yellow accents guide user attention to interactive actions, maintaining consistency across the app's visual language.",
        className:
          "text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins",
      },
    ],
    accentClassName:
      "w-[35%] absolute top-1/3 left-0 h-50 bg-[#004C99] z-0 hidden lg:block",
  },
  {
    key: "subject-overview",
    reverse: false,
    wrapperClassName: "mb-20 lg:mb-32",
    imageSrc: "/images/flashcard-img-8.webp",
    imageAlt: "image",
    imageWrapperClassName:
      "relative z-10 overflow-hidden w-full sm:max-w-86 aspect-9/16",
    contentWrapperClassName: "flex items-center w-full md:w-[30%] px-4",
    wrapText: true,
    paragraphs: [
      {
        text: "The Subject Overview screen provides an in-depth view of the user's progress within a specific subject. It highlights mastered flashcards through detailed analytics, helping learners track their improvement across different learning modes.",
        className:
          "text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins",
      },
      {
        text: "Users can view available sections, mark favorites, and set a preferred section as the default for streamlined access. The interface maintains clarity through structured information hierarchy — balancing progress insights, personalization options, and quick navigation for an efficient learning experience.",
        className:
          "text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins mt-4",
      },
    ],
    accentClassName:
      "w-[35%] absolute top-1/3 right-0 h-50 bg-[#004C99] z-0 hidden lg:block",
  },
  {
    key: "flashcard-learning",
    reverse: true,
    wrapperClassName: "",
    imageSrc: "/images/flashcard-img-9.webp",
    imageAlt: "image",
    imageWrapperClassName:
      "relative z-10 overflow-hidden w-full sm:max-w-md md:max-w-lg lg:max-w-3xl aspect-square",
    contentWrapperClassName:
      "flex items-center px-4 w-full md:w-[30%] order-1 lg:order-2",
    wrapText: true,
    paragraphs: [
      {
        text: "The Flashcard Learning screen is the core interaction space of Memolect, designed for focused and engaging study sessions. Each flashcard is displayed individually to enhance retention and recall through active interaction.",
        className:
          "text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins mb-6",
      },
      {
        text: "Users can choose between two distinct modes — Surfing, for casual browsing and quick review, and Training, for focused practice and mastery. The clean, minimal layout with subtle transitions ensures an uninterrupted and immersive learning experience.",
        className:
          "text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins",
      },
    ],
    accentClassName: "",
  },
];

export default function MemolectSections() {
  return (
    <>
      {/* Problem Statement & Research Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-45">
            <div className="relative overflow-hidden w-full sm:max-w-86 aspect-9/16">
              <Image
                src="/images/flashcard-img-3.webp"
                alt="image"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[40%] flex flex-col gap-10 md:gap-16 lg:gap-20">
              <div className="w-full flex flex-col gap-6">
                <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins">
                  Problem Statement
                  <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
                </h2>
                <div>
                  <ul className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins list-disc pl-6">
                    <li>
                      Learning apps often fall into two extremes: overly
                      simplistic or too complex. Most flashcard tools don't
                      provide:
                    </li>
                    <li>
                      Flexible control over memory modes (short-term vs
                      long-term)
                    </li>
                    <li>Directional training (forward/backward)</li>
                    <li>Audio contribution and community engagement</li>
                    <li>Personalization at the flashcard level</li>
                    <li>
                      Memolect aims to bridge this gap by offering a smart,
                      modular flashcard ecosystem with rich content interaction
                      and robust configurability.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full flex flex-col gap-6">
                <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins">
                  Research Objective
                  <div className="w-12 h-1 bg-[#004C99] mt-2 rounded-md"></div>
                </h2>
                <ul className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins list-disc pl-6">
                  <li>
                    Understand user needs and challenges in digital flashcard
                    learning
                  </li>
                  <li>
                    Identify behavior patterns, motivations, and frustrations
                  </li>
                  <li>
                    Validate the demand for advanced training controls (timing,
                    directionality)
                  </li>
                  <li>
                    Benchmark against current competitors (Anki, Quizlet,
                    Tinycards)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-20 md:px-6 lg:px-11">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1/3">
              <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins mb-6">
                Brand Story
                <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
              </h2>
              <div className="mb-7 lg:mb-12">
                <h3 className="text-lg md:text-xl font-medium text-[#000000] font-poppins mb-2">
                  Who we are?
                </h3>
                <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed max-w-2xl">
                  Memolect is an educational technology brand focusing on
                  innovative, user-friendly learning tools such as flashcard
                  apps for rapid, efficient learning.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 mb-8">
                <div>
                  <h4 className="text-base md:text-lg font-medium font-poppins text-[#000000] mb-1">
                    Fast High-Quality Results
                  </h4>
                  <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed">
                    Deliver practical outcomes swiftly, without sacrificing
                    depth or effectiveness.
                  </p>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium font-poppins text-[#000000] mb-1">
                    Quality-Driven Learning
                  </h4>
                  <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed">
                    Enhance retention by focusing on high-impact content,
                    ensuring efficient progress toward learners' goals.
                  </p>
                </div>
                <div className="max-w-57">
                  <h4 className="text-base md:text-lg font-medium font-poppins text-[#000000] mb-1">
                    Efficiency
                  </h4>
                  <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed">
                    Deliver maximum value with minimal daily effort.
                  </p>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium font-poppins text-[#000000] mb-1">
                    Focus Over Clutter
                  </h4>
                  <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed">
                    Deliver practical outcomes swiftly, without sacrificing
                    depth or effectiveness.
                  </p>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-medium font-poppins text-[#000000] mb-1">
                    Accessibility
                  </h4>
                  <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed">
                    Enhance retention by focusing on high-impact content,
                    ensuring efficient progress toward learners' goals.
                  </p>
                </div>
                <div className="max-w-57">
                  <h4 className="text-base md:text-lg font-medium font-poppins text-[#000000] mb-1">
                    Consistency
                  </h4>
                  <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed">
                    Deliver maximum value with minimal daily effort.
                  </p>
                </div>
              </div>
              <div className="w-full md:max-w-3xs">
                <h4 className="text-base md:text-lg font-medium font-poppins text-[#000000] mb-1">
                  Empowering Learners
                </h4>
                <p className="text-[#282829] text-base font-normal font-poppins leading-relaxed">
                  Provide the right tools and support to promote self-learning
                  and boost confidence.
                </p>
              </div>
            </div>
            <div className="max-w-3xs flex flex-col items-center justify-start md:items-center mt-8 md:mt-0">
              <div className="w-40 h-40 md:w-48 md:h-48 p-5 rounded-xl overflow-hidden flex items-center justify-center bg-gray-800">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/flashcard-logo.svg"
                    alt="image"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-4">Memolect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 flex flex-col gap-12 lg:gap-20">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-28 lg:mb-20">
            <div className="relative overflow-hidden w-full sm:max-w-76 aspect-square shrink-0">
              <Image
                src="/images/flashcard-img-4.webp"
                alt="Apps Logo Icon"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[40%] flex flex-col gap-8">
              <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins">
                Apps Logo Icon
                <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
              </h2>
              <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins">
                When designing app icons, it's essential to consider the diverse
                range of colors that can appeal to various devices and users.
              </p>
              <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins">
                Ensuring visibility across different settings. Meanwhile,
                tablets might benefit from larger, more detailed icons that
                showcase the app's functionality.
              </p>
              <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins">
                Ultimately, the key is to resonate with your target audience
                while ensuring that the icon remains recognizable and appealing
                across all platforms.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-28">
            <div className="w-full md:w-[38%] flex flex-col gap-8">
              <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins">
                Logo Clear Space
                <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
              </h2>
              <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins">
                When designing your brand, it's crucial to adhere to specific
                guidelines that dictate the appropriate spacing and sizing for
                both the emblem and the brand name. This ensures that your logo
                is not only visually appealing but also maintains its integrity
                across various applications. Proper spacing allows the emblem
                and text to breathe, creating a harmonious balance that enhances
                brand recognition.
              </p>
            </div>
            <div className="relative overflow-hidden w-full sm:max-w-75 aspect-square shrink-0">
              <Image
                src="/images/flashcard-img-5.webp"
                alt="Logo Clear Space"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Style Guide Section */}
      <section className="py-16 md:py-20 md:px-6 lg:px-11">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins mb-12">
            Style Guide
            <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
          </h2>
          <div className="flex flex-col justify-center gap-4">
            <h3 className="lg:ml-[10%] text-xl lg:text-3xl font-semibold text-[#13151A] font-poppins">
              Color Palette
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-35 mb-16">
              <div className="relative overflow-hidden w-full sm:max-w-88 aspect-square shrink-0">
                <Image
                  src="/images/flashcard-img-6.webp"
                  alt="image"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:max-w-[45%] flex flex-col">
                <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins mb-4">
                  In app design, color choice is crucial for establishing a
                  brand's identity. Colors evoke emotions and create a visual
                  language that users connect with, while consistent usage
                  across platforms fosters trust and loyalty.
                </p>
                <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins">
                  A well-defined color palette enhances user experience by
                  making interfaces intuitive and engaging. By maintaining a
                  cohesive color scheme, brands effectively communicate their
                  values, helping users identify and relate to the app.
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-xl md:text-4xl font-bold text-[#13151A] font-poppins mb-8 px-2">
            Typography
          </h3>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start justify-start">
            <div className="flex items-center justify-center gap-8">
              <div className="flex-1">
                <p className="text-lg font-semibold text-[#000000] mb-1 font-poppins">
                  DM Sans
                </p>
                <p className="text-sm text-[#282829] font-normal font-poppins">
                  This different font sizes will be used throughout the
                  application to maintain pixel perfect design and clean style
                  sheet.
                </p>
              </div>
              <div className="relative overflow-hidden w-30 h-80">
                <Image
                  src="/images/font-img.svg"
                  alt="image"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-semibold text-[#000000] mb-2 font-poppins">
                  Regular Text
                </h4>
                <p className="text-[#4D4D4D] font-base font-normal font-poppins leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod. Lorem ipsum dolor sit amet,
                  consectetuer.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#000000] mb-2 font-poppins">
                  Medium Body Text
                </h4>
                <p className="text-[#4D4D4D] font-base font-medium font-poppins leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod. Lorem ipsum dolor sit amet,
                  consectetuer.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#000000] mb-2 font-poppins">
                  Semi-Bold Title Text
                </h4>
                <p className="text-[#4D4D4D] font-base font-semibold font-poppins leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod. Lorem ipsum dolor sit amet,
                  consectetuer.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-[#000000] font-poppins mb-6">
                Text Hierarchy
              </h4>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-base font-semibold text-[#000000] font-poppins">
                    Regular Text
                  </p>
                  <p className="text-base font-semibold text-[#000000] font-poppins">
                    16px | 1 rem
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    AaBbCcDdEeFfGg HhIiJjKkLlMmNnOo PpQqRrSsTtUuVv WwXxYyZz
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    1234567893
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    (@#$^*%)
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base font-semibold text-[#000000] font-poppins">
                    Medium Body Text
                  </p>
                  <p className="text-base font-semibold text-[#000000] font-poppins">
                    16px | 1 rem
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    AaBbCcDdEeFfGg HhIiJjKkLlMmNnOo PpQqRrSsTtUuVv WwXxYyZz
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    1234567893
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    (@#$^*%)
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base font-semibold text-[#000000] font-poppins">
                    Semi-Bold Title Text
                  </p>
                  <p className="text-base font-semibold text-[#000000] font-poppins">
                    16px | 1 rem
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    AaBbCcDdEeFfGg HhIiJjKkLlMmNnOo PpQqRrSsTtUuVv WwXxYyZz
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    1234567893
                  </p>
                  <p className="text-sm font-normal text-[#4D4D4D] font-poppins">
                    (@#$^*%)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Fidelity Screens Section */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-11">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins mb-12">
            High Fidelity Screen
            <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
          </h2>
        </div>
        <div className="w-full">
          {fidelityScreen.map((screen) => (
            <HighFidelityScreen
              key={screen.key}
              paragraphs={screen.paragraphs}
              imageSrc={screen.imageSrc}
              imageAlt={screen.imageAlt}
              reverse={screen.reverse}
              wrapperClassName={screen.wrapperClassName}
              imageWrapperClassName={screen.imageWrapperClassName}
              contentWrapperClassName={screen.contentWrapperClassName}
              wrapText={screen.wrapText}
              textWrapperClassName={screen.textWrapperClassName}
              accentClassName={screen.accentClassName}
            />
          ))}
        </div>
      </section>

      {/* Other Screens Section */}
      <section className="py-12 md:py-20 md:px-6 lg:px-11">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins mb-12 lg:mb-16">
            Other Screens
            <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
          </h2>
          <div className="flex flex-wrap justify-center items-start gap-10 md:gap-16 lg:gap-20">
            <div className="flex flex-col gap-12 md:gap-18 lg:gap-25 w-full md:w-3xs lg:max-w-86">
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-1.webp"
                  alt="Flashcard screen 1"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-2.webp"
                  alt="Profile screen"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-3.webp"
                  alt="Subject type screen"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 w-full md:w-3xs lg:max-w-86 lg:mt-80">
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-4.webp"
                  alt="Flashcard screen 2"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-5.webp"
                  alt="Session list screen"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-6.webp"
                  alt="Language setup screen"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-12 md:gap-18 lg:gap-25 w-full md:w-3xs lg:max-w-86">
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-7.webp"
                  alt="Flashcard screen 3"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-8.webp"
                  alt="Results list screen"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/OS-img-9.webp"
                  alt="Subject type screen 2"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section className="py-12 md:py-20 md:px-6 lg:px-11">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins mb-12 lg:mb-16">
            Wireframes
            <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
          </h2>
          <div className="flex flex-wrap justify-center items-start gap-10 md:gap-16 lg:gap-20">
            <div className="flex flex-col gap-12 md:gap-18 lg:gap-25 w-full md:w-3xs lg:max-w-86">
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/WF-img-1.webp"
                  alt="Wireframe 1"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/WF-img-2.webp"
                  alt="Wireframe 2"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 w-full md:w-3xs lg:max-w-86 lg:mt-80">
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/WF-img-3.webp"
                  alt="Wireframe 3"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/WF-img-4.webp"
                  alt="Wireframe 4"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-12 md:gap-18 lg:gap-25 w-full md:w-3xs lg:max-w-86">
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/WF-img-5.webp"
                  alt="Wireframe 5"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full sm:max-w-86 aspect-9/16 mx-auto">
                <Image
                  src="/images/WF-img-6.webp"
                  alt="Wireframe 6"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
