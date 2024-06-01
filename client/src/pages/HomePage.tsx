import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-200 dark:bg-gray-950 text-gray-800 dark:text-gray-50 px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#" rel="ugc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          <span className="sr-only">Asset Management</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/dashboard"
          >
            DashBoard
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/assets"
          >
            Assets
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={"/maintenance"}
            rel="ugc"
          >
            Maintenance
          </Link>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://deepanshupatel.netlify.app"
            target="_blank"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 text-gray-950 bg-gray-200 dark:bg-gray-950 dark:text-gray-50">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-display">
                  Streamline Your Asset Management
                </h1>
                <p className="max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400 font-body">
                  Our cutting-edge asset management system empowers you to
                  effortlessly track, monitor, and optimize your valuable
                  assets, ensuring maximum efficiency and productivity.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-cyan-400 dark:bg-gray-800 px-3 py-1 text-sm font-body">
                  New Features
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                    <span className="font-body text-gray-400">
                      Comprehensive asset tracking
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                    <span className="font-body text-gray-400">
                      Predictive maintenance alerts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-green-500"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                    <span className="font-body text-gray-400">
                      Intuitive reporting and analytics
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 font-body"
                    href="#"
                    rel="ugc"
                  >
                    Get Started
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-950 px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50 font-body"
                    href="#"
                    rel="ugc"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-body dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-display">
                  Unlock the Power of Asset Management
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-body">
                  Our asset management system is designed to streamline your
                  operations, boost productivity, and drive business growth.
                  Explore the key features that set us apart.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold font-display">
                        Comprehensive Asset Tracking
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-body">
                        Effortlessly monitor the location, condition, and usage
                        of your assets in real-time, ensuring optimal
                        utilization and accountability.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold font-display">
                        Predictive Maintenance
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-body">
                        Receive proactive alerts and recommendations to schedule
                        maintenance, reducing downtime and extending the
                        lifespan of your assets.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold font-display">
                        Intuitive Reporting
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-body">
                        Gain valuable insights through comprehensive reports and
                        analytics, empowering you to make data-driven decisions
                        and optimize asset utilization.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm font-body">
                  Developer Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-display">
                  Backed by a Skilled Developer
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  The asset management system was developed by Deepnashu Patel
                  with a strong background in MERN Stack and a passion for
                  creating innovative solutions. Explore my expertise and
                  qualifications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold font-display">
                        Education
                      </h3>
                      <p className="text-gray-400 font-body">
                        Bachelor's degree in Computer Application from a
                        top-tier university, with a focus on Web Development.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold font-display">Skills</h3>
                      <p className="text-gray-400 font-body">
                        Proficient in React, Node.js, SQL, NoSQL and Express.
                        Experienced in building scalable and secure web
                        applications.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold font-display">
                        Experience
                      </h3>
                      <p className="text-gray-400 font-body">
                        1.5+ years of experience in learning of Web Development,
                        working on a variety of projects ..
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm font-body">
                  Developer Profile
                </div>
                <div className="bg-gray-800 rounded-lg grid gap-4 px-4 py-3">
                  <div className="grid gap-0.5">
                    <div className="text-xl font-bold font-display">
                      Deepanshu Patel
                    </div>
                    <div className="text-sm text-gray-400 font-body">
                      Full Stack Developer (MERN)
                    </div>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 h-[1px] w-full bg-gray-700"
                  />
                  <div className="grid gap-0.5">
                    <div className="text-xs uppercase font-bold font-body">
                      Education
                    </div>
                    <div className="text-sm text-gray-300 font-body">
                      Bachelor's in Computer Application, Maharishi Mahesh Yogi
                      Vedic Vishvavidyalaya,
                    </div>
                  </div>
                  <div className="grid gap-0.5">
                    <div className="text-xs uppercase font-bold font-body">
                      Skills
                    </div>
                    <div className="text-sm text-gray-300 flex items-center flex-wrap gap-4 font-body">
                      <div>React</div>
                      <div>Node.js</div>
                      <div>SQL</div>
                      <div>NoSQL</div>
                      <div>Express.js</div>
                      <div>TypeScript</div>
                    </div>
                  </div>
                  <div className="grid gap-0.5">
                    <div className="text-xs uppercase font-bold font-body">
                      Experience
                    </div>
                    <div className="text-sm text-gray-300 font-body">
                      1.5+ years of experience in learning of Web Development,
                      working on a variety of projects ..
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
