
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import { articlesData } from '../constants';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <Card hasHoverEffect={true}>
    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-brand-gold mb-2">{article.category} &bull; {article.date}</p>
      <h3 className="text-xl font-serif text-white mb-3">{article.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{article.excerpt}</p>
      <a href="#" className="font-semibold text-brand-gold hover:text-brand-gold-light flex items-center">
        Read More <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </Card>
);

const KnowledgeCenterPage: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <PageHeader title="Knowledge Center" subtitle="Insights & Education" />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeCenterPage;
