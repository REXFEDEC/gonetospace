import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: string;
  rating: number;
  poster: string;
  description: string;
}

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movies: Movie[] = [
    {
      id: 1,
      title: "Parasite",
      genre: "RPG",
      year: "2019",
      rating: 5,
      poster: "https://images.unsplash.com/photo-1489599735734-79b4d8c3b0a8?w=400&auto=format&fit=crop",
      description: "Bong Joon-ho's masterpiece brilliantly blends social commentary with edge-of-your-seat suspense. The story of two families from vastly different economic backgrounds delivers powerful messages about class disparity while maintaining perfect pacing and shocking twists. The cinematography is stunning, and the performances (especially from the children) are heartbreaking. It's a film that stays with you long after the credits roll.",
    },
    {
      id: 2,
      title: "Spirited Away",
      genre: "Animation",
      year: "2001",
      rating: 5,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&auto=format&fit=crop",
      description: "Hayao Miyazaki's magical masterpiece takes you on an unforgettable journey through a spirit world. Chihiro's transformation from a spoiled child to a courageous young woman is beautifully portrayed alongside stunning animation and memorable characters. The themes of environmentalism, courage, and growing up resonate deeply. Every frame is a work of art, and the score perfectly complements the visual splendor.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: "2018",
      rating: 5,
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop",
      description: "Christopher Nolan's Batman trilogy peaked with this masterpiece. Heath Ledger's iconic performance as the Joker is career-defining, delivering chaos and philosophy in equal measure. The film's exploration of heroism, chaos, and morality in a post-9/11 world feels more relevant than ever. Hans Zimmer's score and Wally Pfister's cinematography elevate every scene to cinematic perfection.",
    },
    {
      id: 4,
      title: "Inception",
      genre: "Sci-Fi",
      year: "2018",
      rating: 5,
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&auto=format&fit=crop",
      description: "Nolan's mind-bending exploration of dreams within dreams is a technical and narrative triumph. The practical effects, complex plotting, and stellar ensemble cast (led by Leonardo DiCaprio) create a film that demands multiple viewings. The concepts of shared dreaming and subconscious manipulation are explored with depth and visual flair. Every element serves the story perfectly.",
    },
    {
      id: 5,
      title: "Pulp Fiction",
      genre: "Crime",
      year: "1994",
      rating: 5,
      poster: "https://images.unsplash.com/photo-1489599735734-79b4d8c3b0a8?w=400&auto=format&fit=crop",
      description: "Quentin Tarantino's nonlinear masterpiece redefined American cinema. The interwoven stories of hitmen, boxers, and diner robbers showcase brilliant dialogue, memorable characters, and groundbreaking editing. John Travolta's iconic dance scene and Samuel L. Jackson's Bible verse delivery are just highlights in a film full of quotable moments. It's violent, funny, and utterly original.",
    },
    {
      id: 6,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: "2014",
      rating: 5,
      poster: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&auto=format&fit=crop",
      description: "Christopher Nolan's space epic combines hard science with emotional storytelling. Matthew McConaughey's journey to save humanity delivers profound messages about love, sacrifice, and the future of our species. The visual effects, particularly the depiction of wormholes and black holes, are groundbreaking. Hans Zimmer's score perfectly captures the film's epic scope and emotional depth.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 max-w-6xl pt-32 pb-20">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Movies</h1>
          <p className="text-muted-foreground text-lg">
            Films that have shaped my perspective and left lasting impressions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="glass group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(163_79%_54%/0.3)] animate-slide-in-up border-2 border-border"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-primary">{movie.genre}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: movie.rating }).map((_, i) => (
                      <i key={i} className="hn hn-star-solid" style={{ fontSize: '14px', color: 'hsl(var(--primary))' }}></i>
                    ))}
                  </div>
                </div>
                
                <h2 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary line-clamp-2">
                  {movie.title}
                </h2>
                
                <p className="text-xs text-muted-foreground">{movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedMovie} onOpenChange={() => setSelectedMovie(null)}>
        <DialogContent className="glass max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedMovie && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold pr-8">
                  {selectedMovie.title}
                </DialogTitle>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-sm text-muted-foreground">{selectedMovie.genre}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{selectedMovie.year}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: selectedMovie.rating }).map((_, i) => (
                      <i key={i} className="hn hn-star-solid" style={{ fontSize: '16px', color: 'hsl(var(--primary))' }}></i>
                    ))}
                  </div>
                </div>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                <img
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                  className="w-full max-w-md mx-auto"
                />
                
                <p className="text-foreground leading-relaxed">
                  {selectedMovie.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Movies;
