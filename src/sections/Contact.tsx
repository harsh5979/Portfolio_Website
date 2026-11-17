import { useState, useCallback } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { Toast } from '../components/Toast';
import { Copy, MapPin, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/personal';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function sanitize(value: string): string {
  return value.trim().replace(/[<>]/g, '');
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = useCallback((message: string) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: '' }), 3000);
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(personalInfo.email).then(() => showToast('Email copied to clipboard'));
  }, [showToast]);

  const copyPhone = useCallback(() => {
    navigator.clipboard.writeText(personalInfo.phone).then(() => showToast('Phone number copied to clipboard'));
  }, [showToast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: sanitize(value) }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // UI-only demo — no real backend required for static portfolio
    setSubmitted(true);
    showToast("Message sent! I'll get back to you soon.");
  };

  return (
    <AnimatedSection id="contact" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionTitle
          label="Contact"
          title="Get in touch"
          subtitle="Looking for an engineer who builds resilient systems from code to cloud? Reach out directly."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-text-secondary text-sm">
              <MapPin size={18} className="text-accent-primary shrink-0" aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-accent-primary shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-secondary hover:text-accent-primary text-sm transition-colors"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={copyEmail}
                className="text-text-muted hover:text-accent-primary transition-colors p-1 rounded"
                aria-label="Copy email address"
                title="Copy email"
              >
                <Copy size={14} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-accent-primary shrink-0" aria-hidden="true" />
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-text-secondary hover:text-accent-primary text-sm transition-colors"
              >
                {personalInfo.phone}
              </a>
              <button
                onClick={copyPhone}
                className="text-text-muted hover:text-accent-primary transition-colors p-1 rounded"
                aria-label="Copy phone number"
                title="Copy phone"
              >
                <Copy size={14} />
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 flex-wrap">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <span className="w-px h-4 bg-border" aria-hidden="true" />
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="bg-surface border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center gap-3 card-highlight">
              <div
                className="w-12 h-12 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center"
                aria-hidden="true"
              >
                <Mail size={20} className="text-accent-primary" />
              </div>
              <h3 className="font-semibold text-text-primary">Message sent!</h3>
              <p className="text-sm text-text-secondary">
                Thanks for reaching out. I'll get back to you as soon as I can.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', message: '' });
                }}
                className="text-sm text-accent-primary hover:underline mt-2 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-text-secondary mb-1.5"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your name"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/40 card-highlight transition-all duration-150"
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-xs text-red-400 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-text-secondary mb-1.5"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="you@email.com"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/40 card-highlight transition-all duration-150"
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-xs text-red-400 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-text-secondary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="What's on your mind?"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/40 card-highlight transition-all duration-150 resize-none"
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-xs text-red-400 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-accent-primary text-black text-sm font-semibold hover:bg-sky-400 active:scale-95 transition-all duration-200 shadow-lg shadow-sky-500/20 card-highlight cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </AnimatedSection>
  );
}
