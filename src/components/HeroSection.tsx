import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute top-20 left-20 w-20 h-20 card-3d rounded-xl float-animation opacity-20" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-16 h-16 card-3d rounded-lg float-animation opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 card-3d rounded-full float-animation opacity-25" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-40 right-20 w-24 h-24 card-3d rounded-2xl float-animation opacity-20" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
            E.B.K. Sai Kumar
          </h1>
          <div className="text-2xl md:text-3xl mb-8 text-muted-foreground font-light">
            <span className="typewriter-text">B.Tech 2nd Year Student</span>
          </div>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
            Passionate about <span className="text-primary font-semibold">AI & Machine Learning</span>, 
            <span className="text-accent font-semibold"> Web Development</span>, and 
            <span className="text-secondary font-semibold"> Cybersecurity</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="hover:scale-110 transition-transform" asChild>
                <a href="https://github.com/emanisaikumar01" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-110 transition-transform" asChild>
                <a href="https://www.linkedin.com/in/emani-sai-kumar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-110 transition-transform" asChild>
                <a href="https://www.instagram.com/emanisaikumar01" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;