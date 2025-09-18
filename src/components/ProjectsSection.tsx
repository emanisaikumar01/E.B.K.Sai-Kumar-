import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Resume Analyzer',
      description: 'An intelligent system that analyzes resumes using machine learning algorithms to provide insights on content quality, keyword optimization, and formatting suggestions.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Data Analysis'],
      icon: Brain,
      features: [
        'Resume content analysis',
        'Keyword optimization suggestions',
        'ATS compatibility checker',
        'Performance scoring system'
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title} 
                className="card-3d hover:scale-105 transition-all duration-500 backdrop-glow mb-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-2 space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                          <CardDescription className="text-lg">{project.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-accent">Key Features:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {project.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-secondary">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="hover:scale-110 transition-transform">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  <div className="flex flex-col justify-center space-y-4">
                    <Button className="group hover:scale-110 transition-transform glow-effect">
                      <Github className="mr-2 h-4 w-4 group-hover:animate-spin" />
                      View Code
                    </Button>
                    <Button variant="outline" className="group hover:scale-110 transition-transform">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Future Projects */}
        <div className="text-center mt-16">
          <div className="card-3d p-8 backdrop-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and expanding my portfolio. 
              Stay tuned for more exciting developments in AI, web development, and cybersecurity.
            </p>
            <Button variant="outline" className="hover:scale-110 transition-transform">
              Follow My Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;