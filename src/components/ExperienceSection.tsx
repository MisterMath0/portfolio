'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { Experience } from '@/config/portfolio';

interface ExperienceSectionProps {
  title: string;
  experiences: Experience[];
}


function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="relative flex items-start group">
      <div className="absolute left-6 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-200"></div>
      <a
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-16 bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex-1 hover:bg-gray-50 overflow-hidden block"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
              {experience.iconUrl ? (
                <Image
                  src={experience.iconUrl}
                  alt={`${experience.company} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-600 text-sm font-bold">${experience.company.charAt(0)}</span>`;
                  }}
                />
              ) : (
                <span className="text-gray-600 text-sm font-bold">{experience.company.charAt(0)}</span>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">{experience.company}</h4>
              <p className="text-xs text-gray-500 font-medium">{experience.period}</p>
            </div>
          </div>
          <div className="w-0 group-hover:w-auto transition-all duration-300 ease-out overflow-hidden">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
              View <ExternalLink size={12} className="inline ml-1" />
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{experience.description}</p>
      </a>
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