import heroImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:px-6 md:flex-row md:justify-between md:py-20">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build Your Ideal
            <br />
            <span
              style={{
                background: "var(--brand-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-6 w-full max-w-xl text-base leading-7 text-gray-500 md:text-lg md:leading-8">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="w-full rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-3 font-medium text-white sm:w-auto">
              Explore Technologies
            </button>

            <button className="w-full rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={heroImage}
            alt="Development illustration"
            className="w-full max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
