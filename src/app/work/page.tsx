import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';

export default function Work() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-normal text-gray-900 mb-4">Projects</h1>
          <p className="text-gray-700 leading-relaxed">
            A collection of projects I've worked on, from internships to personal experiments. 
            Each project represents a learning opportunity and a chance to solve interesting problems.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-medium text-gray-900">
                  <Link 
                    href={`/work/${project.id}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {project.title}
                  </Link>
                </h2>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>
              
              <div className="mb-3">
                <span className="text-sm text-gray-600">{project.company}</span>
                <span className="text-sm text-gray-400 mx-2">•</span>
                <span className="text-sm text-gray-600">{project.type}</span>
                <span className="text-sm text-gray-400 mx-2">•</span>
                <span className="text-sm text-gray-600">{project.duration}</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <p className="text-xs text-gray-500 mb-4">
                {project.technologies.join(' • ')}
              </p>
              
              <div className="flex space-x-4">
                <Link
                  href={`/work/${project.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Read more
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Live demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Source code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
} 