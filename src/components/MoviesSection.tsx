'use client';

import { ExternalLink } from 'lucide-react';
import type { MovieShow } from '@/config/portfolio';

interface MoviesSectionProps {
  title: string;
  moviesShows: MovieShow[];
}


function MovieShowItem({ movieShow, index }: { movieShow: MovieShow; index: number }) {
  const isFirst = index === 0;

  return (
    <a
      href={movieShow.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-2xl p-4 ${isFirst ? 'hover:translate-x-3' : 'hover:-translate-y-1 hover:rotate-1'} transition-all duration-300 flex group cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-gray-500/10`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 px-1">
          <div className="w-8 h-8 relative overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
            <img
              src={movieShow.iconUrl}
              alt={`${movieShow.company} icon`}
              className="w-5 h-5 rounded object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-600 text-sm font-bold">${movieShow.company.charAt(0)}</span>`;
              }}
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {movieShow.company}
            </h4>
            <p className="text-sm text-gray-600 hidden sm:block">{movieShow.description}</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-gray-100 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {movieShow.actionText}
          <ExternalLink size={12} />
        </span>
      </div>
    </a>
  );
}

export default function MoviesSection({ title, moviesShows }: MoviesSectionProps) {
  return (
    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <div className="mb-6">
            <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">
              {title}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {moviesShows.map((movieShow, index) => (
              <MovieShowItem key={movieShow.id} movieShow={movieShow} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}