import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation({ currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-slate-200 dark:border-white/10 py-2 text-xs uppercase tracking-widest bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex gap-4 lg:gap-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">phone</span> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">mail</span> contact@fitkit.com
            </span>
            <span className="hidden xl:flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">location_on</span> Andheri West, Mumbai
            </span>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">Facebook</a>
            <a className="hover:text-primary transition-colors" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl sm:text-3xl font-display font-bold tracking-tighter italic text-primary">
              FIT<span className="text-slate-900 dark:text-white">KIT</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-display uppercase tracking-wider text-sm">
            <Link className={currentPage === 'home' ? 'text-primary' : 'hover:text-primary transition-colors'} to="/">Home</Link>
            <Link className={currentPage === 'about' ? 'text-primary' : 'hover:text-primary transition-colors'} to="/about">About</Link>
            <Link className={currentPage === 'services' ? 'text-primary' : 'hover:text-primary transition-colors'} to="/services">Services</Link>
            <Link className={currentPage === 'pricing' ? 'text-primary' : 'hover:text-primary transition-colors'} to="/pricing">Pricing</Link>
            <Link className={currentPage === 'contact' ? 'text-primary' : 'hover:text-primary transition-colors'} to="/contact">Contact</Link>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-800 dark:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4 font-display uppercase tracking-wider text-sm">
                <Link 
                  className={`${currentPage === 'home' ? 'text-primary' : 'hover:text-primary transition-colors'} py-2`} 
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  className={`${currentPage === 'about' ? 'text-primary' : 'hover:text-primary transition-colors'} py-2`} 
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  className={`${currentPage === 'services' ? 'text-primary' : 'hover:text-primary transition-colors'} py-2`} 
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  className={`${currentPage === 'pricing' ? 'text-primary' : 'hover:text-primary transition-colors'} py-2`} 
                  to="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  className={`${currentPage === 'contact' ? 'text-primary' : 'hover:text-primary transition-colors'} py-2`} 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation
