import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // ✅ Handle body scroll properly
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    // Cleanup (important)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="bg-[#262626] h-[80px] p-4 sticky top-0 z-50 opacity-95 duration-300 shadow-sm items-center content-center">
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className='text-[2rem] text-red-600 max-[768px]:text-[1.5rem]'>
          SAHIL RAWAT
        </h1>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-4 p-3 rounded-full">
  {["home", "feature", "projects", "resume", "contact"].map((item) => (
    <li key={item}>
      <a
        href={`#${item}`}
        onClick={() => setActive(item)}
        className={`border-2 px-4 py-2 rounded-full transition-all duration-500
          ${active === item 
            ? "border-sky-500 text-red-600" 
            : "border-white text-white hover:text-red-600"}
        `}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </a>
    </li>
  ))}
</ul>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 right-0 w-2/4 h-full backdrop-blur-xl bg-black transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        
        <div className="p-4">
          <button onClick={toggleMenu} className="text-white mb-4">
            ✕
          </button>

          <ul className="space-y-4">
  {["home", "feature", "projects", "resume", "contact"].map((item) => (
    <li key={item}>
      <a
        href={`#${item}`}
        onClick={() => {
          setActive(item);
          setIsOpen(false);
        }}
        className={`block px-4 py-2 transition-all
          ${active === item 
            ? "text-red-600 border-l-4 border-sky-500" 
            : "text-white hover:text-blue-800"}
        `}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </a>
    </li>
  ))}
</ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;