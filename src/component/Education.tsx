import sliitLogo from "../assets/images/education/sliit.png";
import schoolLogo from "../assets/images/education/school.png";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-transparent py-24 text-white"
    >
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[560px] w-[960px] -translate-x-1/2 rounded-full bg-[#6b21a8]/20 blur-[170px]" />
        <div className="absolute left-[10%] top-[35%] h-[460px] w-[460px] rounded-full bg-[#3b82f6]/10 blur-[180px]" />
        <div className="absolute right-[10%] top-[65%] h-[460px] w-[460px] rounded-full bg-[#a855f7]/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Title */}
        <h2 className="text-center text-[42px] font-semibold tracking-wide">
          Education
        </h2>

        {/* Cards wrapper */}
        <div className="mx-auto mt-14 flex max-w-[620px] flex-col gap-16">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white/5 px-10 py-12 text-center ring-1 ring-white/10 backdrop-blur-xl shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
            <div className="mx-auto grid h-[84px] w-[84px] place-items-center">
              <img
                src={sliitLogo}
                alt="SLIIT Logo"
                className="h-[78px] w-[78px] object-contain drop-shadow"
              />
            </div>

            <h3 className="mt-6 text-[22px] font-semibold">SLIIT City Uni</h3>
            <p className="mt-2 text-[15px] font-medium text-white/85">
              University of Bedfordshire
            </p>
            <p className="mt-2 text-[13px] text-white/70">
              BSc(Hons) Computer Science Undergraduate
            </p>
            <p className="mt-3 text-[11px] text-white/45">
              September 2023 – December 2026
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white/5 px-10 py-12 text-center ring-1 ring-white/10 backdrop-blur-xl shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
            <div className="mx-auto grid h-[84px] w-[84px] place-items-center">
              <img
                src={schoolLogo}
                alt="School Logo"
                className="h-[70px] w-[70px] object-contain drop-shadow"
              />
            </div>

            <h3 className="mt-6 text-[22px] font-semibold">
              Secondary Education
            </h3>
            <p className="mt-2 text-[15px] font-medium text-white/85">
              St.Thomas Girls’ High School
            </p>

            <p className="mx-auto mt-3 max-w-[520px] text-[12px] leading-5 text-white/70">
              Completed G.C.E O/L with excellent results (8 A’s, 1 B) and
              completed G.C.E A/L (Maths Stream) with 3 C’s and 1 S.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
