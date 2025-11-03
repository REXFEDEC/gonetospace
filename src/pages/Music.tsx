import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
}

const Music = () => {
  const [nowListening, setNowListening] = useState<Track | null>(null);
  const [allTracks, setAllTracks] = useState<Track[]>([]);

  useEffect(() => {
    // Load and parse tracklist.txt
    fetch('/tracklist.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const tracks: Track[] = [];
        
        lines.forEach((line, index) => {
          const [title, artist] = line.split(' — ').map(s => s.trim());
          if (title && artist) {
            tracks.push({
              id: index + 1,
              title,
              artist
            });
          }
        });
        
        setAllTracks(tracks);
        // Randomly select initial track
        if (tracks.length > 0) {
          const randomIndex = Math.floor(Math.random() * tracks.length);
          setNowListening(tracks[randomIndex]);
        }
      })
      .catch(error => console.error('Error loading tracklist:', error));
  }, []);

  const getRandomTrack = () => {
    if (allTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * allTracks.length);
      setNowListening(allTracks[randomIndex]);
    }
  };

  const createSpotifySearchUrl = (track: Track) => {
    return `https://open.spotify.com/search/${encodeURIComponent(track.title + ' ' + track.artist)}`;
  };

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

        {/* Spotify Playlist Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl font-bold mb-6">Recent 50</h2>
          <p className="text-muted-foreground mb-6">
            My current on-repeat playlist featuring 50 tracks that define my musical mood right now.
          </p>
          <div className="glass p-6 rounded-lg">
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/3hMULY9y6oRRMqqJGCWbv5?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Now Listening Section */}
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h2 className="text-3xl font-bold mb-6">Now Listening</h2>
          <p className="text-muted-foreground mb-6">
            A random track from my collection. Click the shuffle button to discover something new.
          </p>
          
          {nowListening && (
            <div className="glass p-8 rounded-lg max-w-md mx-auto text-center">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="hn hn-music text-4xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{nowListening.title}</h3>
                <p className="text-muted-foreground mb-4">{nowListening.artist}</p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={getRandomTrack}
                  className="glass px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <i className="hn hn-shuffle text-lg"></i>
                  Shuffle
                </button>
                
                <a
                  href={createSpotifySearchUrl(nowListening)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <i className="hn hn-spotify text-lg"></i>
                  Listen on Spotify
                </a>
              </div>
            </div>
          )}
          
          <p className="text-xs text-muted-foreground text-center mt-6">
            Tracklist contains {allTracks.length} songs from my current rotation
          </p>
        </div>
      </main>
    </div>
  );
};

export default Music;
