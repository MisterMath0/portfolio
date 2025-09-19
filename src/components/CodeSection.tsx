import { Github } from 'lucide-react';
import { CodeProject } from '@/config/portfolio';

interface CodeSectionProps {
  title: string;
  projects: CodeProject[];
}

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; hover: string; text: string; button: string; border: string; shadow: string }> = {
    yellow: {
      bg: 'bg-yellow-100',
      hover: 'group-hover:bg-yellow-200',
      text: 'text-yellow-700',
      button: 'bg-yellow-100 text-yellow-800',
      border: 'hover:border-yellow-200',
      shadow: 'hover:shadow-yellow-500/20'
    },
    blue: {
      bg: 'bg-blue-100',
      hover: 'group-hover:bg-blue-200',
      text: 'text-blue-700',
      button: 'bg-blue-100 text-blue-800',
      border: 'hover:border-blue-200',
      shadow: 'hover:shadow-blue-500/10'
    },
    purple: {
      bg: 'bg-purple-100',
      hover: 'group-hover:bg-purple-200',
      text: 'text-purple-700',
      button: 'bg-purple-100 text-purple-800',
      border: 'hover:border-purple-200',
      shadow: 'hover:shadow-purple-500/20'
    },
    green: {
      bg: 'bg-green-100',
      hover: 'group-hover:bg-green-200',
      text: 'text-green-700',
      button: 'bg-green-100 text-green-800',
      border: 'hover:border-green-200',
      shadow: 'hover:shadow-green-500/10'
    },
    indigo: {
      bg: 'bg-indigo-100',
      hover: 'group-hover:bg-indigo-200',
      text: 'text-indigo-700',
      button: 'bg-indigo-100 text-indigo-800',
      border: 'hover:border-indigo-200',
      shadow: 'hover:shadow-indigo-500/20'
    },
  };

  return colorMap[color] || colorMap.yellow;
};

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
  const colorClasses = getColorClasses(project.iconColor);
  const iconAnimation = getHoverAnimation(project.hoverAnimation);
  const containerAnimation = getContainerAnimation(project.hoverAnimation);
  const translateAnimation = getTranslateAnimation(project.hoverAnimation);

  return (
    <div className={`bg-white rounded-2xl p-4 ${containerAnimation} ${translateAnimation} transition-all duration-300 flex group cursor-pointer border border-transparent ${colorClasses.border} ${colorClasses.shadow}`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 px-1">
          <div className={`w-8 h-8 relative overflow-hidden rounded-lg flex-shrink-0 ${colorClasses.bg} flex items-center justify-center ${colorClasses.hover} transition-all duration-300`}>
            <Github size={18} className={`${colorClasses.text} ${iconAnimation} transition-transform duration-${project.hoverAnimation === 'scale' ? '500' : '300'}`} />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <h4 className={`font-medium text-gray-900 group-hover:${colorClasses.text.replace('text-', 'text-').replace('-700', '-800')} transition-colors duration-300`}>
              {project.name}
            </h4>
            <p className="text-sm text-gray-600 hidden sm:block">{project.description}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${colorClasses.button} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
          Open GitHub
          <Github size={12} />
        </span>
      </div>
    </div>
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