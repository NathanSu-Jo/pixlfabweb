
import React from 'react';
import { Box } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Box size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Pixl<span className="text-blue-600">Fab</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#about" className="text-sm font-medium text-slate-500 hover:text-blue-600">About</a>
            <a href="#services" className="text-sm font-medium text-slate-500 hover:text-blue-600">Services</a>
            <a href="#materials" className="text-sm font-medium text-slate-500 hover:text-blue-600">Materials</a>
            <a href="#workflow" className="text-sm font-medium text-slate-500 hover:text-blue-600">Workflow</a>
            <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-blue-600">Contact</a>
          </div>

          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} PixlFab Technology. All rights reserved.
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-50 text-xs text-slate-400 tracking-widest uppercase font-semibold">
          Precision • Quality • Scale • Global
        </div>
      </div>
    </footer>
  );
};

export default Footer;
