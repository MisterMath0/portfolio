import { ExternalLink } from 'lucide-react';
import { MovieShow } from '@/config/portfolio';

interface MoviesSectionProps {
  title: string;
  moviesShows: MovieShow[];
}

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; hover: string; text: string; button: string; border: string; shadow: string }> = {
    sky: {
      bg: 'bg-sky-100',
      hover: 'group-hover:bg-sky-200',
      text: 'text-sky-600',
      button: 'bg-sky-100 text-sky-800',
      border: 'hover:border-sky-200',
      shadow: 'hover:shadow-sky-500/10'
    },
    violet: {
      bg: 'bg-violet-100',
      hover: 'group-hover:bg-violet-200',
      text: 'text-violet-600',
      button: 'bg-violet-100 text-violet-800',
      border: 'hover:border-violet-200',
      shadow: 'hover:shadow-violet-500/10'
    },
  };

  return colorMap[color] || colorMap.sky;
};

function MovieShowItem({ movieShow, index }: { movieShow: MovieShow; index: number }) {
  const colorClasses = getColorClasses(movieShow.iconColor);
  const isFirst = index === 0;

  return (
    <div className={`bg-white rounded-2xl p-4 ${isFirst ? 'hover:translate-x-3' : 'hover:-translate-y-1 hover:rotate-1'} transition-all duration-300 flex group cursor-pointer border border-transparent ${colorClasses.border} ${colorClasses.shadow}`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 px-1">
          <div className={`w-8 h-8 relative overflow-hidden rounded-lg flex-shrink-0 ${colorClasses.bg} flex items-center justify-center ${colorClasses.hover} transition-colors duration-300`}>
            <span className={`${colorClasses.text} text-sm font-bold`}>
              {movieShow.iconInitials}
            </span>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <h4 className={`font-medium text-gray-900 group-hover:${colorClasses.text.replace('text-', 'text-').replace('-600', '-800')} transition-colors duration-300`}>
              {movieShow.company}
            </h4>
            <p className="text-sm text-gray-600 hidden sm:block">{movieShow.description}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${colorClasses.button} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
          {movieShow.actionText}
          <ExternalLink size={12} />
        </span>
      </div>
    </div>
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