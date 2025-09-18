import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Cloud, Code, BarChart, Database } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      description: 'Comprehensive understanding of cloud services, Azure architecture, security, privacy, and compliance.',
      icon: Cloud,
      color: 'text-primary',
      skills: ['Cloud Computing', 'Azure Services', 'Cloud Security', 'Infrastructure']
    },
    {
      title: 'Python Fundamentals',
      issuer: 'Kaggle',
      description: 'Mastery of Python programming fundamentals, data structures, and algorithmic thinking.',
      icon: Code,
      color: 'text-accent',
      skills: ['Python Programming', 'Data Structures', 'Algorithms', 'Problem Solving']
    },
    {
      title: 'Java Fundamentals',
      issuer: 'Infosys',
      description: 'Strong foundation in Java programming, object-oriented concepts, and enterprise development.',
      icon: Code,
      color: 'text-secondary',
      skills: ['Java Programming', 'OOP Concepts', 'Enterprise Development', 'Software Design']
    },
    {
      title: 'Exploratory Data Analytics',
      issuer: 'NASSCOM',
      description: 'Advanced skills in data analysis, visualization, and extracting insights from complex datasets.',
      icon: BarChart,
      color: 'text-destructive',
      skills: ['Data Analysis', 'Data Visualization', 'Statistical Analysis', 'Business Intelligence']
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={cert.title} 
                className="card-3d hover:scale-105 transition-all duration-500 backdrop-glow group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-card ${cert.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Award className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className={`text-lg font-medium ${cert.color}`}>
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-accent">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="text-xs hover:scale-110 transition-transform cursor-pointer group-hover:border-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="card-3d p-8 backdrop-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">Certification Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Total Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Major Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Skills Gained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Recent Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;