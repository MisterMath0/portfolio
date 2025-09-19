import Image from "next/image";
import { Download, ExternalLink, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col gap-2">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-4xl py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-32">
          <header className="text-left">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">Siddhant Mehta</h1>
              <p className="text-xl text-gray-700 mb-8">Senior Staff Designer. Previously @ Slack Inc</p>
              <p className="text-lg text-gray-600">🎨 70% Designer • 💻 30% Engineer • 🍁 Toronto, Canada</p>
            </div>
          </header>
        </div>
      </div>

      {/* Apps Section */}
      <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-4xl py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <section>
            <div className="mb-6">
              <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">Apps I've coded</div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Crossword Chef */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">CC</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Crossword Chef</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Crosswords for your world</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-orange-100 text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Download
                    <Download size={12} />
                  </span>
                </div>
              </div>

              {/* Feelings Diary */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">FD</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Feelings Diary</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A daily mental health journal</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-orange-100 text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Download
                    <Download size={12} />
                  </span>
                </div>
              </div>

              {/* Get Nerdy */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">GN</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Get Nerdy</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A Duolingo for knowledge</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-orange-100 text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Sign Up
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* Super Diary */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-bold">SD</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Super Diary</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A diary-first social network</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-orange-100 text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Work in Progress
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-4xl py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <section>
            <div className="mb-6">
              <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">Products I've designed</div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Slack */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-bold">S</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Slack Inc</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Mobile design lead for 4 years</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-purple-100 text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* Microsoft Outlook */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">O</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Microsoft Outlook</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Play My Emails, upcoming events, ads, widgets and more</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-purple-100 text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* Microsoft 365 */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">M</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Microsoft 365 - Side Projects</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Re-imagining visual design for Word, Excel & Powerpoint</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-purple-100 text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* Skype */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">Sk</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Skype</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A short gig exploring VR and Moments</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-purple-100 text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* YouTube */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">YT</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">YouTube</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A glimpse from my internship at Google</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-purple-100 text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Promo Video
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Code Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-4xl py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <section>
            <div className="mb-6">
              <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">Code I've open sourced</div>
            </div>
            <div className="flex flex-col gap-2">
              {/* Orb */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center">
                      <Github size={16} className="text-gray-600" />
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Orb</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A mesmerizing orb, fully designed in SwiftUI</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Open GitHub
                    <Github size={12} />
                  </span>
                </div>
              </div>

              {/* Prototype Siri Screen Animation */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center">
                      <Github size={16} className="text-gray-600" />
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Prototype Siri Screen Animation</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Prototype Siri screen animations</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Open GitHub
                    <Github size={12} />
                  </span>
                </div>
              </div>

              {/* ColorTokensKit-Swift */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center">
                      <Github size={16} className="text-gray-600" />
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">ColorTokensKit-Swift</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A powerful color tokens system for Apple platforms</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Open GitHub
                    <Github size={12} />
                  </span>
                </div>
              </div>

              {/* Prototype Siri Textfield */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center">
                      <Github size={16} className="text-gray-600" />
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Prototype Siri Textfield</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">A simple prototype copying the Apple Siri Textfield animations</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Open GitHub
                    <Github size={12} />
                  </span>
                </div>
              </div>

              {/* ShadowKit-SwiftUI */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center">
                      <Github size={16} className="text-gray-600" />
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">ShadowKit-SwiftUI</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Bringing the best looking shadows to your iOS app</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Open GitHub
                    <Github size={12} />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Movies & Shows Section */}
      <div className="bg-gradient-to-br from-green-50 to-indigo-50 rounded-4xl py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <section>
            <div className="mb-6">
              <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">Movies & shows I've animated</div>
            </div>
            <div className="flex flex-col gap-2">
              {/* DreamWorks Animation */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-sky-100 flex items-center justify-center">
                      <span className="text-sky-600 text-xs font-bold">DW</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">DreamWorks Animation</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Past life as a 3D Animator</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-sky-100 text-sky-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Animations
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* Animation Mentor */}
              <div className="bg-white rounded-3xl p-4 hover:px-6 transition-all duration-200 flex group cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2 px-1">
                    <div className="w-6 h-6 relative overflow-hidden rounded-lg flex-shrink-0 bg-sky-100 flex items-center justify-center">
                      <span className="text-sky-600 text-xs font-bold">AM</span>
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <h4 className="font-medium text-gray-900">Student at Animation Mentor</h4>
                      <p className="text-sm text-gray-600 hidden sm:block">Understanding the basics of 3D animation</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-sky-100 text-sky-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Animations
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-4xl py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <section>
            <div className="mb-6">
              <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">✍🏻 Articles that covered my work</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="space-y-1">
                <div className="py-2">
                  <a href="https://slack.design/articles/re-designing-slack-on-mobile/" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Jan 2024</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Blog</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>Redesigning Slack on Mobile</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://slack.design/articles/a-more-focused-productive-slack/" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Jan 2024</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Blog</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>A more focused, productive Slack</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://www.theverge.com/2024/1/10/24026571/slack-catch-up-mobile-messaging-app" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Jan 2024</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Verge</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>Slack's Catch Up feature is like Tinder for Work</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://www.techradar.com/pro/slacks-new-feature-wants-you-to-swipe-right-on-all-those-unread-alerts" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Jan 2024</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">TechRadar</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>Catch Up brings a touch of swiping sauciness to Slack</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://www.theverge.com/2022/3/16/22978839/slack-ipad-app-update-two-columns-accessibility-sidebar" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Mar 2022</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Verge</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>Slack overhauls its iPad app</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://slack.design/articles/how-we-redesigned-slack-for-the-ipad/" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Sep 2022</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Blog</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>How we redesigned Slack on the iPad</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://www.youtube.com/watch?v=DvqxN0JO6_s" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Aug 2022</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Webinar</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>Designing for the Real World x ADPList</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://medium.com/microsoft-design/github-for-product-and-design-collaboration-b9107177f5b0" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Dec 2019</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Blog</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>GitHub for Product & Design Collaboration</span>
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://www.theverge.com/2024/1/28/17911432/best-email-app-ios-android" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base">
                    <span className="font-medium">Sep 2018</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span className="font-medium">Verge</span>
                    <span className="mx-2 text-gray-400">—</span>
                    <span>The Best Email App for iOS & Android</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-4xl py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <section>
            <div className="mb-6">
              <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">Open to advising startups, & coaching designers.</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="space-y-1">
                <div className="py-2">
                  <a href="mailto:metasidd@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium">
                    metasidd@gmail.com
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://x.com/metasidd" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium">
                    x.com/metasidd
                  </a>
                </div>
                <div className="py-2">
                  <a href="https://www.linkedin.com/in/siddhantmehta" target="_blank" rel="noopener" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium">
                    linkedin.com/siddhantmehta
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
