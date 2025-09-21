// TypeScript configuration for portfolio content - Personal CRM System
// Update this file to change all content across the website

export interface PersonalInfo {
  name: string;
  title: string;
  company: string;
  location: string;
  roles: {
    student: number;
    engineer: number;
  };
  social: {
    email: string;
    twitter: string;
    linkedin: string;
  };
}

export interface App {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  status: 'live' | 'beta' | 'coming-soon' | 'offline';
  stats: {
    users: number;
    growth: string;
  };
  actionType: 'download' | 'signup' | 'wip';
  actionText: string;
  url: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  iconUrl: string;
  url: string;
}

export interface CodeProject {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  githubUrl: string;
  hoverAnimation: 'rotate' | 'glow' | 'slide' | 'scale';
}

export interface PersonalStat {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  iconColor: string;
  iconType: string;
  progress?: number;
  currentItem?: string;
  currentAuthor?: string;
}

export interface Article {
  id: string;
  date: string;
  source: string;
  title: string;
  url: string;
}

export interface MovieShow {
  id: string;
  name: string;
  role: string;
  description: string;
  iconUrl: string;
  actionText: string;
  url: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  apps: App[];
  experience: Experience[];
  codeProjects: CodeProject[];
  personalStats: PersonalStat[];
  articles: Article[];
  hobbys: MovieShow[];
  sections: {
    apps: {
      title: string;
      subtitle?: string;
    };
    experience: {
      title: string;
      subtitle?: string;
    };
    code: {
      title: string;
      subtitle?: string;
    };
    personal: {
      title: string;
      subtitle?: string;
    };
    articles: {
      title: string;
      subtitle?: string;
    };
    hobbys: {
      title: string;
      subtitle?: string;
    };
    contact: {
      title: string;
      subtitle?: string;
    };
  };
}

