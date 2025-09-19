import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Instagram, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emani-sai-kumar',
      icon: Linkedin,
      color: 'text-blue-500 hover:text-blue-400',
      description: 'Professional networking'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/emanisaikumar01',
      icon: Instagram,
      color: 'text-pink-500 hover:text-pink-400',
      description: 'Personal updates'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="card-3d backdrop-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                <CardDescription>
                  Have a project in mind or want to collaborate? I'd love to hear from you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your name" className="backdrop-glow" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" className="backdrop-glow" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or idea..." 
                    className="min-h-32 backdrop-glow" 
                  />
                </div>
                <Button className="w-full group hover:scale-105 transition-transform glow-effect">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="card-3d backdrop-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">9515654301</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-3d backdrop-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Connect on Social</CardTitle>
                <CardDescription>
                  Follow my journey and stay updated with my latest projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={social.name}
                        variant="outline"
                        className="justify-start h-auto p-4 hover:scale-105 transition-transform group"
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <IconComponent className={`h-6 w-6 mr-4 ${social.color}`} />
                          <div className="text-left">
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {social.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {social.description}
                            </p>
                          </div>
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-3d p-8 backdrop-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a new project, internship opportunity, or just a tech conversation, 
              I'm always excited to connect with fellow developers and innovators.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="group hover:scale-110 transition-transform glow-effect">
                <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;