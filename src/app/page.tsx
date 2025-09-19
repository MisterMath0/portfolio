import { portfolioConfig } from '@/config/portfolio';
import Header from '@/components/Header';
import AppsSection from '@/components/AppsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CodeSection from '@/components/CodeSection';
import PersonalSection from '@/components/PersonalSection';
import ArticlesSection from '@/components/ArticlesSection';
import MoviesSection from '@/components/HobbysSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col gap-2 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full animate-float" style={{animationDelay: '5s'}}></div>

        {/* Geometric shapes */}
        <div className="absolute top-16 right-10 w-6 h-6 bg-purple-300/20 transform rotate-45 animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-16 left-16 w-10 h-10 bg-blue-300/20 transform rotate-12 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <Header personalInfo={portfolioConfig.personal} />

      <AppsSection
        title={portfolioConfig.sections.apps.title}
        apps={portfolioConfig.apps}
      />

      <ExperienceSection
        title={portfolioConfig.sections.experience.title}
        experiences={portfolioConfig.experience}
      />

      <CodeSection
        title={portfolioConfig.sections.code.title}
        projects={portfolioConfig.codeProjects}
      />

      <MoviesSection
        title={portfolioConfig.sections.hobbys.title}
        moviesShows={portfolioConfig.hobbys}
      />
{/*
      <ArticlesSection
        title={portfolioConfig.sections.articles.title}
        articles={portfolioConfig.articles}
      />
      */}
      <PersonalSection
        title={portfolioConfig.sections.personal.title}
        stats={portfolioConfig.personalStats}
      />

      <ContactSection
        title={portfolioConfig.sections.contact.title}
        personalInfo={portfolioConfig.personal}
      />
    </div>
  );
}