import { useEffect, useState } from 'react';
import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaCode,
} from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { getAllSkills } from '../services/skillService';

// Maps the `icon` string stored in the database to an actual icon component.
// Falls back to a generic code icon for anything unrecognized.
const ICON_MAP = {
  java: <FaJava />,
  spring: <SiSpringboot />,
  react: <FaReact />,
  javascript: <FaJsSquare />,
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  tailwind: <SiTailwindcss />,
  postgresql: <SiPostgresql />,
  git: <FaGitAlt />,
  docker: <FaDocker />,
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllSkills()
      .then((data) => setSkills(data))
      .catch(() => setError('Could not load skills. Is the backend running?'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="skills" className="bg-slate-50">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with, fetched live from the backend API.
        </p>

        {loading && (
          <p className="text-center text-slate-400">Loading skills...</p>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="card p-6 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:border-primary-200"
              >
                <span className="text-4xl text-primary-600">
                  {ICON_MAP[skill.icon] || <FaCode />}
                </span>
                <span className="font-medium text-slate-700 text-sm text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
