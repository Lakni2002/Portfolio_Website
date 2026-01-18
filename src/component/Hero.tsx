export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#0b0613] text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I’m <span className="text-blue-400">Lakni</span> 👋
      </h1>

      <p className="mt-4 max-w-xl text-white/70 text-lg">
        UI/UX Designer & Front-End Developer. I create modern and user-friendly web experiences.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
          View Projects
        </button>

        <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
