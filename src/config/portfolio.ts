// TypeScript configuration for portfolio content - Personal CRM System
// Update this file to change all content across the website

export interface PersonalInfo {
  name: string;
  title: string;
  company: string;
  location: string;
  roles: {
    designer: number;
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
  iconInitials: string;
  iconColor: string;
  status: 'live' | 'beta' | 'coming-soon';
  stats: {
    users: number;
    growth: string;
  };
  actionType: 'download' | 'signup' | 'wip';
  actionText: string;
  url?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  iconInitials: string;
  iconColor: string;
  url?: string;
}

export interface CodeProject {
  id: string;
  name: string;
  description: string;
  iconColor: string;
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
  company: string;
  role: string;
  description: string;
  iconInitials: string;
  iconColor: string;
  actionText: string;
  url?: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  apps: App[];
  experience: Experience[];
  codeProjects: CodeProject[];
  personalStats: PersonalStat[];
  articles: Article[];
  moviesShows: MovieShow[];
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
    movies: {
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
    name: "Siddhant Mehta",
    title: "Senior Staff Designer",
    company: "Slack Inc",
    location: "Toronto, Canada",
    roles: {
      designer: 70,
      engineer: 30,
    },
    social: {
      email: "metasidd@gmail.com",
      twitter: "https://x.com/metasidd",
      linkedin: "https://www.linkedin.com/in/siddhantmehta",
    },
  },

  apps: [
    {
      id: "crossword-chef",
      name: "Crossword Chef",
      description: "Crosswords for your world",
      iconInitials: "CC",
      iconColor: "orange",
      status: "live",
      stats: {
        users: 2847,
        growth: "+23% this month",
      },
      actionType: "download",
      actionText: "Download",
    },
    {
      id: "feelings-diary",
      name: "Feelings Diary",
      description: "A daily mental health journal",
      iconInitials: "FD",
      iconColor: "blue",
      status: "live",
      stats: {
        users: 1247,
        growth: "+18% this month",
      },
      actionType: "download",
      actionText: "Download",
    },
    {
      id: "get-nerdy",
      name: "Get Nerdy",
      description: "A Duolingo for knowledge",
      iconInitials: "GN",
      iconColor: "green",
      status: "beta",
      stats: {
        users: 342,
        growth: "+45% this month",
      },
      actionType: "signup",
      actionText: "Sign Up",
    },
    {
      id: "super-diary",
      name: "Super Diary",
      description: "A diary-first social network",
      iconInitials: "SD",
      iconColor: "purple",
      status: "coming-soon",
      stats: {
        users: 0,
        growth: "In development",
      },
      actionType: "wip",
      actionText: "Work in Progress",
    },
  ],

  experience: [
    {
      id: "slack",
      company: "Slack Inc",
      role: "Senior Staff Designer",
      period: "2020 - 2024",
      description: "Mobile design lead for 4 years",
      iconInitials: "S",
      iconColor: "purple",
    },
    {
      id: "outlook",
      company: "Microsoft Outlook",
      role: "Senior Designer",
      period: "2018 - 2020",
      description: "Play My Emails, upcoming events, ads, widgets and more",
      iconInitials: "O",
      iconColor: "blue",
    },
    {
      id: "microsoft-365",
      company: "Microsoft 365 - Side Projects",
      role: "Product Designer",
      period: "2017 - 2019",
      description: "Re-imagining visual design for Word, Excel & Powerpoint",
      iconInitials: "M",
      iconColor: "blue",
    },
    {
      id: "skype",
      company: "Skype",
      role: "Product Designer",
      period: "2016 - 2017",
      description: "A short gig exploring VR and Moments",
      iconInitials: "Sk",
      iconColor: "sky",
    },
    {
      id: "youtube",
      company: "YouTube",
      role: "Design Intern",
      period: "2015 - 2016",
      description: "A glimpse from my internship at Google",
      iconInitials: "YT",
      iconColor: "red",
    },
  ],

  codeProjects: [
    {
      id: "orb",
      name: "Orb",
      description: "A mesmerizing orb, fully designed in SwiftUI",
      iconColor: "yellow",
      githubUrl: "https://github.com/username/orb",
      hoverAnimation: "glow",
    },
    {
      id: "siri-screen",
      name: "Prototype Siri Screen Animation",
      description: "Prototype Siri screen animations",
      iconColor: "blue",
      githubUrl: "https://github.com/username/siri-screen",
      hoverAnimation: "slide",
    },
    {
      id: "color-tokens",
      name: "ColorTokensKit-Swift",
      description: "A powerful color tokens system for Apple platforms",
      iconColor: "purple",
      githubUrl: "https://github.com/username/color-tokens",
      hoverAnimation: "glow",
    },
    {
      id: "siri-textfield",
      name: "Prototype Siri Textfield",
      description: "A simple prototype copying the Apple Siri Textfield animations",
      iconColor: "green",
      githubUrl: "https://github.com/username/siri-textfield",
      hoverAnimation: "slide",
    },
    {
      id: "shadow-kit",
      name: "ShadowKit-SwiftUI",
      description: "Bringing the best looking shadows to your iOS app",
      iconColor: "indigo",
      githubUrl: "https://github.com/username/shadow-kit",
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

  moviesShows: [
    {
      id: "dreamworks",
      company: "DreamWorks Animation",
      role: "3D Animator",
      description: "Past life as a 3D Animator",
      iconInitials: "DW",
      iconColor: "sky",
      actionText: "Animations",
    },
    {
      id: "animation-mentor",
      company: "Student at Animation Mentor",
      role: "Student",
      description: "Understanding the basics of 3D animation",
      iconInitials: "AM",
      iconColor: "violet",
      actionText: "Animations",
    },
  ],

  sections: {
    apps: {
      title: "Apps I've coded",
    },
    experience: {
      title: "Products I've designed",
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
    movies: {
      title: "Movies & shows I've animated",
    },
    contact: {
      title: "Open to advising startups, & coaching designers.",
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

export const getProjectsByColor = (color: string) =>
  portfolioConfig.codeProjects.filter(project => project.iconColor === color);

export const getPersonalStatsByType = (type: string) =>
  portfolioConfig.personalStats.filter(stat => stat.iconType === type);