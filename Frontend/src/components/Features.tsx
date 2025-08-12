import { Card } from "@/components/ui/card";
import { Brain, Users, Clock, Target, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart AI Matching",
    description: "Advanced algorithms analyze skills, experience, and project preferences to find your ideal teammates.",
    gradient: "from-tech-blue to-tech-purple"
  },
  {
    icon: Users,
    title: "Team Size Flexibility",
    description: "Whether you need one person or a full team, find exactly the right number of collaborators.",
    gradient: "from-tech-purple to-accent"
  },
  {
    icon: Clock,
    title: "Real-time Availability",
    description: "See who's online and ready to team up right now. No waiting around for responses.",
    gradient: "from-accent to-tech-cyan"
  },
  {
    icon: Target,
    title: "Skill-based Pairing",
    description: "Match with developers, designers, product managers, and domain experts who complement your skills.",
    gradient: "from-tech-cyan to-tech-blue"
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Connect with confidence through our verified profile system and reputation scores.",
    gradient: "from-tech-blue to-primary"
  },
  {
    icon: Sparkles,
    title: "Project Inspiration",
    description: "Get matched not just with people, but with exciting project ideas that fit your team's skills.",
    gradient: "from-primary to-tech-purple"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Powerful Features for Team Building
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to find, connect with, and build amazing teams. 
            Our AI-powered platform makes team formation effortless and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;