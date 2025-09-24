import Navigation from "@/components/Navigation";
import { Mail, Phone, Github, Twitter, Linkedin, Instagram, Globe, MessageCircle, Send, MapPin, Clock, User, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/meshahank",
    color: "#333",
    description: "View my code & projects"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/meshahank",
    color: "#0077B5",
    description: "Professional network"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/meshahank",
    color: "#1DA1F2",
    description: "Follow my thoughts & updates"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/meshahank",
    color: "#E4405F",
    description: "Behind the scenes"
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/meshahank",
    color: "#0088CC",
    description: "Quick messaging"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/919497159722",
    color: "#25D366",
    description: "Direct messaging"
  },
  {
    name: "Website",
    icon: Globe,
    url: "https://meshahank.github.io/",
    color: "#36ffbf",
    description: "My portfolio site"
  },
];

const contactInfo = [
  {
    icon: User,
    label: "Full Name",
    value: "SHAHAN K",
    description: "Also known as @meshahank"
  },
  {
    icon: Mail,
    label: "Email",
    value: "meshahank@gmail.com",
    description: "Best way to reach me for business inquiries",
    link: "mailto:meshahank@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9497159722",
    description: "Available for calls & WhatsApp",
    link: "tel:+919497159722"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kottakkal, Kerala, India",
    description: "Open to remote work worldwide"
  },
  {
    icon: Briefcase,
    label: "Services",
    value: "Web Dev • Design • Transcription",
    description: "Full-stack development, graphic design, and professional transcription services"
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Available for new projects",
    description: "Typically respond within 24 hours"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary leading-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary hover:underline font-medium mb-2 block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary font-medium mb-2">{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Find Me Online</h2>
            <p className="text-lg text-muted-foreground">
              Connect with me on your preferred platform - I'm active on all of them!
            </p>
            <div className="mt-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Username everywhere: @meshahank
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up border-2 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${social.color}15` }}
                  >
                    <social.icon 
                      className="h-8 w-8 transition-colors" 
                      style={{ color: social.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you need web development, graphic design, or transcription services, 
              I'm here to help bring your vision to life. Let's discuss your requirements!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="mailto:meshahank@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </a>
              <a 
                href="https://wa.me/919497159722"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
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
}
