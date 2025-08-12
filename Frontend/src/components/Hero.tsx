import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
        <img 
          src={heroImage} 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Brain className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-pulse delay-1000">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Users className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse delay-500">
        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Hackathon Team
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              SynergyAI intelligently matches you with teammates based on skills, experience, 
              and interests. Build winning teams in minutes, not hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="xl" className="group">
              Start Finding Teammates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>1,250+ Teams Formed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>Active Matching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;