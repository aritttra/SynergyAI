import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Mail, MapPin, Star } from "lucide-react";

interface UserCardProps {
  name: string;
  role: string;
  skills: string[];
  experience: string;
  location: string;
  email: string;
  rating: number;
  avatar?: string;
  bio: string;
}

const UserCard = ({ name, role, skills, experience, location, email, rating, avatar, bio }: UserCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground truncate">{name}</h3>
            <p className="text-primary font-medium">{role}</p>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>
        
        <div>
          <p className="text-sm font-medium text-foreground mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="text-sm">
          <span className="font-medium text-foreground">Experience: </span>
          <span className="text-muted-foreground">{experience}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button 
          variant="hero" 
          className="w-full group/btn"
          onClick={() => window.open(`mailto:${email}`, '_blank')}
        >
          <Mail className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
          Contact {name.split(' ')[0]}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;