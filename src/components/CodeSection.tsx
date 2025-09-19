'use client';

import { Github } from 'lucide-react';
import type { CodeProject } from '@/config/portfolio';

interface CodeSectionProps {
  title: string;
  projects: CodeProject[];
}


const getHoverAnimation = (animation: CodeProject['hoverAnimation']) => {
  switch (animation) {
    case 'rotate':
      return 'group-hover:rotate-12';
    case 'slide':
      return 'group-hover:-rotate-12';
    case 'glow':
      return 'group-hover:rotate-45';
    case 'scale':
      return 'group-hover:rotate-180';
    default:
      return 'group-hover:rotate-12';
  }
};

const getContainerAnimation = (animation: CodeProject['hoverAnimation']) => {
  switch (animation) {
    case 'glow':
      return 'hover:shadow-2xl group-hover:animate-pulse-glow';
    case 'slide':
      return 'hover:translate-x-2 hover:shadow-lg';
    case 'scale':
      return 'hover:shadow-2xl hover:scale-[1.02]';
    default:
      return 'hover:shadow-2xl';
  }
};

const getTranslateAnimation = (animation: CodeProject['hoverAnimation']) => {
  switch (animation) {
    case 'slide':
      return 'hover:-translate-y-1';
    default:
      return '';
  }
};

function ProjectCard({ project }: { project: CodeProject }) {
  const iconAnimation = getHoverAnimation(project.hoverAnimation);
  const containerAnimation = getContainerAnimation(project.hoverAnimation);
  const translateAnimation = getTranslateAnimation(project.hoverAnimation);

  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-2xl p-4 ${containerAnimation} ${translateAnimation} transition-all duration-300 flex group cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-gray-500/10`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 px-1">
          <div className="w-8 h-8 relative overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-300">
            <img
              src={project.iconUrl}
              alt="GitHub icon"
              className={`w-5 h-5 ${iconAnimation} transition-transform duration-${project.hoverAnimation === 'scale' ? '500' : '300'}`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
              }}
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {project.name}
            </h4>
            <p className="text-sm text-gray-600 hidden sm:block">{project.description}</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-gray-100 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Open GitHub
          <Github size={12} />
        </span>
      </div>
    </a>
  );
}

export default function CodeSection({ title, projects }: CodeSectionProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-[3rem] py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <div className="mb-6">
            <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">
              {title}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}