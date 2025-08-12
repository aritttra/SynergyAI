import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, BarChart, Database, Megaphone, Shield } from "lucide-react";

const roles = [
  {
    icon: Code,
    title: "Developers",
    description: "Frontend, Backend, Full-stack, Mobile",
    skills: ["React", "Python", "Node.js", "Flutter"],
    count: "450+ available",
    color: "bg-tech-blue"
  },
  {
    icon: Palette,
    title: "Designers",
    description: "UI/UX, Visual, Product Design",
    skills: ["Figma", "Adobe XD", "Sketch", "Principle"],
    count: "180+ available",
    color: "bg-tech-purple"
  },
  {
    icon: BarChart,
    title: "Product Managers",
    description: "Strategy, Research, Analytics",
    skills: ["User Research", "Analytics", "Strategy", "Roadmapping"],
    count: "95+ available",
    color: "bg-accent"
  },
  {
    icon: Database,
    title: "Data Scientists",
    description: "ML, AI, Analytics, Research",
    skills: ["Python", "TensorFlow", "R", "SQL"],
    count: "120+ available",
    color: "bg-tech-cyan"
  },
  {
    icon: Megaphone,
    title: "Marketers",
    description: "Growth, Content, Brand Strategy",
    skills: ["Growth Hacking", "Content", "SEO", "Social Media"],
    count: "75+ available",
    color: "bg-primary"
  },
  {
    icon: Shield,
    title: "DevOps & Security",
    description: "Infrastructure, Security, Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Security"],
    count: "60+ available",
    color: "bg-destructive"
  }
];

const Roles = () => {
  return (
    <section id="roles" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Find Teammates by Role
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking for a specific skill set or want to explore different expertise areas, 
            find the perfect complement to your hackathon team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg ${role.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {role.count}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {role.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Browse All Roles
            </Button>
            <Button variant="outline" size="lg">
              Post Your Needs
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Can't find what you're looking for? Our AI will help match you with the right people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roles;