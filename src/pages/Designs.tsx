import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import design1 from "@/assets/d1.jpg";
import design2 from "@/assets/d2.jpg";
import design3 from "@/assets/d3.jpg";
import design4 from "@/assets/d4.jpg";

interface DesignItem {
  id: number;
  title: string;
  category: string;
  image: string;
  height: number;
}

const designsData: DesignItem[] = [
  { id: 1, title: "Abstract Geometry", category: "Digital Art", image: design1, height: 300 },
  { id: 2, title: "Brand Identity", category: "Branding", image: design2, height: 400 },
  { id: 3, title: "Web Interface", category: "UI/UX", image: design3, height: 250 },
  { id: 4, title: "Digital Flow", category: "Digital Art", image: design4, height: 350 },
  { id: 5, title: "Creative Poster", category: "Print", image: design2, height: 450 },
  { id: 6, title: "Product Design", category: "Packaging", image: design4, height: 300 },
];

const Designs = () => {
  const [designs, setDesigns] = useState<DesignItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    // Shuffle designs for random grid effect
    const shuffled = [...designsData].sort(() => Math.random() - 0.5);
    setDesigns(shuffled);
  }, []);

  const categories = ["All", ...Array.from(new Set(designsData.map(design => design.category)))];

  const filteredDesigns = selectedCategory === "All" 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Designs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of creative works spanning digital art, branding, and user experience design.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className={`break-inside-avoid group cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-card shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ height: `${design.height}px` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {design.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary-glow text-sm rounded-full backdrop-blur-sm">
                        {design.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDesigns.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No designs found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Designs;