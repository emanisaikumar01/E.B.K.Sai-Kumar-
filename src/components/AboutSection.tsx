import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile.jpg';

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative perspective-1000">
            <Card className="card-3d hover:scale-105 transition-transform duration-500 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={profileImage} 
                    alt="E.B.K. Sai Kumar" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">E.B.K. Sai Kumar</h3>
                    <p className="text-primary-foreground/80">B.Tech 2nd Year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="card-3d p-8 backdrop-glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm currently pursuing my B.Tech degree and have developed a strong passion for technology, 
                particularly in the fields of Artificial Intelligence, Web Development, and Cybersecurity. 
                My journey has been filled with exciting projects, valuable certifications, and hands-on experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/10">
                  <div className="text-2xl font-bold text-accent">2+</div>
                  <div className="text-sm text-muted-foreground">Hackathons</div>
                </div>
              </div>
            </div>

            <div className="card-3d p-8 backdrop-glow">
              <h3 className="text-2xl font-bold mb-4 text-accent">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {['Browsing Internet', 'Cooking', 'Badminton'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;