// PORTFOLIO CONFIGURATION - Update this to change your portfolio content
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Guy Mathieu FOKO",
    title: "Software Engineer",
    company: "Heimat24 AI",
    location: "Rosenheim, Germany",
    roles: {
      student: 70,
      engineer: 30,
    },
    social: {
      email: "guymathieuf@gmail.com",
      twitter: "https://x.com/heyitsmattai",
      linkedin: "https://www.linkedin.com/in/guymathieufoko/",
    },
  },

  apps: [
    {
      id: "mindra_macos",
      name: "Mindra macOS",
      description: "A beautiful and intuitive productivity timer for macOS.",
      iconUrl: "https://mindra.klarvio.app/assets/AppIcon.appiconset/icon-256x256.png",
      status: "live",
      stats: {
        users: 20,
        growth: "+0% this month",
      },
      actionType: "download",
      actionText: "Download",
      url: "https://mindra.klarvio.app/MindraTimer.dmg", 
    },
    {
      id: "mira_ios",
      name: "Mira",
      description: "Organize Life Step by Step",
      iconUrl: "/logo.png",
      status: "coming-soon",
      stats: {
        users: 0,
        growth: "In development",
      },
      actionType: "signup",
      actionText: "Sign Up",
      url: "",
    },
    {
      id: "settl",
      name: "Settl",
      description: "Settl makes Germany accessible",
      iconUrl: "https://ui-avatars.com/api/?name=Settl&background=6366f1&color=fff&size=128&format=png", 
      status: "coming-soon",
      stats: {
        users: 0,
        growth: "In development",
      },
      actionType: "signup",
      actionText: "Join the waitlist",
      url: "", 
    },
    {
      id: "autokraft",
      name: "AutoKraft",
      description: "A worflow generator for N8N",
      iconUrl: "https://ui-avatars.com/api/?name=AK&background=ef4444&color=fff&size=128&format=png", 
      status: "offline",
      stats: {
        users: 0,
        growth: "Shut down",
      },
      actionType: "wip",
      actionText: "Work in Progress",
      url: "https://autokraft.app", 
    },
  ],

  experience: [
    {
      id: "heimat24",
      company: "Heimat24 AI",
      role: " Software Engineer",
      period: " Feb 2025 - present",
      description: "Building AI applications with emphasis on RAG, Chatbots and Automation",
      iconUrl: "https://static.wixstatic.com/media/a5b1cc_5e60260662ba4dd9bf8c6a6e796a0d0e~mv2.png/v1/fill/w_160,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20H24.png",
      url: "https://heimat24.de",
    },
    {
      id: "th_rosenheim",
      company: "Technische Hochschule Rosenheim",
      role: "Student",
      period: "Oct 2023 - present",
      description: "Studying Bachelor of Artificial Intelligence",
      iconUrl: "https://www.wasserburger-stimme.de/wp-content/uploads/2021/10/hochschule.png",
      url: "https://www.th-rosenheim.de",
    },
    {
      id: "uy1-ngoaekele",
      company: "University of Yaounde I Ngoaekele",
      role: "Student",
      period: "Oct 2019 - sep 2023",
      description: "Studying Bachelor of Computer Science",
      iconUrl: "https://uy1.uninet.cm/wp-content/uploads/2025/03/Logo-Universite-de-Yaounde-1-251px-.png",
      url: "https://uy1.uninet.cm",
    },
  ],

  codeProjects: [
    {
      id: "n8n-automated",
      name: "N8N Automated",
      description: "Automated N8N workflows with AI",
      iconUrl: "https://n8n.io/guidelines/logo-dark.svg",
      githubUrl: "https://github.com/MisterMath0/n8n-automated", 
      hoverAnimation: "scale",
    },
    {
      id: "mindra_macos",
      name: "Mindra macOS",
      description: "A beautiful and intuitive productivity timer for macOS.",
      iconUrl: "https://mindra.klarvio.app/assets/AppIcon.appiconset/icon-256x256.png",
      githubUrl: "https://github.com/MisterMath0/mindra_macos", 
      hoverAnimation: "scale",
    },
    {
      id: "cv-builder",
      name: "CV Builder",
      description: "A powerful CV builder for me and my friends",
      iconUrl: "https://cv-builder-frontend-six.vercel.app/favicon.ico",
      githubUrl: "https://github.com/MisterMath0/cv-builder-frontend", 
      hoverAnimation: "scale",
    },
    {
      id: "portfolio-site",
      name: "Portfolio Site",
      description: "A simple portfolio site for me",
      iconUrl: "https://github.githubassets.com/favicons/favicon.png",
      githubUrl: "https://github.com/MisterMath0/portfolio", 
      hoverAnimation: "scale",
    },
  ],

  personalStats: [
    {
      id: "now-playing",
      title: "Now Playing",
      value: "Midnight City",
      iconColor: "green",
      iconType: "music",
      currentItem: "Midnight City",
      currentAuthor: "M83",
      progress: 65,
    },
    {
      id: "reading",
      title: "Currently Reading",
      value: "Atomic Habits",
      iconColor: "blue",
      iconType: "book",
      currentItem: "Atomic Habits",
      currentAuthor: "James Clear",
      progress: 78,
    },
    {
      id: "weather",
      title: "Toronto Weather",
      value: "22°C",
      unit: "Partly Cloudy",
      iconColor: "sky",
      iconType: "cloud",
    },
    {
      id: "coffee",
      title: "Daily Coffee",
      value: 3,
      unit: "cups today",
      iconColor: "orange",
      iconType: "coffee",
      progress: 75,
    },
    {
      id: "code-lines",
      title: "Lines of code this month",
      value: 47284,
      iconColor: "purple",
      iconType: "code",
    },
    {
      id: "designs",
      title: "Designs completed",
      value: 127,
      iconColor: "yellow",
      iconType: "zap",
    },
    {
      id: "commits",
      title: "Commits this week",
      value: 23,
      iconColor: "gray",
      iconType: "github",
    },
    {
      id: "users",
      title: "Total app users",
      value: 4215,
      iconColor: "blue",
      iconType: "users",
    },
  ],

  articles: [
    {
      id: "slack-mobile-redesign",
      date: "Jan 2024",
      source: "Blog",
      title: "Redesigning Slack on Mobile",
      url: "https://slack.design/articles/re-designing-slack-on-mobile/",
    },
    {
      id: "slack-focused",
      date: "Jan 2024",
      source: "Blog",
      title: "A more focused, productive Slack",
      url: "https://slack.design/articles/a-more-focused-productive-slack/",
    },
    {
      id: "verge-catch-up",
      date: "Jan 2024",
      source: "Verge",
      title: "Slack's Catch Up feature is like Tinder for Work",
      url: "https://www.theverge.com/2024/1/10/24026571/slack-catch-up-mobile-messaging-app",
    },
    {
      id: "techradar-swipe",
      date: "Jan 2024",
      source: "TechRadar",
      title: "Catch Up brings a touch of swiping sauciness to Slack",
      url: "https://www.techradar.com/pro/slacks-new-feature-wants-you-to-swipe-right-on-all-those-unread-alerts",
    },
    {
      id: "verge-ipad",
      date: "Mar 2022",
      source: "Verge",
      title: "Slack overhauls its iPad app",
      url: "https://www.theverge.com/2022/3/16/22978839/slack-ipad-app-update-two-columns-accessibility-sidebar",
    },
    {
      id: "slack-ipad-blog",
      date: "Sep 2022",
      source: "Blog",
      title: "How we redesigned Slack on the iPad",
      url: "https://slack.design/articles/how-we-redesigned-slack-for-the-ipad/",
    },
    {
      id: "adplist-webinar",
      date: "Aug 2022",
      source: "Webinar",
      title: "Designing for the Real World x ADPList",
      url: "https://www.youtube.com/watch?v=DvqxN0JO6_s",
    },
    {
      id: "github-design",
      date: "Dec 2019",
      source: "Blog",
      title: "GitHub for Product & Design Collaboration",
      url: "https://medium.com/microsoft-design/github-for-product-and-design-collaboration-b9107177f5b0",
    },
    {
      id: "verge-email",
      date: "Sep 2018",
      source: "Verge",
      title: "The Best Email App for iOS & Android",
      url: "https://www.theverge.com/2024/1/28/17911432/best-email-app-ios-android",
    },
  ],

  hobbys: [
    {
      id: "youtube",
      name: "MisterMatt",
      role: "Content Creator",
      description: "Documenting my journey with transparency",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013–2017%29.svg/1024px-YouTube_play_button_icon_%282013–2017%29.svg.png?20190606141903",
      actionText: "Watch",
      url: "https://www.youtube.com/channel/UCtEe9kuVrS-jcBXvVdzxcMg",
    },
    {
      id: "instagram",
      name: "Heyitsmattai",
      role: "Content Creator",
      description: "Speaking whatever is whats on my mind",
      iconUrl: "https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small_2x/tiktok-icon-free-png.png",
      actionText: "Watch",
      url: "https://www.tiktok.com/@heyitsmatt.ai",
    },
  ],

  sections: {
    apps: {
      title: "Apps I've coded",
    },
    experience: {
      title: "What I've been doing",
    },
    code: {
      title: "Code I've open sourced",
    },
    personal: {
      title: "✨ Life in real-time",
    },
    articles: {
      title: "✍🏻 Articles that covered my work",
    },
    hobbys: {
      title: "🎨 This is where i spend my free time",
    },
    contact: {
      title: "Feel free to drop me a message or whatever. You will make my day!",
    },
  },
};

// Utility functions for working with the config
export const getAppsByStatus = (status: App['status']) =>
  portfolioConfig.apps.filter(app => app.status === status);

export const getExperienceByPeriod = () =>
  portfolioConfig.experience.sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[1]);
    const yearB = parseInt(b.period.split(' - ')[1]);
    return yearB - yearA;
  });

// Utility function removed as iconColor is no longer used

export const getPersonalStatsByType = (type: string) =>
  portfolioConfig.personalStats.filter(stat => stat.iconType === type);