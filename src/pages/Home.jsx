import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <header className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] flex items-center overflow-hidden bg-black">
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
          className="container mx-auto px-4 sm:px-6 relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
              <span className="text-primary font-display uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm">Keep your body fitness</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white uppercase leading-tight mb-4 sm:mb-6">
              Unleash Your <br/>
              <span className="text-primary">Potential</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl">
              Gym workouts are structured exercise sessions conducted in a fitness facility equipped with various machines, free weights, and amenities to reach your peak performance.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center">
              <a className="bg-primary text-white font-display uppercase px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold hover:bg-red-700 transition-transform active:scale-95 text-center" href="#pricing">View Membership</a>
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-display font-bold text-white">2k+</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Satisfied<br/>Customer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* BMI Calculator Section */}
      <section className="relative -mt-8 sm:-mt-12 md:-mt-16 z-20 container mx-auto px-4 sm:px-6">
        <div className="bg-accent-dark border-t-4 border-primary p-6 sm:p-8 md:p-12 shadow-2xl rounded-sm">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
            <div className="w-full md:w-1/3">
              <span className="text-primary font-display uppercase tracking-widest text-xs sm:text-sm block mb-2">Body Mass Index</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mb-3 sm:mb-4">Calculate Your BMI Now</h2>
              <p className="text-slate-400 text-sm">We care about your health. Calculate your BMI to find the right workout routine for your body type.</p>
            </div>
            <div className="w-full md:w-2/3">
              <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary px-4 py-3 text-sm" placeholder="Weight / KG" type="text" />
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary px-4 py-3 text-sm" placeholder="Height / CM" type="text" />
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary px-4 py-3 text-sm" placeholder="Age" type="text" />
                <select className="bg-black/50 border-white/10 text-slate-500 focus:ring-primary focus:border-primary px-4 py-3 text-sm">
                  <option>Sex</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <select className="bg-black/50 border-white/10 text-slate-500 focus:ring-primary focus:border-primary px-4 py-3 text-sm sm:col-span-2 lg:col-span-1">
                  <option>Activity Factor</option>
                </select>
                <input className="bg-black/50 border-white/10 text-white placeholder:text-slate-500 sm:col-span-2 lg:col-span-2 px-4 py-3 text-sm" placeholder="Result" readOnly type="text" />
                <button className="bg-primary text-white font-display uppercase font-bold py-3 text-sm hover:bg-red-700 transition-colors sm:col-span-2 lg:col-span-1" type="button">Calculate</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background-light dark:bg-background-dark" id="about">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16">
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
              <div className="absolute -top-6 -left-6 border-4 border-primary w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -z-0"></div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
                <span className="text-primary font-display uppercase tracking-widest text-xs sm:text-sm">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase mb-4 sm:mb-6 leading-tight dark:text-white">
                We Have Lot Of Experience <br className="hidden sm:block"/> Gym Training
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Many individuals benefit from personalized workout plans designed by fitness professionals or personal trainers to address specific fitness goals, such as muscle gain, weight loss, or improved athletic performance.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold text-xl sm:text-2xl">check_circle</span>
                  <span className="font-semibold dark:text-white text-sm sm:text-base">Over 15 years of experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold text-xl sm:text-2xl">check_circle</span>
                  <span className="font-semibold dark:text-white text-sm sm:text-base">Certified Professional Trainers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary font-bold text-xl sm:text-2xl">check_circle</span>
                  <span className="font-semibold dark:text-white text-sm sm:text-base">Exceptional workout quality</span>
                </li>
              </ul>
              <button className="bg-primary text-white font-display uppercase px-6 sm:px-8 py-3 text-sm font-bold hover:bg-red-700 transition-colors">Get Started</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 dark:bg-accent-dark" id="specializations">
        <div className="container mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-xs sm:text-sm block mb-2">Work Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase dark:text-white">Easy Step To Achieve Your Goals</h2>
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
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
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8">
                <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full group-hover:rotate-45 transition-transform duration-700"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-black shadow-lg">
                  <img 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={item.img}
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold uppercase mb-3 sm:mb-4 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-0">
            <div>
              <span className="text-primary font-display uppercase tracking-widest text-xs sm:text-sm block mb-2">Our Team</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase dark:text-white">Meet Our Expert Trainers</h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="w-10 h-10 sm:w-12 sm:h-12 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 1" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDzvQOeCFg9YGn69cF0maIbzHCpaC2vuRQDYfOPcdRa69W9E-iD5EBMoEL196S5G1GgTKIaMGo5d6HFjG95v9BHPX9_a53wCK_qnKP3JpEhTtCs3JkeYimcFhzfVuLH2FypFUilG66GLWrBufxX6Omshrqed7-IbT0a6XC5_SKv7vJ5DQqwHKpjjDPbKO8neY83IzIV5lp28nt7doFqeHjyM9TZlP6m9k78-V7V3W7xkZOzBr8UvO2mQZNCaTjbe1ChY_uJ6G8biBr" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg sm:text-xl font-display font-bold uppercase">Johnathan Doe</h4>
                <p className="text-primary text-sm font-semibold mb-3 sm:mb-4 italic">Bodybuilding Pro</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">share</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">favorite</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 2" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6EZT6r9MyL1FhdM-cCQDdtMBlUiJomPYxhgQUU3fvAOsWvw-df-YP13fuMqz64LO_wbtt2jdV6XVAU1o90cQzIHZNTAaSkLv8ACnetyj-K2Wa19zLlIHeMwvPIGbDnWYmE6B3fnM4H3cyB5uHrQLsqd_SEN_n0Ay4sldOBeX2xw-Ti6d63iK821JXu_ilL1j6GYrT0UGrqn9CLUqFrikjbmefVm353lrl60BRz_9fojBLPolYmZ3Zmhoya7VAnSdYkpHyEr7BJrf_" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg sm:text-xl font-display font-bold uppercase">Sarah Jenkins</h4>
                <p className="text-primary text-sm font-semibold mb-3 sm:mb-4 italic">Yoga Specialist</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">share</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">favorite</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 3" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW_P_MC_T0Zez5PhNh6Yxk8sl49fd6_BO9xFc7aHWOOCUK3oZ0sJmvBZBrbACASSJDF0B-XLvhhCjDFIlMQv6RVMfIFOCXEsSqUxtD8jKN2tQoLKJewBvtMayy02tk7qL4SaRgo9GRYttoXcBM9x9z_pOB7QkFq2HgLmpEHod17nQccaGUMEfQFxExiafZdODDZkNpNWMkts3jA6wVL3kGkKe9tTlebODE1Bg9dk4_C8mvdovCFVXW8AC1LRcPKNC534fiJ77dzxQ4" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg sm:text-xl font-display font-bold uppercase">Marcus Chen</h4>
                <p className="text-primary text-sm font-semibold mb-3 sm:mb-4 italic">HIIT Coach</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">share</span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">favorite</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-slate-100 dark:bg-accent-dark">
              <img 
                alt="Trainer 4" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZvEmILfHVwIPtrTHnTRDL9TPUutc4rLyHSnxOSLI5P3EfRiJ5AkSciBkMN4CVZ_NFTDifs_GpBVvw15UiDOem1OQSJa6aPX4Z7IVsCec3TgOQ8jWWE9EZdSD0LgN6LZ0OCMru9bamVYkdxSmMkrAU_oq7Tlj_KY_0yfXHExtiWeJNSMZzIIqc5AZkIVSJhbuZE9E_adOF7gki_6NVTnwINBamLfl-G7i918jq1VTI5iXRDbliaES7353RC8chOSTamleI__GNJLly" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black text-white translate-y-8 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg sm:text-xl font-display font-bold uppercase">Elena Rossi</h4>
                <p className="text-primary text-sm font-semibold mb-3 sm:mb-4 italic">Strength Trainer</p>
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 dark:bg-black" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-xs sm:text-sm block mb-2">Pricing Table</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase dark:text-white">Choose Your Best Plan</h2>
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
              className={`${plan.featured ? 'bg-accent-dark border-4 border-primary md:transform md:scale-105 shadow-2xl' : 'bg-white dark:bg-accent-dark border border-slate-200 dark:border-white/5 hover:border-primary transition-all group'} p-6 sm:p-8 md:p-10 text-center relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase py-1 px-10 rotate-45 translate-x-10 translate-y-3">Popular</div>
              )}
              <h3 className={`text-lg sm:text-xl font-display font-bold uppercase mb-3 sm:mb-4 ${plan.featured ? 'text-white' : 'dark:text-white'}`}>{plan.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-6 sm:mb-8">
                <span className={`font-bold text-xl sm:text-2xl mb-4 ${plan.featured ? 'text-primary' : 'text-primary'}`}>₹</span>
                <span className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold ${plan.featured ? 'text-white' : 'dark:text-white'}`}>{plan.price}</span>
                <span className={`uppercase text-xs font-bold ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>/ Month</span>
              </div>
              <ul className={`space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={plan.disabledFeatures.includes(i) ? 'line-through opacity-50' : ''}>{feature}</li>
                ))}
              </ul>
              <button className={`w-full py-3 sm:py-4 font-display font-bold uppercase text-sm transition-colors ${plan.featured ? 'bg-primary text-white hover:bg-red-700' : 'border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white'}`}>Purchase Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
