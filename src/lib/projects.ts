import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  id: string;
  title: string;
  company: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  date: string;
  duration: string;
  role: string;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getAllProjects(): Project[] {
  // Get file names under /content/projects
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      // Combine the data with the id and content
      return {
        id,
        content: matterResult.content,
        ...matterResult.data,
      } as Project;
    });
  
  // Sort projects by date (newest first)
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter(project => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  const allProjects = getAllProjects();
  return allProjects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter(project => project.category === category);
} 