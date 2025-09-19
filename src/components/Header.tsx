import { PersonalInfo } from '@/config/portfolio';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <header className="text-left">
          <div className="flex flex-col items-start space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-fade-in">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 animate-slide-up hover:text-gray-900 transition-colors duration-300">
              {personalInfo.title}. Previously @
              <span className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                {' '}{personalInfo.company}
              </span>
            </p>
            <p className="text-lg text-gray-600 mt-2 animate-slide-up-delayed group cursor-pointer">
              <span className="hover:scale-125 transition-transform duration-300 inline-block">🎨</span> {personalInfo.roles.student}% Designer •
              <span className="hover:scale-125 transition-transform duration-300 inline-block">💻</span> {personalInfo.roles.engineer}% Engineer •
              <span className="hover:scale-125 transition-transform duration-300 inline-block">🍁</span> {personalInfo.location}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}