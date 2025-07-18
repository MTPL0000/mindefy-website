import React from "react";
import { blogData } from "@/app/utils/blogData";
import Image from "next/image";

export default function BlogOne() {
  const blog = blogData[0];

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
            Micro-services in this era is getting so much attention from
            articles, social media, conference presentation, blogs, and so on.
            However, despite the hype, Micro-service architecture has
            significant benefits, highly recommended for agile or RAD and the
            delivery of complex enterprise applications.
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Micro-services also known as Micro-service architecture is a method
            of designing or developing software applications or systems to
            structure one application as a collection of loosely coupled
            services.
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            If we more explore, everyone has a different explanation about
            micro-services.
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Someone says: ”Micro-services are small services that work
            together.”
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Other-one says: “The microservice architectural style is an approach
            to develop a single application as a suite of small services”. There
            are so many definitions available for microservices.
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Wikipedia has a good definition for microservices: "structural style
            that arranges an application as a collection of loosely-coupled
            services".
          </p>
          <p className="text-lg font-normal text-[#444444] mt-3">
            In the end, everything comes to a point and concludes:
            “Micro-services is a software architecture that eases software
            development and maintenance”.
          </p>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>In this article we will cover:</strong>
          </h2>
          <ol className="list-decimal list-inside text-lg font-normal text-[#444444] mt-3 space-y-1">
            <li>
              What should be remembered while working with Micro-services?
            </li>
            <li>Features of micro-services</li>
            <li>Pros of Micro-services</li>
            <li>Top worldwide real-life examples</li>
            <li>Where Mindefy used micro-services</li>
            <li>Why do we need microservice architecture?</li>
          </ol>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>Each component of a microservice has its own:</strong>
          </h2>
          <ol className="list-decimal list-inside text-lg font-normal text-[#444444] mt-3 space-y-1">
            <li>CPU</li>
            <li>Runtime Environment</li>
            <li>
              A dedicated team works on it, ensuring they are working and each
              service is distinct from the other.
            </li>
          </ol>
          <p className="text-lg font-normal text-[#444444] mt-3">
            This architecture defines that every single service can run its own
            unique process. And each service can communicate continuously
            without having to rely on the other services.
          </p>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>What should be remembered about Micro-services?</strong>
          </h2>
          <ol className="list-decimal list-inside text-lg font-normal text-[#444444] mt-3 space-y-1">
            <li>Microservices are exposed by REST.</li>
            <li>Microservices are small and well-chosen deployable units.</li>
            <li>It is Event-driven interaction between the services.</li>
          </ol>
          <div className="w-full flex justify-center my-8">
            {/*<figure className="wp-block-image size-full">
              <img src="https://Mindefy.com/wp-content/uploads/2022/05/Microservice_Features.jpeg" alt="Microservice Features" className="rounded-2xl max-w-full h-auto" />
            </figure>*/}
          </div>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>Features of Micro-service :</strong>
          </h2>
          <ol className="list-decimal list-inside text-lg font-normal text-[#444444] mt-3 space-y-1">
            <li>
              <strong>Decoupling:</strong> Services within a system are largely
              decoupled. So the application as a whole can be easily built,
              altered, and scaled.&nbsp;
            </li>
            <li>
              <strong>Agility: </strong>Any new feature can be quickly developed
              and discarded again.
            </li>
            <li>
              <strong>Business Capabilities: </strong>Microservices are very
              simple and focus on a single capability.
            </li>
            <li>
              <strong>Autonomy: </strong>Developers and teams can work
              independently of each other, thus increasing speed.
            </li>
            <li>
              <strong>Continuous Delivery: </strong>Allows frequent releases of
              software, through systematic automation of software creation,
              testing, and approval.
            </li>
            <li>
              <strong>Responsibility: </strong>Microservices do not focus on
              applications as projects. Instead, they treat applications as
              products for which they are responsible.
            </li>
            <li>
              <strong>Componentization: </strong>Microservices are treated as
              independent components that can be easily replaced and upgraded
            </li>
            <li>
              <strong>Decentralized Governance: </strong>Developers have the
              freedom to choose the best useful tools to solve their problems.
              That means there is no standardized pattern or any technology
              pattern.
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>Pros of Microservices:&nbsp;</strong>
          </h2>
          <ol className="list-decimal list-inside text-lg font-normal text-[#444444] mt-3 space-y-1">
            <li>Increase Agility</li>
            <li>Improve workflows</li>
            <li>Independent development of services</li>
            <li>Independent deployment of services</li>
            <li>Easy maintenance</li>
            <li>Developer Independent</li>
          </ol>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>Top Worldwide examples of Microservices:</strong>
          </h2>
          <ol className="list-decimal list-inside text-lg font-normal text-[#444444] mt-3 space-y-1">
            <li>eBay</li>
            <li>Amazon</li>
            <li>Netflix</li>
            <li>Uber</li>
            <li>Twitter</li>
            <li>Paypal</li>
          </ol>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>Where Mindefy used Micro-services:</strong>
          </h2>
          <p className="text-lg font-normal text-[#444444] mt-3">
            We’ve used Micro-services in fraud management solutions, Retail
            management Projects, and so on.
          </p>
          <h2 className="text-2xl font-bold text-[#000000] mt-8 mb-2">
            <strong>Why we need Microservice architecture:</strong>
          </h2>
          <ol className="list-decimal list-inside text-lg font-normal text-[#444444] mt-3 space-y-1">
            <li>
              <strong>More Agility: </strong>In this technology era, all
              industries continue to accelerate with the pace. To meet user
              expectations and exceed expectations, introducing new features and
              capabilities, our applications need to evolve. So by using
              containers or container orchestration platforms like
              Kubernetes/docker to deploy applications. Micro-service
              architecture helps to faster the process. In Monolithic, it takes
              too much time from development to deployment.
            </li>
            <li>
              <strong>Reduced Cost: </strong>Micro-service helps to reduce
              costs. The main idea of MS is “small unit distribution”. And these
              small units can be managed by a single person or with very less
              people involved.
            </li>
            <li>
              <strong>Better Experience: </strong>The drive to innovate
              applications into Micro-service architecture. Micro-service helps
              to improve user experience as well as developer experience.
              Developers are also happy to implement micro-services cause it is
              easy to understand and implement. And this satisfaction makes the
              user experience great.
            </li>
          </ol>
          <p className="text-lg font-normal text-[#444444] mt-3">
            Hope You have enjoyed this article and come to know what
            Micro-service is.
          </p>
        </div>
      </div>
    </section>
  );
}
