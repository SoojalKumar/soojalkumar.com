"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-4 focus:ring-cyan-100";

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };
  const subject = form.subject.trim() || "Portfolio message";

  return (
    <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">Write a Message</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Have an opportunity, collaboration idea, or technical project in mind? Send me a message and I&apos;ll get
            back to you.
          </p>
        </div>

        <form action={`https://formsubmit.co/${profile.email}`} method="POST" className="grid gap-5">
          <input type="hidden" name="_subject" value={`Portfolio message: ${subject}`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://soojalkumar.com/contact" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Name
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </label>

            <label className="block text-sm font-semibold text-ink">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="your.email@example.com"
                className={inputClass}
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-ink">
            Subject
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={(event) => updateField("subject", event.target.value)}
              placeholder="Opportunity, collaboration, project, or question"
              className={inputClass}
            />
          </label>

          <label className="block text-sm font-semibold text-ink">
            Message
            <textarea
              required
              name="message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Write your message here..."
              rows={6}
              className={`${inputClass} resize-y`}
            />
          </label>

          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            >
              Send Message <Send size={18} />
            </button>
            <p className="mt-3 text-sm text-slate-500">
              This sends the message to my inbox from the website. Prefer email directly? Reach me at{" "}
              <a href={`mailto:${profile.email}`} className="font-semibold text-accent hover:text-sky-500">
                {profile.email}
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
