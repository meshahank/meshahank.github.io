import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import design1 from "@/assets/1.jpg";
import design2 from "@/assets/2.jpg";
import design3 from "@/assets/3.jpg";
import design4 from "@/assets/4.jpg";
import design5 from "@/assets/5.jpg";
import design6 from "@/assets/6.jpg";
import design7 from "@/assets/7.jpg";
import design8 from "@/assets/8.jpg";
import design9 from "@/assets/9.jpg";
import design10 from "@/assets/10.jpg";
import design11 from "@/assets/11.jpg";
import design12 from "@/assets/12.jpg";
import design13 from "@/assets/13.jpg";
import design14 from "@/assets/14.jpg";
import design15 from "@/assets/15.jpg";
import design16 from "@/assets/16.jpg";
import design17 from "@/assets/17.jpg";
import design18 from "@/assets/18.jpg";
import design19 from "@/assets/19.jpg";
import design20 from "@/assets/20.jpg";
import design21 from "@/assets/ningal.jpg";

interface DesignItem {
  id: number;
  title: string;
  category: string;
  image: string;
  height: number;
}

// Base design data without manual IDs
const baseDesignsData = [
  { title: "100 Days, 100 Designs", category: "Poster Design", image: design1, height: 300 },
  { title: "Creative Minds in Motion", category: "Poster Design", image: design2, height: 450 },
  { title: "Jaizathu hibbi rasool", category: "Poster Design", image: design3, height: 400 },
  { title: "Coming Soon", category: "Poster Design", image: design4, height: 250 },
  { title: "Daily Quest", category: "Poster Design", image: design5, height: 300 },
  { title: "Caption Clash", category: "Poster Design", image: design6, height: 400 },
  { title: "Poster Designistry", category: "Poster Design", image: design7, height: 350 },
  { title: "COSMOS", category: "Campaign poster", image: design8, height: 280 },
  { title: "Course details", category: "Poster Design", image: design9, height: 420 },
  { title: "Excellence details", category: "Poster Design", image: design10, height: 320 },
  { title: "ASAs excellence", category: "Poster Design", image: design11, height: 450 },
  { title: "Hadia herald", category: "Poster Design", image: design12, height: 310 },
  { title: "Karate team", category: "Poster Design", image: design13, height: 290 },
  { title: "Belt awarding ceremony", category: "Poster Design", image: design14, height: 360 },
  { title: "Kerala Piravi", category: "Poster Design", image: design15, height: 330 },
  { title: "Creative minds in motion", category: "Poster Design", image: design16, height: 410 },
  { title: "Operation MEAU", category: "Campaign poster", image: design17, height: 300 },
  { title: "Padachonte duniyav", category: "Poster Design", image: design18, height: 450 },
  { title: "Saidul ayath", category: "Poster Design", image: design19, height: 390 },
  { title: "Ultrascroll", category: "Poster Design", image: design20, height: 390 },
  { title: "Ningal nireekshanathilaan", category: "Poster Design", image: design21, height: 450 },
];

// Auto-generate IDs based on array index
const designsData: DesignItem[] = baseDesignsData.map((design, index) => ({
  id: index + 1,
  ...design,
}));

const Designs = () => {
  const [designs, setDesigns] = useState<DesignItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [filteredDesigns, setFilteredDesigns] = useState<DesignItem[]>([]);

  useEffect(() => {
    // Shuffle designs for random grid effect
    const shuffled = [...designsData].sort(() => Math.random() - 0.5);
    setDesigns(shuffled);
  }, []);

  useEffect(() => {
    const filtered = selectedCategory === "All" 
      ? designs 
      : designs.filter(design => design.category === selectedCategory);
    setFilteredDesigns(filtered);
  }, [selectedCategory, designs]);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? filteredDesigns.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === filteredDesigns.length - 1 ? 0 : prev + 1
      );
    }
  }, [filteredDesigns.length]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, navigateImage, closeModal]);

  const categories = ["All", ...Array.from(new Set(designsData.map(design => design.category)))];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const currentImage = filteredDesigns[currentImageIndex];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-8 md:pt-14 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-primary" style={
              {lineHeight: '1.3',}
            }>
              My Designs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of creative works spanning Poster Design, Poster Design, and user experience design.
            </p>
            <div className="mt-6 md:mt-8">
              <a
                href="/contact"
                className="inline-block px-6 md:px-8 py-3 rounded-full font-semibold bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12 animate-slide-up">
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
                className={`break-inside-avoid group cursor-pointer animate-fade-in border border-gray-50 rounded-xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(index)}
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

      {/* Image Modal */}
      {isModalOpen && currentImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            {filteredDesigns.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next Button */}
            {filteredDesigns.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Main Image */}
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-white font-semibold text-xl mb-2">
                  {currentImage.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary-glow text-sm rounded-full backdrop-blur-sm">
                    {currentImage.category}
                  </span>
                  <span className="text-white/70 text-sm">
                    {currentImageIndex + 1} of {filteredDesigns.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Designs;