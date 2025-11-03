import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "The Art of Minimalism in Design",
      date: "2024-01-15",
      excerpt: "Exploring how less can truly be more when it comes to creating impactful designs.",
      content: "In today's world of information overload, minimalism has become more than just a design trend—it's a philosophy. By stripping away the unnecessary, we can focus on what truly matters. This approach not only creates cleaner aesthetics but also improves user experience by reducing cognitive load. Whether you're designing a website, an app, or even your living space, the principles of minimalism can help you create something that's both beautiful and functional.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Capturing the Perfect Moment",
      date: "2024-02-03",
      excerpt: "Lessons learned from years of street photography and landscape shots.",
      content: "Photography is about more than technical skills—it's about seeing the world differently. The perfect moment isn't always planned; sometimes it's about being present and ready when magic happens. Through street photography, I've learned to anticipate emotions, predict movements, and capture fleeting moments that tell stories. Landscape photography, on the other hand, teaches patience and respect for nature's timing. Both require an understanding that the camera is just a tool; the real art happens in the eye of the photographer.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Why Indie Games Matter",
      date: "2024-02-20",
      excerpt: "How small studios are revolutionizing interactive storytelling.",
      content: "The indie gaming scene has exploded in recent years, bringing fresh perspectives and innovative gameplay mechanics that big studios often overlook. Games like Celeste, Hollow Knight, and Stardew Valley prove that you don't need massive budgets to create unforgettable experiences. These games succeed because they're made with passion, not just profit in mind. They take risks, explore unconventional narratives, and create deeply personal experiences that resonate with players on an emotional level.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-6 max-w-6xl pt-32 pb-20">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts, stories, and ideas worth sharing
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="glass group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(163_79%_54%/0.3)] animate-slide-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={14} />
                  <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
                
                <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="glass max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold pr-8">
                  {selectedPost.title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Calendar size={16} />
                  <time>{new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
              </DialogHeader>
              
              <div className="mt-6">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full rounded-lg mb-6"
                />
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;
