
import React from 'react';
import { Cpu, Drill, Car, Activity, Zap, Plus } from 'lucide-react';

const Applications: React.FC = () => {
  const apps = [
    { icon: <Drill size={28} />, title: "Industrial Equipment" },
    { icon: <Zap size={28} />, title: "R&D & OEM/ODM" },
    { icon: <Cpu size={28} />, title: "Consumer Electronics" },
    { icon: <Car size={28} />, title: "Automotive & Motorbike" },
    { icon: <Activity size={28} />, title: "Medical Devices" },
    { icon: <Plus size={28} />, title: "More Sectors" }
  ];

  return (
    <section id="applications" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Industries</h2>
          <h3 className="text-4xl font-bold">Solving Real-World Challenges</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {apps.map((app, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-blue-600 transition-all duration-300">
              <div className="mb-4 text-blue-400 group-hover:text-white transition-colors">{app.icon}</div>
              <p className="font-bold text-sm tracking-wide">{app.title}</p>
            </div>
          ))}
        </div>

        {/* SLA Image Gallery Submodule */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">SLA Printing Gallery</h2>
            <h3 className="text-3xl font-bold">High-Quality SLA Clear Resin Products</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "SLA-clear resin-caps.jpg",
              "SLA-clear resin-dolpin.jpg",
              "SLA-clear resin-horses.jpg",
              "SLS-TPU-lattice.jpg"
            ].map((image, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`SLA Printed Product ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="font-medium text-sm">{image.replace(/-/g, ' ').replace('.jpg', '')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
