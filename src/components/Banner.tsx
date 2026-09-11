import heroImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="text-pink-500">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-3 font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={heroImage}
            alt="Development illustration"
            className="w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;