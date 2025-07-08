import { getAllProjects, getProjectById } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/work"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to projects
          </Link>
        </div>
        
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-normal text-gray-900">
              {project.title}
            </h1>
            <span className="text-sm text-gray-500">{project.date}</span>
          </div>
          
          <div className="mb-4">
            <span className="text-gray-600">{project.company}</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-600">{project.type}</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-600">{project.duration}</span>
          </div>
          
          <p className="text-xs text-gray-500 mb-6">
            {project.technologies.join(' • ')}
          </p>
          
          <div className="flex space-x-4">
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
        
        {/* Project Content */}
        <div className="prose prose-gray max-w-none prose-headings:font-medium prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-li:text-gray-700 prose-strong:text-gray-900">
          <MDXRemote source={project.content} />
        </div>
      </div>
    </div>
  );
} 