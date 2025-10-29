
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { teamData } from '../constants';
import { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-brand-night border border-brand-gray-100 rounded-lg p-6 text-center">
    <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-brand-gold" />
    <h3 className="text-xl font-serif text-white">{member.name}</h3>
    <p className="text-brand-gold mb-3">{member.role}</p>
    <p className="text-gray-400 text-sm">{member.bio}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <PageHeader title="About Sahayak Wealth" subtitle="Our Philosophy and People" />

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To provide unparalleled financial guidance and personalized service to high-net-worth individuals and their families. We are committed to fostering long-term partnerships built on integrity, expertise, and a profound understanding of our clients' aspirations.
              </p>
              <h2 className="text-3xl font-serif text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the most trusted advisor in wealth management, renowned for our holistic approach to preserving and growing wealth across generations, enabling our clients to leave a lasting and meaningful legacy.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/800/600?random=2" alt="Office interior" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-brand-night">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-white">Our Core Values</h2>
            <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Integrity', 'Excellence', 'Partnership', 'Discretion'].map(value => (
              <div key={value} className="bg-brand-dark p-8 rounded-lg border border-brand-gray-100">
                <h3 className="text-2xl font-serif text-brand-gold mb-2">{value}</h3>
                <p className="text-gray-400">Placeholder text describing this value in more detail. This section emphasizes the company's commitment to ethical practices and client-centric service.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-white">Meet Our Leadership</h2>
            <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">The experienced professionals dedicated to your financial success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map(member => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
