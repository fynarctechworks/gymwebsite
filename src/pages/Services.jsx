import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

function Services() {
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
            <Link className="text-primary" to="/services">Services</Link>
            <Link className="hover:text-primary transition-colors" to="/pricing">Pricing</Link>
            <Link className="hover:text-primary transition-colors" to="/contact">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white font-display uppercase px-6 py-2 text-sm font-semibold hover:bg-red-700 transition-colors">Join Now</button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Headline Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background-dark">
          <motion.div className="absolute inset-0 grit-overlay pointer-events-none" style={{ y: heroY }}></motion.div>
          <motion.div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background-dark to-background-dark" style={{ opacity: heroOpacity }}></motion.div>
          <div className="absolute inset-0 spark-bg"></div>
          <motion.div className="relative z-10 text-center px-4 max-w-[960px]" style={{ y: contentY }}>
            <h1 className="text-white text-6xl md:text-9xl font-black leading-none tracking-[-0.05em] uppercase mb-4 drop-shadow-2xl">
              OUR <span className="text-primary">SERVICES</span>
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase">High Intensity Performance Training • Elite Coaching • Brutal Results</p>
          </motion.div>
        </section>

        {/* Service Grid Section */}
        <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark relative">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Personal Training */}
              <div className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-white/5 h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(249, 6, 6, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBObOWVAMFKnKVAVYRCGUds1FnylSbY5yfP4SwD95ebhbXBsPxDmHWs3yqBTwI__kyFT8ogaEpaDuKCFR2qsTvNpoU0-pxL5wnLlIVPd_K7MyOo8uJzapZvae1cZYTiHyBhHFRZBkN5ra-W-hFu47TKVAK01tqaARIaWyxfulO0A54wO3BxdRJkBPESpPkEIdB6qqZtdEx5RpLGarvGwcHcqu2r9LgHzEzTm3MfsWCfUt3gZ7ZzHIqwljyDV4aJV2-HHdQQ1KqBAbiU")'}}
                >
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors pointer-events-none"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <span className="text-primary material-symbols-outlined text-4xl mb-4">fitness_center</span>
                  <h3 className="text-white text-3xl font-black uppercase italic mb-2">Personal Training</h3>
                  <p className="text-slate-300 text-sm mb-6 max-w-md">1-on-1 sessions tailored to your biological profile. We break your limits and rebuild your physique from the ground up.</p>
                  <button className="w-fit flex items-center gap-2 bg-primary px-6 py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group/btn">
                    Book a Session
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Group Classes */}
              <div className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-white/5 h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(249, 6, 6, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgE9pTYZUPnpRjZ8bwlNogI2Tc63hnQvHP5zmVOOVxRgDZlPhCTf9s6yCbKkD3xlZDVvi6Ep_xGSgnO3TGf9YO-xdja4o-g_XVlKrOoC3Y-99nlidPa9154Rdwg5R9x69iY42MlhD5df0irSYtVMwF2uZU2hTI1id0-rAQQlBfkSwuuTPMHc_ezsushbrXB3R9WRPQCXwWKSqHy4s_AR2mt4PVH6V55JwS6ij3AaRTNOeDHGDd377uRnFkqz5KieNDrw7cP1VQALhM")'}}
                >
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors pointer-events-none"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <span className="text-primary material-symbols-outlined text-4xl mb-4">groups</span>
                  <h3 className="text-white text-3xl font-black uppercase italic mb-2">Group Classes</h3>
                  <p className="text-slate-300 text-sm mb-6 max-w-md">High-octane HIIT, circuit training, and power-lifting groups. Shared sweat, collective growth, and zero excuses.</p>
                  <button className="w-fit flex items-center gap-2 bg-primary px-6 py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group/btn">
                    Book a Session
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Bodybuilding */}
              <div className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-white/5 h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(249, 6, 6, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmM6RAXbSUeE7qbOxvcWSsGecEo5a8iUzvUhyEC-qq3sap-uRXGIQ07wAP6FtZ7cb6rYa0Nxrp8wAyGv0onX5kADV0x2-dZ1z45wAKNoU3Ec83jYjqF8KxPppnWQiKv4vvy87dh2ez9Qw4R5CyZb9tYnIBl8YP-At3R_cHrZRYsYUh10Vy44tMAtRdwUvkaXQULv8tYaeVGcQkgdbQ2JOpbStKbNcgAlhslCq-_oUy9YfMbXJ1n0eJFUv98Pb4Ms9t3EUrnGQZAkmJ")'}}
                >
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors pointer-events-none"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <span className="text-primary material-symbols-outlined text-4xl mb-4">reorder</span>
                  <h3 className="text-white text-3xl font-black uppercase italic mb-2">Bodybuilding</h3>
                  <p className="text-slate-300 text-sm mb-6 max-w-md">The science of hypertrophy. Specialized contest prep and mass building protocols for those who want to be carved from iron.</p>
                  <button className="w-fit flex items-center gap-2 bg-primary px-6 py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group/btn">
                    Book a Session
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Nutrition Coaching */}
              <div className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-white/5 h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(249, 6, 6, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh5nN2MUlgXOSXBS1tRJb1EJnvTUcMIETGxPps8jjTCHF23fLZiOEby6aUE0k3VqZLmlv6R76f5aZpK1DT8jcSd1nwVkvbt0tez0_GZuZlehqGrBV28BDlPRrQDv7XcqNrbnnYHK8elhyc-ylm5bXhfbvfAEifqzhX9Qq8BXYqkXAdzJBRybKzurq9ZogXYF6Vrpohg_HY-EeDSx71mm8kjKWYgBSdmLinxbYBQFZ9P8F0tJGqJZdzn_OX9yk1QfIoycUny33Uwnrg")'}}
                >
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors pointer-events-none"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <span className="text-primary material-symbols-outlined text-4xl mb-4">restaurant</span>
                  <h3 className="text-white text-3xl font-black uppercase italic mb-2">Nutrition Coaching</h3>
                  <p className="text-slate-300 text-sm mb-6 max-w-md">Fuel the machine. Data-driven macro tracking and meal plans that align with your heavy training schedule.</p>
                  <button className="w-fit flex items-center gap-2 bg-primary px-6 py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group/btn">
                    Book a Session
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="px-6 md:px-20 lg:px-40 py-20 bg-accent-dark relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-3xl font-black uppercase tracking-tight mb-12 text-center md:text-left">
                  Engineered for <span className="text-primary">Performance</span>
                </h2>
                <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
                  We provide the environment and the expertise to push your limits beyond the ordinary. No frills, just hard work.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-6 rounded-xl border border-white/5 bg-background-dark/50 p-8 hover:border-primary/50 transition-all group">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined !text-5xl">person</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold uppercase tracking-tight">Elite Coaches</h3>
                    <p className="text-slate-400 text-sm leading-normal">Certified trainers with years of high-performance and competitive experience.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 rounded-xl border border-white/5 bg-background-dark/50 p-8 hover:border-primary/50 transition-all group">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined !text-5xl">fitness_center</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold uppercase tracking-tight">Pro Equipment</h3>
                    <p className="text-slate-400 text-sm leading-normal">Hammer Strength and Rogue gear for maximum results and structural integrity.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 rounded-xl border border-white/5 bg-background-dark/50 p-8 hover:border-primary/50 transition-all group">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined !text-5xl">bolt</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold uppercase tracking-tight">Gritty Atmosphere</h3>
                    <p className="text-slate-400 text-sm leading-normal">Dark, high-energy environment with the right music, lighting, and community vibes.</p>
                  </div>
                </div>
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

export default Services
