import React from "react";
import { blogData } from "@/app/utils/blogData";
import Image from "next/image";

export default function BlogThird() {
  const blog = blogData[2];

  return (
    <section className="mx-auto px-4 mb-6">
      <div className="mx-auto container flex flex-col lg:flex-row justify-start pt-8 lg:pt-16 gap-6 lg:mb-6">
        <div className="flex flex-col items-start justify-start">
          <div className="container">
            <div className="container">
              <h1 className="text-2xl font-bold text-[#000000]">
                {blog?.title}
              </h1>
            </div>
            <div className="container">
              <div>
                <p className="text-lg font-semibold text-[#444444] mt-4">
                  By {blog?.author}
                </p>
                <p className="text-base font-semibold text-normal text-[#444444]">
                  {blog?.date}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#000000] mt-5">
              <strong>
                Work From Home is fast turning into the new normal!
              </strong>
            </h3>
            <p className="text-lg font-normal text-[#444444] mt-5">
              Companies, in the face of this global pandemic, have asked their
              employees to Work From Home. While these measures are aimed at
              staunching the spread of the coronavirus, the work does not stop.
              This, however, seems to be easier said than done. Chances are, if
              you’re not a freelancer or a WFH veteran, you find the environment
              not conducive to work. It is important that you establish certain
              things in order to be more productive. And, even though we cannot
              go on living as if nothing’s wrong, we need to put out the work
              our employers expect from us. Here are a few tips on how to be a
              good employee and not lose your work ethic while working from
              home.
            </p>
          </div>
        </div>
        <div className="container relative aspect-[2/1]">
          <Image
            src={blog?.blogImg}
            fill
            alt="Blog Image"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="container mt-5">
          <p className="text-lg font-normal text-[#444444] mt-3">
            And so the call for time management has echoed like a battle cry
            across the world. With organizations lobbying for better or reduced
            work hours, better working conditions, more efficient tools to work
            with, it seems like time management is the only viable solution to
            getting things done. And though there is no dearth of strategies to
            manage your time, we have shortlisted four of the best ways to
            manage time.
          </p>
          <h2 className="text-3xl font-bold text-[#000000] mt-8">
            <strong>Work Area!</strong>
          </h2>
          <blockquote className="border-l-4 border-gray-300 pl-4 my-4">
            <p className="text-lg font-semibold text-[#444444]">
              <strong>
                The atmosphere of a home and an office are very different. To
                that end, one feels that a corner of your home can be converted
                into a workspace of sorts. It is crucial that you have a desk
                where you have all the things that you need. Try to limit the
                number of times that you get up from your desk to go fetch
                implements that you need. Which leads us to our next point:
              </strong>
            </p>
          </blockquote>
          <div className="relative aspect-[1.5/1] lg:aspect-[4/1] my-10">
            <Image
              src="/images/TOA-2.webp"
              fill
              alt="Blog Image"
              className="object-contain rounded-2xl"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#000000] mt-8">
            <strong>
              It is important to create a healthy working environment while
              working from home!
            </strong>
          </h2>
          <h3 className="text-2xl font-bold text-[#000000] mt-8">
            <strong>Block Distractions!</strong>
          </h3>
          <div className="relative aspect-[1.5/1] lg:aspect-[4/1] my-10">
            <Image
              src="/images/TOA-3.webp"
              fill
              alt="Blog Image"
              className="object-contain rounded-2xl"
            />
          </div>
          <p className="text-lg font-normal text-[#444444] mt-3">
            At the office, it is important to create an environment that does
            not provide easy distractions. So, get away from it all. Try to do
            away with all the noise of the household as daily life unravels
            around you as you try to work. Remember: noise is sound that comes
            at irregular intervals and disturbs us. But if you are one of those
            people who need at least some sort of noise, try to have a dull
            sound playing in the background. White noise, research has
            suggested, is conducive to a work environment. It is also important
            that you establish ground rules with your family or the people that
            you live with. Try to have them treat the situation as if you are
            really working at the office. Do not get pulled into family drama,
            or household chores. Dedicate the time to your work. Similarly, try
            to finish your tasks by the deadline. It is not fair either to you
            or your loved ones, that you take your work to the dinner table,
            which would mean that you have neither proper family time nor proper
            work time. a clear distinction between the two will let you have the
            best of both worlds.
          </p>
          <div className="relative aspect-[1.5/1] lg:aspect-[4/1] my-10">
            <Image
              src="/images/TOA-4.webp"
              fill
              alt="Blog Image"
              className="object-contain rounded-2xl"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#000000] mt-8">
            <strong>
              Work-life encroaching on family time? Remember to create a
              separation between the two for the best of both worlds!
            </strong>
          </h2>
          <h3 className="text-2xl font-bold text-[#000000] mt-8">
            <strong>Get Organized!</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            It would do you a lot of good to make a list of all the things that
            you would need while working from home and keeping them within easy
            reach. Try to think of all the things that are on your desk at your
            office, and bring all of them together at your home office.
          </p>
          <div className="relative aspect-[1.5/1] lg:aspect-[4/1] my-10">
            <Image
              src="/images/TOA-5.webp"
              fill
              alt="Blog Image"
              className="object-contain rounded-2xl"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#000000] mt-8">
            <strong>
              Remember to plan your day’s work so that you meet all the goals
              that you set!
            </strong>
          </h2>
          <h3 className="text-2xl font-bold text-[#000000] mt-8">
            <strong>Communicate!</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            When working from home it is crucial to keep in mind that you won’t
            have your colleagues around to ask them about things all the time.
            In this respect, it would do a lot of good to first establish what
            work needs to get done by the end of the day. a call with your
            employer or your project partner will help you to outline the tasks
            that need to be dealt with by the end of the day.
          </p>
          <div className="relative aspect-[1.5/1] lg:aspect-[4/1] my-10">
            <Image
              src="/images/TOA-6.webp"
              fill
              alt="Blog Image"
              className="object-contain rounded-2xl"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#000000] mt-8">
            <strong>
              As always, communication is key. Make sure your workmates are on
              the same page as you!
            </strong>
          </h2>
          <h3 className="text-2xl font-bold text-[#000000] mt-8">
            <strong>Take Breaks!</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Research has suggested that when one works in breaks of 25-30
            minutes and then takes a break for 5 minutes, the workflow becomes
            smoother, and the employee is more productive. It is not good for
            the body to remain, neck-bent over a screen and chained to the desk
            without relief. Once in a while, it is important to get up from your
            desk and take a walk, use the restroom, and listen to something more
            soothing than your work.
          </p>
          <div className="relative aspect-[1.5/1] lg:aspect-[4/1] my-10">
            <Image
              src="/images/TOA-7.webp"
              fill
              alt="Blog Image"
              className="object-contain rounded-2xl"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#000000] mt-8">
            <strong>
              And when it all gets too much, remember to take a break!
            </strong>
          </h2>
          <p className="text-lg font-normal text-[#444444] mt-3">
            During these times, it is very easy to shrug-off work. Since there
            is no authority that is constantly overlooking the work you’re
            doing, it is infinitely easier to say that you’ll do it later. Since
            you’re essentially in charge of yourself, it is imperative that you
            take responsibility and do the desired work. Home environments do
            not easily lend themselves to work, and these are but a few things
            that one could do to work easily from home.
          </p>
        </div>
      </div>
    </section>
  );
}
