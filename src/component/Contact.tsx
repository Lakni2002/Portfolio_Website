import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import MagicBentoCard from "./MagicBentoCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-24 text-white"
    >
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#6b21a8]/18 blur-[160px]" />
        <div className="absolute left-[12%] top-[45%] h-[520px] w-[520px] rounded-full bg-[#3b82f6]/10 blur-[180px]" />
        <div className="absolute right-[10%] top-[30%] h-[520px] w-[520px] rounded-full bg-[#a855f7]/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-[44px] font-semibold tracking-wide">
          Contact
        </h2>

        <div className="mt-16 grid items-start gap-10 md:grid-cols-2">
          {/* LEFT: contact pills */}
          <div className="space-y-30">
            <ContactPill
              icon={<Mail className="h-5 w-5" />}
              text="lakniweera20@gmail.com"
              href="mailto:lakniweera20@gmail.com"
            />
            <ContactPill
              icon={<Phone className="h-5 w-5" />}
              text="075-2129339"
              href="tel:+94752129339"
            />
            <ContactPill icon={<MapPin className="h-5 w-5" />} text="Sri-Lanka" />
            <ContactPill
              icon={<Linkedin className="h-5 w-5" />}
              text="Lakni-Weerasinghe"
              href="https://www.linkedin.com/"
            />
          </div>

          {/* RIGHT: glass form card (Magic Bento hover glow) */}
          <MagicBentoCard className="bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                // Later you can connect EmailJS / Formspree here
              }}
            >
              <Field label="E-mail">
                <input type="email" placeholder="" className={inputClass} />
              </Field>

              <Field label="Name">
                <input type="text" placeholder="" className={inputClass} />
              </Field>

              <Field label="Subject">
                <input type="text" placeholder="" className={inputClass} />
              </Field>

              <Field label="Message">
                <textarea rows={4} placeholder="" className={textareaClass} />
              </Field>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#6d28d9] py-3 font-medium shadow-[0_16px_50px_rgba(124,58,237,0.35)] transition hover:brightness-110 active:scale-[0.99]"
              >
                Send
              </button>
            </form>
          </MagicBentoCard>
        </div>
      </div>
    </section>
  );
}

function ContactPill({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const pill = (
    <div className="flex w-full max-w-[320px] items-center gap-3 rounded-2xl bg-white/7 px-5 py-4 ring-1 ring-white/10 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition hover:bg-white/10">
      <span className="text-white/85">{icon}</span>
      <span className="text-sm text-white/90">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        {pill}
      </a>
    );
  }

  return pill;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-white/85">{label}</div>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 ring-1 ring-white/15 outline-none backdrop-blur-md transition focus:ring-2 focus:ring-purple-500/50";

const textareaClass =
  "w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 ring-1 ring-white/15 outline-none backdrop-blur-md transition focus:ring-2 focus:ring-purple-500/50";
