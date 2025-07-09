import Image from "next/image";

const DigiBill = () => {
  return (
    <div className="m-auto bg-white">
      <section className="flex flex-col items-center justify-center gap-16 lg:gap-24 pt-16">
        <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-6xl mx-auto gap-8 lg:gap-12 mt-8 px-4 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 lg:gap-5">
            <p className="text-[#FF5225] text-sm lg:text-base font-bold tracking-wider uppercase">
              DigiBill
            </p>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                DigiBill{" "}
                <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                  A Sustainable Solution <br />
                </span>
              </span>
              <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                For{" "}
                <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                  Digital Bill{" "}
                </span>
                Management
              </span>
            </div>
          </div>
          <span className="text-sm lg:text-base font-normal text-[#000000] text-justify">
            An innovative application developed by Mindefy, designed to
            revolutionize digital bill generation and management while promoting
            environmental sustainability. With a strong focus on environmental
            sustainability and efficiency, DigiBill is revolutionizing the way
            businesses generate and manage bills. Say goodbye to paper waste and
            embrace a paperless future with our comprehensive suite of apps:
            Merchant, Admin, and Customer.
          </span>
        </div>

        {/* Main Image */}
        <div className="w-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.6)_0%,_rgba(26,204,64,0.57)_52.4%,_rgba(254,254,254,0.6)_100%)]">
          <div className="m-auto relative aspect-[16/9] md:aspect-[2/1] w-full max-w-[70rem] overflow-hidden">
            <Image
              src="/images/projects/DB-1.webp"
              alt="DigiBill Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Key Functionality Section */}
        <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-[72.5rem] mx-auto gap-16 lg:gap-21 px-4 lg:px-8">
          <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-6xl mx-auto gap-8 lg:gap-12">
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-5">
              <p className="text-[#FF5225] text-sm lg:text-base font-bold tracking-wider uppercase">
                Merchant App
              </p>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                  Streamline{" "}
                  <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                    Your Billing <br />
                  </span>
                </span>
                <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                  <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                    Process Digitally{" "}
                  </span>
                  with{" "}
                  <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                    DigiBill
                  </span>
                </span>
              </div>
            </div>
            <span className="text-sm lg:text-base font-normal text-[#000000] text-justify">
              With the DigiBill Merchant app you can bid farewell to the hassle
              of paper bills and embrace the efficiency of digital transactions.
              Seamlessly integrated with your store's operations, the Merchant
              app allows you to generate and manage bills electronically,
              streamlining your billing process and reducing errors. Gain
              insights into sales, view transaction history, and provide
              customers with instant digital bills, all in one place.
            </span>
          </div>

          <div className="flex flex-col items-center justify-center mx-auto gap-16 lg:gap-25">
            <div className="flex flex-col items-center justify-center gap-3">
              <h3 className="text-2xl lg:text-4xl text-[#000000] font-semibold text-center">
                Highlighting The Key Functionality
              </h3>
              <h3 className="text-2xl lg:text-4xl text-[#000000] font-semibold text-center">
                of Our Merchant App
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 lg:gap-15">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
                <div className="w-full max-w-[18.4rem] flex flex-col items-center justify-center gap-7">
                  <div className="relative aspect-[1/1] w-[5rem] lg:w-[6.25rem] overflow-hidden">
                    <Image
                      src="/images/projects/DB-icon-1.svg"
                      alt="DigiBill icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                      Simplified bill generation
                    </h4>
                    <p className="text-sm lg:text-base font-normal text-[#000000] text-center">
                      Create and manage bills digitally, eliminating the need
                      for paper-based invoices.
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-[18.4rem] flex flex-col items-center justify-center gap-7">
                  <div className="relative aspect-[1/1] w-[5rem] lg:w-[6.25rem] overflow-hidden">
                    <Image
                      src="/images/projects/DB-icon-2.svg"
                      alt="DigiBill icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                      Sales tracking
                    </h4>
                    <p className="text-sm lg:text-base font-normal text-[#000000] text-center">
                      Keep a close eye on your store's sales performance with
                      real-time analytics and reporting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-15">
                <div className="w-full max-w-[18.4rem] flex flex-col items-center justify-center gap-7">
                  <div className="relative aspect-[1/1] w-[5rem] lg:w-[6.25rem] overflow-hidden">
                    <Image
                      src="/images/projects/DB-icon-3.svg"
                      alt="DigiBill icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                      Transaction history
                    </h4>
                    <p className="text-sm lg:text-base font-normal text-[#000000] text-center">
                      Access a comprehensive record of past transactions for
                      accurate record-keeping and reconciliation.
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-[18.4rem] flex flex-col items-center justify-center gap-7">
                  <div className="relative aspect-[1/1] w-[5rem] lg:w-[6.25rem] overflow-hidden">
                    <Image
                      src="/images/projects/DB-icon-4.svg"
                      alt="DigiBill icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                      Customization options
                    </h4>
                    <p className="text-sm lg:text-base font-normal text-[#000000] text-center">
                      Personalize bills with your store's logo and branding for
                      a professional touch.
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-[18.4rem] flex flex-col items-center justify-center gap-7">
                  <div className="relative aspect-[1/1] w-[5rem] lg:w-[6.25rem] overflow-hidden">
                    <Image
                      src="/images/projects/DB-icon-5.svg"
                      alt="DigiBill icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                      Instant digital billing
                    </h4>
                    <p className="text-sm lg:text-base font-normal text-[#000000] text-center">
                      Provide customers with immediate access to digital bills,
                      enhancing convenience and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-6xl mx-auto gap-8 lg:gap-12">
              <div className="flex flex-col items-center justify-center gap-4 lg:gap-5">
                <p className="text-[#FF5225] text-sm lg:text-base font-bold tracking-wider uppercase">
                  Admin App
                </p>
                <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                  Simplify{" "}
                  <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                    Multi-branch Management{" "}
                  </span>
                  with{" "}
                  <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                    DigiBill
                  </span>
                </span>
              </div>
              <span className="text-sm lg:text-base font-normal text-[#000000] text-justify">
                For owners with multiple branches, the DigiBill Admin app
                provides a centralized dashboard for effortless monitoring and
                management. Gain valuable insights into business operations,
                sales performance, and customer behavior across all branches.
                With advanced analytics and reporting features, you can make
                informed decisions, identify trends, and optimize strategies.
                Simplify inventory management, monitor employee performance, and
                ensure smooth operations for enhanced profitability.
              </span>
            </div>

            <div className="relative aspect-[16/9] md:aspect-[2/1] w-full overflow-hidden">
              <Image
                src="/images/projects/DB-2.webp"
                alt="DigiBill Dashboard"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-10 lg:gap-15">
              <div className="w-full max-w-[34rem] bg-gradient-to-l from-[rgba(140,237,83,1)] to-[rgba(48,177,60,1)] py-4 lg:py-6 px-8 lg:px-15 rounded-[10px]">
                <span className="text-lg lg:text-[1.25rem] text-[#FFFFFF] font-semibold text-center block">
                  Key Features of Our Dynamic Admin App
                </span>
              </div>
              <div className="w-full max-w-[72.5rem] flex flex-col lg:flex-row justify-center items-center gap-8">
                <div className="flex flex-col justify-center gap-4 flex-1">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#000000]">
                    Centralized dashboard
                  </h3>
                  <p className="text-[#000000] text-sm lg:text-base font-normal">
                    Monitor and manage multiple branches from a single,
                    intuitive interface.
                  </p>
                </div>
                <div className="relative aspect-[1/1] w-full max-w-[20rem] lg:max-w-none lg:flex-1 overflow-hidden">
                  <Image
                    src="/images/projects/DB-4.webp"
                    alt="DigiBill Dashboard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
              <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-6xl mx-auto gap-8 lg:gap-12">
                <div className="flex flex-col items-center justify-center gap-4 lg:gap-5">
                  <p className="text-[#FF5225] text-sm lg:text-base font-bold tracking-wider uppercase">
                    Customer App
                  </p>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                      Empower{" "}
                      <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                        Shoppers{" "}
                      </span>
                      with{" "}
                      <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                        Convenient <br />
                      </span>
                    </span>
                    <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                      <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                        Digital Bill Features
                      </span>
                    </span>
                  </div>
                </div>
                <span className="text-sm lg:text-base font-normal text-[#000000] text-justify">
                  The DigiBill Customer puts the power of digital billing in
                  your customers' hands. Access and manage bills digitally,
                  eliminating the need for paper records. With personalized
                  accounts, users can conveniently track shopping expenses,
                  review past bills, and monitor spending patterns. Add family
                  members for easy management of collective shopping expenses.
                  Enjoy real-time notifications, discounts, and personalized
                  offers, making the shopping experience delightful and
                  sustainable.
                </span>
              </div>
              <div
                className="relative aspect-[4/3] md:aspect-[1.8/1] w-full overflow-hidden rounded-3xl"
                style={{
                  background:
                    "linear-gradient(180deg, #80DA48 0%, #8CEB58 25%, #63D646 50%, #63D646 75%, #1BCC40 90%, #1ACA3F 100%)",
                }}
              >
                <Image
                  src="/images/projects/DB-3.png"
                  alt="DigiBill Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 lg:gap-15">
              <div className="w-full max-w-fit bg-gradient-to-l from-[rgba(140,237,83,1)] to-[rgba(48,177,60,1)] py-4 lg:py-6 px-8 lg:px-15 rounded-[10px]">
                <span className="text-lg lg:text-[1.25rem] text-[#FFFFFF] font-semibold text-center block">
                  Key Features of Our Innovative Customer App
                </span>
              </div>
              <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-10">
                  <div className="w-full max-w-[35rem] flex items-center justify-center gap-3">
                    <div className="relative aspect-[1/1] w-[4rem] lg:w-[6rem] overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/projects/DBA-icon-1.svg"
                        alt="DigiBill icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                        Digital bill access
                      </h4>
                      <p className="text-sm lg:text-base font-normal text-[#000000]">
                        Access and manage bills digitally, eliminating the need
                        for paper records and enhancing convenience.
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[35rem] flex items-center justify-center gap-3">
                    <div className="relative aspect-[1/1] w-[4rem] lg:w-[6rem] overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/projects/DBA-icon-2.svg"
                        alt="DigiBill icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                        Family member integration
                      </h4>
                      <p className="text-sm lg:text-base font-normal text-[#000000]">
                        Add family members to the app for easy tracking of
                        collective shopping expenses.
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[35rem] flex items-center justify-center gap-3">
                    <div className="relative aspect-[1/1] w-[4rem] lg:w-[6rem] overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/projects/DBA-icon-3.svg"
                        alt="DigiBill icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                        Real-time notifications
                      </h4>
                      <p className="text-sm lg:text-base font-normal text-[#000000]">
                        Receive instant alerts on new bills, payment reminders,
                        and exclusive discounts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-10">
                  <div className="w-full max-w-[35rem] flex items-center justify-center gap-3">
                    <div className="relative aspect-[1/1] w-[4rem] lg:w-[6rem] overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/projects/DBA-icon-4.svg"
                        alt="DigiBill icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                        Expense tracking
                      </h4>
                      <p className="text-sm lg:text-base font-normal text-[#000000]">
                        Monitor and track shopping expenses, helping customers
                        stay on top of their budgets.
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[35rem] flex items-center justify-center gap-3">
                    <div className="relative aspect-[1/1] w-[4rem] lg:w-[6rem] overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/projects/DBA-icon-5.svg"
                        alt="DigiBill icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                        Spending insights
                      </h4>
                      <p className="text-sm lg:text-base font-normal text-[#000000]">
                        Gain valuable insights into spending patterns, enabling
                        customers to make informed financial decisions.
                      </p>
                    </div>
                  </div>
                  <div className="w-full max-w-[35rem] flex items-center justify-center gap-3">
                    <div className="relative aspect-[1/1] w-[4rem] lg:w-[6rem] overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/projects/DBA-icon-6.svg"
                        alt="DigiBill icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <h4 className="text-lg lg:text-[1.25rem] font-semibold text-[#000000]">
                        Personalized offers
                      </h4>
                      <p className="text-sm lg:text-base font-normal text-[#000000]">
                        Enjoy customized discounts and offers based on shopping
                        preferences and behaviors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 lg:gap-15">
              <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-6xl mx-auto gap-8 lg:gap-12">
                <div className="flex flex-col items-center justify-center gap-4 lg:gap-5">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                      The{" "}
                      <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                        Reasons to Opt{" "}
                      </span>
                      For{" "}
                      <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                        DigiBill
                      </span>
                    </span>
                    <span className="text-2xl lg:text-4xl font-normal text-[#000000] text-center">
                      In Your{" "}
                      <span className="text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
                        Billing Workflow
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-4xl lg:max-w-[60rem] flex flex-col items-center justify-center gap-8 lg:gap-12">
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="text-xl lg:text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                      Environmental Sustainability
                      <span className="absolute left-0 -bottom-1 h-[4px] lg:h-[6px] w-full rounded-lg bg-[linear-gradient(90deg,#34D042_-0.55%,#7EDA48_52.31%,rgba(154,231,109,0.5)_100%)]"></span>
                    </h4>
                  </div>
                  <p className="text-sm lg:text-base font-normal text-[#000000]">
                    By eliminating paper bills, DigiBill significantly reduces
                    the consumption of paper, contributing to a greener and more
                    sustainable future. Embracing digital billing helps to
                    conserve precious natural resources, reduce carbon emissions
                    associated with paper production, and minimize waste.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="text-xl lg:text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                      Growth and Scalability
                      <span className="absolute left-0 -bottom-1 h-[4px] lg:h-[6px] w-full rounded-lg bg-[linear-gradient(90deg,#34D042_-0.55%,#7EDA48_52.31%,rgba(154,231,109,0.5)_100%)]"></span>
                    </h4>
                  </div>
                  <p className="text-sm lg:text-base font-normal text-[#000000]">
                    DigiBill facilitates business growth and scalability by
                    providing a solid foundation for efficient billing
                    processes. With centralized control and real-time insights
                    offered by the Admin app, owners can effectively manage
                    multiple branches and make informed decisions to support
                    expansion. The streamlined operations and improved customer
                    experience foster customer loyalty and attract new business,
                    enabling businesses to scale and thrive in a competitive
                    market.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="text-xl lg:text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                      Streamlined Operations
                      <span className="absolute left-0 -bottom-1 h-[4px] lg:h-[6px] w-full rounded-lg bg-[linear-gradient(90deg,#34D042_-0.55%,#7EDA48_52.31%,rgba(154,231,109,0.5)_100%)]"></span>
                    </h4>
                  </div>
                  <p className="text-sm lg:text-base font-normal text-[#000000]">
                    DigiBill simplifies and streamlines the billing process,
                    benefiting merchants and store owners. By digitizing the
                    billing process with the Merchant app, businesses can save
                    time and effort typically spent on manual invoicing and
                    record-keeping. The automation and efficiency of DigiBill
                    help reduce errors and minimize delays in generating and
                    managing bills, ultimately improving overall operational
                    efficiency.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="text-xl lg:text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                      Centralized Management
                      <span className="absolute left-0 -bottom-1 h-[4px] lg:h-[6px] w-full rounded-lg bg-[linear-gradient(90deg,#34D042_-0.55%,#7EDA48_52.31%,rgba(154,231,109,0.5)_100%)]"></span>
                    </h4>
                  </div>
                  <p className="text-sm lg:text-base font-normal text-[#000000]">
                    The Admin app of DigiBill offers business owners with
                    multiple branches a centralized dashboard for streamlined
                    management. This comprehensive tool provides valuable
                    insights into each store's performance, sales data, and
                    customer behavior. With advanced analytics and reporting
                    features, owners can make informed decisions, identify
                    trends, and optimize strategies across all branches.
                    Centralized management saves time, improves coordination,
                    and enables effective decision-making to drive business
                    growth.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="text-xl lg:text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                      Cost Savings
                      <span className="absolute left-0 -bottom-1 h-[4px] lg:h-[6px] w-full rounded-lg bg-[linear-gradient(90deg,#34D042_-0.55%,#7EDA48_52.31%,rgba(154,231,109,0.5)_100%)]"></span>
                    </h4>
                  </div>
                  <p className="text-sm lg:text-base font-normal text-[#000000]">
                    DigiBill can help businesses save costs in various ways. By
                    eliminating paper bills, businesses can reduce expenses
                    associated with printing, stationery, and physical storage.
                    Digital bills also eliminate the need for manual data entry
                    and processing, minimizing labor costs and potential errors.
                    Furthermore, DigiBill's analytics and reporting features
                    enable owners to identify cost-saving opportunities,
                    optimize inventory management, and improve operational
                    efficiency, leading to long-term financial benefits.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="text-xl lg:text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                      Data Security and Accessibility
                      <span className="absolute left-0 -bottom-1 h-[4px] lg:h-[6px] w-full rounded-lg bg-[linear-gradient(90deg,#34D042_-0.55%,#7EDA48_52.31%,rgba(154,231,109,0.5)_100%)]"></span>
                    </h4>
                  </div>
                  <p className="text-sm lg:text-base font-normal text-[#000000]">
                    DigiBill ensures the security and privacy of sensitive
                    billing information. By storing digital bills in secure
                    servers, it minimizes the risk of physical document loss or
                    unauthorized access. Additionally, the cloud-based nature of
                    DigiBill enables authorized users to access bills and data
                    from anywhere, anytime, using any device with internet
                    connectivity. This flexibility and accessibility enhance
                    convenience for both businesses and customers.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 lg:gap-7">
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="text-xl lg:text-[1.9rem] font-semibold text-[#000000] relative w-fit">
                      Enhanced Customer Experience
                      <span className="absolute left-0 -bottom-1 h-[4px] lg:h-[6px] w-full rounded-lg bg-[linear-gradient(90deg,#34D042_-0.55%,#7EDA48_52.31%,rgba(154,231,109,0.5)_100%)]"></span>
                    </h4>
                  </div>
                  <p className="text-sm lg:text-base font-normal font-poppins text-[#000000]">
                    DigiBill's Customer app elevates the shopping experience for
                    customers. By providing instant access to digital bills,
                    customers can conveniently track their expenses, review past
                    bills, and monitor their spending patterns. The ability to
                    add family members to the app further simplifies expense
                    tracking for households. Real-time notifications,
                    personalized offers, and discounts also enhance the overall
                    customer experience, making shopping more enjoyable and
                    engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigiBill;
