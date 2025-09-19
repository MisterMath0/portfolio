import { Download, ExternalLink, Users, TrendingUp } from 'lucide-react';
import { App } from '@/config/portfolio';

interface AppsSectionProps {
  title: string;
  apps: App[];
}

const getStatusColors = (status: App['status']) => {
  switch (status) {
    case 'live':
      return { dot: 'bg-green-500', text: 'text-green-600', label: 'Live' };
    case 'beta':
      return { dot: 'bg-yellow-500', text: 'text-yellow-600', label: 'Beta' };
    case 'coming-soon':
      return { dot: 'bg-gray-400', text: 'text-gray-500', label: 'Coming Soon' };
    default:
      return { dot: 'bg-gray-400', text: 'text-gray-500', label: 'Unknown' };
  }
};

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; hover: string; text: string; button: string; buttonHover: string }> = {
    orange: {
      bg: 'bg-orange-100',
      hover: 'group-hover:bg-orange-200',
      text: 'text-orange-600',
      button: 'bg-orange-100 text-orange-800',
      buttonHover: 'hover:bg-orange-200'
    },
    blue: {
      bg: 'bg-blue-100',
      hover: 'group-hover:bg-blue-200',
      text: 'text-blue-600',
      button: 'bg-blue-100 text-blue-800',
      buttonHover: 'hover:bg-blue-200'
    },
    green: {
      bg: 'bg-green-100',
      hover: 'group-hover:bg-green-200',
      text: 'text-green-600',
      button: 'bg-green-100 text-green-800',
      buttonHover: 'hover:bg-green-200'
    },
    purple: {
      bg: 'bg-purple-100',
      hover: 'group-hover:bg-purple-200',
      text: 'text-purple-600',
      button: 'bg-purple-100 text-purple-800',
      buttonHover: 'hover:bg-purple-200'
    },
  };

  return colorMap[color] || colorMap.orange;
};

const getActionIcon = (actionType: App['actionType']) => {
  switch (actionType) {
    case 'download':
      return <Download size={14} />;
    case 'signup':
    case 'wip':
      return <ExternalLink size={14} />;
    default:
      return <ExternalLink size={14} />;
  }
};

function AppCard({ app }: { app: App }) {
  const statusColors = getStatusColors(app.status);
  const colorClasses = getColorClasses(app.iconColor);

  return (
    <div className="bg-white rounded-2xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-lg overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center ${colorClasses.hover} transition-colors duration-300`}>
            <span className={`${colorClasses.text} text-lg font-bold`}>
              {app.iconInitials}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className={`w-2 h-2 ${statusColors.dot} rounded-full ${app.status === 'live' ? 'animate-pulse' : ''}`}></div>
            <span className={`text-xs ${statusColors.text} font-medium`}>
              {statusColors.label}
            </span>
          </div>
        </div>
        <h4 className="font-semibold text-gray-900 text-lg mb-2">{app.name}</h4>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{app.description}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Users size={12} />
              <span>{app.stats.users.toLocaleString()} users</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp size={12} />
              <span>{app.stats.growth}</span>
            </div>
          </div>
          <div className="h-0 group-hover:h-10 transition-all duration-300 ease-out overflow-hidden">
            <button className={`w-full px-4 py-2 rounded-xl text-sm font-medium ${colorClasses.button} ${colorClasses.buttonHover} transition-colors duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
              {app.actionText}
              {getActionIcon(app.actionType)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppsSection({ title, apps }: AppsSectionProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[2.5rem] py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <div className="mb-6">
            <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">
              {title}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}