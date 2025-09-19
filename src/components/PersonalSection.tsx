import { Music, BookOpen, Cloud, Coffee, Code, Zap, Github, Users } from 'lucide-react';
import { PersonalStat } from '@/config/portfolio';

interface PersonalSectionProps {
  title: string;
  stats: PersonalStat[];
}

const getIconComponent = (iconType: string, size = 18) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    music: Music,
    book: BookOpen,
    cloud: Cloud,
    coffee: Coffee,
    code: Code,
    zap: Zap,
    github: Github,
    users: Users,
  };

  const IconComponent = iconMap[iconType] || Music;
  return <IconComponent size={size} />;
};

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; hover: string; text: string; border: string }> = {
    green: {
      bg: 'bg-green-100',
      hover: 'group-hover:bg-green-200',
      text: 'text-green-700',
      border: 'hover:border-green-200'
    },
    blue: {
      bg: 'bg-blue-100',
      hover: 'group-hover:bg-blue-200',
      text: 'text-blue-700',
      border: 'hover:border-blue-200'
    },
    sky: {
      bg: 'bg-sky-100',
      hover: 'group-hover:bg-sky-200',
      text: 'text-sky-700',
      border: 'hover:border-sky-200'
    },
    orange: {
      bg: 'bg-orange-100',
      hover: 'group-hover:bg-orange-200',
      text: 'text-orange-700',
      border: 'hover:border-orange-200'
    },
    purple: {
      bg: 'bg-purple-100',
      hover: 'group-hover:bg-purple-200',
      text: 'text-purple-600',
      border: 'hover:border-purple-200'
    },
    yellow: {
      bg: 'bg-yellow-100',
      hover: 'group-hover:bg-yellow-200',
      text: 'text-yellow-600',
      border: 'hover:border-yellow-200'
    },
    gray: {
      bg: 'bg-gray-100',
      hover: 'group-hover:bg-gray-200',
      text: 'text-gray-600',
      border: 'hover:border-gray-200'
    },
  };

  return colorMap[color] || colorMap.blue;
};

function MainStatCard({ stat }: { stat: PersonalStat }) {
  const colorClasses = getColorClasses(stat.iconColor);

  if (stat.iconType === 'music') {
    return (
      <div className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent ${colorClasses.border}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.hover} transition-colors duration-300`}>
            {getIconComponent(stat.iconType, 18)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{stat.title}</h4>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900">{stat.currentItem}</p>
          <p className="text-xs text-gray-500">{stat.currentAuthor}</p>
          <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
            <div className={`bg-green-500 h-1 rounded-full animate-pulse`} style={{width: `${stat.progress}%`}}></div>
          </div>
        </div>
      </div>
    );
  }

  if (stat.iconType === 'book') {
    return (
      <div className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent ${colorClasses.border}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.hover} transition-colors duration-300`}>
            {getIconComponent(stat.iconType, 18)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{stat.title}</h4>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900">{stat.currentItem}</p>
          <p className="text-xs text-gray-500">{stat.currentAuthor}</p>
          <div className="flex items-center gap-1 mt-2">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-blue-500 h-1 rounded-full" style={{width: `${stat.progress}%`}}></div>
            </div>
            <span className="text-xs text-gray-500">{stat.progress}%</span>
          </div>
        </div>
      </div>
    );
  }

  if (stat.iconType === 'cloud') {
    return (
      <div className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent ${colorClasses.border}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.hover} transition-colors duration-300`}>
            {getIconComponent(stat.iconType, 18)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{stat.title}</h4>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-xs text-gray-500">{stat.unit}</p>
          <p className="text-xs text-gray-400">Feels like 24°C</p>
        </div>
      </div>
    );
  }

  if (stat.iconType === 'coffee') {
    return (
      <div className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent ${colorClasses.border}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.hover} transition-colors duration-300`}>
            {getIconComponent(stat.iconType, 18)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{stat.title}</h4>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-xs text-gray-500">{stat.unit}</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((cup) => (
              <div
                key={cup}
                className={`w-2 h-2 rounded-full ${
                  cup <= Number(stat.value) ? 'bg-orange-500' : 'bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function SmallStatCard({ stat }: { stat: PersonalStat }) {
  const colorClasses = getColorClasses(stat.iconColor);

  return (
    <div className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300">
      <div className={`${colorClasses.text} mx-auto mb-2`}>
        {getIconComponent(stat.iconType, 16)}
      </div>
      <p className="text-lg font-bold text-gray-900">
        {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
      </p>
      <p className="text-xs text-gray-500">{stat.title}</p>
    </div>
  );
}

export default function PersonalSection({ title, stats }: PersonalSectionProps) {
  const mainStats = stats.filter(stat => ['music', 'book', 'cloud', 'coffee'].includes(stat.iconType));
  const smallStats = stats.filter(stat => !['music', 'book', 'cloud', 'coffee'].includes(stat.iconType));

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <div className="mb-8">
            <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">
              {title}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainStats.map((stat) => (
              <MainStatCard key={stat.id} stat={stat} />
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {smallStats.map((stat) => (
              <SmallStatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}