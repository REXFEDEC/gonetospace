import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  external?: boolean;
}

const InteractiveCard = ({ title, description, icon, href, external }: InteractiveCardProps) => {
  const content = (
    <div className="glass group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(163_79%_54%/0.3)] cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        
        <h3 className="mb-2 text-2xl font-semibold transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={href}>{content}</Link>;
};

export default InteractiveCard;
