import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Ready to Build Your
              <span className="block">Dream Team?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of hackers who've already found their perfect teammates. 
              Start building winning teams today with SynergyAI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="xl" className="group bg-white text-primary hover:bg-white/90">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Join Community
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1,250+</div>
              <div className="text-white/70 text-sm">Teams Formed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5,800+</div>
              <div className="text-white/70 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">350+</div>
              <div className="text-white/70 text-sm">Hackathons Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-white/70 text-sm">Match Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;