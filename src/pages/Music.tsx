import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: string;
  cover: string;
  note: string;
  spotifyUrl?: string;
}

const Music = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      year: "1975",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop",
      note: "A timeless masterpiece that defies genre conventions. The operatic sections, the hard rock intensity, and Freddie Mercury's vocal range make this one of the greatest songs ever recorded.",
      spotifyUrl: "#",
    },
    {
      id: 2,
      title: "Comfortably Numb",
      artist: "Pink Floyd",
      album: "The Wall",
      year: "1979",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop",
      note: "The guitar solos in this song are transcendent. David Gilmour's playing speaks volumes without words, creating an emotional journey that perfectly captures the album's themes of isolation and numbness.",
      spotifyUrl: "#",
    },
    {
      id: 3,
      title: "Radiohead - Paranoid Android",
      artist: "Radiohead",
      album: "OK Computer",
      year: "1997",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop",
      note: "A six-and-a-half-minute progressive rock epic that moves through multiple movements. This song encapsulates the alienation and technological anxiety of the modern age.",
      spotifyUrl: "#",
    },
    {
      id: 4,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
      year: "1971",
      cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&auto=format&fit=crop",
      note: "Perhaps the most iconic rock song ever written. It builds gradually from a gentle acoustic beginning to an explosive climax, showcasing the band's incredible dynamic range.",
      spotifyUrl: "#",
    },
    {
      id: 5,
      title: "Under Pressure",
      artist: "Queen & David Bowie",
      album: "Hot Space",
      year: "1981",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop",
      note: "An unexpected collaboration that resulted in pure magic. The interplay between Mercury and Bowie's vocals, combined with that iconic bassline, creates something truly special.",
      spotifyUrl: "#",
    },
    {
      id: 6,
      title: "Imagine",
      artist: "John Lennon",
      album: "Imagine",
      year: "1971",
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&auto=format&fit=crop",
      note: "Simple yet profound. Lennon's vision of a world without divisions has resonated across generations. The minimalist piano arrangement lets the powerful message shine through.",
      spotifyUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 max-w-6xl pt-32 pb-20">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Music</h1>
          <p className="text-muted-foreground text-lg">
            The soundtrack of my life - albums and tracks I keep coming back to
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="glass group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(163_79%_54%/0.3)] animate-slide-in-up border-2 border-border"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
              onClick={() => setSelectedTrack(track)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={track.cover}
                  alt={`${track.album} by ${track.artist}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <i className="hn hn-music" style={{ fontSize: '16px' }}></i>
                  <span className="text-xs">{track.year}</span>
                </div>
                
                <h2 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary line-clamp-1">
                  {track.title}
                </h2>
                
                <p className="text-sm text-muted-foreground">
                  {track.artist}
                </p>
                
                <p className="text-xs text-muted-foreground mt-1">
                  {track.album}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedTrack} onOpenChange={() => setSelectedTrack(null)}>
        <DialogContent className="glass max-w-2xl">
          {selectedTrack && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold pr-8">
                  {selectedTrack.title}
                </DialogTitle>
                <p className="text-muted-foreground pt-2">
                  {selectedTrack.artist} • {selectedTrack.album} ({selectedTrack.year})
                </p>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                <img
                  src={selectedTrack.cover}
                  alt={selectedTrack.album}
                  className="w-full max-w-sm mx-auto"
                />
                
                <p className="text-foreground leading-relaxed">
                  {selectedTrack.note}
                </p>
                
                {selectedTrack.spotifyUrl && (
                  <a
                    href={selectedTrack.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Listen on Spotify
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Music;
