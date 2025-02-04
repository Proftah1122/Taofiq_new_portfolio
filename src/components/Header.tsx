import React, { useEffect, useState } from 'react';
import { Menu, X, User, Briefcase, Award, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ATO
          </h1>
          
          <div className="hidden md:flex space-x-8">
            <NavLink 
              href="#about" 
              isActive={activeSection === 'about'}
              onClick={() => scrollToSection('about')}
            >
              About
            </NavLink>
            <NavLink 
              href="#experience" 
              isActive={activeSection === 'experience'}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </NavLink>
            <NavLink 
              href="#achievements" 
              isActive={activeSection === 'achievements'}
              onClick={() => scrollToSection('achievements')}
            >
              Achievements
            </NavLink>
            <NavLink 
              href="#contact" 
              isActive={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </NavLink>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <MobileNavLink 
              href="#about" 
              icon={<User size={18} />}
              onClick={() => scrollToSection('about')}
            >
              About
            </MobileNavLink>
            <MobileNavLink 
              href="#experience" 
              icon={<Briefcase size={18} />}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </MobileNavLink>
            <MobileNavLink 
              href="#achievements" 
              icon={<Award size={18} />}
              onClick={() => scrollToSection('achievements')}
            >
              Achievements
            </MobileNavLink>
            <MobileNavLink 
              href="#contact" 
              icon={<Phone size={18} />}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </MobileNavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ 
  href, 
  children, 
  isActive,
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}) => (
  <a 
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`text-gray-600 hover:text-primary transition-colors duration-300 font-medium
                ${isActive ? 'text-primary' : ''}`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  icon,
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  icon: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-300 px-4"
  >
    {icon}
    <span>{children}</span>
  </a>
);

export default Header;