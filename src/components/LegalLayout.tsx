import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="min-h-screen bg-[#121212] font-sans text-gray-300">
      {/* Simple Navigation */}
      <nav className="bg-[#121212]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver al Inicio</span>
            </Link>
            <div className="text-xl font-bold tracking-tighter text-white">HAFTEN</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1A1A1A] rounded-2xl shadow-xl border border-white/5 p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">{title}</h1>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
