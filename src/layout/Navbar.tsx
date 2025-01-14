import { useActiveSection } from '@/hooks/useActiveSection';
import { useState, useEffect } from 'react';

function Navbar() {
  const activeSection = useActiveSection();
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsAtFooter(footerTop <= windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center p-3 size-fit backdrop-blur-lg bg-gradient-to-tr from-slate-600 to-slate-900 fixed left-1/2 -translate-x-1/2 right-0 z-50 rounded-2xl border-2 border-slate-200 transition-all duration-300 ease-in-out ${
        isAtFooter ? 'md:bottom-8 bottom-20' : 'bottom-8'
      }`}
      aria-label="Navigation principale"
    >
      <ul
        className="flex gap-4 size-full justify-center flex-nowrap p-2"
        role="navigation"
      >
        {['Projets', 'A propos', 'Services', 'Contact'].map((item) => (
          <li key={item} className="relative" role="menuitem">
            <a
              href={`#${item}`}
              className={`!font-montserrat lg:text-xl md:text-lg sm:text-md uppercase font-bold text-nowrap transition-all duration-300 ${
                activeSection === item
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label={`Aller à la section ${item}`}
              aria-current={activeSection === item}
            >
              {item}
              {activeSection === item && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-1 bg-white rounded-full" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
