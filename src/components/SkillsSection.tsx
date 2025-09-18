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

        {/* Skill Mastery Showcase */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="card-3d p-8 backdrop-glow">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">Skill Mastery</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { skill: 'Python', mastery: 'Advanced', stars: 4, color: 'text-primary' },
                { skill: 'HTML/CSS', mastery: 'Expert', stars: 5, color: 'text-accent' },
                { skill: 'JavaScript', mastery: 'Proficient', stars: 4, color: 'text-secondary' },
                { skill: 'Java', mastery: 'Intermediate', stars: 3, color: 'text-primary' },
                { skill: 'SQL', mastery: 'Intermediate', stars: 3, color: 'text-accent' },
                { skill: 'Cybersecurity', mastery: 'Learning', stars: 3, color: 'text-secondary' }
              ].map((item) => (
                <div key={item.skill} className="text-center p-6 rounded-xl bg-muted/10 hover:bg-muted/20 transition-colors group">
                  <h4 className={`text-lg font-bold mb-2 ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.skill}
                  </h4>
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                          index < item.stars 
                            ? `bg-current ${item.color} animate-pulse` 
                            : 'bg-muted'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {item.mastery}
                  </p>
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