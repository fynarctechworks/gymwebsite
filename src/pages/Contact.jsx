import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Home.css'

function Contact() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const contentY = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans">
      <Navigation currentPage="contact" />

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

      <Footer />
    </div>
  )
}

export default Contact
