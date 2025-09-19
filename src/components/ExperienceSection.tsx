import { ExternalLink } from 'lucide-react';
import { Experience } from '@/config/portfolio';

interface ExperienceSectionProps {
  title: string;
  experiences: Experience[];
}

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; hover: string; text: string; button: string; timeline: string; cardHover: string }> = {
    purple: {
      bg: 'bg-purple-100',
      hover: 'group-hover:bg-purple-200',
      text: 'text-purple-600',
      button: 'bg-purple-100 text-purple-800',
      timeline: 'bg-purple-500',
      cardHover: 'hover:bg-purple-50'
    },
    blue: {
      bg: 'bg-blue-100',
      hover: 'group-hover:bg-blue-200',
      text: 'text-blue-600',
      button: 'bg-blue-100 text-blue-800',
      timeline: 'bg-blue-500',
      cardHover: 'hover:bg-blue-50'
    },
    sky: {
      bg: 'bg-sky-100',
      hover: 'group-hover:bg-sky-200',
      text: 'text-sky-600',
      button: 'bg-sky-100 text-sky-800',
      timeline: 'bg-sky-500',
      cardHover: 'hover:bg-sky-50'
    },
    red: {
      bg: 'bg-red-100',
      hover: 'group-hover:bg-red-200',
      text: 'text-red-600',
      button: 'bg-red-100 text-red-800',
      timeline: 'bg-red-500',
      cardHover: 'hover:bg-red-50'
    },
  };

  return colorMap[color] || colorMap.blue;
};

function ExperienceItem({ experience }: { experience: Experience }) {
  const colorClasses = getColorClasses(experience.iconColor);

  return (
    <div className="relative flex items-start group">
      <div className={`absolute left-6 w-4 h-4 ${colorClasses.timeline} rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-200`}></div>
      <div className={`ml-16 bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex-1 ${colorClasses.cardHover} overflow-hidden`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center ${colorClasses.hover} transition-colors duration-300`}>
              <span className={`${colorClasses.text} text-sm font-bold`}>
                {experience.iconInitials}
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">{experience.company}</h4>
              <p className={`text-xs ${colorClasses.text} font-medium`}>{experience.period}</p>
            </div>
          </div>
          <div className="w-0 group-hover:w-auto transition-all duration-300 ease-out overflow-hidden">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.button} opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap`}>
              View <ExternalLink size={12} className="inline ml-1" />
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{experience.description}</p>
      </div>
    </div>
  );
}

export default function ExperienceSection({ title, experiences }: ExperienceSectionProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <div className="mb-8">
            <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">
              {title}
            </div>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-teal-400"></div>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <ExperienceItem key={experience.id} experience={experience} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}