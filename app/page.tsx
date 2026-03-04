
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative mt-30">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#faf3e1]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-button/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-button/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-button/10 text-brand-button text-xs font-bold uppercase tracking-widest mb-6">
            New Collection 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-brand-heading leading-[0.9] tracking-tighter mb-8 uppercase">
            Redesigning <br /> <span className="text-brand-button italic">Modern</span> Fashion
          </h1>
          <p className="text-brand-paragraph text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the fusion of high-end aesthetics and next-gen interactivity. Explore our latest trends designed for the bold and the beautiful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-button text-white font-bold rounded-full hover:bg-brand-button-hover hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-xl shadow-brand-button/20">
              Shop Now
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-heading font-bold rounded-full hover:bg-zinc-50 border border-zinc-200 transition-all text-sm uppercase tracking-widest">
              View Lookbook
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-brand-paragraph uppercase tracking-widest opacity-50">Scroll</span>
          <div className="w-[1px] h-12 bg-zinc-200" />
        </div>
      </section>

      {/* Placeholder sections for scrolling */}
      {[1, 2, 3].map((item) => (
        <section key={item} className="py-32 px-8 max-w-7xl mx-auto">
          <div className="h-[600px] w-full bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center justify-center group overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-button group-hover:scale-105 transition-transform duration-700 opacity-0 group-hover:opacity-[0.02]" />
            <div className="text-center">
              <span className="text- brand-button font-black text-7xl opacity-10">0{item}</span>
              <h2 className="text-3xl font-bold mt-4">Section {item} Content</h2>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
