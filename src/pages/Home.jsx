import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

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
            <Link className="text-primary" to="/">Home</Link>
            <Link className="hover:text-primary transition-colors" to="/about">About</Link>
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
      <header className="relative h-[85vh] flex items-center overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img 
            alt="Bodybuilder lifting heavy weights" 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9KASg3aqCX_MjuLhu2XdsoDBq-zxNHB73zAsEodoO-TglTVOjzPqLneOBzyumevclxFJIB6_q08Z2X9Y61GadWH22xeqac0Fz4kbp4a-OfSoxha9uqNBKUSe2u_Zm1mWfw0DLZgmUgYf0wDN3POVlPMAWkYTeZUZL73xLRp2yQqoD8Vakv82zseHjh9WmlPlg33x4CeVmICYQekK1gLhbCfvTN1LvSeofQ60S_4Sm_VwW8W2kfqYLRnPUNhxikQnbZrVtka7M7dtn" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </motion.div>
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-display uppercase tracking-[0.3em] text-sm">Keep your body fitness</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white uppercase leading-tight mb-6">
              Unleash Your <br/>
              <span className="text-primary">Potential</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              Gym workouts are structured exercise sessions conducted in a fitness facility equipped with various machines, free weights, and amenities to reach your peak performance.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a className="bg-primary text-white font-display uppercase px-10 py-4 text-lg font-bold hover:bg-red-700 transition-transform active:scale-95" href="#pricing">View Membership</a>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-4xl font-display font-bold text-white">2k+</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Satisfied<br/>Customer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* BMI Calculator Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-6">
        <div className="bg-accent-dark border-t-4 border-primary p-8 md:p-12 shadow-2xl rounded-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <span className="text-primary font-display uppercase tracking-widest text-sm block mb-2">Body Mass Index</span>
              <h2 className="text-3xl font-display font-bold text-white uppercase mb-4">Calculate Your BMI Now</h2>
              <p className="text-slate-400 text-sm">We care about your health. Calculate your BMI to find the right workout routine for your body type.</p>
            </div>
            <div className="w-full md:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Weight / KG" type="text" />
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Height / CM" type="text" />
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary px-4 py-3" placeholder="Age" type="text" />
                <select className="bg-black/50 border-white/10 text-slate-500 focus:ring-primary focus:border-primary px-4 py-3">
                  <option>Sex</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <select className="bg-black/50 border-white/10 text-slate-500 focus:ring-primary focus:border-primary px-4 py-3 lg:col-span-1">
                  <option>Activity Factor</option>
                </select>
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 lg:col-span-2 px-4 py-3" placeholder="Result" readOnly type="text" />
                <button className="bg-primary text-white font-display uppercase font-bold py-3 hover:bg-red-700 transition-colors" type="button">Calculate</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="about">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <img 
                  alt="Gym training session" 
                  className="rounded shadow-2xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWCt5Sa9_BgZDqd6It91XICVhERvMfjc5Eash9FRQpPoM63XEkmyd1HM2Jeg_38XfFu_3TpW-ueMxBxJMtJO3Nc3YxF-5bZ34QaqbRHQN23dweN73vui8m-Hks4g3LNqfUwPfZ0mjU1-r6Dxj0umq7IAGEfF2bsUHAKFsKmHa7nWbA3jkE0Bdy1GvnJxfq-EJj557KCdBA0iv-fmjbTnL8A_hsurFRep0K-ST-leqT4bvKvHyd48lkzrpXTzWWVoj5a1qkvBwjJ8cf" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 -z-0 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 border-4 border-primary w-24 h-24 -z-0"></div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-display uppercase tracking-widest text-sm">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 leading-tight dark:text-white">
                We Have Lot Of Experience <br/> Gym Training
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Many individuals benefit from personalized workout plans designed by fitness professionals or personal trainers to address specific fitness goals, such as muscle gain, weight loss, or improved athletic performance.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-semibold dark:text-white">Over 15 years of experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-semibold dark:text-white">Certified Professional Trainers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-semibold dark:text-white">Exceptional workout quality</span>
                </li>
              </ul>
              <button className="bg-primary text-white font-display uppercase px-8 py-3 text-sm font-bold hover:bg-red-700 transition-colors">Get Started</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-24 bg-slate-50 dark:bg-accent-dark" id="specializations">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm block mb-2">Work Process</span>
          <h2 className="text-4xl font-display font-bold uppercase dark:text-white">Easy Step To Achieve Your Goals</h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAax4bbj8yWYg1LjKVYeopivnRWEowBuMeT_dDi64U11EBh_o_zM73CsN5dJ2Fu7yNVFpmG_OV5YeBWaq_Rv8qrTE1PT-nkfjwnBsyvHOL-qVj9IB32FQyLR4f-D8XFxz35mOTQreJYmsMkSNw9vgl8YDeJeyNexVnJkcvUY2stvJC5YGQBTSvf_0QfAP0iMa8P3anZRSIaMfZhKvq7thOkuvGaBYzFPC9TxzJPiaFitlVMQLmFOvGl6bsqNHFK91gwP_4gEk4WFvAh",
              title: "Gym Movement",
              description: "Many gyms offer tools and resources to track progress, such as fitness apps, workout logs, or integrated gym software."
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb1g5ug5i17KfruXGQiASfiVg2Ue97cF-Gg5rK6RO95sHbFVZPYCLZCIDgvATda-IfEpgn4jTFWyTu1hOu6_oEF3N2MrEO1gkcIrRTfuoJgwuA0HSf4DfKOTyqmHeyrgjn6RRRZimwvPmqycApnSxYXBhJ_s6eSoIGNI65sKYuaaRgqVG4QJlTSpBc3dIUGwqqYLoLcnzNCUoUFqGCJJgjRaFc8Al4HY-pMtFZ1ns2xLnR09imTD7DxGTmY_XnyRNONkfUQKeI-kWl",
              title: "Fitness Practice",
              description: "Gyms are adaptable to various fitness levels and preferences, catering to beginners and advanced individuals alike."
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABHKa7uiDHvj96E64VKWruTrb5-kAibqCa3-KM6MF1LxWU1NfiPPNo4s2e5d1uAYJQcT1v69dURkC-5lWKJqz99jIt4ZJV4efGKKx6BW7M3CJJeC2koW5WfbIksoGR2qdl-Rg4vQcxLeYSy1ms9fj6Ypl82ipZVqbl3hwvp1HiLFEOyyAiZ84KHC-Vn25qoJbevmm_c450PFf6hvnPJh1dIkvNhGOZcDP3nvOj662wF20wZzYyd0sXQW6HStJHAoEMRGupX2oFz6ZP",
              title: "Achievement",
              description: "Group fitness classes led by instructors offer structured workouts in a motivating group setting for maximum results."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full group-hover:rotate-45 transition-transform duration-700"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-black shadow-lg">
                  <img 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={item.img}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase mb-4 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-display uppercase tracking-widest text-sm block mb-2">Our Team</span>
              <h2 className="text-4xl font-display font-bold uppercase dark:text-white">Meet Our Expert Trainers</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 1" 
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDzvQOeCFg9YGn69cF0maIbzHCpaC2vuRQDYfOPcdRa69W9E-iD5EBMoEL196S5G1GgTKIaMGo5d6HFjG95v9BHPX9_a53wCK_qnKP3JpEhTtCs3JkeYimcFhzfVuLH2FypFUilG66GLWrBufxX6Omshrqed7-IbT0a6XC5_SKv7vJ5DQqwHKpjjDPbKO8neY83IzIV5lp28nt7doFqeHjyM9TZlP6m9k78-V7V3W7xkZOzBr8UvO2mQZNCaTjbe1ChY_uJ6G8biBr" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-xl font-display font-bold uppercase">Johnathan Doe</h4>
                <p className="text-primary text-sm font-semibold mb-4 italic">Bodybuilding Pro</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">share</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">favorite</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 2" 
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6EZT6r9MyL1FhdM-cCQDdtMBlUiJomPYxhgQUU3fvAOsWvw-df-YP13fuMqz64LO_wbtt2jdV6XVAU1o90cQzIHZNTAaSkLv8ACnetyj-K2Wa19zLlIHeMwvPIGbDnWYmE6B3fnM4H3cyB5uHrQLsqd_SEN_n0Ay4sldOBeX2xw-Ti6d63iK821JXu_ilL1j6GYrT0UGrqn9CLUqFrikjbmefVm353lrl60BRz_9fojBLPolYmZ3Zmhoya7VAnSdYkpHyEr7BJrf_" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-xl font-display font-bold uppercase">Sarah Jenkins</h4>
                <p className="text-primary text-sm font-semibold mb-4 italic">Yoga Specialist</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">share</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">favorite</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 3" 
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW_P_MC_T0Zez5PhNh6Yxk8sl49fd6_BO9xFc7aHWOOCUK3oZ0sJmvBZBrbACASSJDF0B-XLvhhCjDFIlMQv6RVMfIFOCXEsSqUxtD8jKN2tQoLKJewBvtMayy02tk7qL4SaRgo9GRYttoXcBM9x9z_pOB7QkFq2HgLmpEHod17nQccaGUMEfQFxExiafZdODDZkNpNWMkts3jA6wVL3kGkKe9tTlebODE1Bg9dk4_C8mvdovCFVXW8AC1LRcPKNC534fiJ77dzxQ4" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-xl font-display font-bold uppercase">Marcus Chen</h4>
                <p className="text-primary text-sm font-semibold mb-4 italic">HIIT Coach</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">share</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">favorite</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 4" 
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZvEmILfHVwIPtrTHnTRDL9TPUutc4rLyHSnxOSLI5P3EfRiJ5AkSciBkMN4CVZ_NFTDifs_GpBVvw15UiDOem1OQSJa6aPX4Z7IVsCec3TgOQ8jWWE9EZdSD0LgN6LZ0OCMru9bamVYkdxSmMkrAU_oq7Tlj_KY_0yfXHExtiWeJNSMZzIIqc5AZkIVSJhbuZE9E_adOF7gki_6NVTnwINBamLfl-G7i918jq1VTI5iXRDbliaES7353RC8chOSTamleI__GNJLly" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-xl font-display font-bold uppercase">Elena Rossi</h4>
                <p className="text-primary text-sm font-semibold mb-4 italic">Strength Trainer</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">share</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">favorite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50 dark:bg-black" id="pricing">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm block mb-2">Pricing Table</span>
          <h2 className="text-4xl font-display font-bold uppercase dark:text-white">Choose Your Best Plan</h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Beginner Plan",
              price: 2499,
              features: ["Standard Gym Access", "2 Training Sessions", "Basic Equipment", "Private Locker", "Health Insurance"],
              featured: false,
              disabledFeatures: [3, 4]
            },
            {
              name: "Advanced Plan",
              price: 4999,
              features: ["All Gym Access", "Unlimited Training", "Pro Equipment", "Private Locker", "Health Insurance"],
              featured: true,
              disabledFeatures: [4]
            },
            {
              name: "Professional Plan",
              price: 8499,
              features: ["Full VIP Access", "Personal Trainer", "All Premium Amenities", "Private Locker & Spa", "Full Health Insurance"],
              featured: false,
              disabledFeatures: []
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              className={`${plan.featured ? 'bg-accent-dark border-4 border-primary transform scale-105 shadow-2xl' : 'bg-white dark:bg-accent-dark border border-slate-200 dark:border-white/5 hover:border-primary transition-all group'} p-10 text-center relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase py-1 px-10 rotate-45 translate-x-10 translate-y-3">Popular</div>
              )}
              <h3 className={`text-xl font-display font-bold uppercase mb-4 ${plan.featured ? 'text-white' : 'dark:text-white'}`}>{plan.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-8">
                <span className={`font-bold text-2xl mb-4 ${plan.featured ? 'text-primary' : 'text-primary'}`}>₹</span>
                <span className={`text-6xl font-display font-bold ${plan.featured ? 'text-white' : 'dark:text-white'}`}>{plan.price}</span>
                <span className={`uppercase text-xs font-bold ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>/ Month</span>
              </div>
              <ul className={`space-y-4 mb-10 ${plan.featured ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={plan.disabledFeatures.includes(i) ? 'line-through opacity-50' : ''}>{feature}</li>
                ))}
              </ul>
              <button className={`w-full py-4 font-display font-bold uppercase transition-colors ${plan.featured ? 'bg-primary text-white hover:bg-red-700' : 'border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white'}`}>Purchase Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-3xl font-display font-bold tracking-tighter italic text-primary mb-6 block">
              FIT<span className="text-white">KIT</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
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
            <h4 className="text-lg font-display font-bold uppercase mb-8 border-l-4 border-primary pl-4">Useful Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">About Our Gym</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Our Trainers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing Plans</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Latest News</a></li>
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
      </footer>
    </div>
  )
}

export default Home
