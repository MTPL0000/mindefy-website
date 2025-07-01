import Footer from "../HomePage/Footer";
import Navbar from "../HomePage/Navbar";
import Image from "next/image";

const Solistack = () => {
  return (
    <div className="m-auto bg-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-[6rem] mx-auto pt-16">
        <div className="flex flex-col items-center justify-center max-w-[60rem] mx-auto gap-12 mt-8">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-[#FF5225] text-base font-bold tracking-wider uppercase">
              Soliroute
            </p>
            <span className="text-4xl font-semibold text-[#000000] text-center">
              Solistack Business Solutions
            </span>
          </div>
          <span className="text-base font-normal text-[#000000] text-justify">
            Soliroute plans and optimizes routes and schedules for deliveries.
            We’re committed to bringing the absolute state of the art in
            planning, routing and schedule optimization technology to everyone.
          </span>
          <span className="text-base font-normal text-[#000000] text-justify">
            The Soliroute App is an extension of Soliroute – Web-Based route
            optimization and schedule planning tool for delivery and field
            service businesses. The app is used by Drivers whose dispatchers use
            Soliroute to plan their routes. It gives you the route chart,
            complete schedule, order information, and navigation in one place.
            The app also allows the collection of autographs, prints, and notes
            as evidence of delivery. As you work through orders, the dispatching
            office stays streamlined with your progress. And, you can view the
            complete route and all orders on one screen.
          </span>
        </div>

        {/* Main Image */}
        <div className="flex items-center justify-center w-full  bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(234,177,33,0.57)_52.4%,rgba(254,254,254,0.6)_100%)]">
          <div className="m-auto relative aspect-[2/1] w-full overflow-hidden">
            <Image
              src="/images/projects/ST-1.webp"
              alt="soli-stack Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-[76.5rem] m-auto gap-2">
          <span className="text-4xl font-semibold text-[#000000] text-center">
            Solistack’s Transformative Service Offerings
          </span>

          <div className="flex items-center justify-center gap-21">
            <div className="flex flex-col items-start justify-center gap-5">
              <h4 className="text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                Automated Planning
              </h4>
              <p className="text-base font-normal text-[#000000] text-justify">
                Easily import orders and get the most effective routes &
                schedules, Constraints, Multi-driver, Workload balancing.
              </p>
              <p className="text-base font-normal text-[#000000] text-justify">
                Soliroute gets you route planning results that work – in a
                matter of seconds. For your routes to work, they need to regard
                your business’s real- world challenges while delivering
                cost-effective routes and schedules.
              </p>
            </div>

            <div className="m-auto relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/projects/ST-2.webp"
                alt="soli-stack"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-21">
            <div className="m-auto relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/projects/ST-3.webp"
                alt="soli-stack"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <h4 className="text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                One Click Order Scheduling
              </h4>
              <p className="text-base font-normal text-[#000000] text-justify">
                Whether you need to record specific delivery or service time
                windows, account for specific vehicle availability, or meet
                specific clients, Soliroute can help you produce the most
                effective routes possible.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-21">
            <div className="flex flex-col items-start justify-center gap-5">
              <h4 className="text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                Live Tracking & ETA
              </h4>
              <p className="text-base font-normal text-[#000000] text-justify">
                Easily import orders and get the most effective routes &
                schedules, Constraints, Multi-driver, Workload balancing.
              </p>
              <p className="text-base font-normal text-[#000000] text-justify">
                This feature helps you to seamlessly track your orders. See
                where your orders are at any time. What is done, who is on time,
                who is before. Easy to assign rush orders.
              </p>
            </div>

            <div className="m-auto relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/projects/ST-2.webp"
                alt="soli-stack"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-21">
            <div className="m-auto relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/projects/ST-4.webp"
                alt="soli-stack"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <h4 className="text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                Proof Of Delivery
              </h4>
              <p className="text-base font-normal text-[#000000] text-justify">
                With Proof of Delivery, your delivery persons, technicians, and
                all other field staff can gather a range of applicable
                information — like Digital Signatures, prints and notes in real
                time via the Soliroute Mobile App. This Increases accuracy and
                Resolve all inquiries seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-21">
            <div className="flex flex-col items-start justify-center gap-5">
              <h4 className="text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                Analytics
              </h4>
              <p className="text-base font-normal text-[#000000] text-justify">
                Auto-Induce detailed stats from route data. Identify drivers
                according to their work, reasons for service detainments, and
                more.
              </p>
            </div>
            <div className="m-auto relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/projects/ST-5.webp"
                alt="soli-stack"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-21">
            <div className="m-auto relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/projects/ST-6.webp"
                alt="soli-stack"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <h4 className="text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                Driver Mobile App
              </h4>
              <p className="text-base font-normal text-[#000000] text-justify">
                Shares detailed routes directly to Drivers’ phone. Orders,
                schedules, navigation, and client details on one app. <br />
                Whether you’re a delivery person or a field service company,
                Soliroute Driver App can help you streamline your work and stay
                connected with your colleagues.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-21">
            <div className="flex flex-col items-start justify-center gap-5">
              <h4 className="text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                Dark Mode Light Mode
              </h4>
              <p className="text-base font-normal text-[#000000] text-justify">
                Additionally, App is designed to be user-friendly. Its intuitive
                interface and different modes helps drivers to breeze through
                their daily routes and gives them quick and easy access to
                information with just a few taps.
              </p>
            </div>
            <div className="m-auto relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/images/projects/ST-7.webp"
                alt="soli-stack"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <h4 className="text-[2.125rem] font-semibold text-[#000000]">
            Lets Get in Touch
          </h4>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solistack;
