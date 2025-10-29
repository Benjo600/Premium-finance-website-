
import { BarChart2, Briefcase, GitBranch } from 'lucide-react';
import { Service, Testimonial, TeamMember, Article, FaqItem } from './types';

export const servicesData: Service[] = [
  {
    id: 'investment',
    title: 'Investment Management',
    tagline: 'Strategic asset allocation for superior returns.',
    description: 'Tailored investment portfolios designed to align with your risk tolerance and financial objectives, leveraging global market insights.',
    icon: BarChart2,
    overview: 'Our Investment Management service is the cornerstone of wealth growth. We employ a disciplined, research-driven approach to construct and manage diversified portfolios. By analyzing global economic trends, market dynamics, and individual securities, we aim to deliver consistent, risk-adjusted returns that help you achieve your long-term financial goals, from capital appreciation to income generation.',
    benefits: [
      'Personalized portfolio construction based on your unique risk profile.',
      'Access to exclusive institutional-grade investment opportunities.',
      'Proactive portfolio monitoring and rebalancing.',
      'Transparent reporting and regular performance reviews.',
    ],
    caseStudies: [
      {
        title: 'Diversification for a Tech Executive',
        scenario: 'A high-level executive with a highly concentrated position in their company\'s stock sought to diversify their holdings to mitigate risk without incurring significant tax liabilities.',
        solution: 'We implemented a structured strategy of phased diversification, utilizing tax-loss harvesting and investing in a custom-built portfolio of global equities and fixed income to reduce concentration risk over time.',
        outcome: 'Reduced portfolio risk and increased diversification.',
      },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance Planning',
    tagline: 'Protecting your assets and loved ones.',
    description: 'Comprehensive risk management solutions, including life, disability, and long-term care insurance to safeguard your legacy.',
    icon: Briefcase,
    overview: 'Effective wealth management involves not only growing assets but also protecting them from unforeseen risks. Our Insurance Planning service provides a comprehensive review of your personal and business liabilities. We analyze your existing coverage and identify potential gaps, recommending sophisticated insurance strategies that provide a shield for your family, your business, and your legacy against life\'s uncertainties.',
    benefits: [
      'Holistic risk assessment of your personal and professional life.',
      'Customized insurance solutions to protect your wealth.',
      'Independent advice from a wide range of top-tier carriers.',
      'Integration of insurance into your overall estate and financial plan.',
    ],
    caseStudies: [
      {
        title: 'Estate Tax Liquidity for a Family Business',
        scenario: 'A family-owned business wanted to ensure a smooth transition to the next generation without being forced to sell assets to cover estate taxes.',
        solution: 'We structured a survivorship life insurance policy held within an irrevocable life insurance trust (ILIT) to provide a tax-free death benefit, creating the liquidity needed to satisfy estate tax obligations.',
        outcome: 'Seamless business succession and legacy preservation.',
      },
    ],
  },
  {
    id: 'inheritance',
    title: 'Inheritance Planning',
    tagline: 'Ensuring a seamless transfer of wealth.',
    description: 'Sophisticated estate and trust planning to minimize tax liabilities and ensure your assets are distributed according to your wishes.',
    icon: GitBranch,
    overview: 'A well-crafted inheritance plan is the ultimate expression of your legacy. Our specialists work closely with you and your legal advisors to design and implement strategies that facilitate the smooth transfer of wealth to your heirs and chosen philanthropic causes. From foundational wills and trusts to advanced techniques like GRATs and dynasty trusts, we help you navigate the complexities of estate law and taxation.',
    benefits: [
      'Strategic wealth transfer to minimize estate and gift taxes.',
      'Creation of trusts to control asset distribution and protect beneficiaries.',
      'Philanthropic planning to maximize your charitable impact.',
      'Coordination with legal and tax professionals for seamless execution.',
    ],
    caseStudies: [
      {
        title: 'Charitable Legacy for a Philanthropist',
        scenario: 'A client wished to make a significant charitable impact while also providing for their heirs and minimizing estate taxes.',
        solution: 'We established a Charitable Remainder Trust (CRT), which provided the client with an income stream for life, a charitable tax deduction, and ultimately passed the remaining assets to their chosen charity, reducing the size of their taxable estate.',
        outcome: 'Achieved philanthropic goals while providing for family.',
      },
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: 'The team at Sahayak Wealth provided a level of strategic insight and personal attention that is truly rare. They transformed our complex financial picture into a clear, actionable plan for the future.',
    name: 'John D. Rockefeller IV',
    designation: 'Entrepreneur & Philanthropist'
  },
  {
    quote: 'Their expertise in cross-generational wealth transfer was invaluable. We now have peace of mind knowing our family\'s legacy is secure for generations to come.',
    name: 'Jane P. Morgan',
    designation: 'Family Office Principal'
  },
  {
    quote: 'Navigating the sale of my company was daunting, but their guidance on tax implications and investment strategy for the proceeds was exceptional. I feel confident in my financial future.',
    name: 'Robert K. Mellon',
    designation: 'Founder, Tech Innovators Inc.'
  },
  {
    quote: 'The bespoke portfolio they constructed for us has consistently outperformed our expectations, all while adhering to our specific risk parameters. A truly first-class service.',
    name: 'Elizabeth A. Carnegie',
    designation: 'Private Investor'
  }
];

export const teamData: TeamMember[] = [
  {
    name: 'Alistair Croft',
    role: 'Founding Partner & Chief Investment Officer',
    bio: 'With over 25 years of experience in global markets, Alistair leads our investment strategy with a focus on disciplined, long-term growth.',
    imageUrl: 'https://picsum.photos/200/200?random=10'
  },
  {
    name: 'Beatrice Sterling',
    role: 'Partner, Head of Wealth Planning',
    bio: 'A certified financial planner and trust & estate practitioner, Beatrice specializes in complex, multi-generational wealth structuring.',
    imageUrl: 'https://picsum.photos/200/200?random=11'
  },
  {
    name: 'Charles Vance',
    role: 'Senior Wealth Advisor',
    bio: 'Charles excels in building deep client relationships, translating intricate financial concepts into clear, effective strategies.',
    imageUrl: 'https://picsum.photos/200/200?random=12'
  }
];

export const articlesData: Article[] = [
    { id: 1, title: 'Navigating Market Volatility: A Long-Term Perspective', excerpt: 'Strategies for high-net-worth investors to maintain composure and find opportunity during turbulent market conditions.', category: 'Investment Strategy', date: 'Oct 26, 2023', imageUrl: 'https://picsum.photos/600/400?random=20' },
    { id: 2, title: 'The Modern Dynasty Trust: Securing Wealth for Generations', excerpt: 'An in-depth look at how dynasty trusts can be used to protect assets from creditors and estate taxes for centuries.', category: 'Inheritance Planning', date: 'Oct 15, 2023', imageUrl: 'https://picsum.photos/600/400?random=21' },
    { id: 3, title: 'Maximizing Philanthropic Impact Through Donor-Advised Funds', excerpt: 'Explore the benefits and strategies of using DAFs for efficient and impactful charitable giving.', category: 'Philanthropy', date: 'Sep 28, 2023', imageUrl: 'https://picsum.photos/600/400?random=22' },
    { id: 4, title: 'Life Insurance as an Asset Class in a Diversified Portfolio', excerpt: 'Beyond the death benefit: understanding the investment-like features of certain life insurance policies.', category: 'Insurance Planning', date: 'Sep 12, 2023', imageUrl: 'https://picsum.photos/600/400?random=23' },
    { id: 5, title: 'Tax-Loss Harvesting: Turning Market Dips into an Advantage', excerpt: 'A proactive strategy to offset capital gains and lower your overall tax burden.', category: 'Investment Strategy', date: 'Aug 30, 2023', imageUrl: 'https://picsum.photos/600/400?random=24' },
    { id: 6, title: 'Understanding the Role of Alternative Investments', excerpt: 'An overview of private equity, hedge funds, and real estate for the sophisticated investor.', category: 'Advanced Investing', date: 'Aug 19, 2023', imageUrl: 'https://picsum.photos/600/400?random=25' },
];

export const faqData: FaqItem[] = [
  { question: 'Who is your typical client?', answer: 'We specialize in serving high-net-worth individuals, families, and foundations with complex financial needs. Our clients are typically entrepreneurs, corporate executives, and multi-generational families who require sophisticated, integrated wealth management.' },
  { question: 'What is your investment philosophy?', answer: 'Our philosophy is grounded in a long-term, disciplined approach. We believe in strategic asset allocation, global diversification, and rigorous research to build resilient portfolios designed to achieve consistent, risk-adjusted returns over market cycles.' },
  { question: 'How are you compensated?', answer: 'We operate on a transparent, fee-based model. Our compensation is typically a percentage of assets under management. This structure aligns our interests with yours—we succeed when you succeed. We do not accept commissions for selling financial products.' },
  { question: 'Are you a fiduciary?', answer: 'Yes, absolutely. We have a legal and ethical obligation to act in your best interest at all times. Our advice is independent, objective, and solely focused on helping you achieve your financial goals.' },
  { question: 'How often will we meet to review my portfolio?', answer: 'We conduct formal portfolio reviews with our clients on a quarterly basis. However, we believe in open and continuous communication. We are available to meet or speak whenever you have questions or when life events necessitate a change in your financial plan.' },
];
