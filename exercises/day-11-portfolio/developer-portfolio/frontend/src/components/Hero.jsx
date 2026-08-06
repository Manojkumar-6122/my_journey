import { HiDownload, HiMail } from 'react-icons/hi';

/**
 * Hero section — the first thing visitors see.
 * Name / title / intro currently come from static profile info, but could
 * just as easily be fetched from a `/api/profile` endpoint the same way
 * Projects and Skills are, if you want to make this fully dynamic too.
 */
export default function Hero() {
  const profile = {
    name: 'Your Name',
    title: 'Full Stack Java Developer',
    intro:
      "I build clean, scalable web applications with Java, Spring Boot, and React. Passionate about solving real problems with well-crafted code.",
    resumeUrl: '/resume.pdf',
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-slate-50"
    >
      <div className="section-container flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left animate-slide-up">
          <p className="text-primary-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
            Hi, I'm {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary-600 mb-6">
            {profile.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto md:mx-0 mb-8">
            {profile.intro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href={profile.resumeUrl} download className="btn-primary">
              <HiDownload className="text-lg" />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <HiMail className="text-lg" />
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile image placeholder */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-2 shadow-2xl shadow-primary-600/20">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Replace this placeholder with an <img src="..." /> of your real photo */}
              <span className="text-7xl font-bold text-primary-600">
                {profile.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
