
import React from 'react';

const Materials: React.FC = () => {
  const materials = [
    {
      category: "Plastic Materials",
      description: "Engineering polymers for versatile prototyping.",
      items: [
        { name: "Nylon (SLS/MJF)", spec: "PA12, PA11, PA12-GF" },
        { name: "Standard (FDM)", spec: "ABS, PETG, PLA" },
        { name: "Resins (SLA)", spec: "Tough, Flexible, Clear" },
        { name: "PEEK / PEI", spec: "High Temperature" },
        { name: "TPU", spec: "Elasticity & Durability" }
      ]
    },
    {
      category: "Metal Materials",
      description: "Industrial alloys for high-strength applications.",
      items: [
        { name: "Stainless Steel", spec: "316L, 17-4PH" },
        { name: "Maraging Steel", spec: "18Ni300" },
        { name: "Titanium Alloy", spec: "TC4 (Grade 5)" },
        { name: "Aluminum", spec: "AlSi10Mg, 6061" },
        { name: "Nickel Superalloys", spec: "GH4169, GH3625" }
      ]
    }
  ];

  return (
    <section id="materials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-end justify-between mb-16">
          <div className="lg:max-w-xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Material Library</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Optimized Performance Through Material Science</h3>
          </div>
          <p className="text-slate-500 lg:max-w-md pb-1">
            We source premium-grade powders and filaments to ensure every print meets exacting mechanical standards for your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {materials.map((cat, idx) => (
            <div key={idx} className="relative p-1 bg-gradient-to-br from-slate-200 to-transparent rounded-3xl">
              <div className="bg-white p-8 rounded-[1.4rem]">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{cat.category}</h4>
                <p className="text-slate-500 mb-8">{cat.description}</p>
                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50">
                      <span className="font-semibold text-slate-700">{item.name}</span>
                      <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        {item.spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
