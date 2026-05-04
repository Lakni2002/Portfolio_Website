import React, { useRef, useState } from "react";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import MagicBentoCard from "./MagicBentoCard";
import emailjs from "@emailjs/browser";

type FormErrors = {
  email?: string;
  name?: string;
  subject?: string;
  message?: string;
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // PUT YOUR EMAILJS VALUES HERE
  const SERVICE_ID = "service_v0sv67i";
  const TEMPLATE_ID = "template_63v7hnm";
  const PUBLIC_KEY = "Vg6yUJmrQiyj95K2-";

  const validateField = (name: string, value: string): string => {
    const trimmedValue = value.trim();

    if (name === "email") {
      if (!trimmedValue) {
        return "Email is required.";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(trimmedValue)) {
        return "Please enter a valid email address.";
      }
    }

    if (name === "name") {
      if (!trimmedValue) {
        return "Name is required.";
      }

      if (trimmedValue.length < 2) {
        return "Name must be at least 2 characters.";
      }

      const nameRegex = /^[A-Za-z\s.'-]+$/;

      if (!nameRegex.test(trimmedValue)) {
        return "Name can only contain letters and basic symbols.";
      }
    }

    if (name === "subject") {
      if (!trimmedValue) {
        return "Subject is required.";
      }

      if (trimmedValue.length < 3) {
        return "Subject must be at least 3 characters.";
      }
    }

    if (name === "message") {
      if (!trimmedValue) {
        return "Message is required.";
      }


    }

    return "";
  };

  const validateForm = () => {
    if (!formRef.current) return false;

    const formData = new FormData(formRef.current);

    const email = String(formData.get("email") || "");
    const name = String(formData.get("name") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const newErrors: FormErrors = {
      email: validateField("email", email),
      name: validateField("name", name),
      subject: validateField("subject", subject),
      message: validateField("message", message),
    };

    Object.keys(newErrors).forEach((key) => {
      const errorKey = key as keyof FormErrors;

      if (!newErrors[errorKey]) {
        delete newErrors[errorKey];
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setIsSent(false);
    setStatus(null);

    setErrors((prevErrors) => {
      const fieldError = validateField(name, value);

      return {
        ...prevErrors,
        [name]: fieldError || undefined,
      };
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSent(false);

    if (!formRef.current) return;

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setIsSent(true);
      setStatus("Message sent successfully!");
      setErrors({});
      formRef.current.reset();
    } catch (err) {
      setStatus("Failed to send. Please try again.");
      setIsSent(false);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-transparent py-5 text-white md:scroll-mt-32"
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
          <div className="space-y-4">
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
              <Field label="E-mail" error={errors.email}>
                <input
                  type="email"
                  name="email"
                  required
                  className={`${inputClass} ${
                    errors.email ? errorInputClass : ""
                  }`}
                  onChange={handleInputChange}
                  onBlur={(e) => {
                    const fieldError = validateField(
                      e.currentTarget.name,
                      e.currentTarget.value,
                    );

                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      email: fieldError || undefined,
                    }));
                  }}
                />
              </Field>

              <Field label="Name" error={errors.name}>
                <input
                  type="text"
                  name="name"
                  required
                  className={`${inputClass} ${
                    errors.name ? errorInputClass : ""
                  }`}
                  onChange={handleInputChange}
                  onBlur={(e) => {
                    const fieldError = validateField(
                      e.currentTarget.name,
                      e.currentTarget.value,
                    );

                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      name: fieldError || undefined,
                    }));
                  }}
                />
              </Field>

              <Field label="Subject" error={errors.subject}>
                <input
                  type="text"
                  name="subject"
                  required
                  className={`${inputClass} ${
                    errors.subject ? errorInputClass : ""
                  }`}
                  onChange={handleInputChange}
                  onBlur={(e) => {
                    const fieldError = validateField(
                      e.currentTarget.name,
                      e.currentTarget.value,
                    );

                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      subject: fieldError || undefined,
                    }));
                  }}
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className={`${textareaClass} ${
                    errors.message ? errorInputClass : ""
                  }`}
                  onChange={handleInputChange}
                  onBlur={(e) => {
                    const fieldError = validateField(
                      e.currentTarget.name,
                      e.currentTarget.value,
                    );

                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      message: fieldError || undefined,
                    }));
                  }}
                />
              </Field>

              {isSent ? (
                <div className="mt-2 w-full rounded-full bg-white/10 py-3 text-center text-sm font-medium text-white/90 ring-1 ring-green-400/40">
                  {status}
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#6d28d9] py-3 font-medium shadow-[0_16px_50px_rgba(124,58,237,0.35)] transition hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              )}

              {status && !isSent && (
                <p className="pt-2 text-sm text-white/80">{status}</p>
              )}
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
    <div className="flex w-full max-w-[320px] items-center gap-4 rounded-2xl bg-white/7 px-5 py-4 ring-1 ring-white/10 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition hover:bg-white/10">
      <span className="text-white/85">{icon}</span>
      <span className="text-sm text-white/90">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block"
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
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-white/85">{label}</div>
      {children}
      {error && <p className="mt-2 text-xs text-red-300">{error}</p>}
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

const errorInputClass = "ring-red-400/60 focus:ring-red-400/70";