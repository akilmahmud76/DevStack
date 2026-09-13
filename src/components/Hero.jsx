import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="brand-gradient-bg rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={banner} alt="Layered illustration of a development stack" className="w-64 sm:w-80 md:w-96" />
      </div>
    </section>
  );
}
