import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-valo-dark/20 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-9xl font-display font-bold text-valo-green/5 select-none">
              INIT
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8">
              Rewriting the <br/>
              <span className="text-valo-green">Eco-System Code</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              <p>
                The Greenovation Club is where ideas transform into tangible actions. We not only 
                implement initiatives but also strive to maximize sustainable impact and foster environmental 
                improvement from every concept. Our focus extends beyond environmental concerns; we also 
                prioritize individual development.
              </p>
              <p>
                The essence of sustainable thinking begins with taking essential, non-negotiable actions, 
                such as maintaining cleanliness in our surroundings. Each event organized by the club is 
                intricately connected to your personal growth, the development of your network, environmental 
                enhancement, and the progress of our nation.
              </p>
              <p>
                We believe that change starts with a shift in mindset. Everyone possesses the potential 
                to contribute to an eco-friendly and clean environment, as a healthy environment is not 
                merely a luxury; it is a necessity.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 clip-path-valo border-l-2 border-valo-green">
                <div className="font-mono text-[10px] uppercase text-valo-green mb-2">Primary Directive</div>
                <div className="font-display font-bold">Innovation First</div>
              </div>
              <div className="p-6 bg-white/5 clip-path-valo border-l-2 border-valo-green">
                <div className="font-mono text-[10px] uppercase text-valo-green mb-2">Local Status</div>
                <div className="font-display font-bold">High Impact</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-valo-green/10 clip-path-valo blur-3xl group-hover:bg-valo-green/20 transition-all" />
            <div className="relative bg-valo-dark p-2 clip-path-valo valo-border">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover clip-path-valo grayscale hover:grayscale-0 transition-all duration-700"
                alt="Innovation Lab"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-valo-bg/80 backdrop-blur-md clip-path-valo border border-white/10">
                <div className="font-mono text-[8px] text-white/40 uppercase mb-1">Asset Trace</div>
                <div className="text-xs font-bold uppercase tracking-widest">ECO-SYS-FACILITY-01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
