import { PersonalInfo } from '@/config/portfolio';

interface ContactSectionProps {
  title: string;
  personalInfo: PersonalInfo;
}

export default function ContactSection({ title, personalInfo }: ContactSectionProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[1.5rem] py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <div className="mb-6">
            <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">
              {title}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="space-y-1">
              <div className="py-2">
                <a
                  href={`mailto:${personalInfo.social.email}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
                >
                  {personalInfo.social.email}
                </a>
              </div>
              <div className="py-2">
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
                >
                  {personalInfo.social.twitter.replace('https://', '')}
                </a>
              </div>
              <div className="py-2">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
                >
                  {personalInfo.social.linkedin.replace('https://www.', '')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}