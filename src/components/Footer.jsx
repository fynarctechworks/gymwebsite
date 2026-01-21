function Footer() {
  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12 md:mb-16">
        <div>
          <span className="text-2xl sm:text-3xl font-display font-bold tracking-tighter italic text-primary mb-4 sm:mb-6 block">
            FIT<span className="text-white">KIT</span>
          </span>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 sm:mb-6">
            Taking care of your health is the best investment you can make for your future. Join us and transform your life today.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-accent-dark flex items-center justify-center hover:bg-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-accent-dark flex items-center justify-center hover:bg-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">rss_feed</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-display font-bold uppercase mb-4 sm:mb-6 md:mb-8 border-l-4 border-primary pl-4">Useful Links</h4>
          <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">About Our Gym</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Our Trainers</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Latest News</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-display font-bold uppercase mb-4 sm:mb-6 md:mb-8 border-l-4 border-primary pl-4">Our Services</h4>
          <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Bodybuilding</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Yoga Classes</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Cardio Programs</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Personal Training</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Weight Loss</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-display font-bold uppercase mb-4 sm:mb-6 md:mb-8 border-l-4 border-primary pl-4">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4 sm:mb-6">Subscribe to get latest fitness tips and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input className="bg-accent-dark border-none focus:ring-1 focus:ring-primary flex-1 px-4 py-2 text-sm" placeholder="Email Address" type="email" />
            <button className="bg-primary px-4 py-2 hover:bg-red-700 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <p className="text-slate-500 text-xs uppercase tracking-widest text-center md:text-left">© 2023 FITKIT. All Rights Reserved.</p>
        <div className="flex gap-6 sm:gap-8 text-xs uppercase tracking-widest text-slate-500">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
