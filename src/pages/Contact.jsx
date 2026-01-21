import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

function Contact() {
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
            <Link className="hover:text-primary transition-colors" to="/pricing">Pricing</Link>
            <Link className="text-primary" to="/contact">Contact</Link>
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
              Get In <span className="text-primary">Touch</span>
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase">Have a question?</p>
          </motion.div>
        </section>

        {/* Contact Content Section */}
        <section className="px-6 md:px-20 lg:px-40 py-24 bg-background-dark relative">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-slate-300 text-lg max-w-2xl mb-12">Ready to break your limits? Whether you have a question about our equipment, training programs, or memberships, our elite team is standing by.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form Column */}
              <div className="bg-accent-dark p-8 md:p-10 rounded-xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 grit-overlay pointer-events-none"></div>
                <form className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                      <span className="text-white text-sm font-semibold uppercase tracking-wider">Full Name</span>
                      <input className="bg-white/5 border border-white/10 rounded-lg h-14 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" type="text"/>
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-white text-sm font-semibold uppercase tracking-wider">Email Address</span>
                      <input className="bg-white/5 border border-white/10 rounded-lg h-14 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" type="email"/>
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Subject</span>
                    <input className="bg-white/5 border border-white/10 rounded-lg h-14 px-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Membership Inquiry" type="text"/>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Message</span>
                    <textarea className="bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us how we can help you..." rows="5"></textarea>
                  </label>
                  <button className="w-full bg-primary text-white font-black py-4 rounded-lg tracking-widest uppercase hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-primary/20" type="submit">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info Sidebar Column */}
              <div className="space-y-12">
                {/* Location */}
                <div className="flex gap-6">
                  <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary scale-125">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">Our Location</h3>
                    <p className="text-slate-400 leading-relaxed">123 Link Road, Andheri West<br/>Mumbai, Maharashtra 400053</p>
                    <a className="text-primary text-sm font-bold uppercase mt-2 inline-block hover:underline" href="#">Get Directions</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-6">
                  <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary scale-125">schedule</span>
                  </div>
                  <div className="w-full">
                    <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">Opening Hours</h3>
                    <div className="grid grid-cols-2 gap-y-2 max-w-xs">
                      <span className="text-slate-400">Mon - Fri:</span>
                      <span className="text-white font-medium">5:00 AM - 11:00 PM</span>
                      <span className="text-slate-400">Saturday:</span>
                      <span className="text-white font-medium">7:00 AM - 9:00 PM</span>
                      <span className="text-slate-400">Sunday:</span>
                      <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                  <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary scale-125">share</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">Follow the Burn</h3>
                    <div className="flex gap-4">
                      <a className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all" href="#">
                        <span className="material-symbols-outlined">public</span>
                      </a>
                      <a className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all" href="#">
                        <span className="material-symbols-outlined">video_library</span>
                      </a>
                      <a className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all" href="#">
                        <span className="material-symbols-outlined">alternate_email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative mt-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60304.85817230264!2d72.79097164863279!3d19.113645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90eb8d1e9%3A0x267b5d75306f87ca!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FITKIT Gym Location"
              ></iframe>
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
                <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Us</Link></li>
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

export default Contact
