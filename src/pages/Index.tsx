import { Link } from "react-router-dom";
import { ArrowRight, Palette, Layers, Sparkles, Code, Database, Globe, Star, CheckCircle, Users, Coffee, Award, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-8 text-primary leading-tight text-display">
              SHAHAN K
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-body-elegant">
              Freelance Transcriber, Graphic Designer & Web Developer from Kerala, India. 
              Founder of <span className="font-semibold text-primary">FLETO</span> - Creating innovative web solutions with MERN stack.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {["React", "Node.js", "MongoDB", "Firebase", "Design"].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/designs">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-accent transition-all duration-300">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Projects Completed", icon: CheckCircle },
              { number: "3", label: "Years Experience", icon: Award },
              { number: "1", label: "Company Founded", icon: Users },
              { number: "∞", label: "Cups of Coffee", icon: Coffee }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
    

      {/* Features Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-heading">
              What I Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-body-elegant">
              Combining creativity with technical expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Graphic Design",
                description: "Creating stunning visual designs, logos, and branding materials for businesses and projects.",
                features: ["Logo Design", "Brand Identity", "Print Design", "Digital Assets"]
              },
              {
                icon: Code,
                title: "Web Development",
                description: "Building modern web applications using MERN stack, React, and Firebase technologies.",
                features: ["MERN Stack", "React Apps", "Firebase Integration", "Responsive Design"]
              },
              {
                icon: Sparkles,
                title: "Transcription Services",
                description: "Professional transcription services with attention to detail and accuracy.",
                features: ["Audio Transcription", "Video Transcription", "Fast Turnaround", "High Accuracy"]
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground text-subheading">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed mb-6 text-body-elegant">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-heading">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-body-elegant">
              A showcase of my recent work and passion projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FLETO Platform",
                description: "Main company website and platform for web development services",
                tech: ["React", "Node.js", "MongoDB"],
                status: "Live",
                link: "fleto.netlify.app"
              },
              {
                title: "Flebooks",
                description: "Digital books platform with modern UI and user management",
                tech: ["React", "Firebase", "CSS3"],
                status: "In Development",
                link: "#"
              },
              {
                title: "Flestorage",
                description: "Google Drive-like storage solution with file management",
                tech: ["MERN Stack", "File Upload", "API"],
                status: "Live",
                link: "#"
              },
              {
                title: "HIBA Donation App",
                description: "Donation platform connecting donors with those in need",
                tech: ["React", "Firebase", "Payment Gateway"],
                status: "Completed",
                link: "#"
              },
              {
                title: "Real-time Drawing Board",
                description: "Collaborative drawing application with live updates",
                tech: ["React", "Firebase", "WebSocket"],
                status: "Demo",
                link: "#"
              },
              {
                title: "Cleptor Control Panel",
                description: "Ethical hacking simulation tool for security education",
                tech: ["Flask", "Python", "ngrok"],
                status: "Educational",
                link: "#"
              }
            ].map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={project.status === "Live" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary/20 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/designs">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-heading">
              Technologies I Love
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-body-elegant">
              Building with modern tools and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Firebase", icon: "🔥" },
              { name: "Express", icon: "🚀" },
              { name: "JavaScript", icon: "📜" },
              { name: "Python", icon: "🐍" },
              { name: "Flask", icon: "🌶️" },
              { name: "CSS3", icon: "🎨" },
              { name: "HTML5", icon: "📄" },
              { name: "Git", icon: "📚" },
              { name: "Blender", icon: "🎯" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="font-semibold text-foreground text-sm">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground text-elegant">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-body-elegant">
              Let's collaborate on your next web development project, graphic design needs, or transcription services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link to="/designs">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                  Explore Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Get to Know Me
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Fast Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-secondary/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>
    </div>
  );
};

export default Index;
