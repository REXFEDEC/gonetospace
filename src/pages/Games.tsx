import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";

interface Game {
  id: number;
  title: string;
  genre: string;
  year: string;
  rating: number;
  cover: string;
  description: string;
}

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const games: Game[] = [
    {
      id: 1,
      title: "The Witcher 3: Wild Hunt",
      genre: "RPG",
      year: "2015",
      rating: 5,
      cover: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&auto=format&fit=crop",
      description: "An absolute masterpiece in open-world RPG design. The Witcher 3 combines a rich narrative with meaningful choices, stunning visuals, and some of the best side quests in gaming history. Geralt's journey through the Northern Kingdoms is an unforgettable experience that sets the bar for storytelling in games. The world feels alive, every character has depth, and the DLCs are even better than the main game.",
    },
    {
      id: 2,
      title: "Hollow Knight",
      genre: "Metroidvania",
      year: "2017",
      rating: 5,
      cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop",
      description: "A hauntingly beautiful metroidvania that proves indie games can compete with AAA titles. Team Cherry crafted an intricate underground world filled with secrets, challenging bosses, and gorgeous hand-drawn art. The tight controls, atmospheric soundtrack, and sense of exploration make every moment engaging. It's challenging but fair, rewarding perseverance with stunning revelations.",
    },
    {
      id: 3,
      title: "Red Dead Redemption 2",
      genre: "Action-Adventure",
      year: "2018",
      rating: 5,
      cover: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&auto=format&fit=crop",
      description: "Rockstar's magnum opus is a technical and narrative achievement. The level of detail in every aspect—from the world simulation to character animations—is unprecedented. Arthur Morgan's story is a moving tale of loyalty, morality, and redemption set against the dying days of the Wild West. It's slow-paced but deliberately so, encouraging you to immerse yourself in the world.",
    },
    {
      id: 4,
      title: "Celeste",
      genre: "Platformer",
      year: "2018",
      rating: 5,
      cover: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&auto=format&fit=crop",
      description: "More than just a challenging platformer, Celeste is a touching story about mental health and overcoming personal struggles. The pixel art is gorgeous, the soundtrack is phenomenal, and the gameplay is precise and rewarding. Each death is a lesson, not a punishment. Assist mode ensures everyone can experience the story, while optional challenges push skilled players to their limits.",
    },
    {
      id: 5,
      title: "Hades",
      genre: "Roguelike",
      year: "2020",
      rating: 5,
      cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop",
      description: "Supergiant Games perfected the roguelike formula by making death meaningful. Every run reveals more about Zagreus and the pantheon of gods helping (or hindering) him. The combat is fluid and satisfying, the voice acting is superb, and the art style is stunning. Even after dozens of hours, new dialogue and story beats keep appearing. It's a game that respects your time while keeping you coming back for more.",
    },
    {
      id: 6,
      title: "Elden Ring",
      genre: "Action RPG",
      year: "2022",
      rating: 5,
      cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop",
      description: "FromSoftware's open-world masterpiece. Elden Ring takes the Souls formula and expands it into a vast, interconnected world filled with wonder and danger. The freedom to explore, the challenging combat, and the cryptic lore create an experience that respects player intelligence. Co-created with George R.R. Martin, the world-building is rich and mysterious. It's punishing but fair, and victory feels earned.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 max-w-6xl pt-32 pb-20">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Games</h1>
          <p className="text-muted-foreground text-lg">
            Virtual worlds I've explored and experiences worth recommending
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <div
              key={game.id}
              className="glass group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(163_79%_54%/0.3)] animate-slide-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
              onClick={() => setSelectedGame(game)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={game.cover}
                  alt={game.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-primary">{game.genre}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: game.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <h2 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary line-clamp-2">
                  {game.title}
                </h2>
                
                <p className="text-xs text-muted-foreground">{game.year}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="glass max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedGame && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold pr-8">
                  {selectedGame.title}
                </DialogTitle>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-sm text-muted-foreground">{selectedGame.genre}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{selectedGame.year}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: selectedGame.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                <img
                  src={selectedGame.cover}
                  alt={selectedGame.title}
                  className="w-full max-w-md mx-auto rounded-lg"
                />
                
                <p className="text-foreground leading-relaxed">
                  {selectedGame.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Games;
