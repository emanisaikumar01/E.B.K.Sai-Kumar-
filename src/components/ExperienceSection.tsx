import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Trophy, Shield } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'Internship',
      title: 'Web Development & Ethical Hacking Intern',
      company: 'Rinex.ai',
      duration: '2024',
      description: 'Gained hands-on experience in full-stack web development and cybersecurity practices, working on real-world projects and learning industry-standard security protocols.',
      skills: ['Web Development', 'Ethical Hacking', 'Security Testing', 'Full-stack Development'],
      icon: Briefcase,
      color: 'text-primary'
    },
    {
      type: 'Competition',
      title: 'Smart India Hackathon',
      company: 'Government of India',
      duration: '2024',
      description: 'Participated in one of India\'s biggest hackathons, collaborating with teams to solve real-world problems using innovative technology solutions.',
      skills: ['Problem Solving', 'Team Collaboration', 'Innovation', 'Rapid Prototyping'],
      icon: Trophy,
      color: 'text-accent'
    },
    {
      type: 'Competition',
      title: 'Cyber Security Hackathon',
      company: 'Cybersecurity Competition',
      duration: '2024',
      description: 'Competed in cybersecurity challenges, demonstrating skills in vulnerability assessment, penetration testing, and security solution development.',
      skills: ['Cybersecurity', 'Penetration Testing', 'Vulnerability Assessment', 'Security Analysis'],
      icon: Shield,
      color: 'text-secondary'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and competitions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative mb-12 ${isEven ? 'md:text-right' : ''}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute w-8 h-8 rounded-full bg-card border-4 border-primary top-8 ${
                    isEven ? 'left-0 md:left-1/2 md:transform md:-translate-x-1/2' : 'left-0 md:left-1/2 md:transform md:-translate-x-1/2'
                  }`}>
                    <div className={`w-full h-full rounded-full ${experience.color} bg-current opacity-20`}></div>
                  </div>

                  <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-8 md:ml-0' : 'md:ml-8'} md:w-5/12 ${isEven ? 'md:ml-auto' : ''}`}>
                    <Card className="card-3d hover:scale-105 transition-all duration-500 backdrop-glow">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-card ${experience.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {experience.company}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">{experience.duration}</p>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-accent">Key Skills Gained:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs hover:scale-110 transition-transform">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;