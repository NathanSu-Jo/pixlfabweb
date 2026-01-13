
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden technical-grid">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Global Additive Manufacturing Partner
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Precision Engineering, <span className="text-blue-600">Scaled for the World.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Industrial-grade 3D printing solutions for metal, resin, nylon, plastic and full color printing. From rapid prototyping to small-batch production, we deliver excellence with global reach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 group">
                Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
                View Capabilities
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-600" /> High Quality
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-600" /> Fast Response
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-600" /> Global Delivery
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 aspect-[4/3]">
              <img 
                src="/bgpic1.png" 
                alt="3D Printing Production" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Production Stats</p>
                  <p className="text-2xl font-bold text-slate-900">99.8% Precision</p>
                </div>
                <div className="h-12 w-px bg-slate-300 mx-4"></div>
                <div className="text-right">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Lead Time</p>
                  <p className="text-2xl font-bold text-slate-900">2-5 Business Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
