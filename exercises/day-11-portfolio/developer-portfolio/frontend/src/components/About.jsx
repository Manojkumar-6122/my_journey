import { HiCode, HiLightningBolt, HiUsers } from 'react-icons/hi';

const highlights = [
  {
    icon: <HiCode />,
    title: 'Clean Code',
    text: 'I write maintainable, well-tested code following industry best practices.',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Fast Learner',
    text: 'Quick to pick up new tools, frameworks, and problem domains.',
  },
  {
    icon: <HiUsers />,
    title: 'Team Player',
    text: 'Comfortable collaborating in agile teams and communicating clearly.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A quick introduction to who I am and what I do.</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="animate-slide-up">
            <p className="text-slate-600 leading-relaxed mb-4">
              I'm a Full Stack Java Developer currently completing my internship, focused on
              building robust web applications using the Spring Boot and React ecosystem. I enjoy
              working across the entire stack — designing REST APIs, modeling data in PostgreSQL,
              and crafting responsive, accessible user interfaces.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              My goal is to keep growing as an engineer by taking on challenging projects,
              writing clean and testable code, and learning from every team I work with.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Outside of coding, I enjoy exploring new technologies, contributing to small open
              source projects, and continuously sharpening my problem-solving skills.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card p-6 flex items-start gap-4 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
