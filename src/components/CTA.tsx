import { Zap, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="py-24 px-4 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-[#FF6B35] to-[#FFC145]" />
          <Zap className="relative w-20 h-20 text-[#FF6B35] mx-auto" />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-[#FFC145] bg-clip-text text-transparent">
          Start Automating Now
        </h2>

        <p className="text-xl text-[#C5B9A0] mb-8 leading-relaxed max-w-2xl mx-auto">
          Join the future of productivity. Let AI handle the tedious work while you focus on what
          matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="group px-10 py-5 bg-gradient-to-r from-[#FF6B35] to-[#FFC145] text-[#1A1A1A] font-bold text-lg rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all duration-300 flex items-center justify-center gap-2">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-10 py-5 border-2 border-[#FF6B35] text-[#FF6B35] font-bold text-lg rounded-lg hover:bg-[#FF6B35] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-300">
            View Documentation
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#2A2A2A]">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6B35] mb-2">5+</div>
            <div className="text-[#C5B9A0] opacity-70">Integrations</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFC145] mb-2">∞</div>
            <div className="text-[#C5B9A0] opacity-70">Workflows</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6B35] mb-2">24/7</div>
            <div className="text-[#C5B9A0] opacity-70">Automation</div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-[#2A2A2A] text-[#C5B9A0] opacity-60">
          <p className="text-sm">
            © 2025 HabiCore. Built with Model Context Protocol. Secured by OAuth 2.0.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CTA;
