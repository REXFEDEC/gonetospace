import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: number;
  url: string;
  title: string;
  location: string;
}

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      title: "Mountain Dawn",
      location: "Swiss Alps",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop",
      title: "Forest Path",
      location: "Pacific Northwest",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop",
      title: "Urban Sunset",
      location: "Downtown",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop",
      title: "Lake Reflection",
      location: "Canadian Rockies",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop",
      title: "Misty Morning",
      location: "Countryside",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop",
      title: "Desert Dreams",
      location: "Arizona",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop",
      title: "Coastal Cliffs",
      location: "Ireland",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&auto=format&fit=crop",
      title: "City Lights",
      location: "Tokyo",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop",
      title: "Wildflower Meadow",
      location: "Alps",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 max-w-7xl pt-32 pb-20">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Photography</h1>
          <p className="text-muted-foreground text-lg">
            Moments captured through my lens, frozen in time forever
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="break-inside-avoid animate-fade-in"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <div
                className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_hsl(163_79%_54%/0.3)]"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{photo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-screen-lg p-0 border-0 bg-transparent">
          {selectedPhoto && (
            <div className="glass rounded-2xl overflow-hidden">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedPhoto.title}</h3>
                <p className="text-muted-foreground">{selectedPhoto.location}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Photography;
