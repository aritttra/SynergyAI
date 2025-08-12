import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Tell us about your skills, experience level, and what you're looking for in a hackathon team.",
    color: "text-tech-blue"
  },
  {
    icon: Search,
    title: "AI-Powered Matching",
    description: "Our smart algorithm analyzes your profile and finds the most compatible teammates and projects.",
    color: "text-tech-purple"
  },
  {
    icon: MessageSquare,
    title: "Connect & Collaborate",
    description: "Chat with potential teammates, discuss project ideas, and finalize your dream team composition.",
    color: "text-tech-cyan"
  },
  {
    icon: Trophy,
    title: "Build & Win Together",
    description: "Work with your perfectly matched team and increase your chances of hackathon success.",
    color: "text-accent"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How SynergyAI Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From solo hacker to team player in four simple steps. Let AI do the heavy lifting 
            while you focus on what matters—building amazing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;