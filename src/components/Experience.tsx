import React from 'react';
import { Briefcase, Users, Target, Lightbulb } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Professional Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ExperienceCard 
            icon={<Briefcase className="text-blue-600" />}
            title="Consulting Projects"
            description="Led over 35 successful consulting projects across various industries, 
                       driving revenue growth and market expansion."
          />
          <ExperienceCard 
            icon={<Users className="text-purple-600" />}
            title="Tech Platform Development"
            description="Guided multiple tech platforms including Cardtonic (500k+ downloads) 
                       and Cenoa (100k+ downloads) to significant market success."
          />
          <ExperienceCard 
            icon={<Target className="text-green-600" />}
            title="Website Development"
            description="Designed High-converting, SEO-optimized portfolio website that elevate personal brands, enhance online visibiity, and turn visitors into clients"
          />
          <ExperienceCard 
            icon={<Lightbulb className="text-yellow-600" />}
            title="Strategic Planning"
            description="Developed comprehensive business strategies and feasibility studies 
                       for startups and established businesses."
          />
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all 
                  duration-300 hover:shadow-xl group">
    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center 
                    group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Experience;