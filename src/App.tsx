import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Music from "./pages/Music";
import Movies from "./pages/Movies";
import Photography from "./pages/Photography";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    // Konami Code hint for deep divers
    console.log("🕹️ This site has a Konami Code! Can you find it? ↑↑↓↓←→←→BA");
    
    // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setIsMagnetic(!isMagnetic);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMagnetic]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isMagnetic) {
        // Apply magnetic repulsion to all elements
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const elementCenterX = rect.left + rect.width / 2;
          const elementCenterY = rect.top + rect.height / 2;
          
          const deltaX = elementCenterX - event.clientX;
          const deltaY = elementCenterY - event.clientY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          
          // Only affect elements within 150px radius
          if (distance < 150 && distance > 0) {
            const force = (150 - distance) / 150; // 0 to 1
            const moveX = (deltaX / distance) * force * 30;
            const moveY = (deltaY / distance) * force * 30;
            
            (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
          } else {
            (element as HTMLElement).style.transform = 'translate(0px, 0px)';
          }
        });
      }
    };

    if (isMagnetic) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // Reset all transforms when magnetic mode is disabled
      if (!isMagnetic) {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
          (element as HTMLElement).style.transform = 'translate(0px, 0px)';
        });
      }
    };
  }, [isMagnetic]);

  return (
    <div className={isMagnetic ? 'konami-magnetic' : ''}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/music" element={<Music />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/photography" element={<Photography />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
