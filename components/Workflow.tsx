
import React from 'react';
import { FileUp, Search, Calculator, Printer, ShieldCheck, Handshake } from 'lucide-react';

const Workflow: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <FileUp />,
      title: "Model Upload",
      text: "Contact us and submit your 3D design files (STL, STEP, IGES) securely via our platform."
    },
    {
      num: "02",
      icon: <Search />,
      title: "Engineering Review",
      text: "Our experts evaluate DfAM feasibility and optimize for production."
    },
    {
      num: "03",
      icon: <Calculator />,
      title: "Quotation",
      text: "Receive a transparent, competitive quote within 24 hours.",
    },
    {
      num: "04",
      icon: <Printer />,
      title: "Production",
      text: "Industrial-grade printing followed by precision post-processing."
    },
    {
      num: "05",
      icon: <ShieldCheck />,
      title: "QC & Logistics",
      text: "Rigorous inspection, custom packaging, and global express shipping."
    },
    {
      num: "06",
      icon: <Handshake />,
      title: "Support",
      text: "Final delivery with comprehensive after-sales and engineering support."
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Process</h2>
          <h3 className="text-4xl font-bold text-slate-900">Efficient, Transparent Workflow</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connector lines could be added as SVG background here */}
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl h-full transition-all group-hover:bg-white group-hover:shadow-xl group-hover:border-blue-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
