
import { Globe2, ShieldCheck, Target, Zap } from 'lucide-react';
import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="text-blue-600" />,
      title: "Vision & Mission",
      items: [
        "Reliable and repeatable AM services",
        "Enable lightweight, functional designs",
        "Your trusted manufacturing partner"
      ]
    },
    {
      icon: <ShieldCheck className="text-blue-600" />,
      title: "Core Strengths",
      items: [
        "Advanced SLM/SLS/SLA/Casting equipment",
        "Strict quality management systems",
        "Global shipping & trade expertise"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">About PixlFab</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Global Leader in Industrial 3D Printing Solutions
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              PixlFab is a professional international service provider specializing in metal and plastic additive manufacturing. We provide fast-response and high-quality solutions to global clients—from single functional prototypes to small-batch production.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="group">
                  <div className="mb-4 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3">{feature.title}</h4>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-100 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <p className="text-slate-900 font-medium italic text-xl mb-8 leading-relaxed">
              "We cover the complete workflow from design evaluation and printing to post-processing, packaging, and international logistics."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">PF</div>
              <div>
                <p className="font-bold text-slate-900">PixlFab Engineering Team</p>
                <p className="text-sm text-slate-500">Excellence in AM</p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <Zap size={24} className="text-blue-600 mb-2" />
                <p className="text-2xl font-bold text-slate-900">24hr</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Quote Turnaround</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <Globe2 size={24} className="text-blue-600 mb-2" />
                <p className="text-2xl font-bold text-slate-900">50+</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
