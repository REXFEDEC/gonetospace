import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";
import InteractiveCard from "@/components/InteractiveCard";
import { BookOpen, Music, Gamepad2, Camera, Briefcase } from "lucide-react";

const Home = () => {
  const cards = [
    {
      title: "Blog",
      description: "Thoughts, stories, and ideas I'd like to share with the world.",
      icon: <BookOpen size={40} />,
      href: "/blog",
    },
    {
      title: "Music",
      description: "The soundtrack of my life - albums and tracks I keep coming back to.",
      icon: <Music size={40} />,
      href: "/music",
    },
    {
      title: "Games",
      description: "Virtual worlds I've explored and experiences worth recommending.",
      icon: <Gamepad2 size={40} />,
      href: "/games",
    },
    {
      title: "Photography",
      description: "Moments captured through my lens, frozen in time forever.",
      icon: <Camera size={40} />,
      href: "/photography",
    },
    {
      title: "Professional",
      description: "My work, projects, and professional journey in detail.",
      icon: <Briefcase size={40} />,
      href: "https://sameer.goneto.space/",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 max-w-6xl pt-32 pb-20">
        <div className="mb-20 space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold tracking-tight lg:text-7xl">
            Sameer Mann
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Hey, I'm Sameer Mann — I make things, click photos, and play games.
          </p>
          
          <Typewriter />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="animate-slide-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <InteractiveCard {...card} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
