import { User, MapPin, GraduationCap, Code, Globe, BookOpen, Heart, Monitor } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight text-display">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-body-elegant">
              Get to know Shahan K - Developer, Designer, and Lifelong Learner
            </p>
          </div>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <Card className="mb-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-heading">
                <User className="h-8 w-8 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Name:</p>
                      <p className="text-muted-foreground">Shahan K (you can call me SHAHAN)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Nationality/Region:</p>
                      <p className="text-muted-foreground">Malayali, from Kerala, India</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Location:</p>
                      <p className="text-muted-foreground">City Kottakkal, Post office Randathani</p>
                      <p className="text-muted-foreground">Postal code 676510, State Kerala, Country India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Current Status:</p>
                      <p className="text-muted-foreground">Currently staying at a hostel (as of Sept 2024)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology & Projects Section */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto">
          <Card className="mb-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Code className="h-8 w-8 text-primary" />
                Technology & Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">Tech Stack Interest:</h4>
                <div className="flex flex-wrap gap-2">
                  {["MERN Stack", "React", "Firebase", "Node.js", "MongoDB", "Express"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gradient-primary/10 text-primary border-primary/20 hover:bg-gradient-primary/20 transition-colors duration-200 cursor-default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">Created Projects:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Flebooks (website + GitHub repo)",
                    "for HIBA (donation app)",
                    "Firebase-based donation project",
                    "Firebase-based real-time drawing board",
                    "Drive-like websites (Flestorage, Fledrive)",
                    "Library website",
                    "Cleptor Control Panel (ethical hacking/phishing simulation tool with Flask + ngrok)"
                  ].map((project, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg border hover:border-primary/30 hover:shadow-md transition-all duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">{project}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-200">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Other Interests:</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">• Blender scripting for big structures (like mansions)</p>
                    <p className="text-muted-foreground">• Explored Hackintosh setup with GibMacOS and OpenCore</p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-200">
                  <h4 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    Current Setup:
                  </h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">• HP Notebook</p>
                    <p className="text-muted-foreground">• Intel i3 5th Gen CPU</p>
                    <p className="text-muted-foreground">• 8GB RAM</p>
                    <p className="text-muted-foreground">• No dedicated GPU</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Studies & Learning Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <Card className="mb-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <GraduationCap className="h-8 w-8 text-primary" />
                Studies & Learning Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Current Studies:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Currently studying SSLC Chemistry (as of 2024)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Technical Learning:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Learning ethical hacking (SQL injection, step by step)</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Learning React.js and MERN stack</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Interested in digital marketing (looking for a mentor)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Other Learning Interests:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-gradient-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 hover:bg-gradient-primary/10 transition-all duration-200">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Dragon Kung Fu books (basics & techniques)</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gradient-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 hover:bg-gradient-primary/10 transition-all duration-200">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Mawlid literature and its political analysis (Malabar, Hijaz, Yemen)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Websites Made Section */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto">
          <Card className="mb-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Globe className="h-8 w-8 text-primary" />
                Websites You Made
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "fleto.netlify.app", desc: "Main company website" },
                  { name: "Flebooks", desc: "Digital books platform" },
                  { name: "Flestorage / Fledrive", desc: "Storage websites with drive-like UI" }
                ].map((website, index) => (
                  <div key={index} className="bg-gradient-primary/10 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-gradient-primary/15 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                    <h5 className="font-semibold text-foreground mb-2">{website.name}</h5>
                    <p className="text-sm text-muted-foreground">{website.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl">
                <Heart className="h-8 w-8 text-primary" />
                Preferences & Personal Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-gradient-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 hover:bg-gradient-primary/10 transition-all duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Communication Style:</p>
                    <p className="text-muted-foreground">Prefer responses in a formal, professional tone but also conversational</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 hover:bg-gradient-primary/10 transition-all duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Languages:</p>
                    <p className="text-muted-foreground">You read and write in Malayalam</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="pb-20"></div>
    </div>
  );
};

export default About;