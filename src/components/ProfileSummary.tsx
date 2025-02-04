import React from 'react';
import { FileText, Rocket, Target, Users } from 'lucide-react';

const ProfileSummary = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-amber-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-900">Profile Summary</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Summary */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Atoyebi Taofiq Olajide (ATO) is a seasoned business development expert with nearly a decade of experience in consulting, strategy formulation, and execution. A result-driven professional, he has successfully guided startups and established businesses in multiple industries to achieve sustainable growth, expand market presence, and optimize operational efficiency. 
              Known for his simple approach to problem-solving, ATO consistently finds straightforward solutions to complex business challenges, earning him the trust and loyalty of his clients. His ability to create tailored strategies, craft compelling business documents, and identify untapped opportunities has solidified his reputation as a dynamic and reliable consultant.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <ExpertiseCard
              icon={<Rocket className="text-amber-600" />}
              title="Startup Excellence"
              description="Passionate about nurturing startups from concept to success. I've guided numerous ventures through critical growth phases, providing strategic direction and operational frameworks."
            />
            <ExpertiseCard
              icon={<FileText className="text-purple-600" />}
              title="Business Documentation"
              description="Expert in crafting compelling business documents including comprehensive business plans, feasibility studies, and strategic proposals that drive results."
            />
            <ExpertiseCard
              icon={<Target className="text-amber-600" />}
              title="Strategic Planning"
              description="Specialized in developing actionable strategies that align with business objectives, ensuring sustainable growth and market expansion."
            />
            <ExpertiseCard
              icon={<Users className="text-purple-600" />}
              title="Consulting Impact"
              description="Successfully guided over 35 companies across various sectors, implementing transformative solutions that drive revenue growth and operational efficiency."
            />
          </div>

          {/* Core Competencies */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-purple-900">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Business Development",
                "Market Entry Strategy",
                "Revenue Optimization",
                "Partnership Development",
                "Feasibility Studies",
                "Business Plan Writing",
                "Leadership",
                "Negotiation",
                "Problem-Solving"
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-amber-50 px-4 py-2 rounded-lg
                           text-purple-900 text-center hover:from-purple-100 hover:to-amber-100
                           transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                  border-l-4 border-amber-500 group">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-50 to-amber-50
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ProfileSummary;