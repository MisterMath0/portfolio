import { Article } from '@/config/portfolio';

interface ArticlesSectionProps {
  title: string;
  articles: Article[];
}

function ArticleItem({ article }: { article: Article }) {
  return (
    <div className="py-2">
      <a
        href={article.url}
        target="_blank"
        rel="noopener"
        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
      >
        <span className="font-medium">{article.date}</span>
        <span className="mx-2 text-gray-400">—</span>
        <span className="font-medium">{article.source}</span>
        <span className="mx-2 text-gray-400">—</span>
        <span>{article.title}</span>
      </a>
    </div>
  );
}

export default function ArticlesSection({ title, articles }: ArticlesSectionProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-[2rem] py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <div className="mb-6">
            <div className="text-lg bg-blend-darken font-bold text-gray-900 space-y-4">
              {title}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="space-y-1">
              {articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}