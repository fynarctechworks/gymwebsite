import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

function Pricing() {
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
            <Link className="hover:text-primary transition-colors" to="/about">About</Link>
            <Link className="hover:text-primary transition-colors" to="/services">Services</Link>
            <Link className="text-primary" to="/pricing">Pricing</Link>
            <Link className="hover:text-primary transition-colors" to="/contact">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white font-display uppercase px-6 py-2 text-sm font-semibold hover:bg-red-700 transition-colors">Join Now</button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background-dark">
          <motion.div className="absolute inset-0 grit-overlay pointer-events-none" style={{ y: heroY }}></motion.div>
          <motion.div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background-dark to-background-dark" style={{ opacity: heroOpacity }}></motion.div>
          <div className="absolute inset-0 spark-bg"></div>
          <motion.div className="relative z-10 text-center px-4 max-w-[960px]" style={{ y: contentY }}>
            <h1 className="text-white text-6xl md:text-9xl font-black leading-none tracking-[-0.05em] uppercase mb-4 drop-shadow-2xl">
              Choose Your <span className="text-primary">Strength</span>
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase">Forge your physique with a membership that matches your ambition</p>
          </motion.div>
        </section>

        {/* Pricing Content Section */}
        <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark relative">
          <div className="max-w-[1100px] mx-auto">
            {/* Billing Toggle */}
            <div className="flex items-center justify-center w-full mb-10">
              <div className="flex h-12 w-64 items-center justify-center rounded-lg bg-[#2a1313] p-1.5 border border-white/10">
                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-md px-2 bg-background-dark shadow-lg text-white text-sm font-bold transition-all">
                  <span>Monthly</span>
                  <input defaultChecked className="hidden" name="billing" type="radio" value="Monthly"/>
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-md px-2 text-slate-400 hover:text-white text-sm font-medium transition-all">
                  <span>Yearly</span>
                  <input className="hidden" name="billing" type="radio" value="Yearly"/>
                </label>
              </div>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pb-20">
              {/* BASIC CARD */}
              <div className="group flex flex-col gap-6 rounded-xl border border-white/10 bg-[#1a0c0c] p-8 transition-all hover:border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">fitness_center</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-slate-400 text-sm font-bold uppercase tracking-widest">Basic</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-5xl font-black tracking-tighter">₹2,499</span>
                    <span className="text-slate-500 text-lg font-bold">/mo</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-2 font-medium">For those just starting their journey.</p>
                </div>
                <button className="w-full py-4 bg-[#2a1313] hover:bg-[#3d1c1c] text-white text-sm font-black rounded-lg transition-all border border-white/10">
                  GET STARTED
                </button>
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    24/7 Gym Access
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Locker Room Access
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Standard Equipment
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 line-through">
                    <span className="material-symbols-outlined text-slate-700 text-xl">cancel</span>
                    Group Fitness Classes
                  </div>
                </div>
              </div>

              {/* PRO CARD (Highlighted) */}
              <div className="flex flex-col gap-6 rounded-xl border-2 border-primary bg-gradient-to-b from-[#2a0808] to-[#120808] p-8 shadow-[0_0_40px_rgba(249,6,6,0.15)] transform md:-translate-y-4 relative z-20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Pro Athlete</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-5xl font-black tracking-tighter">₹4,999</span>
                    <span className="text-slate-400 text-lg font-bold">/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-2 font-medium">The optimal path to peak performance.</p>
                </div>
                <button className="w-full py-4 bg-primary hover:bg-red-700 text-white text-sm font-black rounded-lg transition-all shadow-lg shadow-primary/20">
                  GO PRO
                </button>
                <div className="flex flex-col gap-4 pt-4 border-t border-primary/20">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                    Everything in Basic
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                    1 Free PT Session / Month
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                    Group Fitness Classes
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                    Basic Nutrition Plan
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <span className="material-symbols-outlined text-primary text-xl font-bold">check_circle</span>
                    Priority Booking
                  </div>
                </div>
              </div>

              {/* ELITE CARD */}
              <div className="group flex flex-col gap-6 rounded-xl border border-white/10 bg-[#1a0c0c] p-8 transition-all hover:border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">military_tech</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-slate-400 text-sm font-bold uppercase tracking-widest">Elite</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-5xl font-black tracking-tighter">₹8,499</span>
                    <span className="text-slate-500 text-lg font-bold">/mo</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-2 font-medium">Complete mastery of your fitness.</p>
                </div>
                <button className="w-full py-4 bg-[#2a1313] hover:bg-[#3d1c1c] text-white text-sm font-black rounded-lg transition-all border border-white/10">
                  JOIN THE ELITE
                </button>
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Everything in Pro
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Unlimited PT Sessions
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Custom Nutrition Plans
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Recovery Lounge Access
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    Guest Passes (2/mo)
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ/Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 text-left border-t border-white/10 pt-16">
              <div>
                <h3 className="text-xl font-black text-white uppercase mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  Cancel Anytime
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We believe in our results. If you're not satisfied, you can cancel your monthly membership at any time with 30 days notice. No hidden termination fees.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">event_available</span>
                  Free Trial Session
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Not sure which plan is right for you? Come in for a free high-intensity evaluation session with one of our elite trainers before you commit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                <li><Link className="hover:text-primary transition-colors" to="/pricing">Pricing</Link></li>
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

export default Pricing
