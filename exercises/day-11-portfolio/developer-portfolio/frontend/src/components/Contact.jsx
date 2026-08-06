import { useState } from 'react';
import { HiMail, HiUser, HiChatAlt2, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { submitContactMessage } from '../services/contactService';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | loading | success | error
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });
    setFieldErrors({});

    try {
      await submitContactMessage(form);
      setStatus({ state: 'success', message: 'Thanks! Your message has been sent.' });
      setForm(initialForm);
    } catch (err) {
      // If the backend returned field-level validation errors, surface them
      if (err.response?.status === 400 && typeof err.response.data === 'object') {
        setFieldErrors(err.response.data);
        setStatus({ state: 'error', message: 'Please fix the errors below.' });
      } else {
        setStatus({
          state: 'error',
          message: 'Something went wrong. Please try again later.',
        });
      }
    }
  };

  return (
    <section id="contact" className="bg-slate-50">
      <div className="section-container max-w-2xl">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or an opportunity? Send me a message below.
        </p>

        <form onSubmit={handleSubmit} className="card p-8 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Name
            </label>
            <div className="relative">
              <HiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
            {fieldErrors.name && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <HiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
            {fieldErrors.email && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
              Message
            </label>
            <div className="relative">
              <HiChatAlt2 className="absolute left-3.5 top-3.5 text-slate-400" />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            {fieldErrors.message && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status.state === 'loading'}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status.state === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status banner */}
          {status.state === 'success' && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 rounded-xl px-4 py-3 text-sm">
              <HiCheckCircle className="text-lg flex-shrink-0" /> {status.message}
            </div>
          )}
          {status.state === 'error' && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl px-4 py-3 text-sm">
              <HiExclamationCircle className="text-lg flex-shrink-0" /> {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
