import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Shield } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
      color: 'text-primary'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['Frontend Development', 'Responsive Design', 'UI/UX Basics'],
      color: 'text-accent'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['SQL Basics', 'Database Design', 'Data Analysis'],
      color: 'text-secondary'
    },
    {
      title: 'Security',
      icon: Shield,
      skills: ['Ethical Hacking', 'Cybersecurity Fundamentals', 'Security Testing'],
      color: 'text-destructive'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-3d hover:scale-105 transition-all duration-500 backdrop-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-3 rounded-full bg-card w-fit ${category.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:scale-110 transition-transform cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card-3d p-8 backdrop-glow">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: 'Python', level: 85 },
                { skill: 'JavaScript', level: 75 },
                { skill: 'HTML/CSS', level: 90 },
                { skill: 'SQL', level: 60 },
                { skill: 'Java', level: 70 },
                { skill: 'Cybersecurity', level: 65 }
              ].map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;