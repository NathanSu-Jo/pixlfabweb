
import React from 'react';
import { PenTool, Layers, Settings, Truck, Check, Minus } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <PenTool size={32} />,
      title: "Design & Engineering",
      list: ["Topology optimization", "DfAM feasibility analysis", "Reverse engineering & 3D scanning"]
    },
    {
      icon: <Layers size={32} />,
      title: "Additive Manufacturing",
      list: ["Metal: SLM, Binder Jetting", "Plastic: SLA, SLS, FDM, MJF", "High-precision resolutions"]
    },
    {
      icon: <Settings size={32} />,
      title: "Post-Processing",
      list: ["Heat & aging treatment", "CNC machining & finishing", "Coating, polishing, sand-blasting, anodizing, lazering"]
    },
    {
      icon: <Truck size={32} />,
      title: "Supply Chain Support",
      list: ["Packaging & labeling", "International logistics", "Drop-shipping & warehousing"]
    }
  ];

  const matrixData = [
    { cap: "Metal 3D Printing", proto: true, small: true, med: true, support: "DfAM / Optimization" },
    { cap: "Plastic 3D Printing", proto: true, small: true, med: true, support: "Design Review" },
    { cap: "CNC Machining", proto: true, small: true, med: true, support: "Tolerance Control" },
    { cap: "Vacuum Casting", proto: true, small: true, med: true, support: "" },
    { cap: "Post-Processing", proto: true, small: true, med: true, support: "Process Matching" },
    { cap: "Logistics", proto: true, small: true, med: true, support: "Export Documents" },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-slate-900">End-to-End Industrial Capabilities</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <ul className="space-y-3">
                {service.list.map((item, i) => (
                  <li key={i} className="text-sm text-slate-500 leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
            Service Capability Matrix
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 text-xs font-bold uppercase tracking-widest text-slate-400">Capability</th>
                  <th className="py-4 text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Prototype</th>
                  <th className="py-4 text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Small Batch</th>
                  <th className="py-4 text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Medium Batch</th>
                  <th className="py-4 text-xs font-bold uppercase tracking-widest text-slate-400">Engineering Support</th>
                </tr>
              </thead>
              <tbody>
                {matrixData.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-semibold text-slate-200">{row.cap}</td>
                    <td className="py-4 text-center">
                      {row.proto ? <Check size={20} className="mx-auto text-emerald-400" /> : <Minus size={20} className="mx-auto text-slate-600" />}
                    </td>
                    <td className="py-4 text-center">
                      {row.small ? <Check size={20} className="mx-auto text-emerald-400" /> : <Minus size={20} className="mx-auto text-slate-600" />}
                    </td>
                    <td className="py-4 text-center">
                      {row.med ? <Check size={20} className="mx-auto text-emerald-400" /> : <Minus size={20} className="mx-auto text-slate-600" />}
                    </td>
                    <td className="py-4 text-sm text-slate-400">{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
