import React from "react";
import { blogData } from "@/app/utils/blogData";
import Image from "next/image";

export default function BlogSecond() {
  const blog = blogData[1];

  return (
    <section className="mx-auto px-4 mb-6">
      <div className="w-full flex justify-center pt-12">
        <div className="container relative aspect-[2/1] rounded-4xl">
          <Image
            src={blog?.blogImg}
            fill
            alt="Blog Image"
            className="object-cover rounded-4xl"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="container mt-8">
          <div className="container flex justify-center">
            <h1 className="text-4xl font-bold text-[#000000] mt-4">
              {blog?.title}
            </h1>
          </div>
          <div className="container flex lg:justify-end">
            <div>
              <p className="text-xl font-medium text-[#444444] mt-4">
                By {blog?.author}
              </p>
              <p className="font-medium text-normal text-[#444444]">
                {blog?.date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="container mt-5">
          <p className="text-lg font-normal text-[#444444] mt-3">
            The amount of free time, we as humans have now was never been the
            same as before. As primal beings, we used to spend our whole life
            looking for ways to survive and to keep ourselves and our community
            safe.
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            But now, life has become much easier to survive and everything is
            ready-to-make, we have lots of time and many ways to entertain
            ourselves and engage ourselves in meaningless activities. The world
            is at your fingertips
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Even the food is delivered to our premises making us more sedentary
            and less mobile. We are all living vegetables. Even the food is
            delivered to our premises making us more sedentary and less mobile.
            We are all living vegetables.
          </p>
          <h2 className="text-2xl font-bold text-left text-[#000000] mt-8 mb-4">
            <strong>Make a Timetable!</strong>
          </h2>
          <blockquote className="text-left border-l-4 border-gray-300 pl-4 my-6">
            <p className="text-lg font-semibold text-[#444444] mt-3">
              <strong>
                We just choose to fill the voids with crappy stuffs like
                aimlessly scrolling through social media, or doing meetings
                where isn’t necessary, talking aimlessly to unnecessary people
                when you have better things to do.
              </strong>
            </p>
          </blockquote>
          <p className="text-lg font-normal text-[#444444] mt-3"></p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            I believe, the only difference between someone stuck and someone
            making it big is the way he uses his time.Here are some of the ways
            with which you can get a hold of your free time to be happier and
            fulfilled.
          </p>
          <div className="flex justify-center my-6">
            {/*<figure className="w-[300px] h-[200px]">
              <img src="https://Mindefy.com/wp-content/uploads/2022/03/Youhour_app_A_Man-300x200.jpg" alt="A Man" className="rounded-xl object-cover w-full h-full" />
            </figure>*/}
          </div>
          <h2 className="text-2xl font-bold text-left text-[#000000] mt-8 mb-4">
            <strong>
              A Man who Lifts Twice stays Healthy, Wealthy, and Wise!
            </strong>
          </h2>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Meditate:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            If there is only one keystone habit you want to concentrate on and
            acquire, then I will highly recommend practicing meditation even for
            as little as 10 minutes a day.
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            It will make you live in the present which is going to bring
            happiness to you which is the end goal for most of us. It also helps
            is focusing more on your goals and jitters away distracting habits
            eventually.
          </p>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Exercise:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            An age-old saying-‘Health is Wealth’. And trust me, it is. It is one
            of the most important things in the long run. You can work 16-18
            hours a day and make your business prosper in 2 years, but soon you
            are going to be prey to many diseases.
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Then you won’t be able to work even for 2 hours a day. Who is going
            to manage your business then?
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Exercising every day has a number of benefits including:
          </p>
          <ul className="list-disc list-inside text-lg font-normal text-[#444444] mt-3">
            <li>More energy throughout the day.</li>
            <li>Better physique.</li>
            <li>Increased Happiness.</li>
            <li>Increased Happiness.</li>
          </ul>
          <p className="text-lg font-normal text-[#444444] mt-3">
            And Many More.
          </p>
          <div className="flex justify-center my-6">
            {/*<figure className="w-[300px] h-[200px]">
              <img src="https://Mindefy.com/wp-content/uploads/2022/03/Youhour_app_A_Man-300x200.jpg" alt="A Man" className="rounded-xl object-cover w-full h-full" />
            </figure>*/}
          </div>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-4">
            <strong>Aim for the Moon, You may hit the star!</strong>
          </h2>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Starting a Side Business:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Starting a business has never been easier than it is after the
            advent of the Internet. You can write blogs, start your Instagram
            page, or even a youtube channel. There are many more options to
            choose from. It may take time but it is going to be a hit as there
            is an audience for everyone these days. You just need to pick your
            niche and go hard on it. It will soon start making you money and
            might overtake your salary if you stick long enough with it.
          </p>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-4">
            <strong>Reading Books:</strong>
          </h2>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Another activity/habit especially recommended by most of the great
            minds of any generation. As we graduate, most of us give up on
            learning which is one reason most of us aren’t able to improve much.
            Books are available on every topic, from currently hot Artificial
            Intelligence to age-old Mediation, from cooking to farming, from
            money management, home science, from animal rearing to parenthood.
            You don’t need to get a degree to learn all of this. Nor do you need
            to pay tuition fees for learning. It is all available in the books.
            Just grab the one which is the most intriguing to you or the one you
            need the most.
          </p>
          <div className="flex justify-center my-6">
            {/*<figure className="w-[300px] h-[200px]">
              <img src="https://Mindefy.com/wp-content/uploads/2022/03/Youhour_app_A_Man-300x200.jpg" alt="A Man" className="rounded-xl object-cover w-full h-full" />
            </figure>*/}
          </div>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-4">
            <strong>Don't wait for things to settle down. Do it now!</strong>
          </h2>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Learn a new Skill:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Be it learning to play guitar, taking a calligraphy class, taking a
            cake-making class, or even a knitting class, learning a new
            language, or doing something you would like to do. You might have
            given up on a passion of yours in your school days for studying or
            some other reason. It is time to work on it. It is time to try it
            out. Don’t miss out on it.
          </p>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Goal Setting:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            One of the best things to do in your leisure time is to set and
            review your goals. It is a great way to reflect on your progress and
            it keeps you on track with the end goal. You can start by making
            weekly, monthly, 6-monthly, and annual goals. I personally don’t set
            any goal for more than one year in the future as it is highly
            unpredictable to assume the life I will be living 1 year from now.
          </p>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Cleaning and Organising Your Place:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Coming back to a clean and organized place after a hard day at work
            or at college is such a mesmerizing feeling. You can just get into
            the comfy sheets and relax. Cleaning the place can be a fun habit if
            you play your favorite songs while doing so. It lowers stress
            anxiety and fatigue and also helps you defeat the deadly habit of
            procrastination.
          </p>
          <div className="flex justify-center my-6">
            {/*<figure className="w-[300px] h-[200px]">
              <img src="https://Mindefy.com/wp-content/uploads/2022/03/Youhour_app_A_Man-300x200.jpg" alt="A Man" className="rounded-xl object-cover w-full h-full" />
            </figure>*/}
          </div>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-4">
            <strong>Start Now and reap the rewards later!</strong>
          </h2>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Monthly Budget Review</strong>:
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Reviewing your budget if you already have one is a great exercise to
            save a few hundred bucks. And making a budget in advance creates a
            psychological barrier that is hard to cross. You will never be in
            debt. You can also observe and unlearn your bad spending habits.
          </p>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Getting Bored:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            I tried to make myself clear in the last blog that you can be more
            creative by getting bored in this ever distracted world. Give it a
            read if you haven’t already. It will amaze you. It will let you
            think of your present, past, and future, keeping at the core the
            ways in which you can improve your life. You will start thinking
            about your choices and how you can better them. This is called
            Autobiographical thinking explained in the last blog.
          </p>
          <h3 className="text-xl font-bold text-[#000000] mt-6 mb-2">
            <strong>Conclusion:</strong>
          </h3>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Now with your time in your hands, explore more to find yourself. Try
            to find things you like and don’t like. It will be amazing to know
            that you weren’t doing certain things before that you love to do and
            you are pretty good at them. If you aren’t able to free your time,
            use the YourHour application on your Smartphones and go nuts. Learn
            something new, read something old, explore the unexplored, and be
            more fulfilled. What do you people do in your leisure hours? Comment
            down to tell us. Maybe we can share it with others. Keep sticking
            with us. Until the next read, See ya!
          </p>
        </div>
      </div>
    </section>
  );
}
