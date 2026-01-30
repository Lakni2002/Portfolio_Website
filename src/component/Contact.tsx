import React, { useRef, useState } from "react";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import MagicBentoCard from "./MagicBentoCard";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // ✅ NEW: email validation message
  const [emailError, setEmailError] = useState<string | null>(null);

  // ✅ PUT YOUR EMAILJS VALUES HERE
  const SERVICE_ID = "service_v0sv67i";
  const TEMPLATE_ID = "template_63v7hnm";
  const PUBLIC_KEY = "Vg6yUJmrQiyj95K2-";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // ✅ clear email error before submit
    setEmailError(null);

    if (!formRef.current) return;

    // ✅ block submit if email is invalid
    const emailInput = formRef.current.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement | null;

    if (emailInput && !emailInput.checkValidity()) {
      setEmailError("❌ Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus("✅ Message sent successfully!");
      formRef.current.reset();

      // ✅ clear email error after success
      setEmailError(null);
    } catch (err) {
      setStatus("❌ Failed to send. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
          <div className="space-y-10">
            <ContactPill
              icon={<Mail className="h-6 w-5" />}
              text="lakniweera20@gmail.com"
              href="mailto:lakniweera20@gmail.com"
            />
            <ContactPill
              icon={<Github className="h-5 w-5" />}
              text="lakni-weerasinghe"
              href="https://github.com/Lakni2002"
            />
            <ContactPill
              icon={<MapPin className="h-5 w-5" />}
              text="Colombo,Sri-Lanka"
            />
            <ContactPill
              icon={<Linkedin className="h-5 w-5" />}
              text="Lakni-Weerasinghe"
              href="https://www.linkedin.com/in/lakni-weerasinghe-5a4610352/"
            />
          </div>

          {/* RIGHT: form */}
          <MagicBentoCard className="bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
              <Field label="E-mail">
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClass}
                  // ✅ NEW: show custom message under card (not browser popup)
                  onInvalid={(e) => {
                    e.preventDefault();
                    setEmailError("❌ Please enter a valid email address.");
                  }}
                  // ✅ NEW: remove error when user starts fixing it
                  onInput={(e) => {
                    const v = (e.currentTarget as HTMLInputElement).value;
                    if (
                      v &&
                      (e.currentTarget as HTMLInputElement).checkValidity()
                    ) {
                      setEmailError(null);
                    }
                  }}
                />
              </Field>

              <Field label="Name">
                <input
                  type="text"
                  name="name"
                  required
                  className={inputClass}
                />
              </Field>

              <Field label="Subject">
                <input
                  type="text"
                  name="subject"
                  required
                  className={inputClass}
                />
              </Field>

              <Field label="Message">
                <textarea
                  rows={4}
                  name="message"
                  required
                  className={textareaClass}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-full bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#6d28d9] py-3 font-medium shadow-[0_16px_50px_rgba(124,58,237,0.35)] transition hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {/* ✅ NEW: show email error below the card like other messages */}
              {emailError && (
                <p className="pt-2 text-sm text-white/80">{emailError}</p>
              )}

              {/* existing status message (success / failed) */}
              {status && <p className="pt-2 text-sm text-white/80">{status}</p>}
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
  "w-full rounded-xl bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent " +
  "px-4 py-3 text-sm text-white/90 placeholder:text-white/40 " +
  "ring-1 ring-white/15 outline-none backdrop-blur-md transition " +
  "focus:ring-2 focus:ring-purple-500/50";

const textareaClass =
  "w-full resize-none rounded-xl bg-transparent focus:bg-transparent active:bg-transparent hover:bg-transparent " +
  "px-4 py-3 text-sm text-white/90 placeholder:text-white/40 " +
  "ring-1 ring-white/15 outline-none backdrop-blur-md transition " +
  "focus:ring-2 focus:ring-purple-500/50";
