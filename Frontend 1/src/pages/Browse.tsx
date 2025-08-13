import { useState } from "react";
import UserCard from "@/components/UserCard";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Users } from "lucide-react";

// Mock data for demonstration
const mockUsers = [
  {
    name: "Alex Chen",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    experience: "3+ years",
    location: "San Francisco, CA",
    email: "alex.chen@email.com",
    rating: 4.8,
    bio: "Passionate developer with expertise in modern web technologies. Love building scalable applications and leading technical teams."
  },
  {
    name: "Sarah Martinez",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    experience: "4+ years",
    location: "New York, NY",
    email: "sarah.martinez@email.com",
    rating: 4.9,
    bio: "Creative designer focused on user-centered design and creating beautiful, intuitive interfaces that users love."
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "R"],
    experience: "5+ years",
    location: "Austin, TX",
    email: "david.kim@email.com",
    rating: 4.7,
    bio: "Data scientist with expertise in ML/AI. Experienced in turning complex data into actionable insights for business growth."
  },
  {
    name: "Emily Johnson",
    role: "Product Manager",
    skills: ["Product Strategy", "Agile", "Analytics", "User Research"],
    experience: "6+ years",
    location: "Seattle, WA",
    email: "emily.johnson@email.com",
    rating: 4.9,
    bio: "Strategic product leader with a track record of launching successful products. Expert in user research and data-driven decisions."
  },
  {
    name: "Marcus Thompson",
    role: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    experience: "4+ years",
    location: "Denver, CO",
    email: "marcus.thompson@email.com",
    rating: 4.6,
    bio: "DevOps specialist focused on automation and infrastructure. Passionate about building reliable, scalable systems."
  },
  {
    name: "Lisa Wang",
    role: "Mobile Developer",
    skills: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
    experience: "3+ years",
    location: "Los Angeles, CA",
    email: "lisa.wang@email.com",
    rating: 4.8,
    bio: "Mobile development expert with experience in cross-platform solutions. Love creating smooth, performant mobile experiences."
  }
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");

  const allSkills = Array.from(new Set(mockUsers.flatMap(user => user.skills)));
  const allRoles = Array.from(new Set(mockUsers.map(user => user.role)));

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    const matchesSkill = selectedSkill === "all" || user.skills.includes(selectedSkill);
    
    return matchesSearch && matchesRole && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
                Teammate
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with talented developers, designers, and innovators ready to build amazing projects together.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-xl shadow-card border border-border p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, role, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  {allRoles.map(role => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Select Skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  {allSkills.map(skill => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="lg:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Users className="h-4 w-4 mr-2" />
                {filteredUsers.length} teammates found
              </Badge>
              {searchTerm && (
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Searching: "{searchTerm}"
                </Badge>
              )}
            </div>
            
            <Select defaultValue="rating">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="experience">Most Experience</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* User Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No teammates found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or browse all available teammates.
              </p>
              <Button 
                variant="hero" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedRole("all");
                  setSelectedSkill("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Browse;