import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Designs", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="border border-gray-100 m-3 min-w-fit rounded-2xl shadow-2xl sticky top-3 z-50 mx-auto flex gap-2 md:gap-10 px-2 md:px-4 py-0 items-center justify-center"
          style={{ backdropFilter: 'saturate(180%) blur(20px)', width: 'fit-content', borderRadius: '1.5rem' , border: '1px solid #d3d3d333' }}>  
        <div className="container mx-auto px-2 md:px-6 py-4">
          <div className="flex items-center justify-between gap-4 md:gap-24 px-2 md:px-10">
            <Link 
              to="/" 
              className="text-lg md:text-2xl font-bold text-primary hover:scale-110 transition-all duration-300 text-heading "
            >
              {/* <img src="/public/icon.svg" alt="icon" style={
                {height: '40px', width: '40px', display: 'inline-block', marginRight: '8px', verticalAlign: 'middle'}
              }/> */}
              SHAHAN K
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium text-subheading",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-primary after:transition-all after:duration-300",
                    "hover:after:w-full",
                    location.pathname === item.path && "text-primary after:w-full"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="p-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden">
          <div 
            className="border border-gray-200 m-3 mt-20 rounded-2xl shadow-2xl p-6"
            style={{ backdropFilter: 'saturate(180%) blur(20px)', borderRadius: '1.5rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium text-subheading text-lg py-3 px-4 rounded-lg hover:bg-white/10",
                    location.pathname === item.path && "text-primary bg-primary/10"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;