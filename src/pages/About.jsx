import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

function About() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const contentY = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans">
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-slate-200 dark:border-white/10 py-2 text-xs uppercase tracking-widest bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">phone</span> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">mail</span> contact@fitkit.com
            </span>
            <span className="flex items-center gap-2">
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
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-bold tracking-tighter italic text-primary">
              FIT<span className="text-slate-900 dark:text-white">KIT</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-display uppercase tracking-wider text-sm">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="text-primary" to="/about">About</Link>
            <Link className="hover:text-primary transition-colors" to="/services">Services</Link>
            <Link className="hover:text-primary transition-colors" to="/pricing">Pricing</Link>
            <Link className="hover:text-primary transition-colors" to="/contact">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white font-display uppercase px-6 py-2 text-sm font-semibold hover:bg-red-700 transition-colors">Join Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background-dark">
        <motion.div className="absolute inset-0 grit-overlay pointer-events-none" style={{ y: heroY }}></motion.div>
        <motion.div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background-dark to-background-dark" style={{ opacity: heroOpacity }}></motion.div>
        <div className="absolute inset-0 spark-bg"></div>
        <motion.div className="relative z-10 text-center px-4 max-w-[960px]" style={{ y: contentY }}>
          <h1 className="text-white text-6xl md:text-9xl font-black leading-none tracking-[-0.05em] uppercase mb-4 drop-shadow-2xl">
            Our <span className="text-primary">Story</span>
          </h1>
          <div className="h-1.5 w-24 bg-primary mx-auto mb-6"></div>
          <p className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase">Behind the grit and the glory</p>
        </motion.div>
      </section>

      {/* Founders/Warehouse Story Section */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark relative">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition duration-500"></div>
            <div 
              className="relative h-[500px] w-full bg-center bg-no-repeat bg-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 border border-white/10" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW9lSjAmXkH9Pt0WWK5WaZ1Vjz2zQona0RMP0m9Co2orsttLDcEDupeLYhCt38yd0Abveieo7IxBMxd8xNBq35j0jhoW-Heq5dMNvOIUZS2Q9kByCt_dJEVhBjr-OP_JONCWqnUTgdbfioBArLN4wkBGgZO6Pol4eaEQ5vPEuhN4W2WTUhn6E0WSEQr0SrOsemoqLruMIhHlDpsgZAucDmX9Mopry3RAZXc7Ku-4bAUsFIypGFHK_gFv2NtytlG5hG_bvdPjSS4YXQ")'}}
            >
            </div>
            <div className="absolute bottom-6 -right-6 bg-primary p-6 rounded-lg hidden md:block border border-white/20 shadow-2xl">
              <span className="block text-4xl font-black text-white italic leading-none">EST. 2012</span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase">
              From Warehouse <br/><span className="text-primary">to World-Class</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Built from the ground up in an abandoned industrial warehouse, we started with one mission: <strong className="text-white">uncompromising results</strong>. Our founders believed that fitness should be raw, intense, and effective. 
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              We threw out the rows of TVs and the juice bars. We brought in iron, heavy bags, and a culture of relentless effort. Today, we're more than a gym—we're an forge for the human spirit, pushing athletes beyond their perceived limits every single day.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">The Mission</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 md:px-20 lg:px-40 py-20 bg-accent-dark relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-white text-3xl font-black uppercase tracking-tight mb-12 text-center md:text-left">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strength Card */}
            <div className="flex flex-col gap-6 rounded-xl border border-white/5 bg-background-dark/50 p-8 hover:border-primary/50 transition-all group">
              <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined !text-5xl">fitness_center</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold uppercase tracking-tight">STRENGTH</h3>
                <p className="text-slate-400 text-sm leading-normal">Building more than just muscle. We forge the physical and mental fortitude to tackle any challenge, inside or outside these walls.</p>
              </div>
            </div>
            {/* Community Card */}
            <div className="flex flex-col gap-6 rounded-xl border border-white/5 bg-background-dark/50 p-8 hover:border-primary/50 transition-all group">
              <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined !text-5xl">groups</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold uppercase tracking-tight">COMMUNITY</h3>
                <p className="text-slate-400 text-sm leading-normal">You don't train alone. You join a tribe that pushes you further, holds you accountable, and celebrates every PR with you.</p>
              </div>
            </div>
            {/* Results Card */}
            <div className="flex flex-col gap-6 rounded-xl border border-white/5 bg-background-dark/50 p-8 hover:border-primary/50 transition-all group">
              <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined !text-5xl">bolt</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold uppercase tracking-tight">RESULTS</h3>
                <p className="text-slate-400 text-sm leading-normal">We believe in evidence. No fads, no shortcuts—only science-backed programming that delivers measurable progress every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 py-24 bg-background-dark text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Ready to join <br/>the movement?</h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Stop making excuses and start making progress. The best version of you is waiting in the warehouse.
          </p>
          <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-primary px-12 py-5 text-white shadow-2xl transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 text-xl font-black uppercase tracking-widest">Start Your Journey</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          <p className="text-primary font-bold text-sm tracking-widest uppercase mt-4">First session is on us</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent-dark text-white py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-display font-bold tracking-tighter italic mb-6">
                FIT<span className="text-primary">KIT</span>
              </h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Gym workouts are structured exercise sessions designed to improve fitness and reach peak performance.</p>
              <div className="flex gap-4">
                <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">video_library</span></a>
                <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-display font-bold uppercase mb-8 border-l-4 border-primary pl-4">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/services">Services</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">Membership</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display font-bold uppercase mb-8 border-l-4 border-primary pl-4">Our Services</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a className="hover:text-primary transition-colors" href="#">Bodybuilding</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Yoga Classes</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Cardio Programs</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Personal Training</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Weight Loss</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-display font-bold uppercase mb-8 border-l-4 border-primary pl-4">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-6">Subscribe to get latest fitness tips and offers.</p>
              <form className="flex">
                <input className="bg-accent-dark border-none focus:ring-1 focus:ring-primary w-full px-4 text-sm" placeholder="Email Address" type="email" />
                <button className="bg-primary px-4 py-2 hover:bg-red-700 transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
          <div className="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs uppercase tracking-widest">© 2023 FITKIT. All Rights Reserved.</p>
            <div className="flex gap-8 text-xs uppercase tracking-widest text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
