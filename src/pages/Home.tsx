import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";
import InteractiveCard from "@/components/InteractiveCard";

const Home = () => {
  const cards = [
    {
      title: "Blog",
      description: "Thoughts, stories, and ideas I'd like to share with the world.",
      icon: <i className="hn hn-newspaper" style={{ fontSize: '40px' }}></i>,
      href: "/blog",
    },
    {
      title: "Music",
      description: "The soundtrack of my life - albums and tracks I keep coming back to.",
      icon: <i className="hn hn-music" style={{ fontSize: '40px' }}></i>,
      href: "/music",
    },
    {
      title: "Games",
      description: "Virtual worlds I've explored and experiences worth recommending.",
      icon: <i className="hn hn-gaming" style={{ fontSize: '40px' }}></i>,
      href: "/games",
    },
    {
      title: "Photography",
      description: "Moments captured through my lens, frozen in time forever.",
      icon: <i className="hn hn-retro-camera" style={{ fontSize: '40px' }}></i>,
      href: "/photography",
    },
    {
      title: "Professional",
      description: "Head over to sameer.goneto.space for professional details.",
      icon: <i className="hn hn-user" style={{ fontSize: '40px' }}></i>,
      href: "https://sameer.goneto.space/",
      external: true,
    },
    {
      title: "Grid Filler (Ignore Me)",
      description: "I'm here to complete the grid on bigger screens. You can ignore me. <3",
      icon: <i className="hn hn-robot" style={{ fontSize: '40px' }}></i>,
      href: "#",
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

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 max-w-6xl py-8">
          <div className="text-center text-sm text-muted-foreground">
            <a 
              href="https://www.flaticon.com/free-icons/pixel" 
              title="pixel icons"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              weathercock pixel icon created by Freepik - Flaticon
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
