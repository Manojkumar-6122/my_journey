import { useEffect, useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { getAllProjects } from '../services/projectService';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProjects()
      .then((data) => setProjects(data))
      .catch(() => setError('Could not load projects. Is the backend running?'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of things I've built, pulled live from the database.
        </p>

        {loading && <p className="text-center text-slate-400">Loading projects...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="card overflow-hidden flex flex-col hover:-translate-y-1"
              >
                <div className="h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                      >
                        <HiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
